import type { Route } from "./+types/homepage";
import { Welcome } from "../welcome/welcome";
import { Link } from "react-router"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Homepage() {
  return (
    <div>
      <h1>This is the homepage</h1>
      <Link to="/members">Go to members link</Link>
    </div>
  );
}
