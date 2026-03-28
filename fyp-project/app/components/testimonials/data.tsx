export type Testimonial = {
    name: string;
    role: string;
    text: string;
    avatar: string;
};

export const testimonials: Testimonial[] = [
    {
        name: "Sarah L.",
        role: "Lost 12kg in 3 months",
        text: "NutriTrack completely changed how I approach food. The AI recommendations are spot on and the local food database actually has the foods I eat daily!",
        avatar: "SL",
    },
    {
        name: "Marcus T.",
        role: "Fitness Enthusiast",
        text: "Finally an app that understands local cuisine. The barcode scanning is lightning fast and the macro breakdowns are incredibly detailed.",
        avatar: "MT",
    },
    {
        name: "Priya K.",
        role: "Busy Professional",
        text: "I love how quick meal logging is. The photo recognition saves me so much time. Worth every cent of the Premium plan.",
        avatar: "PK",
    },
    {
        name: "James W.",
        role: "Marathon Runner",
        text: "The progress analytics helped me dial in my nutrition for race day. The certified nutritionist tips are genuinely useful, not just generic advice.",
        avatar: "JW",
    },
    {
        name: "Aisha M.",
        role: "Lost 8kg in 6 weeks",
        text: "The meal plans with grocery lists make my week so much easier. I never have to think about what to buy — NutriTrack does it for me.",
        avatar: "AM",
    },
];