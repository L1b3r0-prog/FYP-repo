import type { Route } from "./+types/home";

import First from "../components/homecards/card1"; 
import Second from "../components/homecards/card2";
import Third from "../components/homecards/card3";
import Fourth from "../components/homecards/card4";
import Fifth from "../components/homecards/card5";

export function meta( {}: Route.MetaArgs) {
  return [
    { title: "NutriTrack" },
    { name: "FYP", content: "Welcome to NutriTrack" },
  ]
}

export default function Home() {
  return (
    <div>

      { /* This is your personal nutrition guide section */ }
      <First />
      

      { /* This is all the icons and the text below */ }
      <Second />

      { /* This is the subscription comparison */ }
      <Third />

      { /* This is the video section */ }
      <Fourth />

      { /* Thsi is the testimonial */ }
      <Fifth />
    </div>
  )
}