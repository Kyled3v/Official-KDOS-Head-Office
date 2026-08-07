import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    platform: 'Official Head Office',
    company: 'KyleDev Systems Software (Pty) Ltd',
    version: process.env.NEXT_PUBLIC_APP_VERSION ?? '1.0.0',
    environment: process.env.NEXT_PUBLIC_ENV ?? 'development',
    timestamp: new Date().toISOString(),
  })
}
