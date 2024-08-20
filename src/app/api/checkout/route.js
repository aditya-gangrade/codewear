import Checkout from "@/models/Checkout";
import dbconnection from "@/dbconfig/db";

export default async function handler(req, res) {
  await dbconnection();

  if (req.method === 'POST') {
    try {
      const { userId, items, totalAmount } = req.body;

      if (!userId || !items || !totalAmount) {
        return res.status(400).json({ success: false, error: 'Missing required fields' });
      }

      const checkout = new Checkout({ userId, items, totalAmount });
      await checkout.save();

      res.status(201).json({ success: true, data: checkout });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
