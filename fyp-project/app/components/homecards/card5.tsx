import FreePlan from "../plans/freemium";
import ProPlan from "../plans/premium";
import PremiumPlan from "../plans/premium_annual";

export default function Fifth() {
    return (
        <div className="bg-green-50 py-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
                <p className="text-gray-500 text-lg">Start free, upgrade when you're ready</p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-5xl mx-auto">
                <FreePlan />
                <ProPlan />
                <PremiumPlan />
            </div>
        </div>
    );
}