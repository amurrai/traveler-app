const torontoPlaces = [
  {
    placeId: 'ChIJs6Elz500K4gRT1jWAsHIfGE',
    city: 'Toronto',
    country: 'Canada',
    category: 'Museum',
    name: 'Casa Loma',
    description: 'Grand 1914 castle featuring regular tours & gardens that are open seasonally.'
  },
  {
    placeId: 'ChIJmzrzi9Y0K4gRgXUc3sTY7RU',
    city: 'Toronto',
    country: 'Canada',
    category: 'Tourist Attraction',
    name: 'CN Tower',
    description: 'Landmark, over 553-metre tower featuring a glass floor & a revolving eatery with panoramic views.'
  },
  {
    placeId: 'ChIJE-Xa87o0K4gRkvXFHuE0hMk',
    city: 'Toronto',
    country: 'Canada',
    category: 'Museum',
    name: 'Royal Ontario Museum',
    description: 'Sprawling natural history & world cultures galleries, plus dinosaur fossil skeletons.'
  },
  {
    placeId: 'ChIJvRlT7cU0K4gRr0bg7VV3J9o',
    city: 'Toronto',
    country: 'Canada',
    category: 'Museum',
    name: 'Art Gallery of Ontario',
    description: 'Large gallery with huge Canadian collection, European masterworks & a major Frank Gehry renovation.'
  },
  {
    placeId: 'ChIJ_wU50co0K4gRingYcKzmofs',
    city: 'Toronto',
    country: 'Canada',
    category: 'Event Venue',
    name: 'Yonge-Dundas Square',
    description: 'Bustling outdoor public space & live-event venue hosting concerts, movies & community events.'
  },
  {
    placeId: 'ChIJsRjTsS3L1IkRC177bW2To_4',
    city: 'Toronto',
    country: 'Canada',
    category: 'Museum',
    name: 'Hockey Hall of Fame',
    description: 'A vast collection of hockey memorabilia, including famous gear, interactive games & the Stanley Cup.'
  },
  {
    placeId: 'ChIJWwS21dU0K4gRPSGMKRkar40',
    city: 'Toronto',
    country: 'Canada',
    category: 'Aquarium',
    name: "Ripley's Aquarium of Canada",
    description: 'Expansive, modern aquarium with many species & habitats on display, plus events & classes.'
  },
  {
    placeId: 'ChIJWyfdtDHL1IkR_bal8ay1Cso',
    city: 'Toronto',
    country: 'Canada',
    category: 'Market',
    name: 'St. Lawrence Market',
    description: 'Spacious market with 100+ vendors, bakers, butchers & artisans, with produce & antiques on weekends.'
  },
  {
    placeId: 'ChIJD8Zxvb40K4gR1u3k0060sko',
    city: 'Toronto',
    country: 'Canada',
    category: 'Library',
    name: 'Thomas Fisher Rare Book Library',
    description: 'The Thomas Fisher Rare Book Library in Toronto houses a remarkable collection of rare books, manuscripts, and special collections.'
  },
  {
    placeId: 'ChIJqy_n4UvL1IkRJ91CoOzZV-E',
    city: 'Toronto',
    country: 'Canada',
    category: 'Park',
    name: 'Allan Gardens',
    description: 'Collection of plants from around the world housed in a cast-iron & glass building dating from 1910.'
  },
  {
    placeId: 'ChIJbfQt-y3L1IkRL_HvgfSdmYk',
    city: 'Toronto',
    country: 'Canada',
    category: 'Park'
    name: 'Berczy Park Dog Fountain',
    description: 'The Berczy Park Dog Fountain in Toronto is a whimsical and charming public art installation featuring lifelike bronze sculptures of dogs.'
  },
  {
    placeId: 'ChIJTWfHtkovK4gRKv0dpavNbko',
    city: 'Toronto',
    country: 'Canada',
    category: 'Museum',
    name: 'Bata Shoe Museum',
    description: 'The 4,500-year history of footwear is explored through hundreds of shoes such as specialty clogs.'
  },
  {
    placeId: 'ChIJva6UXtw0K4gRCN7UN6f0Srs',
    city: 'Toronto',
    country: 'Canada',
    category: 'Tourist Attraction',
    name: 'Graffiti Alley',
    description: 'Graffiti Alley in Toronto is a vibrant and ever-changing urban canvas, showcasing an eclectic mix of street art and murals.'
  },
  {
    placeId: 'ChIJjy6Dvx41K4gR-EnZ_CNE1_E',
    city: 'Toronto',
    country: 'Canada',
    category: 'Tourist Attraction',
    name: 'Little Canada',
    description: 'Multiple miniature replicas of famous places around Canada'
  },
  {
    placeId: 'ChIJo1WGAS7L1IkRzbVveMJpu04',
    city: 'Toronto',
    country: 'Canada',
    category: 'Tourist Attraction',
    name: 'Gooderham Building',
    description: "Built in 1892, this redbrick flatiron building features a trompe l'oeil mural & a British-style pub."
  },
  {
    placeId: 'ChIJ29zuWfs0K4gRu3X7rsgi-wM',
    city: 'Toronto',
    country: 'Canada',
    category: 'Park',
    name: 'Trinity Bellwoods Park',
    description: 'Spacious park with volleyball & tennis courts, an outdoor skating rink & indoor recreation centre.'
  },
  {
    placeId: 'ChIJUVV44iI1K4gRr4vqoZfUrQE',
    city: 'Toronto',
    country: 'Canada',
    category: 'Park',
    name: 'Trillium Park',
    description: "Waterfront park with running & bike trails, plus a fire pit & views of Downtown's skyscrapers."
  },
  {
    placeId: 'ChIJh2pq1zLL1IkRvZAjyW-aTH0',
    city: 'Toronto',
    country: 'Canada',
    category: 'Tourist Attraction',
    name: 'Allen Lambert Galleria',
    description: 'This glass & steel atrium & indoor pedestrian walkway is known for its modern, photogenic design.'
  },
  {
    placeId: 'ChIJa6DSgik1K4gRLL44Y-xGlEc',
    city: 'Toronto',
    country: 'Canada',
    category: 'Event Venue',
    name: 'Harbourfront',
    description: 'The Harbourfront in Toronto is a vibrant waterfront district offering a blend of cultural attractions, recreational activities, and stunning views of Lake Ontario.'
  },
  {
    placeId: 'ChIJAQAAwCrL1IkR1Egy40ui0d4',
    city: 'Toronto',
    country: 'Canada',
    category: 'Park',
    name: 'Toronto Music Garden',
    description: 'Yo Yo Ma contributed to the design of this scenic garden with summer concerts & seasonal tours.'
  },
  {
    placeId: 'ChIJIf-jex81K4gRG9Y_vJpWT6c',
    city: 'Toronto',
    country: 'Canada',
    category: 'Museum',
    name: 'Fort York National Historic Site',
    description: "43-acre landmark with original War of 1812 buildings & 1813 battle site, plus a visitors' centre."
  },
  {
    placeId: 'ChIJ5ejd3SXL1IkRirF5IsDyZe0',
    city: 'Toronto',
    country: 'Canada',
    name: 'Sugar Beach',  
    category: 'Beach',
    description: 'No swimming is allowed at this urban beach park with loungers & umbrellas in an industrial setting.'
  },
  {
    placeId: 'ChIJvUYHUcs0K4gRN8i7jHsUiYs',
    city: 'Toronto',
    country: 'Canada',
    category: 'Shopping Mall',
    name: 'CF Toronto Eaton Centre',
    description: 'Huge array of shops, clothiers & restaurants in a soaring, historic mall with a glass ceiling.'
  }
];