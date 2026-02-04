import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { db } from '../database/db';

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const data = await request.json();

    bcrypt.hash(data.password, 10, async function (err, hash) {
await db.query(
    `INSERT INTO "users"
    (user_id, password_hash)
    VALUES ($1, $2)`,
    [data.username, hash]
  )
  console.log(err, hash);
});

  console.log('received request POST, [', data, ']')
  return NextResponse.json({message: 'Login received', received: data})
}
