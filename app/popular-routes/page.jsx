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
          <Link href={`/route-details/${route.id}`}>
            <Route key={route.id} name={route.route_name} description={route.description} />
          </Link>
        );
      })}
    </ul>
  );
}

export default PopularRoutesPage;