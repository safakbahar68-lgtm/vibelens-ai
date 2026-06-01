"use client";

import { useState } from "react";

type PremiumReport = {
  attraction: number;
  confidence: number;
  trust: number;
  dating: number;
  summary: string;
  strengths: string[];
  weaknesses: string[];
};

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>("");
  const [premium, setPremium] = useState<PremiumReport | null>(null);
  const [isPremiumOpen, setIsPremiumOpen] = useState(false);

  const analyze = async () => {
    if (!file) return;

    setLoading(true);
    setResult("");
    setPremium(null);
    setIsPremiumOpen(false);

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

      setPremium(data.premium);
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
            <div className="p-4 bg-black/40 rounded-xl text-sm whitespace-pre-line border border-white/10">
              {result}
            </div>

            {!isPremiumOpen && (
              <div className="p-4 border border-yellow-500/30 bg-yellow-500/10 rounded-xl">
                <h3 className="font-bold text-yellow-300 mb-2">
                  🔒 Premium Social Report
                </h3>

                <p className="text-sm text-gray-200 mb-3">
                  Detaylı sosyal algı raporunu aç.
                </p>

                <ul className="text-xs text-gray-300 space-y-1 mb-3">
                  <li>• Çekicilik skoru</li>
                  <li>• Özgüven analizi</li>
                  <li>• Dating uyumluluğu</li>
                  <li>• Güçlü ve zayıf yönler</li>
                </ul>

                <div className="bg-black/30 p-3 rounded-lg mb-3">
                  <p className="text-yellow-300 font-bold text-lg">49 TL</p>
                  <p className="text-xs text-gray-400">Tek seferlik ödeme</p>
                </div>

                <button
                  onClick={() => setIsPremiumOpen(true)}
                  className="w-full p-3 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition"
                >
                  🔓 Premium Raporu Aç
                </button>
              </div>
            )}

            {isPremiumOpen && premium && (
              <div className="p-4 border border-green-500/30 bg-green-500/10 rounded-xl">
                <h3 className="font-bold text-green-300 mb-4">
                  ✅ Premium Social Report
                </h3>

                <div className="space-y-2 text-sm">
                  <p>🔥 Çekicilik: {premium.attraction}/100</p>
                  <p>💪 Özgüven: {premium.confidence}/100</p>
                  <p>🤝 Güvenilirlik: {premium.trust}/100</p>
                  <p>❤️ Dating Skoru: {premium.dating}/100</p>
                </div>

                <div className="mt-4">
                  <h4 className="font-bold mb-2">Güçlü Yönler</h4>
                  <ul className="text-sm list-disc ml-5">
                    {premium.strengths.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <h4 className="font-bold mb-2">Geliştirilebilir Alanlar</h4>
                  <ul className="text-sm list-disc ml-5">
                    {premium.weaknesses.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 p-3 bg-black/20 rounded-lg text-sm">
                  {premium.summary}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}