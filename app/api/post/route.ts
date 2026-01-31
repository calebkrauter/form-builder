import { NextResponse } from 'next/server';
import { db } from '../database/db';

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const data = await request.json();
  await db.query(
    `INSERT INTO "submissions"
    (id, rowVersion, surveyKey, submitterId, submittedAt, submissionData)
    VALUES ($1, $2, $3, $4, $5, $6)`,
    [data.responseId, data.rowVersion, data.surveyKey, data.submitterId, data.submittedAt, JSON.stringify(data.submissionData)]
  )
  console.log('received request POST, [', data, ']')
  return NextResponse.json({message: 'Submission received.', received: data})
}
