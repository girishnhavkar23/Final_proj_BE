// app/api/contact/route.js
import { pool } from '@/lib/db'; // Correct import from the db file

import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file




export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    const query = `
      INSERT INTO messages (name, email, subject, message)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [name, email, subject, message];

    const result = await pool.query(query, values);

    return new Response(JSON.stringify(result.rows[0]), { status: 200 });
  } catch (err) {
    console.error('API Error:', err);
    return new Response(JSON.stringify({ error: 'Failed to save message' }), {
      status: 500,
    });
  }
}
