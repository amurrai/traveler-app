import Location from "@/components/Location";
import { fetchLocation} from "@/lib/data";
import Link from "next/link";
import React from "react";

const LocationsPage = async () => {
  const locations = await fetchLocation();
  return (
    <ul>
      {locations.map(location => {
        return (
          <li key={location.id}>
            <Link href={`/locations`}>
              <Location location={location}  />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default LocationsPage;