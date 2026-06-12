"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type PremiumReport = {
  attraction: number;
  confidence: number;
  trust: number;
  dating: number;
  summary: string;
  strengths: string[];
  weaknesses: string[];

  profileType?: string;
  charismaType?: string;
  vibelensSignature?: string;
  aura?: string;
  auraDescription?: string;
  rarity?: string;
  rarityLevel?: string;
  badges?: string[];
  firstImpression?: string;
  firstThreeSeconds?: string;
  socialPerception?: string;
  trustAnalysis?: string;
  communicationStyle?: string;
  improvements?: string[];
  recommendations?: string[];
  finalSummary?: string;
};

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>("");
  const [premium, setPremium] = useState<PremiumReport | null>(null);
  const [reportId, setReportId] = useState<string>("");
  const [loadingStep, setLoadingStep] = useState(0);
  const resultCardRef = useRef<HTMLDivElement | null>(null);

  const reportLink =
    reportId && typeof window !== "undefined"
      ? `${window.location.origin}/premium/${reportId}`
      : "";
      useEffect(() => {
  if (!loading) {
    setLoadingStep(0);
    return;
  }

  const timers = [
    setTimeout(() => setLoadingStep(1), 600),
    setTimeout(() => setLoadingStep(2), 1400),
    setTimeout(() => setLoadingStep(3), 2200),
    setTimeout(() => setLoadingStep(4), 3000),
    setTimeout(() => setLoadingStep(5), 3800),
  ];

  return () => timers.forEach(clearTimeout);
}, [loading]);

  const analyze = async () => {
    if (!file) return;

    setLoading(true);
    setResult("");
    setPremium(null);
    setReportId("");

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
      setReportId(data.reportId);
    } catch (err) {
      console.error(err);
      setResult("Hata oluştu, tekrar dene.");
    } finally {
      setLoading(false);
    }
  };

  const copyReportLink = async () => {
    if (!reportLink) return;

    try {
      await navigator.clipboard.writeText(reportLink);
      alert("Premium Report Link kopyalandı.");
    } catch {
      alert("Link kopyalanamadı. Lütfen manuel olarak seçip kopyalayın.");
    }
  };
  const downloadResultCard = async () => {
  if (!resultCardRef.current) return;

  const html2canvas = (await import("html2canvas")).default;

  const canvas = await html2canvas(resultCardRef.current, {
    backgroundColor: null,
    scale: 2,
  });

  const link = document.createElement("a");
  link.download = "vibelens-sonuc-karti.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
};

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
          <h1 className="text-2xl font-bold mb-2">VibeLens AI</h1>

          <p className="text-gray-300 mb-6">
            Fotoğrafını yükle, ilk izlenim analizini keşfet
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
  <div className="mt-6 p-4 rounded-xl border border-purple-500/30 bg-purple-500/10">
    <h3 className="font-bold text-purple-300 mb-4">
      VibeLens Analizi Başlatıldı
    </h3>

    <div className="space-y-3 text-sm">
      <div>
        {loadingStep >= 1 ? "✅" : "⏳"} 🧠 Profil Tipi Belirleniyor...
      </div>

      <div>
        {loadingStep >= 2 ? "✅" : "⏳"} 🌌 Aura Hesaplanıyor...
      </div>

      <div>
        {loadingStep >= 3 ? "✅" : "⏳"} 📊 Nadirlik Analiz Ediliyor...
      </div>

      <div>
        {loadingStep >= 4 ? "✅" : "⏳"} ⭐ VibeLens İmzası Oluşturuluyor...
      </div>

      <div>
        {loadingStep >= 5 ? "✅" : "⏳"} 🏆 Premium Rapor Hazırlanıyor...
      </div>
    </div>
  </div>
)}

          {result && (
            <div className="mt-6 space-y-4">
              <div className="p-4 bg-black/40 rounded-xl text-sm whitespace-pre-line border border-white/10">
                {result}
              </div>
              {premium && (
  <div className="p-4 border border-purple-500/20 bg-purple-500/5 rounded-xl">
    <h3 className="font-bold text-purple-300 mb-4">
      📊 VibeLens Skorları
    </h3>
    {premium && (
  <div
  ref={resultCardRef}
  className="relative overflow-hidden rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 via-purple-900/20 to-black p-6"
><button
  onClick={downloadResultCard}
  className="w-full p-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition"
>
  📸 Sonuç Kartını İndir
</button>

    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#facc15,transparent_40%)]" />

    <div className="relative z-10">

      <p className="text-xs uppercase tracking-widest text-yellow-300 mb-3">
        VibeLens Sonuç Kartı
      </p>

      <h2 className="text-3xl font-bold mb-4">
        👑 {premium.profileType || "Özel Profil"}
      </h2>

      <div className="space-y-3">

        <div className="bg-white/5 border border-white/10 rounded-xl p-3">
          ⭐ {premium.vibelensSignature || "Kişisel Etki İmzası"}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-3">
          🌌 {premium.aura || "VibeLens Aura"}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-3">
          💎 {premium.rarityLevel || "Özel Seviye"}
        </div>

      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {(premium.badges || []).slice(0, 3).map((badge) => (
          <span
            key={badge}
            className="px-3 py-1 rounded-full text-xs bg-yellow-500/20 border border-yellow-500/20"
          >
            {badge}
          </span>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-white/10">
        <p className="text-xs text-gray-400">
          Powered by VibeLens AI
        </p>
      </div>

    </div>
  </div>
)}

    <div className="space-y-4">

      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>🔥 Karizma</span>
          <span>{premium.attraction}/100</span>
        </div>
        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-yellow-400"
            style={{ width: `${premium.attraction}%` }}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>🛡️ Güven</span>
          <span>{premium.trust}/100</span>
        </div>
        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-400"
            style={{ width: `${premium.trust}%` }}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>🌍 Sosyal Etki</span>
          <span>{premium.confidence}/100</span>
        </div>
        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-400"
            style={{ width: `${premium.confidence}%` }}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>💘 Dating Gücü</span>
          <span>{premium.dating}/100</span>
        </div>
        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-pink-400"
            style={{ width: `${premium.dating}%` }}
          />
        </div>
      </div>

    </div>
  </div>
)}

              {reportId && (
                <div className="p-4 border border-purple-500/30 bg-purple-500/10 rounded-xl">
                  <h3 className="font-bold text-purple-300 mb-2">
                    Premium Report Link
                  </h3>

                  <p className="text-xs text-gray-300 mb-3">
                    Shopier ödeme ekranındaki Not / Açıklama alanına bu linki
                    ekleyiniz. Ödeme kontrolünden sonra premium raporunuz aynı
                    link üzerinden açılır.
                  </p>

                  <div className="bg-black/40 border border-white/10 rounded-lg p-3 mb-3 break-all text-xs text-gray-200">
                    {reportLink}
                  </div>

                  <button
                    onClick={copyReportLink}
                    className="w-full p-3 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-700 transition"
                  >
                    Premium Report Linki Kopyala
                  </button>
                </div>
              )}

              <div className="p-4 border border-yellow-500/30 bg-yellow-500/10 rounded-xl">
                <h3 className="font-bold text-yellow-300 mb-2">
                  🔒 Premium Social Report
                </h3>

                <p className="text-sm text-gray-200 mb-3">
                  Premium raporda sosyal algın, profil tipin ve kişisel etkin
                  daha detaylı yorumlanır.
                </p>

                <ul className="text-xs text-gray-300 space-y-1 mb-3">
                  <li>• Profil Tipi Analizi</li>
                  <li>• Karizma Tipi</li>
                  <li>• VibeLens İmzası</li>
                  <li>• Aura Sistemi</li>
                  <li>• Profil Nadirliği</li>
                  <li>• VibeLens Rozetleri</li>
                  <li>• İlk 3 Saniye Algısı</li>
                  <li>• Sosyal Algı Profili</li>
                  <li>• Güçlü ve geliştirilebilir yönler</li>
                  <li>• Kişisel tavsiyeler</li>
                </ul>

                <div className="bg-black/30 p-3 rounded-lg mb-3">
                  <p className="text-yellow-300 font-bold text-lg">49 TL</p>
                  <p className="text-xs text-gray-400">
                    Tek seferlik dijital premium rapor
                  </p>
                </div>

                <Link href="/premium">
                  <button className="w-full p-3 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition">
                    🔓 Premium Rapor Satın Al
                  </button>
                </Link>
              </div>

              {premium && (
                <div className="p-4 border border-white/10 bg-black/30 rounded-xl opacity-75 blur-[1px] pointer-events-none select-none">
                  <h3 className="font-bold text-white mb-4">
                    Premium Rapor Önizlemesi
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <p className="text-gray-400 text-xs">Profil Tipi</p>
                      <p className="font-semibold">
                        {premium.profileType || "Özel Profil Analizi"}
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <p className="text-gray-400 text-xs">Karizma Tipi</p>
                      <p className="font-semibold">
                        {premium.charismaType || "Kişisel Karizma Profili"}
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <p className="text-gray-400 text-xs">
                        ⭐ VibeLens İmzası
                      </p>
                      <p className="font-semibold">
                        {premium.vibelensSignature || "Kişisel Etki İmzası"}
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <p className="text-gray-400 text-xs">🌌 Aura</p>
                      <p className="font-semibold">
                        {premium.aura || "VibeLens Aura"}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {premium.auraDescription ||
                          "Profilinin oluşturduğu genel sosyal enerji."}
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <p className="text-gray-400 text-xs">Profil Nadirliği</p>
                      <p className="font-semibold">
                        {premium.rarity || "VibeLens özel sınıflandırması"}
                      </p>
                      <p className="text-xs text-yellow-300 mt-1">
                        {premium.rarityLevel || "Özel Seviye"}
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <p className="text-gray-400 text-xs">
                        👀 İlk 3 Saniye Algısı
                      </p>
                      <p className="text-sm mt-1">
                        {premium.firstThreeSeconds ||
                          "İlk karşılaşmada bıraktığın sosyal etki premium raporda detaylı yorumlanır."}
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <p className="text-gray-400 text-xs mb-1">
                        Kazanılan Rozetler
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(premium.badges || [
                          "🏆 VibeLens Rozeti",
                          "⭐ Sosyal Algı",
                        ]).map((badge) => (
                          <span
                            key={badge}
                            className="text-xs bg-purple-500/20 border border-purple-400/20 rounded-full px-2 py-1"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-gray-300">
                    Detaylı raporda sosyal algı, güven etkisi, iletişim profili,
                    güçlü yönler ve kişisel tavsiyeler yer alır.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <footer className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-gray-400">
          <Link href="/">Ana Sayfa</Link>
          <Link href="/premium">Premium</Link>
          <Link href="/contact">İletişim</Link>
          <Link href="/privacy">Gizlilik Politikası</Link>
          <Link href="/terms">Kullanım Şartları</Link>
          <Link href="/distance-sales">Mesafeli Satış Sözleşmesi</Link>
          <Link href="/refund">İade ve İptal Politikası</Link>
        </footer>
      </div>
    </main>
  );
}