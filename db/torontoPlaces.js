const torontoPlaces = [
  {
    place_id: 'ChIJs6Elz500K4gRT1jWAsHIfGE',
    city_id: 2,
    country_id: 1,
    category: 'Museum',
    name: 'Casa Loma',
    description: 'Grand 1914 castle featuring regular tours & gardens that are open seasonally.'
  },
  {
    place_id: 'ChIJmzrzi9Y0K4gRgXUc3sTY7RU',
    city_id: 2,
    country_id: 1,
    category: 'Tourist Attraction',
    name: 'CN Tower',
    description: 'Landmark, over 553-metre tower featuring a glass floor & a revolving eatery with panoramic views.'
  },
  {
    place_id: 'ChIJE-Xa87o0K4gRkvXFHuE0hMk',
    city_id: 2,
    country_id: 1,
    category: 'Museum',
    name: 'Royal Ontario Museum',
    description: 'Sprawling natural history & world cultures galleries, plus dinosaur fossil skeletons.'
  },
  {
    place_id: 'ChIJvRlT7cU0K4gRr0bg7VV3J9o',
    city_id: 2,
    country_id: 1,
    category: 'Museum',
    name: 'Art Gallery of Ontario',
    description: 'Large gallery with huge Canadian collection, European masterworks & a major Frank Gehry renovation.'
  },
  {
    place_id: 'ChIJ_wU50co0K4gRingYcKzmofs',
    city_id: 2,
    country_id: 1,
    category: 'Event Venue',
    name: 'Yonge-Dundas Square',
    description: 'Bustling outdoor public space & live-event venue hosting concerts, movies & community events.'
  },
  {
    place_id: 'ChIJsRjTsS3L1IkRC177bW2To_4',
    city_id: 2,
    country_id: 1,
    category: 'Museum',
    name: 'Hockey Hall of Fame',
    description: 'A vast collection of hockey memorabilia, including famous gear, interactive games & the Stanley Cup.'
  },
  {
    place_id: 'ChIJWwS21dU0K4gRPSGMKRkar40',
    city_id: 2,
    country_id: 1,
    category: 'Aquarium',
    name: "Ripley's Aquarium of Canada",
    description: 'Expansive, modern aquarium with many species & habitats on display, plus events & classes.'
  },
  {
    place_id: 'ChIJWyfdtDHL1IkR_bal8ay1Cso',
    city_id: 2,
    country_id: 1,
    category: 'Market',
    name: 'St. Lawrence Market',
    description: 'Spacious market with 100+ vendors, bakers, butchers & artisans, with produce & antiques on weekends.'
  },
  {
    place_id: 'ChIJD8Zxvb40K4gR1u3k0060sko',
    city_id: 2,
    country_id: 1,
    category: 'Library',
    name: 'Thomas Fisher Rare Book Library',
    description: 'The Thomas Fisher Rare Book Library in Toronto houses a remarkable collection of rare books, manuscripts, and special collections.'
  },
  {
    place_id: 'ChIJqy_n4UvL1IkRJ91CoOzZV-E',
    city_id: 2,
    country_id: 1,
    category: 'Park',
    name: 'Allan Gardens',
    description: 'Collection of plants from around the world housed in a cast-iron & glass building dating from 1910.'
  },
  {
    place_id: 'ChIJbfQt-y3L1IkRL_HvgfSdmYk',
    city_id: 2,
    country_id: 1,
    category: 'Park',
    name: 'Berczy Park Dog Fountain',
    description: 'The Berczy Park Dog Fountain in Toronto is a whimsical and charming public art installation featuring lifelike bronze sculptures of dogs.'
  },
  {
    place_id: 'ChIJTWfHtkovK4gRKv0dpavNbko',
    city_id: 2,
    country_id: 1,
    category: 'Museum',
    name: 'Bata Shoe Museum',
    description: 'The 4,500-year history of footwear is explored through hundreds of shoes such as specialty clogs.'
  },
  {
    place_id: 'ChIJva6UXtw0K4gRCN7UN6f0Srs',
    city_id: 2,
    country_id: 1,
    category: 'Tourist Attraction',
    name: 'Graffiti Alley',
    description: 'Graffiti Alley in Toronto is a vibrant and ever-changing urban canvas, showcasing an eclectic mix of street art and murals.'
  },
  {
    place_id: 'ChIJjy6Dvx41K4gR-EnZ_CNE1_E',
    city_id: 2,
    country_id: 1,
    category: 'Tourist Attraction',
    name: 'Little Canada',
    description: 'Multiple miniature replicas of famous places around Canada'
  },
  {
    place_id: 'ChIJo1WGAS7L1IkRzbVveMJpu04',
    city_id: 2,
    country_id: 1,
    category: 'Tourist Attraction',
    name: 'Gooderham Building',
    description: "Built in 1892, this redbrick flatiron building features a trompe l'oeil mural & a British-style pub."
  },
  {
    place_id: 'ChIJ29zuWfs0K4gRu3X7rsgi-wM',
    city_id: 2,
    country_id: 1,
    category: 'Park',
    name: 'Trinity Bellwoods Park',
    description: 'Spacious park with volleyball & tennis courts, an outdoor skating rink & indoor recreation centre.'
  },
  {
    place_id: 'ChIJUVV44iI1K4gRr4vqoZfUrQE',
    city_id: 2,
    country_id: 1,
    category: 'Park',
    name: 'Trillium Park',
    description: "Waterfront park with running & bike trails, plus a fire pit & views of Downtown's skyscrapers."
  },
  {
    place_id: 'ChIJh2pq1zLL1IkRvZAjyW-aTH0',
    city_id: 2,
    country_id: 1,
    category: 'Tourist Attraction',
    name: 'Allen Lambert Galleria',
    description: 'This glass & steel atrium & indoor pedestrian walkway is known for its modern, photogenic design.'
  },
  {
    place_id: 'ChIJa6DSgik1K4gRLL44Y-xGlEc',
    city_id: 2,
    country_id: 1,
    category: 'Event Venue',
    name: 'Harbourfront',
    description: 'The Harbourfront in Toronto is a vibrant waterfront district offering a blend of cultural attractions, recreational activities, and stunning views of Lake Ontario.'
  },
  {
    place_id: 'ChIJAQAAwCrL1IkR1Egy40ui0d4',
    city_id: 2,
    country_id: 1,
    category: 'Park',
    name: 'Toronto Music Garden',
    description: 'Yo Yo Ma contributed to the design of this scenic garden with summer concerts & seasonal tours.'
  },
  {
    place_id: 'ChIJIf-jex81K4gRG9Y_vJpWT6c',
    city_id: 2,
    country_id: 1,
    category: 'Museum',
    name: 'Fort York National Historic Site',
    description: "43-acre landmark with original War of 1812 buildings & 1813 battle site, plus a visitors' centre."
  },
  {
    place_id: 'ChIJ5ejd3SXL1IkRirF5IsDyZe0',
    city_id: 2,
    country_id: 1,
    name: 'Sugar Beach',  
    category: 'Beach',
    description: 'No swimming is allowed at this urban beach park with loungers & umbrellas in an industrial setting.'
  },
  {
    place_id: 'ChIJvUYHUcs0K4gRN8i7jHsUiYs',
    city_id: 2,
    country_id: 1,
    category: 'Shopping Mall',
    name: 'CF Toronto Eaton Centre',
    description: 'Huge array of shops, clothiers & restaurants in a soaring, historic mall with a glass ceiling.'
  }
];

export default torontoPlaces;