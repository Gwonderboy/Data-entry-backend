import express, { Request, Response } from "express";
import Order from "../models/order";

const router = express.Router();

router.get("/number-of-customers", async (req: Request, res: Response) => {
  try {
    const result: { count: number; rows: { customerName: string }[] } =
      await Order.aggregate("customerName", "DISTINCT", {
        plain: false,
      });
    const numberOfCustomers: string[] = result.rows.map(
      (row) => row.customerName
    );
    res.json({ numberOfCustomers: numberOfCustomers.length });
  } catch (error) {
    console.error("Error fetching number of customers:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
