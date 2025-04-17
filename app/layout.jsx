import Nav from "@/components/Navbar";
import "../styles/globals.css";
import {Space_Grotesk} from "next/font/google";
import Footer from "@/components/Footer";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Njoki's Portfolio",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`${spaceGrotesk.variable}`}>
        <main>
          <Nav />
        {children}
        <Footer />
        </main>
      </body>
    </html>
  );
}
