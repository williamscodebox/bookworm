import type { Request, Response } from "express";
import Book from "../models/Book.ts";
import cloudinary from "../lib/cloudinary.ts";

// Extend Express Request to include `user`
interface AuthRequest extends Request {
  user?: {
    _id: string;
  };
}

const createBook = async (req: AuthRequest, res: Response) => {
  try {
    const { title, caption, rating, image } = req.body;

    if (!image || !title || !caption || !rating) {
      return res.status(400).json({ message: "Please provide all fields" });
    }

    // upload the image to cloudinary
    const uploadResponse = await cloudinary.uploader.upload(image);
    const imageUrl = uploadResponse.secure_url;

    // save to the database
    const newBook = new Book({
      title,
      caption,
      rating,
      image: imageUrl,
      user: req.user?._id,
    });

    await newBook.save();

    res.status(201).json(newBook);
  } catch (error: any) {
    console.log("Error creating book", error);
    res.status(500).json({ message: error.message || "Internal server error" });
  }
};

// pagination => infinite loading
const getBooks = async (req: Request, res: Response) => {
  // example call from react native - frontend
  // const response = await fetch("http://localhost:3000/api/books?page=1&limit=5");
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 2;
    const skip = (page - 1) * limit;

    const books = await Book.find()
      .sort({ createdAt: -1 }) // desc
      .skip(skip)
      .limit(limit)
      .populate("user", "username profileImage");

    const totalBooks = await Book.countDocuments();

    res.send({
      books,
      currentPage: page,
      totalBooks,
      totalPages: Math.ceil(totalBooks / limit),
    });
  } catch (error) {
    console.log("Error in get all books route", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { createBook, getBooks };
