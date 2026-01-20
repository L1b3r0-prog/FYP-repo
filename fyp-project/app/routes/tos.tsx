import Termshead from "../components/terms/termshead";
import Ttoc from "../components/terms/ttoc";
import Tcon1 from "../components/terms/tcon1";
import Tcon2 from "../components/terms/tcon2"
import Tcon3 from "../components/terms/tcon3";

export default function Tos() {
    return(
        <div className="bg-gray-200 py-20">
            <Termshead />

            <Ttoc />
            <Tcon1 />
            <Tcon2 />
            <Tcon3 />
        </div> 
    );
}