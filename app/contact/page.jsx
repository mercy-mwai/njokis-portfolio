import Banner from '@/components/Banner'

const Contact = () => {
  return (
    <Banner classname="bg-black/10 text-white px-6 py-16 md:px-20 mt-10">
     
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        <div className='w-full md:w-2/3 mt-20 md:mt-40 text-center md:text-left px-2 sm:px-6'>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
           <span className="text-purple-400">Get in Touch</span> 
           </h1>
           <p className='text-white text-2xl'>Feel free to reach out to me for collaboration, job opportunities, or just to say hello!</p>
           
        </div>
      </div>
    </Banner>
  )
}

export default Contact