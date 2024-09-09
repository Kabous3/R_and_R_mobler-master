import Hero from "./components/Hero"
import "./globals.css"
import Login from "./components/login";
import Payment from "./components/payment";

export const metadata = {
    title: "Hem sida",
};

export default function Page() {
    return (<>
            < Payment/>
            </>
    )
}