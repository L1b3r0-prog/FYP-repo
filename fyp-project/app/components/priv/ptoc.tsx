export default function Ptoc() {
    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4">
            <div className="bg-green-50 border-l-4 border-green-500 mb-5 p-6 w-[1100px] rounded-lg shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    <button onClick={() => handleClick('1')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        <div></div>
                        1. Information We Collect
                    </button>
                    <button onClick={() => handleClick('2')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        2. How We Use Your Information
                    </button>
                    <button onClick={() => handleClick('3')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        3. Information Sharing and Disclosure
                    </button>
                    <button onClick={() => handleClick('4')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        4. Data Security
                    </button>
                    <button onClick={() => handleClick('5')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        5. Your Rights and Choices
                    </button>
                    <button onClick={() => handleClick('6')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        6. Cookies and Tracking Technologies
                    </button>
                    <button onClick={() => handleClick('7')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        7. Third-Party Services
                    </button>
                    <button onClick={() => handleClick('8')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        8. Children's Privacy
                    </button>
                    <button onClick={() => handleClick('9')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        9. International Data Transfers
                    </button>
                    <button onClick={() => handleClick('10')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        10. Data Retention
                    </button>
                    <button onClick={() => handleClick('11')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        11. Changes to This Privacy Policy
                    </button>
                </div>
            </div>
        </div>
    );
}