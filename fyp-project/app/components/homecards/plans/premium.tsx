import PlanCard from "./temp";

const features = [
    { label: "Everything in Freemium", included: true },
    { label: "AI photo meal recognition", included: true },
    { label: "Unlimited personalized meal recommendations", included: true },
    { label: "Meal plan creation with grocery lists", included: true },
    { label: "Advanced food filtering", included: true },
    { label: "Macro adjustments to the gram", included: true },
    { label: "Certified nutrionist tips", included: true },
    { label: "Save favourite meals", included: true },
    { label: "Dietary reports with visualizations", included: true },
    { label: "No ads", included: true },
    { label: "Priority customer support", included: true },
    { label: "Cancel anytime", included: true }
];

export default function ProPlan() {
    return <PlanCard name="Pro" price="$6.99" period="per month" highlight features={features} />;
}