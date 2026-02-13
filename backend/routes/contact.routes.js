import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST → Save Contact Message
router.post("/", async (req, res) => {
  try {
    const { name, email, objective, message } = req.body;

    if (!name || !email || !objective || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newContact = new Contact({
      name,
      email,
      objective,
      message,
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Contact message saved successfully",
    });
  } catch (error) {
    console.error("Contact Save Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
