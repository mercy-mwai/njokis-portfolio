import Nav from "@/components/Navbar";
import "../styles/globals.css";
import {Space_Grotesk} from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Njoki's Portfolio",
  description: "Welcome to my portfolio!",
  icons: {
    icon: "/assets/icons/favicon.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`${spaceGrotesk.variable}`}>
  
      <Nav />
        <main className="flex-grow">
        
        {children}
        
        </main>
        
      </body>
    </html>
  );
}
