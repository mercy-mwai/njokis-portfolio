import Nav from "@/components/Nav";
import "../styles/global.css";


const RootLayout = ({ children }) => {
    return (
      <html lang="en">
        <body>
          <div>
            <div  />
          </div>
          <main >
            <Nav />
            {children}</main>
        </body>
      </html>
    );
  };
  
  export default RootLayout;