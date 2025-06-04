import googleEarth from "@/styles/google-earth.json";

export default [
  {
    id: "default",
    name: "Default",
    style: "",
  },
  {
    id: "openmarinecharts-world",
    name: "OpenMarineCharts World",
    style:
      "https://tileserver-i6tr.onrender.com/styles/openmarinecharts-world/style.json",
  },
  {
    id: "google-earth",
    name: "Google Earth",
    style: googleEarth,
  },
];
