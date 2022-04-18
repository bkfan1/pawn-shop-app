import { connection } from "../database/connection";
import Customer from "../database/models/Customer";
import JewelryPurchase from "../database/models/JewelryPurchase";
import Loan from "../database/models/Loan";
import Pawn from "../database/models/Pawn";
export async function getAllCustomers(req, res){
  try {
    const db = await connection();
    const allCustomers = await Customer.find();
    res.status(200).json(allCustomers);
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

export async function createCustomer(req, res){
  try {
    const db = await connection();
    const createdCustomer = await Customer.create(req.body);
    res.status(200).json(createdCustomer);
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

export async function getUniqueCustomer(req, res){
  const { query } = req;
  const { id } = query;
  try {
    const db = await connection();
    const uniqueCustomer = await Customer.findById(id);
    res.status(200).json(uniqueCustomer);
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}


export async function deleteUniqueCustomer(req, res){
  const { query } = req;
  const { id } = query;
  try {
    const db = await connection();
    const uniqueCustomer = await Customer.findByIdAndDelete(id);
    res.status(200).json(`Customer with id: ${id} deleted`);
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

export async function updateUniqueCustomer(req, res){
  const { query } = req;
  const { id } = query;
  try {
    const db = await connection();
    const updatedCustomer = await Customer.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}



export async function getAllJewelryPurchases(req, res) {
  try {
    const db = await connection();
    const jewelryPurchases = await JewelryPurchase.find();
    res.status(200).json(jewelryPurchases);
  } catch (error) {
    res.status(400).json({error:error.message});
  }
}

export async function createJewelryPurchase(req, res) {
  try {
    const db = await connection();
    const jewelryPurchase = await JewelryPurchase.create(req.body);
    res.status(200).json(jewelryPurchase);
    //await db.disconnect();
  } catch (error) {
    res.status(400).json({error:error.message});
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
    res.status(400).json({error:error.message});
  }
}

export async function updateUniqueJewelryPurchase(req, res) {
  const { query } = req;
  const { id } = query;

  console.log(id);

  try {
    const db = await connection();
    const jewelryPurchase = await JewelryPurchase.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(jewelryPurchase);
    //await db.disconnect();
  } catch (error) {
    res.status(400).json({error:error.message});
    //await db.disconnect();
  }
}

export async function deleteUniqueJewelryPurchase(req, res) {
  const { query } = req;
  const { id } = query;

  console.log(id);

  try {
    const db = await connection();
    const jewelryPurchase = await JewelryPurchase.findByIdAndDelete(id, req.body);
    res.status(200).json(`Purchase with id: ${id} deleted`);
    //await db.disconnect();
  } catch (error) {
    res.status(400).json({error:error.message})
    //await db.disconnect();
  }
}

export async function getAllLoans(req, res){
  try {
    const db = await connection();
    const allLoans = await Loan.find();
    res.status(200).json(allLoans);
    //await db.disconnect();
  } catch (error) {
    res.status(400).json({error:error.message})
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
    res.status(400).json({error:error.message})
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
    res.status(400).json({error:error.message})
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
    res.status(400).json({error:error.message})
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
    res.status(400).json({error:error.message})
    //await db.disconnect();
  }
}


export async function getAllPawns(req, res){
  try {
    const db = await connection();
    const allPawns = await Pawn.find();
    res.status(200).json(allPawns);
    
  } catch (error) {
    res.status(400).json({error:error.message})
  }

}

export async function createPawn(req, res){
  try {
    const db = await connection();
    const newPawn = await Pawn.create(req.body);
    res.status(200).json(newPawn);
    
  } catch (error) {
    res.status(400).json({error:error.message})
    
  }
}

export async function getUniquePawn(req, res) {
  const { query } = req;
  const { id } = query;

  try {
    const db = await connection();
    const uniquePawn = await Pawn.findById(id, req.body);
    res.status(200).json(uniquePawn);
    //await db.disconnect();
  } catch (error) {
    res.status(400).json({error:error.message})
    //await db.disconnect();
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
    //await db.disconnect();
  } catch (error) {
    res.status(400).json({error:error.message})
    //await db.disconnect();
  }
}

export async function deleteUniquePawn(req, res) {
  const { query } = req;
  const { id } = query;

  try {
    const db = await connection();
    const deletingUniquePawn = await Pawn.findByIdAndDelete(id, req.body);
    res.status(200).json(deletingUniquePawn);
    //await db.disconnect();
  } catch (error) {
    res.status(400).json({error:error.message})
    //await db.disconnect();
  }
}

