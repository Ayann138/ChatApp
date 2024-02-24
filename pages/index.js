import Image from "next/image";
import { Inter } from "next/font/google";
import LoginForm from "./Login";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div >
      <LoginForm />
    </div>
  );
}



