import type { Route } from "./+types/home";
import { NavLink } from "react-router";

export function meta( {}: Route.MetaArgs) {
  return [
    { title: "NutriTrack" },
    { name: "FYP", content: "Welcome to NutriTrack" },
  ]
}

export default function Home() {
  return (
    <div>
      <div className="bg-green-50 py-20">
        <h1 className="flex text-5xl font-bold mb-6 justify-center">Your Personal Nutrition</h1>
        <h1 className="flex text-5xl font-bold text-green mb-6 justify-center">Guide</h1>
        <p className="flex text-gray-500 justify-center">AI-powered meal planning and nutrition tracking designed to help you achieve your health</p>
        <p className="flex text-gray-500 justify-center">goals with personalized diet recommendations</p>
        <div className="flex justify-center mt-6">
          <NavLink to="/signup" className="bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex flex-col items-center justify-center h-10 w-40">
            <span className="text-lg leading-none">Start Free</span>
            <span className="text-lg leading-none">Trial</span>
          </NavLink> 
        </div>
      
      </div>
      

      <div>
        <p className="flex text-2xl font-bold justify-center mt-15">Why Choose NutriTrack?</p>
      </div>
    </div>
  )
}