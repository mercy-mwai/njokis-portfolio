"use client"
import Nav from '@/components/Nav'

const Home = () => {
  return (
    <section className="bg-[url('/assets/images/banner.png')] bg-cover bg-center min-h-screen  ">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-white p-10"> </div>
      <div className="relative z-10 text-white p-10">
        <h1 className="text-4xl font-bold">Hi, I'm Njoki — Welcome to my Portfolio</h1>
        <p className="mt-4 text-lg">Software Developer | Lifelong Learner</p>
      </div>
    </section>
    
  )
}

export default Home