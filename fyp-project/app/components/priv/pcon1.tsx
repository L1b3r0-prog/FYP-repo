export default function Pcon1() {
    return(
        <div className="max-w-6xl mx-auto px-4">
            { /* Information we collect */ }
            <div id="1" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">1. Information We Collect</h1>
                        <h1>We collect information you provide directly to us when you create an account, use our services, or communicate with us. This includes:</h1>
                        <h1>•Personal Information: Name, email address, phone number, and profile information</h1>
                        <h1>•Health Data: Dietary preferences, nutrition goals, meal logs, and activity data</h1>
                        <h1>•Usage Information: How you interact with our app, features used, and preferences</h1>
                        <h1>•Device Information: IP address, browser type, operating system, and device identifiers</h1>
                    </div>
                </div>
            </div>


            { /* How we use your information */ }
            <div id="2" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">2. How we use your information</h1>
                        <h1>We use the information we collect to:</h1>
                        <h1>•Provide, maintain and improve our nutrition tracking services</h1>
                        <h1>•Personalize your experience and provide customized meal recommendations</h1>
                        <h1>•Send you updates, newsletters, and promotional materials (with your consent)</h1>
                        <h1>•Analyze usage patterns to enhance our app functionality</h1>
                        <h1>•Ensure the security and integrity of our platform</h1>
                        <h1>•Comply with legal obligations and enforce our terms of service</h1>

                    </div>
                </div>
            </div>


            { /* Information sharing and disclosure*/ }
            <div id="3" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">3. Information Sharing and Disclosure</h1>
                        <h1>We do not sell your personal information. We may share your information only in the following circumstances:</h1>
                        <h1>•With Your Consent: When you explicitly authorize us to share information</h1>
                        <h1>•Service Providers: Third-party vendors who help us operate our services (e.g., cloud hosting, analytics)</h1>
                        <h1>•Legal Requirements: When required by law, court order, or government request</h1>
                        <h1>•Business Transfers: In connectino with a merger, acqusition, or sale of assests</h1>
                        <h1>•Protection of Rights: To protect the rights, property, or safety of NutriTrack, our users, or others</h1>
                    </div>
                </div>
            </div>


            { /* Data security */ }
            <div id="4" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">4. Data Security</h1>
                        <h1>We implement industry-standard security measures to protect your information:</h1>
                        <h1>•Encryption of data in transit and at rest using SSL/TLS protocol</h1>
                        <h1>•Regular security audits and vulnerability assessments</h1>
                        <h1>•Access controls and authentication mechanisms</h1>
                        <h1>•Secure data centers with physical and digital safeguards</h1>
                        <h1>While we strive to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute <br />security.</h1>
                    </div>
                </div>
            </div>

        </div>
        
    );
}