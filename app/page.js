import Image from "next/image";
import Link from "next/image";
import NavBar from "@/components/NavBar";

const Banner = ({ purpose }) => {
  return (
    <div className="flex flex-wrap justify-center align-center text-xl">
      <Image src={""} width={500} height={300} alt="banner" />
      <div className="p-5">
        <p>{purpose}</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="p-[19px] flex justify-end bg-yellow-50 md:py-5">

      </div>
    </main>
  );
}
