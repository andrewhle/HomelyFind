import Image from "next/image";
import Link from "next/image";
import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";
import SuggestionProperty from "@/components/SuggestionProperty";


export default function Home() {
  return (
    <main>
      <NavBar />
      <Banner />
        <SuggestionProperty />
    </main>
  );
}
