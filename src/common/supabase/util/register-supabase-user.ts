
import { BadRequestException } from '@nestjs/common';
import { SupabaseService } from '../supabase.service';

export async function registerSupabaseUser(
  supabase: SupabaseService,
  email: string,
  password: string,
): Promise<string> {
  const { data: authData, error } = await supabase.client.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) {
    throw new BadRequestException(`Supabase error: ${error.message}`);
  }

  const supabaseUserId = authData.user?.id;
  if (!supabaseUserId) {
    throw new BadRequestException('Failed to create user on Supabase');
  }

  return supabaseUserId;
}
