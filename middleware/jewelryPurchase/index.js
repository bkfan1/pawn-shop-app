import JewelryPurchase from "../../database/models/JewelryPurchase";

export async function getAllJewelryPurchases(req, res) {
  try {
    const jewelryPurchases = await JewelryPurchase.find();
    res.status(200).json(jewelryPurchases);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function createJewelryPurchase(req, res) {
  try {
    const jewelryPurchase = await JewelryPurchase.create(req.body);
    res.status(200).json(jewelryPurchase);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getUniqueJewelryPurchase(req, res) {
  const { query } = req;
  const { id } = query;

  try {
    const jewelryPurchase = await JewelryPurchase.findById(id);
    res.status(200).json(jewelryPurchase);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function updateUniqueJewelryPurchase(req, res) {
  const { query } = req;
  const { id } = query;

  try {
    const jewelryPurchase = await JewelryPurchase.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(jewelryPurchase);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteUniqueJewelryPurchase(req, res) {
  const { query } = req;
  const { id } = query;

  try {
    const db = await connection();
    const jewelryPurchase = await JewelryPurchase.findByIdAndDelete(
      id,
      req.body
    );
    res.status(200).json(`Purchase with id: ${id} deleted`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
