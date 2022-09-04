import { connection } from "../../database/connection";
import Pawn from "../../database/models/Pawn";

export async function getAllPawns(req, res) {
  try {
    const db = await connection();
    const allPawns = await Pawn.find({});
    res.status(200).json(allPawns);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function createPawn(req, res) {
  try {
    const db = await connection();
    const newPawn = await Pawn.create(req.body);
    res.status(200).json(newPawn);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getUniquePawn(req) {
  try {
    const db = await connection();
    const uniquePawn = await Pawn.findById(id);
    return uniquePawn;
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function updateUniquePawn(req, res) {
  const { query } = req;
  const { id } = query;

  try {
    const db = await connection();
    const updatedUniquePawn = await Pawn.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUniquePawn);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteUniquePawn(req, res) {
  const { query } = req;
  const { id } = query;

  try {
    const db = await connection();
    const deletingUniquePawn = await Pawn.findByIdAndDelete(id, req.body);
    res.status(200).json(deletingUniquePawn);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
