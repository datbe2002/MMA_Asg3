export const orchids = [
  {
    id: 1,
    orchidsName: "Bulbophyllum",
    orchidsPrice: 1890,
    category: "Epiphytic Orchid",
    description:
      "Bulbophyllum is a genus of mostly epiphytic and lithophytic orchids in the family Orchidaceae. It is the largest genus in the orchid family and one of the largest genera of flowering plants with more than 2,000 species, exceeded in number only by Astragalus.",
    orchidsImage: require("../images/Bulbophyllum.jpeg"),
  },
  {
    id: 2,
    orchidsName: "Phalaenopsis amabilis",
    orchidsPrice: 1299,
    category: "Epiphytic Orchid",
    description:
      "Phalaenopsis amabilis, commonly known as the 'Moth Orchid,' is one of the most popular and widely cultivated epiphytic orchids. It is known for its beautiful, long-lasting flowers and is native to Southeast Asia.",
    orchidsImage: require("../images/AcampePraemorsa.jpeg"),
  },
  {
    id: 3,
    orchidsName: "Cypripedium acaule",
    orchidsPrice: 1450,
    category: "Terrestrial Orchid",
    description:
      "Cypripedium acaule, also known as the 'Pink Lady's Slipper,' is a terrestrial orchid found in North America. It is known for its unique slipper-shaped flowers and is often found in woodland habitats.",
    orchidsImage: require("../images/AeridesMaculosa.jpeg"),
  },
  {
    id: 4,
    orchidsName: "Dendrobium nobile",
    orchidsPrice: 1799,
    category: "Epiphytic Orchid",
    description:
      "Dendrobium nobile is a well-known epiphytic orchid species that produces clusters of colorful and fragrant flowers. It is native to the Himalayan region and parts of China.",
    orchidsImage: require("../images/DendrobiumNobile.jpeg"),
  },
  {
    id: 5,
    orchidsName: "Vanda",
    orchidsPrice: 1449,
    category: "Epiphytic Orchid",
    description:
      "Vanda, abbreviated in the horticultural trade as V., is a genus in the orchid family, Orchidaceae. There are about 87 species, and the genus is commonly cultivated for the marketplace.",
    orchidsImage: require("../images/vanda.jpeg"),
  },
  {
    id: 6,
    orchidsName: "Pleione",
    orchidsPrice: 1449,
    category: "Terrestrial Orchid",
    description:
      "Pleione is a small genus of predominantly terrestrial but sometimes epiphytic or lithophytic, miniature orchids.",
    orchidsImage: require("../images/Pleione.jpeg"),
  },
  {
    id: 7,
    orchidsName: "Pleione",
    orchidsPrice: 1449,
    category: "Terrestrial Orchid",
    description:
      "Calanthe discolor is a species of orchid. It is native to Japan, and China, Korea. Its vernacular name in Japanese, ebine, means `shrimp-root` in reference to the shape of the plant's pseudobulbs and root system.",
    orchidsImage: require("../images/Calanthe.jpeg"),
  },
];

export const categoryData = [
  {
    name: "Epiphytic",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ6qjmKiBQz4bVYGuLlPTc4C2a56w_-quzAdSCvSJBOIKSN594DXJAXmMUHce_HKg98-ojbmjyMMEaGB7A",
  },
  {
    name: "Terrestrial",
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSUBfAP9rSK_itEHksKlXmBwDjm3vbTmaVLi1hX8G_I8_o9SSgRKQ-UayTiRdjtQZbeZxDbzs9OrGekx_i3Swpk3Sm6_G_X5Wgw8c-AtKa-",
  },
];

export const epiphyticOrchids = orchids.filter(
  (orchid) => orchid.category === "Epiphytic Orchid"
);

export const terrestrialOrchids = orchids.filter(
  (orchid) => orchid.category === "Terrestrial Orchid"
);
