
const Banner = ({children}) => {
    return (
      <div className="bg-[url('/assets/images/image.png')] bg-cover bg-center min-h-[215vh] w-full relative">
        {children}
      </div>
    );
  };
  
  export default Banner;
  