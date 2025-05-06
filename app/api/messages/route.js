import pool from '../../lib/db' 

export async function POST(request) {
  const { name, email, content } = await request.json();

  console.log(name, email, content);
  if (!name || !email || !content) {
    return new Response("Missing fields", { status: 400 });
  }
  try {
    const query = `
      INSERT INTO message (name, email, content)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [name, email, content];
    const result = await pool.query(query, values);

    return new Response(JSON.stringify(result.rows[0]), { status: 200 });
  } catch (error) {
    console.error("DB error:", error);
    return new Response("Database Error", { status: 500 });
  }
}
