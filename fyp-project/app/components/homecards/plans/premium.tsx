import PlanCard from "./temp";

const features = [
    { label: "Calorie Tracking", included: true },
    { label: "Basic Nutrition Info", included: true },
    { label: "Meal Logging", included: true },
    { label: "Local Food Database", included: true },
    { label: "AI Meal Recommendations", included: true },
    { label: "Progress Analytics", included: true },
    { label: "Custom Diet Plans", included: false },
    { label: "Priority Support", included: false },
];

export default function ProPlan() {
    return <PlanCard name="Pro" price="$4.99" period="per month" highlight features={features} />;
}