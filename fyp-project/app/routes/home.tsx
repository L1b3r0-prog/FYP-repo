import type { Route } from "./+types/home";

import First from "../components/homecards/card1"; 
import Second from "../components/homecards/card2";

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
      
    </div>
  )
}