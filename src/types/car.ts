export type Car = {
  id: number;
  brand: string;
  model: string;
  description: string;
  horsepower: number;
  torque_nm: number;
  is_rented: boolean;
  image_url: string;
  body_type: string;
  fuel_type: string;
  isActive?: boolean;
};
