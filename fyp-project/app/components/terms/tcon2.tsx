import { Link } from "react-router";

export default function Tcon2() {
    return (
        <div className="max-w-6xl mx-auto px-4">
            { /* subscription and payment */ }
            <div id="6" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">6. Subscription and Payment</h1>
                        <h1>Certain features of the Service require a paid subscription. By subscribing, you agree to:</h1>
                        <h1>•Pay all applicable fees for your chosen subscription plan</h1>                        
                        <h1>•Provide accurate and current payment information</h1>
                        <h1>•Authorize automatic recurring billing unless you cancel</h1>
                        <h1>•Pay any applicable taxes</h1>
                        <h1>Subscription fees are billed in advance and are non-refundable except as required by law. You may cancel your subscription at any <br />
                        time, but cancellation will take effect at the end of the current billing period.</h1>
                        <h1>We reserve the right to change subscription fees with 30 days' notice. Price changes will not affect your current billing period.</h1>
                    </div>
                </div>
            </div>


            { /* free & premium */ }
            <div id="7" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">7. Free and Premium Versions</h1>
                        <h1>NutriTrack offers both a free version and a premium subscription version of the Service:</h1>
                        <h1>Free Version: The Free Version provides access to basic nutrition tracking features at no cost. Certain advanced features and <br />
                        functionality are restricted to premium subscribers only.</h1>
                        <h1>Premium Version: The premium subscription unlocks additional features including personalized meal plans, advanced analytics, AI- <br />
                        powered recommendations, and priority support.</h1>
                        <h1>We reserve the right to modify, add, or remove features from either version at any time. Free users may upgrade to premium at any <br />
                        time through the app.</h1>
                    </div>
                </div>
            </div>


            { /* cancellation and termination */ }
            <div id="8" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">8. Cancellation and Termination</h1>
                        <h1>You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of your current <br />
                        billing period, and you will retain access until that time.</h1>
                        <h1>We reserve the right to suspend or terminate your account and access to the Service at any time, with or without notice, for:</h1>
                        <h1>•Violation of these Terms</h1>
                        <h1>•Fradulent or illegal activity</h1>
                        <h1>•Non-payment of fees</h1>
                        <h1>•Any conduct that we deem harmful to the Service or other users</h1>
                        <h1>Upon termination, your right to use the Service will immediately cease, and we may delete your account and User Content.</h1>
                    </div>
                </div>
            </div>


            { /* privacy and data protection */ }
            <div id="9" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">9. Privacy and Data Protection</h1>
                        <h1>Your use of the Service is subject to our Privacy Policy, which is incorporated into these Terms by reference. By using the Service, you <br />
                        consent to the collection, use, and disclosure of your information as described in the Privacy Policy.</h1>
                        <h1>We implement resonable security measures to protect your data, but we cannot guarantee abosolute security. You acknowledge that <br />
                        you provide information at your own risk.</h1>
                    </div>
                </div>
            </div>


            { /* third-party */ }
            <div id="10" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">10. Third-Party Services and Links</h1>
                        <h1>The Service may integrate with or contain links to third-party services, website, or applications. These third-parties are not under out <br />
                        control, and we are not responsible for:</h1>
                        <h1>•The content, accuracy, or functionality of third-party services</h1>
                        <h1>•The privacy practices or terms of service of third parties</h1>
                        <h1>•Any damages or losses caused by your use of third-party services</h1>
                        <h1>Your interactions with third-party services are governed by their respective terms and policies. We encourage you to review them before <br />
                        use.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}