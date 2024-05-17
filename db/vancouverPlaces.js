const vancouverPlaces = [
  {
    place_id: 'ChIJp2zKeo1xhlQRWOMOmCcWJV8',
    city_id: 3,
    country_id: 1,
    name: 'Vancouver Aquarium',
    category: 'Aquarium',
    description: 'Popular kid-friendly attraction showcases local & exotic aquatic life with a focus on conservation.',
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Chief_of_the_Undersea_World_%2829942144566%29.jpg",
    latitude: 49.3004876,
    longitude: -123.1308774
  },
  {
    place_id: 'ChIJo-QmrYxxhlQRFuIJtJ1jSjY',
    city_id: 3,
    country_id: 1,
    name: 'Stanley Park',
    category: 'Park',
    description: "Vancouver's largest urban park has beaches, trails & family attractions, plus a picturesque seawall.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Vancouver_%28BC%2C_Canada%29%2C_Stanley_Park%2C_Totem_poles_--_2022_--_2039.jpg",
    latitude: 49.304258399999995,
    longitude: -123.14425229999999
  },
  {
    place_id: 'ChIJG3q8d85zhlQRIH1pyAsVpEc',
    city_id: 3,
    country_id: 1,
    name: 'Granville Island Public Market',
    category: 'Market',
    description: 'Popular indoor market with restaurants, bars & cafes, plus gourmet food stalls & artisan boutiques.',
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Granville_Island_Public_Market_2015.jpg",
    latitude: 49.2726609,
    longitude: -123.1351387
  },
  {
    place_id: 'ChIJnZHwi2NxhlQRN3CYHzc3giE',
    city_id: 3,
    country_id: 1,
    name: 'Science World',
    category: 'Museum',
    description: 'Interactive science displays & films for kids from toddlers to early teens, inside a geodesic dome.',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Science_World%2C_Vancouver%2C_Canada_%28JWPhotowerks%29_-_Flickr.jpg",
    latitude: 49.273376,
    longitude: -123.10383399999999
  },
  {
    place_id: 'ChIJwXz9f39xhlQRT3qxXAPDlbU',
    city_id: 3,
    country_id: 1,
    name: 'Vancouver Art Gallery',
    category: 'Art Gallery',
    description: 'Gallery known for its touring exhibits, work by local artists (like Emily Carr) & photo collection.',
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Vancouver_Art_Gallery_%2839595096015%29.jpg",
    latitude: 49.2829607,
    longitude: -123.1204715
  },
  {
    place_id: 'ChIJrf8w27NyhlQR44St4PQccfY',
    city_id: 3,
    country_id: 1,
    name: 'Museum of Anthropology at UBC',
    category: 'Museum',
    description: 'Large Arthur Erickson–designed museum at UBC devoted to cultural artifacts from around the world.',
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/The_Raven_and_the_First_Men%2C_University_of_British_Columbia_Museum_of_Anthropology%2C_Bill_Reid%2C_Creator_-_panoramio_%281%29.jpg",
    latitude: 49.2695015,
    longitude: -123.2594409
  },
  {
    place_id: 'ChIJQ9pJmH5xhlQRe_nvreYL37k',
    city_id: 3,
    country_id: 1,
    name: 'Vancouver Public Library, Central Library',
    category: 'Library',
    description: "The city's grand central library, with a colonnaded surround reminiscent of a Roman amphitheater.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Vancouver_Public_Central_Library_%2823725334918%29.jpg",
    latitude: 49.2797275,
    longitude: -123.1156217
  },
  {
    place_id: 'ChIJj1udwilyhlQR1FRRZudhLlE',
    city_id: 3,
    country_id: 1,
    name: 'Roedde House Museum',
    category: 'Museum',
    description: 'This restored, late-Victorian home with tours depicts  life at the turn of the 19th century.',
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Roedde_House_01.jpg",
    latitude: 49.2868718,
    longitude: -123.13214829999998
  },
  {
    place_id: 'ChIJ1eC-_HxxhlQRuxiCkf1NQPk',
    city_id: 3,
    country_id: 1,
    name: 'BC Place' ,
    category: 'Stadium',
    description: 'Stadium with a retractable roof & over 50,000 seats for events plus Major League Soccer & football.',
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/BC_Place_2015_Women%27s_FIFA_World_Cup.jpg",
    latitude: 49.27675,
    longitude: -123.111999
  },
  {
    place_id: 'ChIJSd7cANJvhlQRXg8TheyzUPM',
    city_id: 3,
    country_id: 1,
    name: 'Capilano Suspension Bridge Park',
    category: 'Historical Landmark',
    description: 'Built in 1889, this 137m-long treetop bridge offers scenic views of the forest below.',
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Capilano_Suspension_Bridge_ending.JPG",
    latitude: 49.3428609,
    longitude: -123.11492439999999
  },
  {
    place_id: 'ChIJIcZrTvVzhlQRiKTnD03vt7Q',
    city_id: 3,
    country_id: 1,
    name: 'Queen Elizabeth Park',
    category: 'Park',
    description: 'Urban landmark on a hill featuring manicured gardens, a conservatory, sculptures & sports courts.',
    image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Trevesia_palmata_-_Bloedel_Floral_Conservatory%2C_Queen_Elizabeth_Park_-_Vancouver%2C_Canada_-_DSC07492.JPG",
    latitude: 49.241757,
    longitude: -123.11261929999999
  },
  {
    place_id: 'ChIJwW3HeIZzhlQRVxJgWI8VjAg',
    city_id: 3,
    country_id: 1,
    name: 'VanDusen Botanical Garden',
    category: 'Park',
    description: 'Space with ever-changing greenery, flowers & art installations plus fine dining & a casual cafe.',
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/General_view_-_VanDusen_Botanical_Garden_-_Vancouver%2C_BC_-_DSC07438.jpg",
    latitude: 49.239568999999996,
    longitude: -123.13254049999998
  },
  {
    place_id: 'ChIJK7VbnXxxhlQRCbKQyeRwBJ4',
    city_id: 3,
    country_id: 1,
    name: 'Rogers Arena',
    category: 'Event Venue',
    description: 'Spacious venue that hosts the Vancouver Canucks & concerts by big-name touring acts.',
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Rogers_Arena_-_panoramio.jpg",
    latitude: 49.2778358,
    longitude: -123.10882269999999
  },
  {
    place_id: 'ChIJ86zkaC9yhlQR4GhBA8iTiy4',
    city_id: 3,
    country_id: 1,
    name: 'English Bay Beach',
    category: 'Beach',
    description: 'Bustling beach with volleyball courts, plus a concession stand & the Cactus Club Cafe for food.',
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/English_Bay_Vancouver_04.jpg",
    latitude: 49.286311399999995,
    longitude: -123.14348650000001
  },
  {
    place_id: 'ChIJo4RRq4NxhlQRIAejSwZjXS0',
    city_id: 3,
    country_id: 1,
    name: 'Marine Building',
    category: 'Tourist Attraction',
    description: 'Skyscraper, opened in 1930, known for its art deco–inspired architecture & its ornate lobby.',
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Marine_Building%2C_Vancouver_%282013%29_-_09.JPG",
    latitude: 49.2874264,
    longitude: -123.1170449
  },
  {
    place_id: 'ChIJ0UCTbi1yhlQRQCKD7zPvHBk',
    city_id: 3,
    country_id: 1,
    name: 'Sunset Beach',
    category: 'Beach',
    description: 'Sunset Beach in Vancouver is a picturesque waterfront destination offering stunning views of English Bay and the surrounding mountains.',
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Rusty_Ribs_Sunset_Beach_Vancouver_BC_%2815723217562%29.jpg",
    latitude: 49.279212799999996,
    longitude: -123.1391285
  },
  {
    place_id: 'ChIJwd1aPIBxhlQRX8pxjPkAb5s',
    city_id: 3,
    country_id: 1,
    name: 'Robson Square',
    category: 'Tourist Attraction',
    description: 'Ice-skating, street-dancing & landscape architecture in a pedestrian hub amid office towers.',
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Vancouver_Robson_Square_02.jpg",
    latitude: 49.2819295,
    longitude: -123.1219182
  },
  {
    place_id: 'ChIJIeDiJJ1xhlQRCWHIheB_Bbc',
    city_id: 3,
    country_id: 1,
    name: 'Canada Place',
    category: 'Convention Center',
    description: 'Built to look like a ship, this iconic complex houses a convention centre, hotel & ferry terminal.',
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Vancouver_%28BC%2C_Canada%29%2C_Canada_Place_--_2022_--_1906.jpg",
    latitude: 49.2888248,
    longitude: -123.11112089999999
  },
  {
    place_id: 'ChIJK33rpNZzhlQRwA_oOKDuFDI',
    city_id: 3,
    country_id: 1,
    name: 'False Creek',
    category: 'Tourist Attraction',
    description: 'Home to 10 marinas, this inlet offers many boating activities, including pleasure boats & paddling.',
    image: "https://upload.wikimedia.org/wikipedia/commons/2/22/False_Creek_Vancouver_British_Columbia_Canada_02.jpg",
    latitude: 49.2698701,
    longitude: -123.1247632
  },
  {
    place_id: 'ChIJAx7UL8xyhlQR86Iqc-fUncc',
    city_id: 3,
    country_id: 1,
    name: 'The University of British Columbia',
    category: 'University',
    description: 'Sprawling public research university known for its anthropology museum & arts & sciences programs.',
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/The_University_of_British_Columbia_%2848857487382%29.jpg",
    latitude: 49.260605200000008,
    longitude: -123.24599389999999
  },
  {
    place_id: 'ChIJP2oYRX9xhlQRUGL0tr-uzSY',
    city_id: 3,
    country_id: 1,
    name: 'CF Pacific Centre',
    category: 'Shopping Mall',
    description: 'Upscale mall since 1971 with premium retailers, designer brands, a food court & underground parking.',
    image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Pacific_Centre.jpg",
    latitude: 49.283398,
    longitude: -123.1175396
  }
];


export default vancouverPlaces;