import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const data = await request.json();

  let is_logged_in;
  if ('password' === data.password) {
    const res = NextResponse.json({ success: true });

    is_logged_in = res.cookies.set('is_logged_in', 'true');
  }
  
  
  console.log('received request POST, [', data, ']')
  return NextResponse.json({message: 'Login received', received: data})
}
