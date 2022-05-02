import { connection } from "../../database/connection";

import JewelryPurchase from "../../database/models/JewelryPurchase";

export async function getAllJewelryPurchases(req, res) {
  try {
    const db = await connection();
    const jewelryPurchases = await JewelryPurchase.find();
    res.status(200).json(jewelryPurchases);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function createJewelryPurchase(req, res) {
  try {
    const db = await connection();
    const jewelryPurchase = await JewelryPurchase.create(req.body);
    res.status(200).json(jewelryPurchase);
    //await db.disconnect();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getUniqueJewelryPurchase(req, res) {
  const { query } = req;
  const { id } = query;

  console.log(id);

  try {
    const db = await connection();
    const jewelryPurchase = await JewelryPurchase.findById(id);
    res.status(200).json(jewelryPurchase);
    //await db.disconnect();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function updateUniqueJewelryPurchase(req, res) {
  const { query } = req;
  const { id } = query;

  console.log(id);

  try {
    const db = await connection();
    const jewelryPurchase = await JewelryPurchase.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(jewelryPurchase);
    //await db.disconnect();
  } catch (error) {
    res.status(400).json({ error: error.message });
    //await db.disconnect();
  }
}

export async function deleteUniqueJewelryPurchase(req, res) {
  const { query } = req;
  const { id } = query;

  console.log(id);

  try {
    const db = await connection();
    const jewelryPurchase = await JewelryPurchase.findByIdAndDelete(
      id,
      req.body
    );
    res.status(200).json(`Purchase with id: ${id} deleted`);
    //await db.disconnect();
  } catch (error) {
    res.status(400).json({ error: error.message });
    //await db.disconnect();
  }
}
