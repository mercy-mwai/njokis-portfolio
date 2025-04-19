"use client"
import Banner from "@/components/Banner";
import { useRouter } from "next/navigation"

const Home = () => {

  const router = useRouter();
  return (
    <div >
     <Banner />
    </div>
  )
}

export default Home
