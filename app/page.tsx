import { auth } from "@/auth";
import Hero from "@/templates/Hero";
import Navbar from "@/templates/Navbar";

export default async function Home() {
  const session = await auth();
  

  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <Navbar session={session} />
    </main>
  );
}
