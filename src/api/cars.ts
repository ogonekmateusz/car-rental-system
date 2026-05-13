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

export const rentCar = async ({
  name,
  email,
  phone,
  carId,
  dateFrom,
  dateTo,
}: {
  name: string;
  email: string;
  phone: string;
  carId: number;
  dateFrom: string;
  dateTo: string;
}) => {
  // 1. Tworzenie klienta
  const { data: client, error: clientError } = await supabase
    .from("clients")
    .insert({
      name,
      email,
      phone,
    })
    .select()
    .single();

  if (clientError) {
    console.error("Client error:", clientError);
    return;
  }

  // 2. Dodanie wynajmu
  const { error: rentalError } = await supabase.from("rentals").insert({
    client_id: client.id,
    car_id: carId,
    date_from: dateFrom,
    date_to: dateTo,
  });

  if (rentalError) {
    console.error("Rental error:", rentalError);
    return;
  }

  // 3. Update auta
  const { error: carError } = await supabase
    .from("cars")
    .update({
      is_rented: true,
    })
    .eq("id", carId);

  if (carError) {
    console.error("Car update error:", carError);
  }
};
