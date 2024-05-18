const users = [
  {
    email: 'user1@example.com',
    username: 'john',
    password: 'password123',
    first_name: 'John',
    last_name: 'Doe'
  },
  {
    email: 'user2@example.com',
    username: 'jane',
    password: 'password456',
    first_name: 'Jane',
    last_name: 'Smith'
  },
  {
    email: 'user3@example.com',
    username: 'michael',
    password: 'password789',
    first_name: 'Michael',
    last_name: 'Johnson'
  },
  {
    email: 'user4@example.com',
    username: 'robert',
    password: 'password123',
    first_name: 'Robert',
    last_name: 'Brown'
  },
  {
    email: 'user5@example.com',
    username: 'sarah',
    password: 'password456',
    first_name: 'Sarah',
    last_name: 'Taylor'
  },
  {
    email: 'user6@example.com',
    username: 'david',
    password: 'password789',
    first_name: 'David',
    last_name: 'Anderson'
  },
  {
    email: 'user7@example.com',
    username: 'emily',
    password: 'password123',
    first_name: 'Emily',
    last_name: 'Wilson'
  },
  {
    email: 'user8@example.com',
    username: 'chris',
    password: 'password456',
    first_name: 'Christopher',
    last_name: 'Martinez'
  },
  {
    email: 'user9@example.com',
    username: 'amanda',
    password: 'password789',
    first_name: 'Amanda',
    last_name: 'Garcia'
  },
  {
    email: 'user10@example.com',
    username: 'william',
    password: 'password123',
    first_name: 'William',
    last_name: 'Jackson'
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
  { user_id: 1, route_id: 10, rating: 4, comment: "A well-structured route with plenty of flexibility. The guide was accommodating to our preferences, and the optional excursions were a highlight. Would recommend to fellow travelers." },
  { user_id: 2, route_id: 9, rating: 5, comment: "An unforgettable journey! The route showcased the best of the region, from historical landmarks to natural wonders. The guide's passion for the destinations was infectious, making every moment enjoyable." },
  { user_id: 3, route_id: 8, rating: 3, comment: "Decent route, but could use some improvements. Some of the attractions were overcrowded, and the schedule felt rushed at times. Overall, an average experience." },
  { user_id: 4, route_id: 7, rating: 4, comment: "Thoroughly enjoyed the route! It was well-organized, and the guide provided insightful commentary throughout the journey. The accommodations were comfortable, and the included meals were delicious." },
  { user_id: 5, route_id: 6, rating: 2, comment: "Disappointing route. Many of the advertised attractions were closed for renovation, and the alternatives provided were not of the same caliber. Wouldn't recommend." },
  { user_id: 6, route_id: 5, rating: 4, comment: "A fantastic route with a great mix of cultural and outdoor experiences. The guide was knowledgeable and engaging, and the group dynamics made the trip even more enjoyable. Highly recommended!" },
  { user_id: 7, route_id: 4, rating: 5, comment: "Absolutely loved every moment of the route! The itinerary was well-designed, and the guide's passion for the destinations was evident. Each stop offered something unique, making the journey unforgettable." },
  { user_id: 8, route_id: 3, rating: 3, comment: "An average route with some highlights and lowlights. The itinerary felt a bit rushed, and some of the attractions were underwhelming. However, the guide was friendly and knowledgeable." },
  { user_id: 9, route_id: 2, rating: 4, comment: "Overall, a great route with plenty of memorable experiences. The guide was attentive to our needs, and the accommodations exceeded expectations. Would definitely consider another trip with this company." },
  { user_id: 10, route_id: 1, rating: 1, comment: "The worst route I've ever been on! The itinerary was poorly planned, and the guide lacked enthusiasm. Save your money and choose a different tour operator." }
];

const routes = [
  {
    user_id: 1,
    route_name: 'Historic Downtown Tour',
    description: 'Explore the rich history of our city with this historic downtown tour. Visit landmarks such as the Old Town Hall, Main Street Square, and the iconic Central Library. Learn about the city’s founding and its cultural heritage.',
    is_public: true,
    origin_id: 1,
    destination_id: 2
  },
  {
    user_id: 2,
    route_name: 'Art District Exploration',
    description: 'Immerse yourself in the vibrant art scene of our city with this art district exploration. Discover hidden galleries, colorful street murals, and dynamic art installations. Meet local artists and experience the creativity of our community.',
    is_public: true,
    origin_id: 3,
    destination_id: 4
  },
  {
    user_id: 3,
    route_name: 'Culinary Delights Tour',
    description: 'Indulge your taste buds on this culinary delights tour. Sample diverse flavors from around the world as you visit local eateries, food markets, and gourmet restaurants. From street food to fine dining, experience the gastronomic wonders of our city.',
    is_public: false,
    origin_id: 5,
    destination_id: 6
  },
  {
    user_id: 1,
    route_name: 'Nature Escapade',
    description: 'Escape the hustle and bustle of the city with this nature escapade. Trek through lush forests, scenic trails, and tranquil parks. Discover hidden waterfalls, breathtaking viewpoints, and abundant wildlife. Reconnect with nature and rejuvenate your soul.',
    is_public: true,
    origin_id: 7,
    destination_id: 8
  },
  {
    user_id: 2,
    route_name: 'Family Fun Adventure',
    description: 'Embark on a family fun adventure and create lasting memories together. Visit theme parks, interactive museums, and exciting attractions. Enjoy thrilling rides, hands-on exhibits, and entertaining shows. There’s something for everyone in the family!',
    is_public: true,
    origin_id: 9,
    destination_id: 10
  },
  {
    user_id: 3,
    route_name: 'Nightlife Experience',
    description: 'Experience the vibrant nightlife of our city with this exciting tour. Explore trendy bars, cozy pubs, and lively nightclubs. Dance the night away to live music, DJs, and karaoke. Discover hidden gems and make unforgettable memories with friends.',
    is_public: false,
    origin_id: 11,
    destination_id: 12
  },
  {
    user_id: 1,
    route_name: 'Scenic Drive',
    description: 'Take a scenic drive and soak in breathtaking views of our city’s landscapes. Wind through picturesque countryside, coastal highways, and mountain roads. Stop at scenic overlooks, charming towns, and historic landmarks along the way.',
    is_public: true,
    origin_id: 13,
    destination_id: 14
  },
  {
    user_id: 2,
    route_name: 'Architectural Marvels Tour',
    description: 'Marvel at the architectural wonders of our city on this guided tour. Admire iconic skyscrapers, historic buildings, and modern landmarks. Learn about renowned architects and the stories behind each architectural masterpiece.',
    is_public: true,
    origin_id: 15,
    destination_id: 16
  },
  {
    user_id: 3,
    route_name: 'Shopping Spree',
    description: 'Indulge in a shopping spree and discover the best shopping destinations in our city. Browse chic boutiques, designer stores, and bustling markets. Find unique treasures, fashion trends, and one-of-a-kind souvenirs to take home.',
    is_public: false,
    origin_id: 17,
    destination_id: 18
  },
  {
    user_id: 1,
    route_name: 'Off-the-Beaten-Path Adventure',
    description: 'Embark on an off-the-beaten-path adventure and uncover hidden gems off the tourist trail. Explore quirky neighborhoods, local markets, and secret spots known only to locals. Experience the authentic culture, flavors, and traditions of our city.',
    is_public: true,
    origin_id: 19,
    destination_id: 20
  },
  {
    user_id: 4,
    route_name: 'Historic Downtown Tour',
    description: 'Explore the rich history of our city with this historic downtown tour. Visit landmarks such as the Old Town Hall, Main Street Square, and the iconic Central Library. Learn about the city’s founding and its cultural heritage.',
    is_public: true,
    origin_id: 24,
    destination_id: 25
  },
  {
    user_id: 5,
    route_name: 'Art District Exploration',
    description: 'Immerse yourself in the vibrant art scene of our city with this art district exploration. Discover hidden galleries, colorful street murals, and dynamic art installations. Meet local artists and experience the creativity of our community.',
    is_public: true,
    origin_id: 26,
    destination_id: 27
  },
  {
    user_id: 6,
    route_name: 'Culinary Delights Tour',
    description: 'Indulge your taste buds on this culinary delights tour. Sample diverse flavors from around the world as you visit local eateries, food markets, and gourmet restaurants. From street food to fine dining, experience the gastronomic wonders of our city.',
    is_public: false,
    origin_id: 28,
    destination_id: 29
  },
  {
    user_id: 4,
    route_name: 'Nature Escapade',
    description: 'Escape the hustle and bustle of the city with this nature escapade. Trek through lush forests, scenic trails, and tranquil parks. Discover hidden waterfalls, breathtaking viewpoints, and abundant wildlife. Reconnect with nature and rejuvenate your soul.',
    is_public: true,
    origin_id: 30,
    destination_id: 31
  },
  {
    user_id: 5,
    route_name: 'Family Fun Adventure',
    description: 'Embark on a family fun adventure and create lasting memories together. Visit theme parks, interactive museums, and exciting attractions. Enjoy thrilling rides, hands-on exhibits, and entertaining shows. There’s something for everyone in the family!',
    is_public: true,
    origin_id: 32,
    destination_id: 33
  },
  {
    user_id: 6,
    route_name: 'Nightlife Experience',
    description: 'Experience the vibrant nightlife of our city with this exciting tour. Explore trendy bars, cozy pubs, and lively nightclubs. Dance the night away to live music, DJs, and karaoke. Discover hidden gems and make unforgettable memories with friends.',
    is_public: false,
    origin_id: 34,
    destination_id: 35
  },
  {
    user_id: 4,
    route_name: 'Scenic Drive',
    description: 'Take a scenic drive and soak in breathtaking views of our city’s landscapes. Wind through picturesque countryside, coastal highways, and mountain roads. Stop at scenic overlooks, charming towns, and historic landmarks along the way.',
    is_public: true,
    origin_id: 36,
    destination_id: 37
  },
  {
    user_id: 5,
    route_name: 'Architectural Marvels Tour',
    description: 'Marvel at the architectural wonders of our city on this guided tour. Admire iconic skyscrapers, historic buildings, and modern landmarks. Learn about renowned architects and the stories behind each architectural masterpiece.',
    is_public: true,
    origin_id: 38,
    destination_id: 39
  },
  {
    user_id: 6,
    route_name: 'Shopping Spree',
    description: 'Indulge in a shopping spree and discover the best shopping destinations in our city. Browse chic boutiques, designer stores, and bustling markets. Find unique treasures, fashion trends, and one-of-a-kind souvenirs to take home.',
    is_public: false,
    origin_id: 40,
    destination_id: 41
  },
  {
    user_id: 4,
    route_name: 'Off-the-Beaten-Path Adventure',
    description: 'Embark on an off-the-beaten-path adventure and uncover hidden gems off the tourist trail. Explore quirky neighborhoods, local markets, and secret spots known only to locals. Experience the authentic culture, flavors, and traditions of our city.',
    is_public: true,
    origin_id: 42,
    destination_id: 43
  },
  {
    user_id: 7,
    route_name: 'Historic Downtown Tour',
    description: 'Explore the rich history of our city with this historic downtown tour. Visit landmarks such as the Old Town Hall, Main Street Square, and the iconic Central Library. Learn about the city’s founding and its cultural heritage.',
    is_public: true,
    origin_id: 45,
    destination_id: 46
  },
  {
    user_id: 8,
    route_name: 'Art District Exploration',
    description: 'Immerse yourself in the vibrant art scene of our city with this art district exploration. Discover hidden galleries, colorful street murals, and dynamic art installations. Meet local artists and experience the creativity of our community.',
    is_public: true,
    origin_id: 47,
    destination_id: 48
  },
  {
    user_id: 9,
    route_name: 'Culinary Delights Tour',
    description: 'Indulge your taste buds on this culinary delights tour. Sample diverse flavors from around the world as you visit local eateries, food markets, and gourmet restaurants. From street food to fine dining, experience the gastronomic wonders of our city.',
    is_public: false,
    origin_id: 49,
    destination_id: 50
  },
  {
    user_id: 10,
    route_name: 'Nature Escapade',
    description: 'Escape the hustle and bustle of the city with this nature escapade. Trek through lush forests, scenic trails, and tranquil parks. Discover hidden waterfalls, breathtaking viewpoints, and abundant wildlife. Reconnect with nature and rejuvenate your soul.',
    is_public: true,
    origin_id: 51,
    destination_id: 52
  },
  {
    user_id: 7,
    route_name: 'Family Fun Adventure',
    description: 'Embark on a family fun adventure and create lasting memories together. Visit theme parks, interactive museums, and exciting attractions. Enjoy thrilling rides, hands-on exhibits, and entertaining shows. There’s something for everyone in the family!',
    is_public: true,
    origin_id: 53,
    destination_id: 54
  },
  {
    user_id: 8,
    route_name: 'Nightlife Experience',
    description: 'Experience the vibrant nightlife of our city with this exciting tour. Explore trendy bars, cozy pubs, and lively nightclubs. Dance the night away to live music, DJs, and karaoke. Discover hidden gems and make unforgettable memories with friends.',
    is_public: false,
    origin_id: 55,
    destination_id: 56
  },
  {
    user_id: 9,
    route_name: 'Scenic Drive',
    description: 'Take a scenic drive and soak in breathtaking views of our city’s landscapes. Wind through picturesque countryside, coastal highways, and mountain roads. Stop at scenic overlooks, charming towns, and historic landmarks along the way.',
    is_public: true,
    origin_id: 57,
    destination_id: 58
  },
  {
    user_id: 10,
    route_name: 'Architectural Marvels Tour',
    description: 'Marvel at the architectural wonders of our city on this guided tour. Admire iconic skyscrapers, historic buildings, and modern landmarks. Learn about renowned architects and the stories behind each architectural masterpiece.',
    is_public: true,
    origin_id: 59,
    destination_id: 60
  },
  {
    user_id: 7,
    route_name: 'Shopping Spree',
    description: 'Indulge in a shopping spree and discover the best shopping destinations in our city. Browse chic boutiques, designer stores, and bustling markets. Find unique treasures, fashion trends, and one-of-a-kind souvenirs to take home.',
    is_public: false,
    origin_id: 61,
    destination_id: 62
  },
  {
    user_id: 8,
    route_name: 'Off-the-Beaten-Path Adventure',
    description: 'Embark on an off-the-beaten-path adventure and uncover hidden gems off the tourist trail. Explore quirky neighborhoods, local markets, and secret spots known only to locals. Experience the authentic culture, flavors, and traditions of our city.',
    is_public: true,
    origin_id: 63,
    destination_id: 64
  }
]

export {
  users,
  locationRatings,
  routeRatings,
  routes
}
