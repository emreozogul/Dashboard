import Layout from "@/components/Layout";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text">
      <Layout>Home</Layout>
    </div>
  );
}
