import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'
const passwords = [process.env.ADMIN_USER_PASSWORD, process.env.TEST_USER_PASSWORD, process.env.INTEGRATION_TEST_PASSWORD, process.env.EMPLOYEE_USER_PASSWORD]
export async function POST(request: Request) {
  const data = await request.json();
      const cookieStore = await cookies();
      for (const password of passwords) {
        const authenticated = (data.password === password )
        if (authenticated && data.password === process.env.EMPLOYEE_USER_PASSWORD) {
          cookieStore.set('logged_in', 'employee', {maxAge: 30 * 24 * 60 * 60})
          return Response.json({authenticated: authenticated});
        } else if (authenticated && data.password === process.env.ADMIN_USER_PASSWORD) {
          cookieStore.set('logged_in', 'admin', {maxAge: 30 * 24 * 60})
          return Response.json({authenticated: authenticated});
        } else if (authenticated && data.password === process.env.INTEGRATION_TEST_PASSWORD) {
          cookieStore.set('logged_in', 'integration_test', {maxAge: 30 * 24 * 60})
          return Response.json({authenticated: authenticated});
        } else if (authenticated && data.password === process.env.TEST_USER_PASSWORD) {
          cookieStore.set('logged_in', 'test_user', {maxAge: 30 * 24 * 60})
          return Response.json({authenticated: authenticated});
        }
      }
  
  return NextResponse.json({authenticated: false})
}
