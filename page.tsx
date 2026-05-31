"use client";

import { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <main style={{ padding: 40 }}>
      <h1>Fotoğraf Yükle</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      {file && <p>Seçilen: {file.name}</p>}

      <button style={{ marginTop: 20 }}>
        Analiz Et
      </button>
    </main>
  );
}