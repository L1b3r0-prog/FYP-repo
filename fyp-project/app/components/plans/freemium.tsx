import PlanCard from "./temp";

const features = [
    { label: "Basic meal logging up to 3 meals/day", included: true },
    { label: "Manual calorie and nutrition tracking", included: true },
    { label: "Daily calorie and nutrition summary", included: true },
    { label: "Food database search", included: true },
    { label: "Basic recipe search", included: true },
    { label: "Barcode scanning", included: true },
    { label: "Water intake tracking", included: true },
    { label: "Weight goal setting and tracking", included: true },
    { label: "Progress reports", included: true },
    { label: "Limited meal recommendations (2days/week)", included: true },
    { label: "General healthy eating tips", included: true },
    { label: "Edit profile, change password", included: true },
    { label: "Log out and delete account", included: true },
    { label: "AI photo meal recognition", included: false },
    { label: "Unlimited meal recommendations", included: false },
    { label: "Meal plan with grocery lists", included: false },
    { label: "Advanced food filtering", incldued: false },
    { label: "Macro adjustments to the gram", included: false },
    { label: "Certified nutrionist tips", included: false },
    { label: "Save favourite meals", included: false },
    { label: "No ads", inlcuded: false }
];

export default function FreePlan() {
    return <PlanCard name="Free" price="$0" period="forever" features={features} />;
}