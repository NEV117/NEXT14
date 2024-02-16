import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";

export const metada: Metadata ={
  title:"Future World",
  description: "Welcome to the future word store blha blha blah",
  keywords: ["ecomerce", "future", "world", "tecnologies"],
}

export default function Home() {
  return (
    <main>
      <MainProducts/>
    </main>
  );
}
