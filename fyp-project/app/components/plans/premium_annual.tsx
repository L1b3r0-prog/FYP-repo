import PlanCard from "./temp";

const features = [
    { label: "Everything in premium", included: true },
    { label: "Early access to new features", included: true },
    { label: "Cancel anytime", included: true }
];

export default function PremiumPlan() {
    return <PlanCard name="Premium Annual" price="S$99.00" period="per year" badge="Save 28%" features={features} />;
}