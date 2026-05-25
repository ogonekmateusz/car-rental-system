import { supabase } from "../utils/supabase.tsx";
import type { Rental } from "../types/Rental.ts";
type ClientRow = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

type CarRow = {
  id: number;
  brand: string;
  model: string;
  image_url: string;
  body_type: string;
};

type RentalRow = {
  id: number;
  date_from: string;
  date_to: string;
  returned_at: string | null;
  clients: ClientRow | null;
  cars: CarRow | null;
};

export async function getRentals(): Promise<Rental[]> {
  const { data, error } = await supabase
    .from("rentals")
    .select(
      `
      id,
      date_from,
      date_to,
      returned_at,
      clients (
        id,
        name,
        email,
        phone
      ),
      cars (
        id,
        brand,
        model,
        image_url,
        body_type
      )
    `,
    )
    .order("date_from", { ascending: false });

  if (error) throw error;

  return (data as unknown as RentalRow[]).map((row) => ({
    id: row.id,
    client_id: row.clients?.id ?? null,
    car_id: row.cars?.id ?? null,
    date_from: row.date_from,
    date_to: row.date_to,
    returned_at: row.returned_at,
    client_name: row.clients?.name ?? null,
    client_email: row.clients?.email ?? null,
    client_phone: row.clients?.phone ?? null,
    car_brand: row.cars?.brand ?? null,
    car_model: row.cars?.model ?? null,
    car_image_url: row.cars?.image_url ?? null,
    car_body_type: row.cars?.body_type ?? null,
  }));
}
