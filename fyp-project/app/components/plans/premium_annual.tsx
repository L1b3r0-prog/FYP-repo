import PlanCard from "./temp";

const features = [
    { label: "Everything in premium", included: true },
    { label: "Best value plan", included: true },
    { label: "Priority customer support", included: true },
    { label: "Early access to new features", included: true },
    { label: "Cancel anytime", included: true }
];

export default function PremiumPlan() {
    return <PlanCard name="Premium Annual" price="$59.99" period="per year" badge="Save 28%" features={features} />;
}