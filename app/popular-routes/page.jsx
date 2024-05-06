import Route from "@/components/Route";
import fetchRoutes from "@/lib/data";
import React from "react";

const PopularRoutesPage = async () => {
  const routes = await fetchRoutes();
  return (
    <ul>
      {routes.map(route => {
        return <Route key={route.id} name={route.route_name} description={route.description} />
      })}
    </ul>
  )
}

export default PopularRoutesPage;