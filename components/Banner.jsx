
const Banner = ({children}) => {
    return (
      <div className="bg-[url('/assets/images/banner.png')] bg-cover bg-center min-h-[250vh] w-full relative">
        {children}
      </div>
    );
  };
  
  export default Banner;
  