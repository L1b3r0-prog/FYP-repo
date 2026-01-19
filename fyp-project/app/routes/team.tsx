import type { Route } from "./+types/team";
import TeamHeader from "../components/teamcards/teamheader";
import TeamMember from "../components/teamcards/teammember";
import { teamMembers } from "../components/teamcards/teamData";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Team - NutriTrack" },
    { name: "description", content: "Meet our team" },
  ];
}

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TeamHeader />

      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                initials={member.initials}
                name={member.name}
                role={member.role}
                email={member.email}
                description={member.description}
                bgColor={member.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}