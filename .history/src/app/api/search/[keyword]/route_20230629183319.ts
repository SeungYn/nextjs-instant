import { searchUser } from '@/service/user';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { keyword: string };
};
export async function GET(request: NextRequest, context: Context) {
  return searchUser(context.params.keyword) //
    .then((data) => NextResponse.json(data));
}
