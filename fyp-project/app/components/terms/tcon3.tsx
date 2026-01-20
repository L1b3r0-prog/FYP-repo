import { Link } from "react-router";

export default function Tcon3() {
    return (
        <div className="max-w-6xl mx-auto px-4">
            { /* international data transfers */ }
            <div id="11" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">11. Limitation of Liability</h1>
                        <h1>TO THE MAXIMUM EXTENT PERMITTED BY LAW, NUTRITRACK SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, <br />
                        SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR <br />
                        GOODWILL, ARISING FROM:</h1>
                        <h1>•Your use of inability to use the Service</h1>
                        <h1>•Any unauthorized access to or alteration to your data</h1>
                        <h1>•Any health or medical issues arising from use of the Service</h1>
                        <h1>•Any other matter relating to the Service</h1>
                        <h1>OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE <br />
                        AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM.</h1>
                        <h1>Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.</h1>
                    </div>
                </div>
            </div>


            { /* How we use your information */ }
            <div id="12" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">12. Disclaimer of Warranties</h1>
                        <h1>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR <br />
                        IMPLIED, INCLUDING BUT NOT LIMITE TO:</h1>
                        <h1>•Warranties of merchantability, fitness for a particular purpose, or non-infringement</h1>
                        <h1>•That the Service will be uninterrupted, secure, or error-free</h1>
                        <h1>•That any defects or errors will be corrected</h1>
                        <h1>•The accuracy, reliability, or completeness of any content or recommendations</h1>
                        <h1>You use the Service at your own risk. We do not warrant that the Service will meet your requirements or that results obtained will be <br />
                        accurate or reliable.</h1>
                    </div>
                </div>
            </div>


            { /* Information sharing and disclosure*/ }
            <div id="13" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">13. Indemnification</h1>
                        <h1>You agree to indemnify, defend, and hold harmless NutriTrack, its officers, directors, employees, and agents from any claims, liabilities, <br />
                        damages, losses, and expenses (including legal fees) arising from:</h1>
                        <h1>•Your use of the Service</h1>
                        <h1>•Your violation of these Terms</h1>
                        <h1>•Your violation of any third-party rights</h1>
                        <h1>•Any User Content you submit</h1>
                        <h1>This indemnification obligation will survive termination of these Terms and your use of the Service.</h1>
                    </div>
                </div>
            </div>

            { /* Information sharing and disclosure*/ }
            <div id="14" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">14. Governing Law and Dispute Resolution</h1>
                        <h1>These Terms shall be governed by and construed in accordance with the laws of your jurisdiction, without regard to conflict of law <br />
                        principles.</h1>
                        <h1>Any disputes arising from these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of <br />
                        your organization. The arbitration shall take place in your country, and judgement on the award may be entered in any court having <br />
                        jurisdiction.</h1>
                        <h1>You agree to waive any right to a jury trial or to participate in a class action lawsuit.</h1>
                    </div>
                </div>
            </div>

            { /* Information sharing and disclosure*/ }
            <div id="15" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">15. General Provisions</h1>
                        <h1>Severability: If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and <br />
                        effect.</h1>
                        <h1>Entire Agreement: These Terms, together with our Privacy Policy, constitute the entire agreement between you and NutriTrack <br />
                        regarding the Service.</h1>
                        <h1>Waiver: Our failure to enforce any provision of these Terms does not constitute a waiver of that provision.</h1>
                        <h1>Assignment: You may not assign or transfer these Terms without our prior written consent. We may assign these Terms at any given time <br />
                        without notice.</h1>
                        <h1>No Agency: Nothing in these Terms creates a partnership, joint venture, or agency relationship between you and NutriTrack.</h1>
                    </div>
                </div>
            </div>

            { /* Your privacy matters */ }
            <div className="flex bg-green-500 rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-white font-bold">Agreement to Terms</h1>
                        <h1 className="text-gray-50">By using NutriTrack, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</h1>
                        
                    </div>
                    <Link to="/privacy" className="self-center rounded-xl border-2 border-white py-4 w-[250px] text-white text-center ml-16 mt-5 hover:bg-gray-300 hover:text-black transistion">
                            View Privacy Policy
                    </Link>
                </div>
            </div>
        </div>
    );
}