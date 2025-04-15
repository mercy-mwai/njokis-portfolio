import "../styles/global.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Njoki's Portfolio",
  description: "Welcome to my portfolio!",
};

const RootLayout = ({ children }) => {
    return (
      <html lang="en">
      <body>
        <main>
        <Nav />
          {children}</main>
      </body>
    </html>
    );
  };
  
  export default RootLayout;