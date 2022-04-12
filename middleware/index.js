import { connection } from "../database/connection";
import Purchase from "../database/models/Purchase";
import DailyLoan from "../database/models/DailyLoan";

export async function getAllPurchases(req, res) {
  try {
    const db = await connection();
    const purchases = await Purchase.find();
    res.status(200).json(purchases);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function createPurchase(req, res) {
  try {
    const db = await connection();
    const purchase = await Purchase.create(req.body);
    res.status(200).json(purchase);
    //await db.disconnect();
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export async function getUniquePurchase(req, res) {
  const { query } = req;
  const { id } = query;

  console.log(id);

  try {
    const db = await connection();
    const purchase = await Purchase.findById(id);
    res.status(200).json(purchase);
    //await db.disconnect();
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function updateUniquePurchase(req, res) {
  const { query } = req;
  const { id } = query;

  console.log(id);

  try {
    const db = await connection();
    const purchase = await Purchase.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(purchase);
    //await db.disconnect();
  } catch (error) {
    res.status(400).send(error.message);
    //await db.disconnect();
  }
}

export async function deleteUniquePurchase(req, res) {
  const { query } = req;
  const { id } = query;

  console.log(id);

  try {
    const db = await connection();
    const purchase = await Purchase.findByIdAndDelete(id, req.body);
    res.status(200).json(`Purchase with id: ${id} deleted`);
    //await db.disconnect();
  } catch (error) {
    res.status(400).send(error.message);
    //await db.disconnect();
  }
}

export async function getAllLoans(req, res){
  try {
    const db = await connection();
    const allLoans = await DailyLoan.find();
    res.status(200).json(allLoans);
    //await db.disconnect();
  } catch (error) {
    res.status(400).send(error.message);
    //await db.disconnect();
  }
}

export async function createLoan(req, res) {
  try {
    const db = await connection();
    const createdLoan = await DailyLoan.create(req.body);
    res.status(200).json(createdLoan);
    //await db.disconnect();
  } catch (error) {
    res.status(400).send(error.message);
    //await db.disconnect();
  }
}

export async function getUniqueLoan(req, res) {
  const { query } = req;
  const { id } = query;

  try {
    const db = await connection();
    const uniqueLoan = await DailyLoan.findById(id);
    res.status(200).json(uniqueLoan);
    //await db.disconnect();
  } catch (error) {
    res.status(400).send(error.message);
    //await db.disconnect();
  }
}

export async function updateUniqueLoan(req, res) {
  const { query } = req;
  const { id } = query;

  try {
    const db = await connection();
    const updatedLoan = await DailyLoan.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedLoan);
    //await db.disconnect();
  } catch (error) {
    res.status(400).send(error.message);
    //await db.disconnect();
  }
}

export async function deleteUniqueLoan(req, res) {
  const { query } = req;
  const { id } = query;

  try {
    const db = await connection();
    const deletedLoan = await DailyLoan.findByIdAndDelete(id, req.body);
    res.status(200).json(`Purchase with id: ${id} deleted`);
    //await db.disconnect();
  } catch (error) {
    res.status(400).send(error.message);
    //await db.disconnect();
  }
}
