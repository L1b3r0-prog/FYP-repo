import { CheckCircleIcon, ChartBarIcon, LightBulbIcon, TrophyIcon } from "@heroicons/react/24/outline";

export default function Second() {
    return (
        <div>
            <h2 className="flex text-2xl font-bold justify-center mt-15">Why Choose NutriTrack?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 max-w-5xl mx-auto mb-25">
                { /* First icon and text */ }
                <div className="transistion-all duration-300 hover:-translate-y-5">
                    <div className="grid justify-center mt-10">
                        <div className="ml-15 mb-7">
                        <CheckCircleIcon className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="font-bold mb-3">Personalized Plans</h3>
                        <h5 className="text-gray-500 text-xs text-left">Get customized meal plans <br />
                        tailored to your dietary needs, <br /> 
                        preferences, and health goals.</h5>
                    </div>
                </div>

                { /* Second icon and text */ }
                <div className="transistion-all duration-300 hover:-translate-y-5">
                    <div className="grid justify-center mt-10">
                        <div className="ml-15 mb-7">
                        <ChartBarIcon className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="font-bold mb-3">Smart Tracking</h3>
                        <h5 className="text-gray-500 text-xs text-left">Effotlessly log meals and track <br />
                        your nutritional intake with our <br />
                        intuitive mobile interface.</h5>
                    </div>  
                </div>

                { /* Third icon and text */ }
                <div className="transistion-all duration-300 hover:-translate-y-5">
                <div className="grid justify-center mt-10">
                    <div className="ml-15 mb-7">
                        <LightBulbIcon className="w-8 h-8 text-green-600"/>
                        </div>
                        <h3 className="font-bold mb-3">AI Recommendations</h3>
                        <h5 className="text-gray-500 text-xs text-left">Advanced algorithms analyze your <br />
                        habits and provide intelligent food <br />
                        suggestions.</h5>
                    </div>
                </div>

                { /* Fourth icon and text */ }
                <div className="transistion-all duration-300 hover:-translate-y-5">
                    <div className="grid justify-center mt-10">
                        <div className="ml-15 mb-7">
                            <TrophyIcon className="w-8 h-8 text-green-600"/>
                        </div>
                            <h3 className="font-bold mb-3">Progress insights</h3>
                            <h5 className="text-gray-500 text-xs text-left">Visualize your journey with <br />
                            comprehensive analytics and <br />
                            achievement tracking.</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}