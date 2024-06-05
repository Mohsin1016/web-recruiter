import { Inter } from "next/font/google";
import First from "./reg/First";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div>
    <First/>
  </div>;
}
