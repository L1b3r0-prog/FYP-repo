import type { Route } from "./+types/home";

export function meta( {}: Route.MetaArgs) {
  return [
    { title: "Team - NutriTrack" },
    { name: "description", content: "Meet our team" },
  ]
}

export default function Team() {
  return (
    <div className="p-8">
        <h1 className="text-5xl font-bold mb-6">This is the team page</h1>

      <h1 className="text-3xl font-bold mb-6">Scroll Test</h1>
      
      {Array.from({ length: 100 }).map((_, index) => (
        <div key={index} className="py-2 border-b">
          Line {index + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      ))}
    </div>
  )
}