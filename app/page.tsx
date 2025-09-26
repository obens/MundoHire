import Header from "@/components/Header";
import JobList from "@/components/JobList";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Header />
      <JobList />
    </main>
  );
}
