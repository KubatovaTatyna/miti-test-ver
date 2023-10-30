import Image from "next/image";
import logo from "@public/mitiLogo.png"


const Home = () => {
  return (
    <main className="main-styles">
        <Image 
        src={logo}
        width={270}
        height={270}
        alt="Logo"
        />
    </main>
  )
}

export default Home