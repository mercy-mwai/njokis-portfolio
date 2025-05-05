import Nav from "@/components/Navbar";
import "../styles/globals.css";


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
      <body>
      <Nav />
        <main className="flex-grow">
        {children}
        </main>
        
      </body>
    </html>
  );
}
