import { supabase } from "../utils/supabase";
import type { User } from "../types/user";

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  return data.user as User;
};

export const getUserSession = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error("Błąd pobierania sesji:", error.message);
    return null;
  }

  return data.session;
};
