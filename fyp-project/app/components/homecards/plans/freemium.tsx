import PlanCard from "./temp";

const features = [
    { label: "Basic meal logging up to 3 meals/day", included: true },
    { label: "Basic Nutrition Info", included: true },
    { label: "Meal Logging", included: true },
    { label: "Local Food Database", included: false },
    { label: "AI Meal Recommendations", included: false },
    { label: "Progress Analytics", included: false },
    { label: "Custom Diet Plans", included: false },
    { label: "Priority Support", included: false },
];

export default function FreePlan() {
    return <PlanCard name="Free" price="$0" period="forever" features={features} />;
}