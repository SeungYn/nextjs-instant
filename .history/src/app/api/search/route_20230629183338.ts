import { searchUser } from '@/service/user';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { keyword: string };
};
export async function GET(request: NextApiRequestCookies) {
  return searchUser() //
    .then((data) => NextResponse.json(data));
}