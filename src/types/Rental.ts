export type Rental = {
  id: number;
  client_id: number | null;
  car_id: number | null;
  date_from: string;
  date_to: string;
  returned_at: string | null;
  client_name: string | null;
  client_email: string | null;
  client_phone: string | null;
  car_brand: string | null;
  car_model: string | null;
  car_image_url: string | null;
  car_body_type: string | null;
};
