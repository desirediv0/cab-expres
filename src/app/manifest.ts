import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CabExpress - Premium Travel & Cabs",
    short_name: "CabExpress",
    description: "Book Cabs, Taxi Packages & Holiday Tours Across India",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#FFC107",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
