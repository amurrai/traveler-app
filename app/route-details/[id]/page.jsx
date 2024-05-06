import RouteRatingForm from "@/components/RouteRatingForm";
import { authOptions } from "@/lib/auth";
import { fetchRouteDetails } from "@/lib/data";
import { getServerSession } from "next-auth";
import React from "react";

const RouteDetailsPage = async ({params}) => {
  const session = await getServerSession(authOptions);

  const routeDetails = await fetchRouteDetails(params.id);

  // todo: move the data processing somewhere else?
  const locations = routeDetails.locationRoute.map(entry => entry.location);

  // populate list of locations in route
  const locationNames = locations.map((location) => {
    return (
      <li key={location.id}>
        {location.name}
      </li>
    );
  });

  // populate list of ratings in route
  const ratings = routeDetails.ratings.map((rating) => {
    return (
      <li key={rating.id}>
        {rating.rating} | {rating.comment}
      </li>
    )
  });
  console.log(routeDetails);

  return (
    <div className="space-y-4">
      <table className="text-left">
        <thead>
          <tr>
            <th>Route Name</th>
            <th>Description</th>
            <th>Locations</th>
            <th>Ratings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{routeDetails.route_name}</td>
            <td>{routeDetails.description}</td>
            <td>{locationNames}</td>
            <td>{ratings}</td>
          </tr>
        </tbody>
      </table>

      {session?.user && <RouteRatingForm />}
    </div>
  )
}

export default RouteDetailsPage;