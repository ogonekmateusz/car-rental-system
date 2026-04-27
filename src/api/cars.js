import { supabase } from "../utils/supabase";

export const getCars = async () => {
  const { data, error } = await supabase.from("cars").select("*");
  if (error) {
    console.error("Error fetching cars:", error);
    return null;
  }
  return data;
};

export const getCarCount = async () => {
  const { count, error } = await supabase
    .from("cars")
    .select("*", { count: "exact" });
  if (error) {
    console.error("Error fetching car count:", error);
    return null;
  }
  return count;
};
