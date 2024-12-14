import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <p>Ini adalah konten utama halaman.</p>
      </main>
    </div>
  );
}
