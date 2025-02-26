import { hash } from "bcryptjs";
import { connectToDatabase } from "@/utils/db";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, password, enterprise } = req.body;

  if (!email || !password) return res.status(400).json({ message: "Email and password are required!" });

  const db = await connectToDatabase();
  const existingUser = await db.collection("users").findOne({ email });

  if (existingUser) return res.status(400).json({ message: "User already exists!" });

  const hashedPassword = await hash(password, 10);
  
  await db.collection("users").insertOne({
    name,
    email,
    password: hashedPassword,
    enterprise,
    createdAt: new Date(),
  });

  res.status(201).json({ message: "User registered successfully!" });
}
