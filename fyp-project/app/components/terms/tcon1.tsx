import { Link } from "react-router";

export default function Tcon1() {
    return (
        <div className="max-w-6xl mx-auto px-4">
            { /* acceptance of terms */ }
            <div id="1" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">1. Acceptance of Terms</h1>
                        <h1>By accessing or using NutriTrack's nutrition tracking and diet recommendation platform (the "Service"), you agree to be bound by these <br />
                        Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service.</h1>
                        <h1>These Terms constitute a legally binding agreement between you and NutriTrack. We reserve the right to modify these Terms at any <br />
                        time, and your continued use of the Service after such modification constitutes your acceptance of the updated Terms.</h1>
                    </div>
                </div>
            </div>


            { /* user accounts */ }
            <div id="2" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">2. User Accounts</h1>
                        <h1>To use certain features of the Service, you must create an account. You agree to:</h1>
                        <h1>•Provide accurate, current, and complete information during registration</h1>
                        <h1>•Maintain and promptly update your account information</h1>
                        <h1>•Keep your password secure and confidential</h1>
                        <h1>•Notify us immediately of any unauthorized access to your content</h1>
                        <h1>•Accept responsibility for all activities that occur under your account</h1>
                        <h1>You may not create an accoutn using false information or impersonate another person. We reserve the right to suspend or terminate <br />
                        accounts that violate these Terms.</h1>
                    </div>
                </div>
            </div>


            { /* use of the service */ }
            <div id="3" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">3. Use of the Service</h1>
                        <h1>NutriTrack grants you a limited, non-exclusive, non-transferable license to access and use the Service for personal, non-commercial <br />
                        purposes. You agree not to:</h1>
                        <h1>•Use the Service for any illegal or unauthorized purpose</h1>
                        <h1>•Violate any laws, regulations, or third-party rights</h1>
                        <h1>•Interfere with or disrupt the Service or servers</h1>
                        <h1>•Attempt to gain unauthorized access to any part of the Service</h1>
                        <h1>•Use automated systems (bots, scrapers) to access the Service</h1>
                        <h1>•Reverse engineer, decompile, or disassemble any part of the Service</h1>
                        <h1>•Remove or modify an proprietary notices or labels</h1>
                        <h1>•Upload or transmit viruses, malware, or other harmful code</h1>
                    </div>
                </div>
            </div>


            { /* content and intellectual property */ }
            <div id="4" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">4. Content and Intellectual Property</h1>
                        <h1>All content, features, functionality of the Service, including but not limited to text, graphics, logos, images, software, and data <br />
                        compilations, are the exclusive property of NutriTrack and are protected by copyright, trademark, and other intellectual property laws.</h1>
                        <h1>You retain ownership of any content you submit to the Service ("User Content"). By submitting User Content, you grant NutriTrack a <br />
                        worldwide, royalty-free, perpetual license to use, reproduce, modify, and display such content in connection with the Service.</h1>
                        <h1>You represent and warrant that you own or have the necessary rights to submit User Content and that it does not violate any third-party <br />
                        rights or applicable laws.</h1>
                    </div>
                </div>
            </div>


            { /* health and medical disclaimer */ }
            <div id="5" className="flex bg-white rounded-xl p-8 w-[1100px] mb-5 shadow-m hover:shadow-xl transistion-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col">
                    <div className="text-gray-500 space-y-2">
                        <h1 className="text-3xl text-black font-bold">5. Health and Medical Disclaimer</h1>
                        <h1>NutriTrack provides nutrition tracking and diet recommendation services ofr informational and educational purposes only. The Service is <br />
                        not intended to:</h1>
                        <h1>•Provide medical advice, diagnosis, or treatment</h1>
                        <h1>•Replace consultation with qualified healthcare professionals</h1>
                        <h1>•Be used as a substitute for professinal medical care</h1>
                        <h1>Always consult with a physician or qualified healthcare provider before making any dietary changes, starting a new diet, or if you have <br />
                        any medical conditions. NutriTrack is not responsible for any health-related descisions you make based on the Service.</h1>
                        <h1>Individual results may vary. The recommendations provided by the Service are general in nature and may not be suited for everyone.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}