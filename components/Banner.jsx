

const Banner = ({children}) => {
    return (
      <div className="bg-[url('/assets/images/CI.png')] bg-cover bg-center bg-no-repeat bg-fixed min-h-[185vh] w-full relative">
        {children}
      </div>
    );
  };
  
  export default Banner;
  