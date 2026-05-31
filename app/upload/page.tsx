"use client";

import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>("");

  const analyze = async () => {
    if (!file) return;

    setLoading(true);
    setResult("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      setResult(
        `${data.result}\n\nScore: ${data.score}/100\nVibe: ${data.vibe}`
      );
    } catch (err) {
      console.error(err);
      setResult("Hata oluştu, tekrar dene.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">

        <h1 className="text-2xl font-bold mb-2">VibeLens AI</h1>
        <p className="text-gray-300 mb-6">
          Fotoğrafını yükle, analiz edelim
        </p>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full mb-4 text-sm"
        />

        <button
          onClick={analyze}
          className="w-full bg-purple-600 hover:bg-purple-700 transition p-3 rounded-xl font-semibold"
        >
          Analiz Et
        </button>

        {loading && (
          <div className="mt-6 text-center text-purple-300">
            Analiz ediliyor...
          </div>
        )}

        {result && (
          <div className="mt-6 space-y-4">

            {/* RESULT */}
            <div className="p-4 bg-black/40 rounded-xl text-sm whitespace-pre-line border border-white/10">
              {result}
            </div>

            {/* PREMIUM PAYWALL */}
            <div className="p-4 border border-yellow-500/30 bg-yellow-500/10 rounded-xl">

              <h3 className="font-bold text-yellow-300 mb-2">
                🔒 Premium Social Report
              </h3>

              <p className="text-sm text-gray-200 mb-3">
                Daha detaylı analizle insanların seni nasıl algıladığını öğren
              </p>

              <ul className="text-xs text-gray-300 space-y-1 mb-3">
                <li>• İlk 3 saniye algı analizi</li>
                <li>• Dating uyumluluk skoru</li>
                <li>• Sosyal çekicilik breakdown</li>
                <li>• Güçlü ve zayıf yönler</li>
              </ul>

              <div className="bg-black/30 p-3 rounded-lg mb-3">
                <p className="text-yellow-300 font-bold text-lg">49 TL</p>
                <p className="text-xs text-gray-400">Tek seferlik ödeme</p>
              </div>

              <button className="w-full p-3 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition">
                🔓 Premium Raporu Aç
              </button>

            </div>

          </div>
        )}

      </div>
    </main>
  );
}