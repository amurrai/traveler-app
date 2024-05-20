const torontoPlaces = [
  {
    place_id: 'ChIJs6Elz500K4gRT1jWAsHIfGE',
    city_id: 2,
    country_id: 1,
    category: 'Museum',
    name: 'Casa Loma',
    description: 'Grand 1914 castle featuring regular tours & gardens that are open seasonally.',
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Casa_Loma_06.JPG",
    latitude: 43.6780371,
    longitude: -79.4094439

  },
  {
    place_id: 'ChIJmzrzi9Y0K4gRgXUc3sTY7RU',
    city_id: 2,
    country_id: 1,
    category: 'Tourist Attraction',
    name: 'CN Tower',
    description: 'Landmark, over 553-metre tower featuring a glass floor & a revolving eatery with panoramic views.',
    image: "https://upload.wikimedia.org/wikipedia/commons/2/24/CN_Tower%2C_Toronto_%28IMG20181220074717%29.jpg",
    latitude: 43.6425662,
    longitude: -79.3870568
  },
  {
    place_id: 'ChIJE-Xa87o0K4gRkvXFHuE0hMk',
    city_id: 2,
    country_id: 1,
    category: 'Museum',
    name: 'Royal Ontario Museum',
    description: 'Sprawling natural history & world cultures galleries, plus dinosaur fossil skeletons.',
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/The_ROM_-_Toronto_%285084029515%29.jpg",
    latitude: 43.667709699999996,
    longitude: -79.3947771
  },
  {
    place_id: 'ChIJvRlT7cU0K4gRr0bg7VV3J9o',
    city_id: 2,
    country_id: 1,
    category: 'Museum',
    name: 'Art Gallery of Ontario',
    description: 'Large gallery with huge Canadian collection, European masterworks & a major Frank Gehry renovation.',
    image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Art_Gallery_of_Ontario_%2838661357472%29.jpg",
    latitude: 43.653606599999996,
    longitude: -79.392512299999993
  },
  {
    place_id: 'ChIJ_wU50co0K4gRingYcKzmofs',
    city_id: 2,
    country_id: 1,
    category: 'Event Venue',
    name: 'Yonge-Dundas Square',
    description: 'Bustling outdoor public space & live-event venue hosting concerts, movies & community events.',
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Yonge-Dundas_Square_-_20200112_-_01.jpg",
    latitude: 43.6560811,
    longitude: -79.3801714
  },
  {
    place_id: 'ChIJsRjTsS3L1IkRC177bW2To_4',
    city_id: 2,
    country_id: 1,
    category: 'Museum',
    name: 'Hockey Hall of Fame',
    description: 'A vast collection of hockey memorabilia, including famous gear, interactive games & the Stanley Cup.',
    image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Hockey_Hall_of_Fame_Toronto_A.JPG",
    latitude: 43.647272199999996,
    longitude: -79.377690199999989
  },
  {
    place_id: 'ChIJWwS21dU0K4gRPSGMKRkar40',
    city_id: 2,
    country_id: 1,
    category: 'Aquarium',
    name: "Ripley's Aquarium of Canada",
    description: 'Expansive, modern aquarium with many species & habitats on display, plus events & classes.',
    image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Ripley%27s_Aquarium_IMG_0534_%2820546491860%29.jpg",
    latitude: 43.6421785,
    longitude: -79.3866022
  },
  {
    place_id: 'ChIJWyfdtDHL1IkR_bal8ay1Cso',
    city_id: 2,
    country_id: 1,
    category: 'Market',
    name: 'St. Lawrence Market',
    description: 'Spacious market with 100+ vendors, bakers, butchers & artisans, with produce & antiques on weekends.',
    image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Toronto_-_ON_-_St_Lawrence_Market.jpg",
    latitude: 43.6486879,
    longitude: -79.3715454
  },
  {
    place_id: 'ChIJD8Zxvb40K4gR1u3k0060sko',
    city_id: 2,
    country_id: 1,
    category: 'Library',
    name: 'Thomas Fisher Rare Book Library',
    description: 'The Thomas Fisher Rare Book Library in Toronto houses a remarkable collection of rare books, manuscripts, and special collections.',
    image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Rare_Books_atrium_Toronto_2023_jeh.jpg",
    latitude: 43.6640736,
    longitude: -79.3989838
  },
  {
    place_id: 'ChIJqy_n4UvL1IkRJ91CoOzZV-E',
    city_id: 2,
    country_id: 1,
    category: 'Park',
    name: 'Allan Gardens',
    description: 'Collection of plants from around the world housed in a cast-iron & glass building dating from 1910.',
    image: "https://upload.wikimedia.org/wikipedia/commons/6/68/%282007%29_Allan_Gardens_%283590765579%29.jpg",
    latitude: 43.6617429,
    longitude: -79.3747382
  },
  {
    place_id: 'ChIJbfQt-y3L1IkRL_HvgfSdmYk',
    city_id: 2,
    country_id: 1,
    category: 'Park',
    name: 'Berczy Park Dog Fountain',
    description: 'The Berczy Park Dog Fountain in Toronto is a whimsical and charming public art installation featuring lifelike bronze sculptures of dogs.',
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Berczy_Park_Dog_Fountain_-_Toronto_%2840171183761%29.jpg",
    latitude: 43.6480046,
    longitude: -79.375204099999991
  },
  {
    place_id: 'ChIJTWfHtkovK4gRKv0dpavNbko',
    city_id: 2,
    country_id: 1,
    category: 'Museum',
    name: 'Bata Shoe Museum',
    description: 'The 4,500-year history of footwear is explored through hundreds of shoes such as specialty clogs.',
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Bata_Shoe_Museum_%2891330%29.jpg",
    latitude: 43.6672667,
    longitude: -79.4001806
  },
  {
    place_id: 'ChIJva6UXtw0K4gRCN7UN6f0Srs',
    city_id: 2,
    country_id: 1,
    category: 'Tourist Attraction',
    name: 'Graffiti Alley',
    description: 'Graffiti Alley in Toronto is a vibrant and ever-changing urban canvas, showcasing an eclectic mix of street art and murals.',
    image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Grafitti_Alley_%2828290210696%29.jpg",
    latitude: 43.6481275,
    longitude: -79.398885499999992
  },
  {
    place_id: 'ChIJjy6Dvx41K4gR-EnZ_CNE1_E',
    city_id: 2,
    country_id: 1,
    category: 'Tourist Attraction',
    name: 'Little Canada',
    description: 'Multiple miniature replicas of famous places around Canada',
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Little_Niagara.jpg",
    latitude: 43.6567116,
    longitude: -79.38085319999999
  },
  {
    place_id: 'ChIJo1WGAS7L1IkRzbVveMJpu04',
    city_id: 2,
    country_id: 1,
    category: 'Tourist Attraction',
    name: 'Gooderham Building',
    description: "Built in 1892, this redbrick flatiron building features a trompe l'oeil mural & a British-style pub.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Gooderham_Building_49_Wellington_St_E%2C_Toronto%2C_ON_M5E_1C9%2C_Canada.jpg",
    latitude: 43.6483816,
    longitude: -79.374301
  },
  {
    place_id: 'ChIJ29zuWfs0K4gRu3X7rsgi-wM',
    city_id: 2,
    country_id: 1,
    category: 'Park',
    name: 'Trinity Bellwoods Park',
    description: 'Spacious park with volleyball & tennis courts, an outdoor skating rink & indoor recreation centre.',
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Trinity_Bellwoods_Gates.jpg",
    latitude: 43.647282499999996,
    longitude: -79.4137246
  },
  {
    place_id: 'ChIJUVV44iI1K4gRr4vqoZfUrQE',
    city_id: 2,
    country_id: 1,
    category: 'Park',
    name: 'Trillium Park',
    description: "Waterfront park with running & bike trails, plus a fire pit & views of Downtown's skyscrapers.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/View_of_Toronto_skyline_from_Trillium_Park.jpg",
    latitude: 43.6300546,
    longitude: -79.409805699999993

  },
  {
    place_id: 'ChIJh2pq1zLL1IkRvZAjyW-aTH0',
    city_id: 2,
    country_id: 1,
    category: 'Tourist Attraction',
    name: 'Allen Lambert Galleria',
    description: 'This glass & steel atrium & indoor pedestrian walkway is known for its modern, photogenic design.',
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Allen_Lambert_Galleria.jpg",
    latitude: 43.6471109,
    longitude: -79.378137099999989
  },
  {
    place_id: 'ChIJa6DSgik1K4gRLL44Y-xGlEc',
    city_id: 2,
    country_id: 1,
    category: 'Event Venue',
    name: 'Harbourfront',
    description: 'The Harbourfront in Toronto is a vibrant waterfront district offering a blend of cultural attractions, recreational activities, and stunning views of Lake Ontario.',
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Toronto_-_ON_-_Toronto_Harbourfront_-_Amsterdam_Bridge.jpg",
    latitude: 43.6405521,
    longitude: -79.3789371
  },
  {
    place_id: 'ChIJAQAAwCrL1IkR1Egy40ui0d4',
    city_id: 2,
    country_id: 1,
    category: 'Park',
    name: 'Toronto Music Garden',
    description: 'Yo Yo Ma contributed to the design of this scenic garden with summer concerts & seasonal tours.',
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Music_Garden_Toronto.jpg",
    latitude: 43.6369451,
    longitude: -79.3942964
  },
  {
    place_id: 'ChIJIf-jex81K4gRG9Y_vJpWT6c',
    city_id: 2,
    country_id: 1,
    category: 'Museum',
    name: 'Fort York National Historic Site',
    description: "43-acre landmark with original War of 1812 buildings & 1813 battle site, plus a visitors' centre.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Fort_York_Armoury_%28Toronto%29.JPG",
    latitude: 43.6392417,
    longitude: -79.404144800000012
  },
  {
    place_id: 'ChIJ5ejd3SXL1IkRirF5IsDyZe0',
    city_id: 2,
    country_id: 1,
    name: 'Sugar Beach',  
    category: 'Beach',
    description: 'No swimming is allowed at this urban beach park with loungers & umbrellas in an industrial setting.',
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Sugar_Beach_%2851200703107%29.jpg",
    latitude: 43.643837200000007,
    longitude: -79.3682664
  },
  {
    place_id: 'ChIJvUYHUcs0K4gRN8i7jHsUiYs',
    city_id: 2,
    country_id: 1,
    category: 'Shopping Mall',
    name: 'CF Toronto Eaton Centre',
    description: 'Huge array of shops, clothiers & restaurants in a soaring, historic mall with a glass ceiling.',
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Eaton_Centre_2011_Toronto.jpg",
    latitude: 43.6544382,
    longitude: -79.3806994
  }
];

export default torontoPlaces;
