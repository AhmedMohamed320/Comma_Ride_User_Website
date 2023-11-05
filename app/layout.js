import "./globals.css";

export const metadata = {
    title: "comma ride",
    description: "comma ride",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
