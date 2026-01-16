import { type RouteConfig, index, route} from "@react-router/dev/routes";

export default [index("routes/homepage.tsx"), 
                route("members", "routes/members.tsx")] satisfies RouteConfig;

