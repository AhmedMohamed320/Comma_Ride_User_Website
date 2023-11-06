import MainNav from "@/components/main_nav/MainNav";
import "../globals.css";
import localFont from "next/font/local";
import Nav from "@/components/main_nav/navMobile/Nav";
import OurBranch from "@/components/ourBranch/OurBranch";

const myFont = localFont({
    src: "../../fonts/font.otf",
    display: "swap",
});

export const metadata = {
    title: "comma ride",
    description: "comma ride",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={myFont.className}>
            <body>
                <div className="sm:block hidden ">
                    <MainNav />
                </div>
                <OurBranch />
                <div className="mainPage">{children}</div>
                <div className="sm:hidden block">
                    <Nav />
                </div>
            </body>
        </html>
    );
}
