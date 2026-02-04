import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 import { redirect } from 'next/navigation';

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {


  return 

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
}