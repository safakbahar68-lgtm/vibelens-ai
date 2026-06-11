import Link from "next/link";
import { supabase } from "@/lib/supabase";

function getBadges(profileType: string, vibe: string) {
  const badges = ["⭐ Premium Profil"];

  if (profileType?.includes("Lider")) badges.push("👑 Lider Enerji");
  if (profileType?.includes("Karizmatik")) badges.push("🔥 Sosyal Mıknatıs");
  if (profileType?.includes("Güven")) badges.push("🏆 Güven Oluşturucu");
  if (profileType?.includes("Profesyonel")) badges.push("💼 Profesyonel Aura");
  if (profileType?.includes("Analitik")) badges.push("🧠 Stratejik Zihin");
  if (profileType?.includes("Sosyal")) badges.push("🎉 Sosyal Çekim");
  if (profileType?.includes("Sakin")) badges.push("🌙 Sakin Güç");
  if (profileType?.includes("Samimi")) badges.push("🤝 Doğal Yakınlık");
  if (vibe) badges.push(`✨ ${vibe} Vibe`);

  return badges;
}

export default async function ReportPage({
  params,
}: {
  params: Promise<{ reportId: string }>;
}) {
  const { reportId } = await params;

  const premiumReportLink = `https://vibelens-ai.vercel.app/premium/${reportId}`;

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

  if (!report.is_premium) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Premium Rapor Kilitli</h1>

          <p className="text-gray-300 mb-8">
            Analizin oluşturuldu. Premium raporu görüntülemek için satın alma
            işlemini tamamlaman gerekir.
          </p>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-purple-300 mb-4">
              Premium Report Link
            </h2>

            <p className="text-sm text-gray-300 mb-4">
              Shopier ödeme ekranındaki Not / Açıklama alanına aşağıdaki linki
              ekleyiniz. Ödeme kontrolünden sonra premium raporunuz aynı link
              üzerinden açılır.
            </p>

            <div className="bg-black/40 border border-white/10 rounded-xl p-4 text-xs text-gray-200 break-all mb-3">
              {premiumReportLink}
            </div>

            <p className="text-xs text-gray-400">
              Premium Report ID: {reportId}
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">
              Önizleme
            </h2>

            <div className="space-y-3 text-sm text-gray-200">
              <p>
                <strong>Skor:</strong> {report.score}/100
              </p>
              <p>
                <strong>Vibe:</strong> {report.vibe}
              </p>
              <p>
                <strong>Profil Tipi:</strong> 🔒 Premium ile açılır
              </p>
              <p>
                <strong>Karizma Tipi:</strong> 🔒 Premium ile açılır
              </p>
              <p>
                <strong>Profil Nadirliği:</strong> 🔒 Premium ile açılır
              </p>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6 mb-6">
            <h3 className="font-bold text-yellow-300 mb-3">
              Premium Raporda Açılacaklar
            </h3>

            <ul className="text-sm text-gray-200 space-y-2">
              <li>✓ Profil tipi analizi</li>
              <li>✓ Karizma tipi</li>
              <li>✓ Profil nadirliği</li>
              <li>✓ VibeLens rozetleri</li>
              <li>✓ Sosyal algı profili</li>
              <li>✓ İlk tanışma etkisi</li>
              <li>✓ Profesyonel algı</li>
              <li>✓ Kişisel tavsiyeler</li>
            </ul>
          </div>

          <Link
            href="/payment"
            className="block text-center w-full p-4 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition"
          >
            Premium Rapor Satın Al - 49 TL
          </Link>
        </div>
      </main>
    );
  }

  const badges = getBadges(report.profile_type, report.vibe);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">VibeLens Premium Report</h1>

        <p className="text-gray-300 mb-8">
          Bu rapor, profilinin sosyal algı, ilk izlenim ve kişisel etki
          potansiyelini değerlendirmek için hazırlanmıştır.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">
              Profil Özeti
            </h2>

            <div className="space-y-3 text-sm text-gray-200">
              <p>
                <strong>Profil Tipi:</strong> {report.profile_type}
              </p>
              <p>
                <strong>Karizma Tipi:</strong> {report.charisma_type}
              </p>
              <p>
                <strong>Profil Nadirliği:</strong> {report.rarity}
              </p>
              <p>
                <strong>Skor:</strong> {report.score}/100
              </p>
              <p>
                <strong>Vibe:</strong> {report.vibe}
              </p>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">
              Profil Nadirliği Yorumu
            </h2>

            <p className="text-sm text-gray-200 leading-relaxed">
              {report.rarity} sınıfı, VibeLens içinde öne çıkan sosyal
              sinyalleri temsil eder. Bu sonuç, profilinin sıradan bir ilk
              izlenimden daha belirgin bir karakter etkisi taşıdığını gösterir.
            </p>
          </div>
        </div>

        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">
            Genel Değerlendirme
          </h2>

          <p className="text-gray-200 leading-relaxed">{report.summary}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-purple-300 mb-3">
              İlk Tanışma Etkisi
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              İlk karşılaşmada {report.vibe?.toLowerCase()} bir enerji bırakma
              potansiyelin yüksek. Bu etki, insanların seni daha hızlı fark
              etmesine ve profilini daha dikkatli değerlendirmesine katkı
              sağlayabilir.
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-blue-300 mb-3">
              Profesyonel Algı
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Profilin, doğru sunulduğunda daha ciddi, güvenilir ve ciddiye
              alınabilir bir izlenim oluşturabilir. Özellikle net fotoğraf, sade
              arka plan ve kontrollü ifade bu algıyı güçlendirir.
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-pink-300 mb-3">
              Sosyal Etki
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Sosyal ortamlarda profilin, insanlarda merak ve değerlendirme
              isteği oluşturabilir. Bu etki, özellikle ilk izlenimlerde güçlü
              bir avantaj sağlayabilir.
            </p>
          </div>
        </div>

        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">
            VibeLens Rozetleri
          </h2>

          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-2 text-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-green-300 mb-4">
              Güçlü Yönler
            </h2>

            <ul className="space-y-2 text-sm text-gray-200">
              {(report.strengths || []).map((item: string) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-red-300 mb-4">
              Geliştirilebilir Alanlar
            </h2>

            <ul className="space-y-2 text-sm text-gray-200">
              {(report.weaknesses || []).map((item: string) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/50 to-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">
            Premium Sonuç
          </h2>

          <p className="text-gray-200 leading-relaxed">
            VibeLens değerlendirmesine göre profilin, {report.profile_type}
            kategorisinde güçlü bir sosyal izlenim taşıyor. Bu rapor, profilini
            daha etkili sunmak ve ilk izlenim gücünü artırmak için bir başlangıç
            noktasıdır. Gelecek analizlerde farklı fotoğraflarla sosyal algı
            değişimini tekrar ölçebilirsin.
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