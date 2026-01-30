export const dynamic = 'force-dynamic' // defaults to auto


export async function GET() {
  const res = await fetch('data:application/json, {"mock": "data sunshine"}', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY ?? 'temp-key-fallback',
    },
  })
  const data = await res.json()
 
  return Response.json({ data, apiKey: process.env.DATA_API_KEY })
}
