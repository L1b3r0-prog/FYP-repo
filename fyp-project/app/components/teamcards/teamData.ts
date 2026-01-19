export interface TeamMemberData {
  initials: string;
  name: string;
  role: string;
  email: string;
  description: string;
  bgColor: string;
}

export const teamMembers: TeamMemberData[] = [
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