import villa from "../assets/images/villa.jpg"
import residentialvilla from "../assets/images/residentialvilla.png";
import villa2 from "../assets/images/villa2.jpg";
import mainvilla from "../assets/images/mainvilla.jpg";
import rmain from "../assets/images/rmain.jpg";
import r1 from "../assets/images/r1.jpg";
import r2 from "../assets/images/r2.jpg";
import r3 from "../assets/images/r3.jpg";
import o1 from "../assets/images/o1.jpg";
import o2 from "../assets/images/o2.jpg";
import omain from "../assets/images/omain.jpg";

export const projectsData = {
  villas: {
    title: "Luxury Villas",
    description: "Exclusive villa interior design projects",
    titleImage: mainvilla,
    projects: [
      { id: 1, image: villa, name: "Goa Villa" },
      { id: 2, image: residentialvilla, name: "Alibaug Retreat" },
      { id: 3, image: villa2, name: "Lonavala Estate" },
    ],
  },

  residential: {
    title: "Residential Interiors",
    description: "Modern and functional home interiors",
    titleImage: rmain,
    projects: [
      { id: 1, image: r1, name: "Mumbai Apartment" },
      { id: 2, image: r2, name: "Pune Penthouse" },
      {id: 3, image: r3, name : "Flat Bandra"},
    ],
  },

  commercial: {
    title: "Commercial Spaces",
    description: "Offices, studios and retail interiors",
    titleImage: omain,
    projects: [
      { id: 1, image: o1, name: "Corporate Office" },
      { id: 2, image: o2, name: "Luxury Office" },
    ],
  },
};
