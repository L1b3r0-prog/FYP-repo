import type { Route } from "./+types/home";

import First from "../components/homecards/card1"; 
import Second from "../components/homecards/card2";
import Third from "../components/homecards/card3";
import Fourth from "../components/homecards/card4";
import Fifth from "../components/homecards/card5";
import Sixth from "../components/homecards/card6";
import Seventh from "../components/homecards/card7";
import Eighth from "../components/homecards/card8";

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


      <Third />


      <Fourth />

      { /* This is the subscription comparison */ }
      <Fifth />

      { /* This is the video section */ }
      <Sixth />

      { /* Thsi is the testimonial */ }
      <Seventh />


      <Eighth />
    </div>
  )
}