import type { Route } from "./+types/home";
import { NavLink, Link } from "react-router";
import { CheckCircleIcon, ChartBarIcon, LightBulbIcon, TrophyIcon } from "@heroicons/react/24/outline";

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
      

      { /* This is all the icons and the text below */ }
      <h2 className="flex text-2xl font-bold justify-center mt-15">Why Choose NutriTrack?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 max-w-5xl mx-auto mb-25">
        { /* First icon and text */ }
        <div>
          <div className="grid justify-center mt-10">
            <div className="ml-15 mb-7">
              <CheckCircleIcon className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold mb-3">Personalized Plans</h3>
            <h5 className="text-gray-500 text-xs">Get customized meal plans</h5>
            <h5 className="text-gray-500 text-xs">tailored to your dietary needs,</h5>
            <h5 className="text-gray-500 text-xs">preferences, and health goals.</h5>
          </div>
          
        </div>

        { /* Second icon and text */ }
        <div>
          <div className="grid justify-center mt-10">
            <div className="ml-15 mb-7">
              <ChartBarIcon className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold mb-3">Smart Tracking</h3>
            <h5 className="text-gray-500 text-xs">Effotlessly log meals and track</h5>
            <h5 className="text-gray-500 text-xs">your nutritional intake with our</h5>
            <h5 className="text-gray-500 text-xs">intuitive mobile interface.</h5>
          </div>
        </div>

        { /* Third icon and text */ }
        <div>
          <div className="grid justify-center mt-10">
            <div className="ml-15 mb-7">
              <LightBulbIcon className="w-8 h-8 text-green-600"/>
            </div>
            <h3 className="font-bold mb-3">AI Recommendations</h3>
            <h5 className="text-gray-500 text-xs">Advanced algorithms analyze your</h5>
            <h5 className="text-gray-500 text-xs">habits and provide intelligent food</h5>
            <h5 className="text-gray-500 text-xs">suggestions.</h5>
            </div>
        </div>

        { /* Fourth icon and text */ }
        <div>
          <div className="grid justify-center mt-10">
            <div className="ml-15 mb-7">
              <TrophyIcon className="w-8 h-8 text-green-600"/>
            </div>
            <h3 className="font-bold mb-3">Progress insights</h3>
            <h5 className="text-gray-500 text-xs">Visualize your journey with</h5>
            <h5 className="text-gray-500 text-xs">comprehensive analytics and</h5>
            <h5 className="text-gray-500 text-xs">achievement tracking.</h5>
          </div>
        </div>
      </div>



      { /* This is choose your plan section */ }
      <div className="bg-gray-200 py-20">
        <h2 className="flex text-2xl font-bold mb-15 justify-center">Choose Your Plan</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto mt-10 gap-40">
          { /* Free plan */ }
          <div className="bg-white rounded-xl shadow-lg p-8 text-center h-[650px] flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-xl mb-8">Free</h3>
              <h3 className="text-4xl font-bold text-green-500">$0 <span className="text-xs text-green-500">/month</span></h3>
            </div>

            <div className="h-[300px]">
              <ul className="text-sm text-gray-500 space-x-40 space-y-8 mb-10 text-left inline-block">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Basic meal tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Nutrition database access
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Daily calorie tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Community support
                </li>
              </ul>
            </div>

            <div>
              <Link to="/signup" 
              className="inline-block border border-green-500 text-green-500 px-6 py-2 rounded-lg hover:bg-green-500 hover:text-white transition">
                  Sign Up Free
              </Link>
            </div>
          </div>

          { /* Premium plan */ }
          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border-2 border-green-500 h-[650px] flex flex-col justify-between">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 ">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-8">Premium</h3>
                <h3 className="text-4xl font-bold text-green-500">$9.99 <span className="text-xs text-green-500">/month</span></h3>
              </div>

              <div className="h-[300px]">
                <ul className="text-sm text-gray-500 space-x-40 space-y-8 mb-10 text-left inline-block">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-500" />
                    Everything in Free
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-500" />
                    Personalized meal plans
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-500" />
                    AI-powered recommendations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-500" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-500" />
                    Recipe suggestions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-500" />
                    Priority support
                  </li>
                </ul>
              </div>

              <div>
                <Link to="/signup" 
                className="inline-block border border-green-500 text-green-500 px-6 py-2 rounded-lg hover:bg-green-500 hover:text-white transition">
                    Start Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      
      </div>


    </div>
  )
}