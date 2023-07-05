'use server';

import { revalidatePath } from 'next/cache';

export async function reloadUserPage() {
  revalidatePath('/user/[username]');
}
