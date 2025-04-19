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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`${spaceGrotesk.variable}` +"flex flex-col min-h-screen"}>
        <main className="flex-grow">
          <div className="h-screen overflow-y-scroll">
         <div className="fixed inset-0 bg-[url('/assets/images/banner.png')] bg-cover bg-center -z-10"></div>
          </div>
       
          <Nav />
        {children}
        
        </main>
      </body>
    </html>
  );
}
