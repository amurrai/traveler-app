import Route from "@/components/Route";
import { fetchPublicRoutes } from "@/lib/data";
import Link from "next/link";
import React from "react";

const PopularRoutesPage = async () => {
  const routes = await fetchPublicRoutes();
  return (
    <ul>
      {routes.map(route => {
        return (
          <li key={route.id}>
            <Link href={`/route-details/${route.id}`}>
              <Route name={route.route_name} description={route.description} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PopularRoutesPage;