export type GalleryImage = {
  src: string;
  alt: string;
  credit: string;
  kind: "shop" | "food" | "counter" | "hero";
};

export const heroImage: GalleryImage = {
  src: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=2400&q=82",
  alt: "A generously filled Italian sandwich on a wooden board, cut to show cured meat, cheese and leaves",
  credit: "Unsplash — sandwich still, used as hero for this pitch mockup",
  kind: "hero",
};

export const ogSandwich =
  "https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=1200&q=80";

export const gallery: GalleryImage[] = [
  {
    src: "https://fastly.4sqi.net/img/general/1200x900/59152_yZoFZ4YEr58U3nfmbcTAUOtF_kgDhZnKtk54ZokRBSU.jpg",
    alt: "Guest photo taken at H.T. Harris, November 2023",
    credit: "Foursquare — russell d., 22 Nov 2023",
    kind: "shop",
  },
  {
    src: "https://irs2.4sqi.net/img/general/1200x800/23468466_gppNJkuCbQmg-Epwe7mDj39g7fouvIPtyPAYIPPolWM.jpg",
    alt: "H.T. Harris counter and shop interior from a Foursquare venue photo",
    credit: "Foursquare venue photograph",
    kind: "counter",
  },
  {
    src: "https://fastly.4sqi.net/img/general/1200x900/474983869_Se2HlyuBjeu0Hi0FP9j6FdvCIH8JXHSJQEvc6SbbsNM.jpg",
    alt: "Guest photo taken at H.T. Harris, November 2019",
    credit: "Foursquare — Chaiyot Y., 15 Nov 2019",
    kind: "shop",
  },
  {
    src: "https://fastly.4sqi.net/img/general/1200x900/15774440_8bKhsd_azsKhLKvNqM_BinwaI_Oq4j33_Uq5CPOHkmk.jpg",
    alt: "Guest photo taken at H.T. Harris, June 2019",
    credit: "Foursquare — Aniko S., 13 Jun 2019",
    kind: "shop",
  },
  {
    src: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=1600&q=80",
    alt: "Hanging cured ham in a warm European delicatessen",
    credit: "Unsplash — cured meats, atmospheric supplement",
    kind: "food",
  },
  {
    src: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=1600&q=80",
    alt: "Aged cheese wheels stacked on a wooden counter",
    credit: "Unsplash — cheese wheels",
    kind: "food",
  },
  {
    src: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=1600&q=80",
    alt: "Espresso in a white cup with thick crema",
    credit: "Unsplash — espresso crema",
    kind: "food",
  },
  {
    src: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1600&q=80",
    alt: "Green olive oil poured into a terracotta dish",
    credit: "Unsplash — olive oil pour",
    kind: "food",
  },
  {
    src: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=1600&q=80",
    alt: "A tray of baked lasagna, golden at the edges",
    credit: "Unsplash — lasagna (Friday special mentioned in tips)",
    kind: "food",
  },
  {
    src: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=1600&q=80",
    alt: "Cannoli dusted with icing sugar",
    credit: "Unsplash — cannoli, mentioned in Google reviews",
    kind: "food",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80",
    alt: "Hands at an espresso machine, steam in the air",
    credit: "Unsplash — espresso service",
    kind: "counter",
  },
];

export const storyImages = {
  meats: gallery[4],
  cheese: gallery[5],
  oil: gallery[7],
  shop: gallery[1],
};
