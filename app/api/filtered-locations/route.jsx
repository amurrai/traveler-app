import { NextResponse } from 'next/server';
import { fetchFilteredLocations } from '@/lib/data';

//BE 

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const selectedCategory = searchParams.get('selectedCategory');
  const minRating = searchParams.get('minRating');

  try {
    const filteredLocations = await fetchFilteredLocations(selectedCategory, minRating);
    return NextResponse.json(filteredLocations);
  } catch (error) {
    console.error("Error fetching filtered locations:", error);
    return NextResponse.error(new Error("Failed to fetch filtered locations"));
  }
}




