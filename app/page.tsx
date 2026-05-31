import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>VibeLens</h1>
      <p>AI ile sosyal izlenim analizi</p>

      <Link href="/upload">
        <button style={{ marginTop: 20 }}>
          Fotoğraf Yükle
        </button>
      </Link>
    </main>
  );
}