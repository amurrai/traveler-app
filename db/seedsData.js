const users = [
  {
    email: 'user1@example.com',
    username: 'user1',
    password: 'password1',
    first_name: 'John',
    last_name: 'Doe'
  },
  {
    email: 'user2@example.com',
    username: 'user2',
    password: 'password2',
    first_name: 'Jane',
    last_name: 'Smith'
  },
  {
    email: 'user3@example.com',
    username: 'user3',
    password: 'password3',
    first_name: 'David',
    last_name: 'Johnson'
  },
  {
    email: 'user4@example.com',
    username: 'user4',
    password: 'password4',
    first_name: 'Emily',
    last_name: 'Brown'
  },
  {
    email: 'user5@example.com',
    username: 'user5',
    password: 'password5',
    first_name: 'Michael',
    last_name: 'Wilson'
  },
  {
    email: 'user6@example.com',
    username: 'user6',
    password: 'password6',
    first_name: 'Sarah',
    last_name: 'Martinez'
  },
  {
    email: 'user7@example.com',
    username: 'user7',
    password: 'password7',
    first_name: 'Christopher',
    last_name: 'Anderson'
  },
  {
    email: 'user8@example.com',
    username: 'user8',
    password: 'password8',
    first_name: 'Amanda',
    last_name: 'Taylor'
  },
  {
    email: 'user9@example.com',
    username: 'user9',
    password: 'password9',
    first_name: 'Matthew',
    last_name: 'Thomas'
  },
  {
    email: 'user10@example.com',
    username: 'user10',
    password: 'password10',
    first_name: 'Jessica',
    last_name: 'Garcia'
  }
];

const locationRatings = [
  { user_id: 1, location_id: 1, rating: 5, comment: "Absolutely stunning views! Must visit." },
  { user_id: 2, location_id: 15, rating: 4, comment: "Nice place, but a bit crowded." },
  { user_id: 3, location_id: 30, rating: 3, comment: "Average experience, nothing special." },
  { user_id: 4, location_id: 45, rating: 5, comment: "Fantastic atmosphere, loved it!" },
  { user_id: 5, location_id: 12, rating: 2, comment: "Disappointing, not worth the hype." },
  { user_id: 6, location_id: 25, rating: 4, comment: "Great historical site, informative tour." },
  { user_id: 7, location_id: 40, rating: 3, comment: "Decent place, could use more facilities." },
  { user_id: 8, location_id: 55, rating: 5, comment: "Breathtaking scenery, worth the visit." },
  { user_id: 9, location_id: 10, rating: 4, comment: "Nice beach, clean and well-maintained." },
  { user_id: 10, location_id: 20, rating: 2, comment: "Overrated, not much to see." },
  { user_id: 1, location_id: 35, rating: 3, comment: "Interesting exhibits, but too crowded." },
  { user_id: 2, location_id: 50, rating: 4, comment: "Lovely gardens, peaceful atmosphere." },
  { user_id: 3, location_id: 5, rating: 5, comment: "Exhilarating hike, stunning views." },
  { user_id: 4, location_id: 18, rating: 3, comment: "Nice architecture, but lacks amenities." },
  { user_id: 5, location_id: 33, rating: 2, comment: "Overpriced for what it offers." },
  { user_id: 6, location_id: 48, rating: 4, comment: "Unique experience, loved the local food." },
  { user_id: 7, location_id: 8, rating: 5, comment: "Absolutely loved it, will definitely visit again." },
  { user_id: 8, location_id: 22, rating: 3, comment: "Decent park, could use better maintenance." },
  { user_id: 9, location_id: 38, rating: 4, comment: "Good facilities, family-friendly environment." },
  { user_id: 10, location_id: 52, rating: 1, comment: "Terrible experience, avoid at all costs." }
];

const routeRatings = [
  { user_id: 1, route_id: 1, rating: 4, comment: "The tour plan was well-organized and covered all the major attractions. However, the guide could have been more knowledgeable about the history of the sites. Overall, a good experience." },
  { user_id: 2, route_id: 2, rating: 5, comment: "Absolutely loved the route! Each stop was carefully selected, and the guide provided insightful commentary throughout the journey. Highly recommended!" },
  { user_id: 3, route_id: 3, rating: 3, comment: "The route had potential, but it felt rushed. We didn't have enough time to explore each destination properly. Also, some of the stops were underwhelming. Average experience." },
  { user_id: 4, route_id: 4, rating: 4, comment: "Great itinerary with a good balance of sightseeing and leisure time. The transportation was comfortable, and the guide was friendly and accommodating. Enjoyed every moment!" },
  { user_id: 5, route_id: 5, rating: 2, comment: "Disappointed with the route. It seemed hastily put together, and some of the attractions were closed for maintenance. Not worth the money." },
  { user_id: 6, route_id: 6, rating: 4, comment: "The route offered a diverse range of experiences, from cultural landmarks to scenic viewpoints. The guide was knowledgeable, and the accommodations were comfortable. Would do it again!" },
  { user_id: 7, route_id: 7, rating: 5, comment: "Exceeded expectations! The route took us off the beaten path to discover hidden gems. The guide was passionate about the destinations, making the experience truly memorable." },
  { user_id: 8, route_id: 8, rating: 3, comment: "Mixed feelings about the route. While some parts were enjoyable, others felt rushed or uninteresting. The guide tried their best, but the overall experience fell short of expectations." },
  { user_id: 9, route_id: 9, rating: 4, comment: "Thoroughly enjoyed the route! It was well-paced, allowing ample time to explore each location. The guide was informative, and the optional activities added extra excitement to the trip." },
  { user_id: 10, route_id: 10, rating: 1, comment: "Terrible route! The itinerary was poorly planned, and we spent more time on the bus than actually visiting attractions. Avoid at all costs!" },
  { user_id: 1, route_id: 11, rating: 4, comment: "A well-structured route with plenty of flexibility. The guide was accommodating to our preferences, and the optional excursions were a highlight. Would recommend to fellow travelers." },
  { user_id: 2, route_id: 12, rating: 5, comment: "An unforgettable journey! The route showcased the best of the region, from historical landmarks to natural wonders. The guide's passion for the destinations was infectious, making every moment enjoyable." },
  { user_id: 3, route_id: 13, rating: 3, comment: "Decent route, but could use some improvements. Some of the attractions were overcrowded, and the schedule felt rushed at times. Overall, an average experience." },
  { user_id: 4, route_id: 14, rating: 4, comment: "Thoroughly enjoyed the route! It was well-organized, and the guide provided insightful commentary throughout the journey. The accommodations were comfortable, and the included meals were delicious." },
  { user_id: 5, route_id: 15, rating: 2, comment: "Disappointing route. Many of the advertised attractions were closed for renovation, and the alternatives provided were not of the same caliber. Wouldn't recommend." },
  { user_id: 6, route_id: 16, rating: 4, comment: "A fantastic route with a great mix of cultural and outdoor experiences. The guide was knowledgeable and engaging, and the group dynamics made the trip even more enjoyable. Highly recommended!" },
  { user_id: 7, route_id: 17, rating: 5, comment: "Absolutely loved every moment of the route! The itinerary was well-designed, and the guide's passion for the destinations was evident. Each stop offered something unique, making the journey unforgettable." },
  { user_id: 8, route_id: 18, rating: 3, comment: "An average route with some highlights and lowlights. The itinerary felt a bit rushed, and some of the attractions were underwhelming. However, the guide was friendly and knowledgeable." },
  { user_id: 9, route_id: 19, rating: 4, comment: "Overall, a great route with plenty of memorable experiences. The guide was attentive to our needs, and the accommodations exceeded expectations. Would definitely consider another trip with this company." },
  { user_id: 10, route_id: 20, rating: 1, comment: "The worst route I've ever been on! The itinerary was poorly planned, and the guide lacked enthusiasm. Save your money and choose a different tour operator." }
];

export {
  users,
  locationRatings,
  routeRatings
}
