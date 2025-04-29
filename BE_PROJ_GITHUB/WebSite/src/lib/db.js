import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'contact_form_db',
    password: '123456', // Ensure this is a string
    port: 5432,
  });
  

export { pool }; // Make sure it's exported properly
