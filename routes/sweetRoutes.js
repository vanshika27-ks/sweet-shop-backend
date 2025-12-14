const express = require("express");
const Sweet = require("../models/Sweet");
const { authMiddleware, adminOnly } = require("../middleware/auth");

const router = express.Router();

// Add sweet (Admin)
router.post("/", authMiddleware, adminOnly, async (req, res) => {
  const sweet = new Sweet(req.body);
  await sweet.save();
  res.json(sweet);
});

// Get all sweets
router.get("/", authMiddleware, async (req, res) => {
  const sweets = await Sweet.find();
  res.json(sweets);
});

// Search sweets
router.get("/search", authMiddleware, async (req, res) => {
  const { name, category } = req.query;
  const query = {};
  if (name) query.name = new RegExp(name, "i");
  if (category) query.category = category;

  const sweets = await Sweet.find(query);
  res.json(sweets);
});

// Update sweet (Admin)
router.put("/:id", authMiddleware, adminOnly, async (req, res) => {
  const sweet = await Sweet.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(sweet);
});

// Delete sweet (Admin)
router.delete("/:id", authMiddleware, adminOnly, async (req, res) => {
  await Sweet.findByIdAndDelete(req.params.id);
  res.json({ message: "Sweet deleted" });
});

// Purchase sweet
router.post("/:id/purchase", authMiddleware, async (req, res) => {
  const sweet = await Sweet.findById(req.params.id);

  if (sweet.quantity <= 0) {
    return res.status(400).json({ message: "Out of stock" });
  }

  sweet.quantity -= 1;
  await sweet.save();

  res.json({ message: "Purchase successful", sweet });
});

// Restock sweet (Admin)
router.post("/:id/restock", authMiddleware, adminOnly, async (req, res) => {
  const { quantity } = req.body;
  const sweet = await Sweet.findById(req.params.id);

  sweet.quantity += quantity;
  await sweet.save();

  res.json(sweet);
});

module.exports = router;
