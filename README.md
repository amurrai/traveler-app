# WanderQuest

WanderQuest is a full stack web application for creating custom routes to explore a city's tourist attractions.

Main features
 - Users can select their own points of interest within a city and the app will provide the best walking route between all locations
 - Maps and routes are fetched directly from the Google Maps API, assuring up to date information
 - Location details provide a picture additional information regarding each attraction to help with selecting interesting places to visit
 - Custom routes can be saved to the user profile to be accessed when needed
 - Routes can be posted publicly to allow other users to provide feedback through ratings and comments

Stack
 - React
 - Next.js
 - Prisma
 - Google Maps API

## Final Product

Home page - Lists popular public routes
!["Create Route Page"](https://github.com/amurrai/traveler-app/blob/main/docs/homepage.png)

Popular Locations - Users can filter and favorite locations before creating a route
!["Create Route Page"](https://github.com/amurrai/traveler-app/blob/main/docs/popular-locations.png)

Create Route - Users can see the locations available on the map and on the list
!["Create Route Page"](https://github.com/amurrai/traveler-app/blob/main/docs/create-route.png)

Generated route - After selecting the locations, starting and ending points, the generated map provides the optimal route with detailed walking directions
!["Create Route Page"](https://github.com/amurrai/traveler-app/blob/main/docs/generated-route.png)

Route Comment - Users can rate and comment public routes posted
!["Create Route Page"](https://github.com/amurrai/traveler-app/blob/main/docs/route-comment.png)

## Setup

- Install dependencies with `npm install`
- Create local postgres database and add to .env file
- Obtain a Google Maps API key and create a public map, add them to the .env file
- Run the development server: `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result


