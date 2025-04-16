import Nav from "@/components/Navbar";
import "../styles/globals.css";

export const metadata = {
  title: "Njoki's Portfolio",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Nav />
        {children}
        </main>
      </body>
    </html>
  );
}
