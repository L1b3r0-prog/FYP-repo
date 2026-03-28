import PlanCard from "./temp";

const features = [
    { label: "Calorie Tracking", included: true },
    { label: "Basic Nutrition Info", included: true },
    { label: "Meal Logging", included: true },
    { label: "Local Food Database", included: true },
    { label: "AI Meal Recommendations", included: true },
    { label: "Progress Analytics", included: true },
    { label: "Custom Diet Plans", included: true },
    { label: "Priority Support", included: true },
];

export default function PremiumPlan() {
    return <PlanCard name="Premium" price="$9.99" period="per month" features={features} />;
}