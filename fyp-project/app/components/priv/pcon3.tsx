import { Link } from "react-router";

export default function Pcon3() {
    return (
        <div className="max-w-6xl mx-auto px-4">
            { /* international data transfers */ }
            <div id="9" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">9. International Data Transfers</h1>
                        <h1>Your information may be transferred to and processed in countries other than your country of residence. These countries may have <br />
                        different data protection laws. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy <br />
                        Policy.</h1>
                    </div>
                </div>
            </div>


            { /* How we use your information */ }
            <div id="10" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">10. Data Retention</h1>
                        <h1>We retain your personal information for as long as necessary to:</h1>
                        <h1>•Provide our services and fulfill the purposes outlined in this policy</h1>
                        <h1>•Comply with legal obligations and resolve disputes</h1>
                        <h1>•Enforce our agreements and protect our rights</h1>
                        <h1>When you delete your account, we will delete or anonymize your personal information within 90 days, except where we are required to <br />
                        retain it for legal purposes.</h1>
                    </div>
                </div>
            </div>


            { /* Information sharing and disclosure*/ }
            <div id="11" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">11. Changes to This Privacy Policy</h1>
                        <h1>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. <br />
                        We will notify you of any material changes by:</h1>
                        <h1>•Posting the updated policy on our website with a new "Last Updated" date</h1>
                        <h1>•Sending you an email notification (if you have an account)</h1>
                        <h1>•Displaying a prominent notice in our app</h1>
                        <h1>Your continued use of services after changes are made constitutes acceptance of the updated policy.</h1>
                    </div>
                </div>
            </div>


            { /* Your privacy matters */ }
            <div className="flex bg-green-500 rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-white font-bold">Your Privacy Matters</h1>
                        <h1 className="text-gray-50">We are comitted to protecting your personal information and being transparent about how we use it.</h1>
                        
                    </div>
                    <Link to="/tos" className="self-center rounded-xl border-2 border-white py-4 w-[250px] text-white text-center ml-57 mt-5 hover:bg-gray-300 hover:text-black transistion">
                            View Terms of Service
                    </Link>
                </div>
            </div>
        </div>
    );
}