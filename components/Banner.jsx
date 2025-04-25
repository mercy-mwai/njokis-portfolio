import react from 'React'

const Banner = ({children}) => {
    return (
      <div className="bg-[url('/assets/images/banner.png')] bg-cover bg-center bg-no-repeat bg-fixed min-h-[215vh] w-full relative">
        {children}
      </div>
    );
  };
  
  export default Banner;
  