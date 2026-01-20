export default function Ttoc() {
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
                        1. Acceptance of Terms
                    </button>
                    <button onClick={() => handleClick('2')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        2. User Accounts
                    </button>
                    <button onClick={() => handleClick('3')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        3. Use of the Service
                    </button>
                    <button onClick={() => handleClick('4')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        4. Content and Intellectual Property
                    </button>
                    <button onClick={() => handleClick('5')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        5. Health and Medical Disclaimer
                    </button>
                    <button onClick={() => handleClick('6')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        6. Subscription and Payment
                    </button>
                    <button onClick={() => handleClick('7')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        7. Free and Premium Versions
                    </button>
                    <button onClick={() => handleClick('8')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        8. Cancellation and Termination
                    </button>
                    <button onClick={() => handleClick('9')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        9. Privacy and Data Protection
                    </button>
                    <button onClick={() => handleClick('10')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        10. Third-Party Services and Links
                    </button>
                    <button onClick={() => handleClick('11')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        11. Limitation of Liability
                    </button>
                    <button onClick={() => handleClick('12')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        12. Disclaimer of Warranties
                    </button>
                    <button onClick={() => handleClick('13')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        13. Indemnification
                    </button>
                    <button onClick={() => handleClick('14')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        14. Governing Law and Dispute Resolution
                    </button>
                    <button onClick={() => handleClick('15')} className="text-left text-teal-600 hover:text-teal-700 hover:underline transition-colors text-sm">
                        15. General Provisions
                    </button>
                </div>
            </div>
        </div>
    );
}