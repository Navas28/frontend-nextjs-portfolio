import "./globals.css";

export const metadata = {
    title: "Portfolio",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/nextdotjs.svg"  type="image/svg+xml" />
            </head>
            <body className="antialiased leading-8 overflow-x-hidden">{children}</body>
        </html>
    );
}
