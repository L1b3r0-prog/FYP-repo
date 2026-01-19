import Pp from "../components/priv/pp";
import Ptoc from "../components/priv/ptoc";
import Pcon1 from "../components/priv/pcon1";
import Pcon2 from "../components/priv/pcon2";
import Pcon3 from "../components/priv/pcon3";

export default function Privacy() {
    return (
        <div className="bg-gray-200 py-20">
            { /* Terms of serivces */ }
            <Pp />

            { /* Table of contents */ }
            <Ptoc />

            { /* Content */ }
            <Pcon1 />
            <Pcon2 />
            <Pcon3 />
        </div>
    );
}