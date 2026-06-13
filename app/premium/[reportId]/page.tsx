import Link from "next/link";
import { supabase } from "@/lib/supabase";
import CheckPaymentButton from "../../components/CheckPaymentButton";

function getBadges(report: any) {
  const badges = ["⭐ Premium Profil"];

  if (report.profile_type?.includes("Lider")) badges.push("👑 Lider Enerji");
  if (report.profile_type?.includes("Karizmatik")) badges.push("🔥 Sosyal Mıknatıs");
  if (report.profile_type?.includes("Güven")) badges.push("🏆 Güven Oluşturucu");
  if (report.profile_type?.includes("Profesyonel")) badges.push("💼 Profesyonel Aura");
  if (report.profile_type?.includes("Analitik")) badges.push("🧠 Stratejik Zihin");
  if (report.profile_type?.includes("Sosyal")) badges.push("🎉 Sosyal Çekim");
  if (report.profile_type?.includes("Sakin")) badges.push("🌙 Sakin Güç");
  if (report.aura) badges.push(`🌌 ${report.aura}`);
  if (report.rarity_level) badges.push(`💎 ${report.rarity_level}`);

  return badges;
}

export default async function ReportPage({
  params,
}: {
  params: Promise<{ reportId: string }>;
}) {
  const { reportId } = await params;

  const { data: report } = await supabase
    .from("reports")
    .select("*")
    .eq("report_id", reportId)
    .single();

  if (!report) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Rapor bulunamadı.</h1>
          <Link href="/upload" className="text-purple-300 underline">
            Yeni analiz oluştur
          </Link>
        </div>
      </main>
    );
  }

  const premiumReportLink = `https://vibelens-ai.vercel.app/premium/${reportId}`;
  const badges = getBadges(report);

  if (!report.is_premium) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Premium Rapor Kilitli</h1>

          <p className="text-gray-300 mb-8">
            Analizin oluşturuldu. Premium raporu görüntülemek için satın alma işlemini tamamlaman gerekir.
          </p>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-purple-300 mb-4">
              Premium Report Link
            </h2>

            <p className="text-sm text-gray-300 mb-4">
              Shopier ödeme ekranındaki Not / Açıklama alanına aşağıdaki linki ekleyiniz.
              Ödeme kontrolünden sonra premium raporunuz aynı link üzerinden açılır.
            </p>

            <div className="bg-black/40 border border-white/10 rounded-xl p-4 text-xs text-gray-200 break-all mb-3">
              {premiumReportLink}
            </div>

            <p className="text-xs text-gray-400">Premium Report ID: {reportId}</p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">
              Kilitli Önizleme
            </h2>

            <div className="space-y-3 text-sm text-gray-200">
              <p><strong>Skor:</strong> {report.score}/100</p>
              <p><strong>Vibe:</strong> {report.vibe}</p>
              <p><strong>Profil Tipi:</strong> 🔒 Premium ile açılır</p>
              <p><strong>VibeLens İmzası:</strong> 🔒 Premium ile açılır</p>
              <p><strong>Aura:</strong> 🔒 Premium ile açılır</p>
              <p><strong>Profil Nadirliği:</strong> 🔒 Premium ile açılır</p>
            </div>
          </div>

          <Link
            href="/payment"
            className="block text-center w-full p-4 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition"
          >
            Premium Rapor Satın Al - 49 TL
          </Link>
          <div className="mt-4">
  <CheckPaymentButton reportId={reportId} />
</div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-yellow-300 text-sm font-semibold mb-2">
            VibeLens AI Premium Social Report
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Premium Raporun Hazır
          </h1>

          <p className="text-gray-300 max-w-3xl">
            Bu rapor; profil tipin, sosyal algın, ilk izlenim etkin ve kişisel
            VibeLens sınıflandırman üzerinden hazırlanmıştır.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6">
            <p className="text-xs text-gray-400 mb-1">👑 Profil Tipi</p>
            <h2 className="text-2xl font-bold text-yellow-300">
              {report.profile_type}
            </h2>
            <p className="text-sm text-gray-300 mt-3">
              Genel sosyal algında öne çıkan ana profil sınıfın.
            </p>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6">
            <p className="text-xs text-gray-400 mb-1">⭐ VibeLens İmzası</p>
            <h2 className="text-2xl font-bold text-purple-300">
              {report.vibelens_signature || "Kişisel Etki İmzası"}
            </h2>
            <p className="text-sm text-gray-300 mt-3">
              Profilinin bıraktığı en karakteristik sosyal iz.
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
            <p className="text-xs text-gray-400 mb-1">🌌 Aura</p>
            <h2 className="text-2xl font-bold text-blue-300">
              {report.aura || "VibeLens Aura"}
            </h2>
            <p className="text-sm text-gray-300 mt-3">
              {report.aura_description || "Profilinin oluşturduğu genel sosyal enerji."}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
            <p className="text-xs text-gray-400 mb-1">📊 Genel Skor</p>
            <h2 className="text-4xl font-bold">{report.score}/100</h2>
            <p className="text-sm text-gray-300 mt-3">
              Genel Vibe skoru; profilin oluşturduğu toplam ilk izlenim etkisini temsil eder.
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
            <p className="text-xs text-gray-400 mb-1">📌 Profil Nadirliği</p>
            <h2 className="text-3xl font-bold text-yellow-300">
              {report.rarity}
            </h2>
            <p className="text-sm text-yellow-200 mt-2">
              {report.rarity_level || "Özel Seviye"}
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
            <p className="text-xs text-gray-400 mb-1">✨ Vibe</p>
            <h2 className="text-3xl font-bold text-purple-300">
              {report.vibe}
            </h2>
            <p className="text-sm text-gray-300 mt-3">
              İlk algıda öne çıkan genel sosyal enerji.
            </p>
          </div>
        </div>

        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">
            👀 İlk 3 Saniye Algısı
          </h2>

          <p className="text-gray-200 leading-relaxed">
            {report.first_three_seconds ||
              "İlk karşılaşmada bıraktığın sosyal etki premium raporda detaylı yorumlanır."}
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/20 border border-purple-500/20 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-purple-300 mb-4">
            🏆 VibeLens Rozetleri
          </h2>

          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="bg-black/30 border border-purple-400/30 rounded-full px-4 py-2 text-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-green-300 mb-4">
              💪 Güçlü Yönler
            </h2>

            <ul className="space-y-2 text-sm text-gray-200">
              {(report.strengths || []).map((item: string) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-red-300 mb-4">
              📈 Geliştirilebilir Alanlar
            </h2>

            <ul className="space-y-2 text-sm text-gray-200">
              {(report.weaknesses || []).map((item: string) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-blue-300 mb-3">
              🤝 Sosyal Algı
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Profilin, sosyal ortamlarda {report.vibe?.toLowerCase()} bir izlenim bırakma
              potansiyeli taşıyor. Bu etki doğru fotoğraf, ifade ve sunumla daha da güçlenebilir.
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-purple-300 mb-3">
              🛡️ Güven Etkisi
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              {report.profile_type} sınıfı, karşı tarafta belirli bir sosyal güven ve
              değerlendirme isteği oluşturabilir. İlk izlenimde tutarlı görünüm önemlidir.
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-pink-300 mb-3">
              💬 İletişim Tarzı
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Profilin, ilk iletişimde doğrudan sözcüklerden önce genel duruş ve enerjiyle
              etki oluşturuyor. Bu yüzden fotoğraf seçimi iletişim algını doğrudan etkiler.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500/10 to-purple-900/40 border border-yellow-500/20 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">
            📜 Premium Sonuç Özeti
          </h2>

          <p className="text-gray-200 leading-relaxed mb-4">
            {report.summary}
          </p>

          <p className="text-gray-300 leading-relaxed">
            VibeLens değerlendirmesine göre profilin,{" "}
            <strong>{report.profile_type}</strong> kategorisinde güçlü bir sosyal izlenim
            taşıyor. <strong>{report.vibelens_signature}</strong> imzası ve{" "}
            <strong>{report.aura}</strong> aurası, profilinin yalnızca bir skor değil,
            ayırt edici bir sosyal etki oluşturduğunu gösteriyor.
          </p>
        </div>

        <footer className="mt-10 flex flex-wrap justify-center gap-4 text-xs text-gray-400">
          <Link href="/">Ana Sayfa</Link>
          <Link href="/upload">Yeni Analiz</Link>
          <Link href="/premium">Premium</Link>
        </footer>
      </div>
    </main>
  );
}