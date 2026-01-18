interface TeamMemberProps {
  initials: string;
  name: string;
  role: string;
  email: string;
  description: string;
  bgColor: string;
}

export default function TeamMember({ initials, name, role, email, description, bgColor }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Avatar */}
      <div className={`w-20 h-20 ${bgColor} rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold`}>
        {initials}
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-gray-900 text-center mb-1">
        {name}
      </h3>

      {/* Role Name */}
      <p className="text-green-500 font-semibold text-center text-xs tracking-wide mb-4">
        {role}
      </p>

      {/* Role Description */}
      <p className="text-gray-600 text-center text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Contact Info */}
      <div className="text-center">
        <p className="text-gray-900 italic text-sm mb-1" style={{ fontFamily: 'Georgia, serif' }}>
          Contact Via:
        </p>
        <a 
          href={`mailto:${email}`}
          className="text-gray-700 hover:text-green-500 transition-colors text-sm"
        >
          {email}
        </a>
      </div>
    </div>
  );
}