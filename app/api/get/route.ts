import { db } from '../database/db'

export const dynamic = 'force-dynamic' // defaults to auto


export async function GET() {
  const data = await db.query(`SELECT * FROM submissions`)

 
  return new Response(JSON.stringify(data.rows), {
    headers: { 'Content-Type': 'application/json' }
  })}