import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
                route("team", "routes/team.tsx"),
                route("privacy", "routes/privacy.tsx"),
                route("tos", "routes/tos.tsx")
] satisfies RouteConfig;
