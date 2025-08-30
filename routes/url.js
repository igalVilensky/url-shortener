const express = require("express");
const router = express.Router();
const Url = require("../models/Url");

// 1. POST /shorten - create a short URL
router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl) {
    return res.status(400).json({ error: "longUrl is required" });
  }

  try {
    // Check if URL already exists
    let url = await Url.findOne({ longUrl });
    if (!url) {
      url = new Url({ longUrl });
      await url.save();
    }

    res.json({
      shortUrl: `http://localhost:5000/${url.shortId}`,
      longUrl: url.longUrl,
      clicks: url.clicks,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// 2. GET /stats - list all URLs with clicks
router.get("/stats", async (req, res) => {
  try {
    const urls = await Url.find().sort({ createdAt: -1 }); // latest first
    res.json(urls);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// 3. GET /:shortId - redirect to original URL
router.get("/:shortId", async (req, res) => {
  const { shortId } = req.params;

  try {
    const url = await Url.findOne({ shortId });
    if (!url) return res.status(404).json({ error: "URL not found" });

    // Increment click count
    url.clicks += 1;
    await url.save();

    res.redirect(url.longUrl);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
