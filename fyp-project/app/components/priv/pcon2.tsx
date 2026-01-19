export default function Pcon2() {
    return (
        <div className="max-w-6xl mx-auto px-4">
            { /* Your rights and choices */ }
            <div id="5" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">5. Your Rights and Choices</h1>
                        <h1>You have the following rights regarding your personal information:</h1>
                        <h1>•Access: Request a copy of the personal data we hold about you</h1>
                        <h1>•Correction: Update or correct inaccurate information</h1>
                        <h1>•Deletion: Request deletion of your account and associated data</h1>
                        <h1>•Data portability: Receive your data in a structured, machine-readable format</h1>
                        <h1>•Opt-out: Unsubscribe from marketing communications at any time</h1>
                        <h1>•Restriction: Request limitation of processing of your personal data</h1>
                    </div>
                </div>
            </div>


            { /* cookies and tracking tech */ }
            <div id="6" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">6. Cookies and Tracking Technologies</h1>
                        <h1>We use cookies and similar tracking technologies to:</h1>
                        <h1>•Remember your preferences and settings</h1>
                        <h1>•Analyze site traffic and user behavior</h1>
                        <h1>•Provide personalized content and advertisements</h1>
                        <h1>•Improve our services and user experience</h1>
                        <h1>You can control cookies through your browser settings. Note that disabling cookies may affect features of our service.</h1>
                    </div>
                </div>
            </div>


            { /* third party services */ }
            <div id="7" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">7. Third-Party services</h1>
                        <h1>Our app may contain links to third-party websites or integrate with third-party services (e.g., fitness trackers, payment processors). <br />
                        These third parties have their own privacy policies, and we are not responsible for their practices. We encourage you to review their <br />
                        privacy policies before providing any information.</h1>
                    </div>
                </div>
            </div>


            { /* childrens privacy */ }
            <div id="8" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">8. Children's Privacy</h1>
                        <h1>NutriTrack is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. <br />
                        If we discover that we have collected information from a child under 13, we will delete it immediately. If you believe we have collected <br />
                        information from a child under 13, please contact us at privacy@nutritrack.com</h1>
                    </div>
                </div>
            </div>

        </div>
    );
}