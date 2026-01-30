import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic' // defaults to auto


export async function POST(request: Request) {
  const key = await request.headers.get('API-Key');
  if (key !== process.env.DATA_API_KEY) return NextResponse.json({error: 'Unauthorized'}, {status: 401})
  const data = await request.json();
  console.log('received request POST, [', data, ']')
  return NextResponse.json({message: 'Submission received.', received: data})
}
