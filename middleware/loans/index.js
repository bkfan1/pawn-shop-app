import { connection } from "../../database/connection";

import Loan from "../../database/models/Loan";

export async function getAllLoans(req, res) {
  try {
    const db = await connection();
    const allLoans = await Loan.find();
    res.status(200).json(allLoans);
    //await db.disconnect();
  } catch (error) {
    res.status(400).json({ error: error.message });
    //await db.disconnect();
  }
}

export async function createLoan(req, res) {
  try {
    const db = await connection();
    const createdLoan = await Loan.create(req.body);
    res.status(200).json(createdLoan);
    //await db.disconnect();
  } catch (error) {
    res.status(400).json({ error: error.message });
    //await db.disconnect();
  }
}

export async function getUniqueLoan(req, res) {
  const { query } = req;
  const { id } = query;

  try {
    const db = await connection();
    const uniqueLoan = await Loan.findById(id);
    res.status(200).json(uniqueLoan);
    //await db.disconnect();
  } catch (error) {
    res.status(400).json({ error: error.message });
    //await db.disconnect();
  }
}

export async function updateUniqueLoan(req, res) {
  const { query } = req;
  const { id } = query;

  try {
    const db = await connection();
    const updatedLoan = await Loan.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedLoan);
    //await db.disconnect();
  } catch (error) {
    res.status(400).json({ error: error.message });
    //await db.disconnect();
  }
}

export async function deleteUniqueLoan(req, res) {
  const { query } = req;
  const { id } = query;

  try {
    const db = await connection();
    const deletedLoan = await Loan.findByIdAndDelete(id, req.body);
    res.status(200).json(`Purchase with id: ${id} deleted`);
    //await db.disconnect();
  } catch (error) {
    res.status(400).json({ error: error.message });
    //await db.disconnect();
  }
}
