import type { Route } from "./+types/team";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Team - NutriTrack" },
    { name: "description", content: "Meet our team" },
  ];
}

interface TeamMember {
  initials: string;
  name: string;
  role: string;
  email: string;
  description: string;
  bgColor: string;
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      initials: 'LN',
      name: 'Let Yan Dong Nicholas',
      role: 'TEAM LEADER / BACKEND DEVELOPER',
      email: 'nydlet001@mymail.sim.edu.sg',
      description: 'Oversees project direction, coordinates team efforts, and develops robust server infrastructure. Manages backend architecture and API development.',
      bgColor: 'bg-emerald-500'
    },
    {
      initials: 'HJ',
      name: 'Hoo Jia Sheng',
      role: 'FRONTEND DEVELOPER',
      email: 'jshoo001@mymail.sim.edu.sg',
      description: 'Develops mobile app UI components and implements user interface features with React and modern web technologies.',
      bgColor: 'bg-teal-500'
    },
    {
      initials: 'LB',
      name: 'Lee Pui Kwan Benjamin',
      role: 'FRONTEND DEVELOPER',
      email: 'pkblee001@mymail.sim.edu.sg',
      description: 'Designs and implements website framework, creates wireframes, and ensures optimal responsive design for web applications.',
      bgColor: 'bg-cyan-500'
    },
    {
      initials: 'LJ',
      name: 'Lee Yeong Jeong',
      role: 'BACKEND DEVELOPER',
      email: 'lee11@mymail.sim.edu.sg',
      description: 'Builds API endpoints, manages database operations, and implements server-side logic for the nutrition tracking system.',
      bgColor: 'bg-blue-500'
    },
    {
      initials: 'KT',
      name: 'Kennedy Tan Jun Long',
      role: 'DOCUMENTATION SPECIALIST',
      email: 'kjtan010@mymail.sim.edu.sg',
      description: 'Creates user guides, technical documentation, and ensures clear communication of project requirements and features.',
      bgColor: 'bg-indigo-500'
    },
    {
      initials: 'HJ',
      name: 'Yap Hao Jiet',
      role: 'DOCUMENTATION SPECIALIST',
      email: 'hjyap001@mymail.sim.edu.sg',
      description: 'Develops testing documentation, QA plans, and maintains comprehensive project documentation standards.',
      bgColor: 'bg-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h1>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Dedicated developers and documentation specialists working together to build NutriTrack,
            a comprehensive nutrition tracking and diet recommendation platform.
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Avatar */}
                <div className={`w-20 h-20 ${member.bgColor} rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold`}>
                  {member.initials}
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-gray-900 text-center mb-1">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-green-500 font-semibold text-center text-xs tracking-wide mb-4">
                  {member.role}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-center text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Contact Info */}
                <div className="text-center">
                  <p className="text-gray-900 italic text-sm mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                    Contact Via:
                  </p>
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-gray-700 hover:text-green-500 transition-colors text-sm"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}