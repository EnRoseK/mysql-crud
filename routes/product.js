import express from "express";
import {
  getProducts,
  getProduct,
  createProduct,
} from "../services/product-service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const result = await getProducts();
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await getProduct(id);

  res.json(result);
});

router.post("/", async (req, res) => {
  const {
    categoryId,
    name,
    slug,
    description,
    imageUrl,
    text,
    price,
    discountPrice,
    remaining,
    rating,
    created,
  } = req.body;

  const result = await createProduct({
    categoryId,
    name,
    slug,
    description,
    imageUrl,
    text,
    price,
    discountPrice,
    remaining,
    rating,
    created,
  });

  res.json(result);
});

export default router;
