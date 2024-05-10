import { fetchLocation } from "@/lib/data";

export async function get (req, res) {
  try {
    const locations = await fetchLocation();
    res.status(200).json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch locations" });
  }
}










