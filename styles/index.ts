import googleEarth from "@/styles/google-earth.json";
import openseamap from "@/styles/openseamap.json";

export default [
  {
    id: "openmarinecharts-world",
    name: "OpenMarineCharts World",
    style:
      "https://tileserver-i6tr.onrender.com/styles/openmarinecharts-world/style.json",
  },
  {
    id: "openseamap",
    name: "OpenSeaMap",
    style: openseamap
  },
  {
    id: "google-earth",
    name: "Google Earth",
    style: googleEarth,
  }
];
