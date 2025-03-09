import express from "express";
import axios from "axios";

const router = express.Router();

// Route to search for books
router.get("/search", async (req, res) => {
    const { q } = req.query; // Get search query
    if (!q) return res.status(400).json({ error: "Query is required" });

    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${q}`);
        res.json(response.data); // Send book data to frontend
    } catch (error) {
        console.error("Error fetching books:", error.message);
        res.status(500).json({ error: "Error fetching books" });
    }
});

export default router; // Use ES module export
