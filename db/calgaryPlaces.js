const calgaryPlaces = [
  {
    place_id: 'ChIJJzJsi_1vcVMRgZd7NwckWfE',
    city_id: 1,
    country_id: 1,
    name: 'Calgary Tower',
    category: 'Tourist Attraction',
    description: 'Soaring tower with panoramic views from a glass-floored observation deck & a revolving restaurant.',
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Calgary_Tower_%2827147607958%29.jpg"
  },
  {
    place_id: 'ChIJ5dncsfl7cVMRmlZaLAQhsto',
    city_id: 1,
    country_id: 1,
    name: 'Calgary Zoo',
    category: 'Zoo',
    description: 'The Calgary Zoo is a dynamic conservation-focused institution providing immersive experiences with diverse animal species and ecosystems.',
    image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Calgary_Zoo_Africa.jpg"
  },
  {
    place_id: 'ChIJYSGE0_xvcVMRXBO38Lu18x0',
    city_id: 1,
    country_id: 1,
    name: 'Devonian Gardens',
    category: 'Park',
    description: "Tropical botanical gardens inside a shopping centre, with fishponds, palms & a children's play area.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/43/The_Devonian_Gardens_at_TD_square_down_town_Calgary_%2813511468793%29.jpg"
  },
  {
    place_id: 'ChIJpS1pyfBvcVMRR_gMg_K0K0Y',
    city_id: 1,
    country_id: 1,
    name: "Prince's Island Park",
    category: 'Park',
    description: 'Urban park built on the site of a former sawmill, with picnic areas, trails & regular major events.',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Princes_island_Park_Calgary_October_2017_%2836888994134%29.jpg"
  },
  {
    place_id: 'ChIJAQAAwKd6cVMRnekk-oKwJ-M',
    city_id: 1,
    country_id: 1,
    name: "Scotsman's Hill",
    category: 'Tourist Attraction',
    description: 'This lookout point offers striking vistas of skyscrapers & landmarks in downtown Calgary.',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/54/Calgary_Alberta._Canada._%2851484599506%29.jpg"
  },
  {
    place_id: 'ChIJyaYiQKt6cVMRKqNT7NvmrEY',
    city_id: 1,
    country_id: 1,
    name: 'The Confluence Historic Site & Parkland',
    category: 'Historical Landmark',
    description: 'Wooden fort, built in 1875 by the North West Mounted Police, with history displays & offering tours.',
    image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Fort_Calgary_%289588824528%29.jpg"
  },
  {
    place_id: 'ChIJ3eqB2u9vcVMR4yx4U9Zcc7I',
    city_id: 1,
    country_id: 1,
    name: 'Peace Bridge',
    category: 'Tourist Attraction',
    description: 'Modern, red pedestrian& bike bridge designed by Santiago Calatrava, a well-known Spanish architect.',
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Calgary_Peace_Bridge_with_Red_Ball.jpg"
  },
  {
    place_id: 'ChIJQ94Uu0plcVMRus1ooc0XHrs',
    city_id: 1,
    country_id: 1,
    name: 'TELUS Spark Science Centre',
    category: 'Museum',
    description: "Science centre with interactive museum exhibits, a children's play area & an HD planetarium theatre.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Calgary_Sparks_Center.JPG"
  },
  {
    place_id: 'ChIJa1pSzkBwcVMRffjyXskSZVI',
    city_id: 1,
    country_id: 1,
    name: 'Stanley Park',
    category: 'Park',
    description: 'Riverfront 21-hectare park with play & picnic areas, tennis courts, a sports field & bowling club.',
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Pavilion_at_east_end_of_screen_wall%2C_Stanley_Park_4.jpg"
  },
  {
    place_id: 'ChIJxRF-UcZxcVMRLHZcX-S80zI',
    city_id: 1,
    country_id: 1,
    name: 'The Military Museums',
    category: 'Museum',
    description: 'Complex of 8 museums covering naval, army & air force history, plus a gallery about human conflict.',
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Museum_of_the_Regiments%2C_Calgary_%285882950333%29.jpg"
  },
  {
    place_id: 'ChIJlStFuGZvcVMRnd3-AT74ALE',
    city_id: 1,
    country_id: 1,
    name: 'Contemporary Calgary',
    category: 'Art Gallery',
    description: 'Contemporary Calgary is an institution dedicated to showcasing contemporary art and fostering creative dialogue through exhibitions, programs, and collaborations.',
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Contemporary_Calgary_September_2020.png"
  },
  {
    place_id: 'ChIJwW53PR1wcVMR-GG-IzCmRDo',
    city_id: 1,
    country_id: 1,
    name: 'Central Memorial Park',
    category: 'Park',
    description: 'Relaxed city park featuring landscaped gardens, war-memorial statues, a fountain & a library.',
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Central_Memorial_Park_and_Library%2C_Calgary_%286151628937%29.jpg"
  },
  {
    place_id: 'ChIJKxlRM_5vcVMRpi7SoPK4Ggg',
    city_id: 1,
    country_id: 1,
    name: 'Olympic Plaza',
    category: 'Park',
    description: '1988 Olympic Winter Games venue turned park with a pond, stage & seasonal ice skating.',
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Olympic_Plaza_1988_winter_Olympics_architecture_downtown_Calgary_City_Hall_Clock_Tower.jpg"
  },
  {
    place_id: 'ChIJHXmJcgtwcVMRvRk3l7Ike6g',
    city_id: 1,
    country_id: 1,
    name: 'Stampede Park',
    category: 'Event Venue',
    description: 'Stampede Park in Calgary is a bustling event venue hosting the world-renowned Calgary Stampede as well as a variety of concerts, trade shows, and cultural events.',
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Stampede_Midway_2011.png"
  },
  {
    place_id: 'ChIJuRFbQg1xcVMROa2svlIsB4Y',
    city_id: 1,
    country_id: 1,
    name: 'Heritage Park',
    category: 'Museum',
    description: 'Large Western Canadian history museum with working antiques & seasonal re-creations with actors.',
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Heritage_Park%2C_Calgary_%284765142474%29.jpg"
  },
  {
    place_id: 'ChIJ32Lx_wFwcVMRbI76TE_q8u8',
    city_id: 1,
    country_id: 1,
    name: 'Glenbow Museum',
    category: 'Museum',
    description: 'Art & area history museum with a permanent collection & archives, plus visiting exhibits & events.',
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Tipi_exhibit_-_Glenbow_Museum_-_DSC00991.JPG"
  },
  {
    place_id: 'ChIJO9RPhqp6cVMRDtLkeZR5CXY',
    city_id: 1,
    country_id: 1,
    name: 'Studio Bell, home of the National Music Center',
    category: 'Museum',
    description: 'Exhibits on Canadian music history, hands-on instrument areas & concerts in a contemporary setting.',
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Studio_Bell_in_Calgary_%2848719862166%29.jpg"
  },
  {
    place_id: 'ChIJHes8p4V2cVMRE2_DGixcj_o',
    city_id: 1,
    country_id: 1,
    name: 'Fish Creek Provincial Park',
    category: 'Park',
    description: 'Expansive outdoor park featuring miles of hiking & biking trails, a manmade lake & wildlife.',
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Fish_Creek_Park_%285286158831%29.jpg"
  },
  {
    place_id: 'ChIJ0cC7evlkcVMRxnr5Zs9ENTQ',
    city_id: 1,
    country_id: 1,
    name: 'The Hangar Flight Museum',
    category: 'Museum',
    description: 'Commerical & military aircraft, plus flight history exhibits, in a former WWII training hangar.',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Aero_Space_Museum_of_Calgary_%2812%29_%2829935216093%29.jpg"    
  },
  {
    place_id: 'ChIJe3qBjFVwcVMReZWFdJC3Cqg',
    city_id: 1,
    country_id: 1,
    name: 'CF Chinook Centre',
    category: 'Shopping Mall',
    description: 'Sophisticated shopping complex with high-end department stores, well-known chains & a cinema.',
    image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Chinook_Centre_entrance_2013.jpg"
  },
  {
    place_id: 'ChIJP9RS1R1vcVMR0xEsnBKFn5I',
    city_id: 1,
    country_id: 1,
    name: 'CF Market Mall',
    category: 'Shopping Mall',
    description: 'A kids’ playground & food court join hundreds of retailers on 1 level at this indoor shopping plaza.',
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Market_Mall_12.jpg"
  },
  {
    place_id: 'ChIJz-ID1PxvcVMRb0uKfZBjeTU',
    city_id: 1,
    country_id: 1,
    name: 'Stephen Avenue Walk',
    category: 'Tourist Attraction',
    description: 'Bustling pedestrian walkway lined with art, eateries, shopping & entertainment venues.',
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Downtown_Calgary_fall_walk_around_2013_%2810390361145%29.jpg"
  },
  {
    place_id: 'ChIJuRFbQg1xcVMRzc9h2iNOZ5k',
    city_id: 1,
    country_id: 1,
    name: 'Gasoline Alley Museum',
    category: 'Museum',
    description: 'Site in Heritage Park Historical Village with pre-1950s cars, old-timey gas pumps & vintage signage.',
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/A_few_of_the_vehicles_from_Heritage_park_Calgary_%2822991633649%29.jpg"
  },
  {
    place_id: 'ChIJoXCBsPlvcVMRXz5VykaGLq4',
    city_id: 1,
    country_id: 1,
    name: 'Sien Lok Park',
    category: 'Park',
    description: 'Riverside public park with Chinese lion sculptures, a pagoda, a tai chi area & a playground.',
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/%22In_search_of_Golden_Mountain%22_by_Ferdinand_Spina%3B_2012.jpg"
  },
  {
    place_id: 'ChIJ933LHfhlcVMRr6gOlw35dnU',
    city_id: 1,
    country_id: 1,
    name: 'Nose Hill Park',
    category: 'Park',
    description: 'Tranquil, spacious park known for its abundant wildlife, hiking trails & archeological finds.',
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Calgary_from_Nose_hill_park_%2815811371118%29.jpg"
  }
];


export default calgaryPlaces;

