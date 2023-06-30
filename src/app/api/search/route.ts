import { searchUser } from '@/service/user';
import { NextRequest, NextResponse } from 'next/server';

// 파람이 없고 인자 없은 api를 호출하면 넥스가 SSG로 취급함
//아래 dynamic을 명시하면 ssr로 하도록 해줌
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  return searchUser() //
    .then((data) => NextResponse.json(data));
}
