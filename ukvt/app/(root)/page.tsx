import Image from "next/image";
import Hello from "../components/hello";

export default function Home() {
  console.log("Hello, this is Taku");
  return (
    <>
      <h1 className="text-3xl">Welcome to Next.js</h1>
      <Hello />
    </>
  );
}
