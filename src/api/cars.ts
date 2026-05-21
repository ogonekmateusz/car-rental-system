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
  const { data: existingClient } = await supabase
    .from("clients")
    .select("*")
    .eq("email", email)
    .single();

  let clientId: number;

  if (existingClient) {
    clientId = existingClient.id;
  } else {
    const { data: client, error: clientError } = await supabase
      .from("clients")
      .insert({ name, email, phone })
      .select()
      .single();

    if (clientError) {
      console.error("Client error:", clientError);
      return;
    }

    clientId = client.id;
  }

  const { error: rentalError } = await supabase.from("rentals").insert({
    client_id: clientId,
    car_id: carId,
    date_from: dateFrom,
    date_to: dateTo,
  });

  if (rentalError) {
    console.error("Rental error:", rentalError);
    return;
  }

  const { error: carError } = await supabase
    .from("cars")
    .update({ is_rented: true })
    .eq("id", carId);

  if (carError) {
    console.error("Car update error:", carError);
  }
};

export const returnCar = async (carId: number): Promise<boolean> => {
  const { error } = await supabase
    .from("cars")
    .update({ is_rented: false })
    .eq("id", carId);

  if (error) {
    console.error("Błąd podczas zwrotu auta:", error);
    return false;
  }
  return true;
};

export const deleteCar = async (carId: number): Promise<boolean> => {
  const { error } = await supabase.from("cars").delete().eq("id", carId);

  if (error) {
    console.error("Błąd podczas usuwania samochodu:", error);
    return false;
  }
  return true;
};

export const addCar = async (carData: {
  brand: string;
  model: string;
  body_type: string;
  fuel_type: string;
  price: number;
  image_url: string;
}): Promise<boolean> => {
  const { error } = await supabase.from("cars").insert({
    ...carData,
    is_rented: false,
  });

  if (error) {
    console.error("Błąd podczas dodawania auta:", error);
    return false;
  }
  return true;
};
