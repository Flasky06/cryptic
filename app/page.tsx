import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="pt-20">main content</main>
    </div>
  );
}
