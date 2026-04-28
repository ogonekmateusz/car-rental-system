import { supabase } from "../utils/supabase";
import type { Car } from "../types/car";
export const getCarCount = async (): Promise<number> => {
  const { count } = await supabase
    .from("cars")
    .select("*", { count: "exact", head: true });

  return count ?? 0;
};

export const getCars = async (limit?: number): Promise<Car[]> => {
  let query = supabase.from("cars").select("*");

  if (typeof limit === "number") {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
};
