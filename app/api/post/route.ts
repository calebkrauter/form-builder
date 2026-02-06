import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';
import { db } from '../database/db';


export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const data = await request.json();
  const createdBy = (await cookies()).get('logged_in');

  if (data.surveyKey === 'feedback') {
    await db.query(`INSERT INTO "feedback_submissions"
        (surveyKey, createdBy, submissionId, rowVersion, creatorId, createdAt, modifiedBy, submissionData)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [data.surveyKey, createdBy?.value, data.submissionId, data.rowVersion, data.creatorId, data.createdAt, data.modifiedBy, JSON.stringify(data.submissionData)]
      )  } else {

    if (createdBy?.value === 'test_user' || createdBy?.value === 'integration_test' || createdBy?.value === 'admin'){
      await db.query(
        `INSERT INTO "test_submissions"
        (surveyKey, createdBy, submissionId, rowVersion, creatorId, createdAt, modifiedBy, submissionData)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [data.surveyKey, createdBy?.value, data.submissionId, data.rowVersion, data.creatorId, data.createdAt, data.modifiedBy, JSON.stringify(data.submissionData)]
      )
    } else if (createdBy?.value === 'employee') {
          await db.query(
        `INSERT INTO "submissions"
        (surveyKey, createdBy, submissionId, rowVersion, creatorId, createdAt, modifiedBy, submissionData)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [data.surveyKey, createdBy?.value, data.submissionId, data.rowVersion, data.creatorId, data.createdAt, data.modifiedBy, JSON.stringify(data.submissionData)]
      )
    } else {
       await db.query(
        `INSERT INTO "unverified_submissions"
        (surveyKey, createdBy, submissionId, rowVersion, creatorId, createdAt, modifiedBy, submissionData)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [data.surveyKey, 'unverified_user', data.submissionId, data.rowVersion, data.creatorId, data.createdAt, data.modifiedBy, JSON.stringify(data.submissionData)]
      )
    }
  }
  
  return NextResponse.json({message: 'Submission received.', received: data})
}
