import Link from "next/link";
import { supabase } from "@/lib/supabase";

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

  if (!report.is_premium) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Premium Rapor Kilitli
          </h1>

          <p className="text-gray-300 mb-8">
            Analizin oluşturuldu. Premium raporu görüntülemek için satın alma işlemini tamamlaman gerekir.
          </p>

          <div className="bg-white/10 border border-white/10 rounded-2xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">
              Önizleme
            </h2>

            <div className="space-y-3 text-sm text-gray-200">
              <p><strong>Skor:</strong> {report.score}/100</p>
              <p><strong>Vibe:</strong> {report.vibe}</p>
              <p><strong>Profil Tipi:</strong> 🔒 Premium ile açılır</p>
              <p><strong>Karizma Tipi:</strong> 🔒 Premium ile açılır</p>
              <p><strong>Profil Nadirliği:</strong> 🔒 Premium ile açılır</p>
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
              <li>✓ Güçlü ve geliştirilebilir yönler</li>
              <li>✓ Kişisel tavsiyeler</li>
            </ul>
          </div>

          <div className="bg-black/30 border border-white/10 rounded-2xl p-6 mb-8">
            <p className="text-yellow-300 text-3xl font-bold mb-2">
              49 TL
            </p>

            <p className="text-gray-400 text-sm mb-6">
              Tek seferlik Premium Social Report
            </p>

            <Link
              href="/payment"
              className="block text-center w-full p-4 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition"
            >
              Premium Rapor Satın Al
            </Link>
          </div>

          <footer className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-gray-400">
            <Link href="/">Ana Sayfa</Link>
            <Link href="/upload">Analiz</Link>
            <Link href="/premium">Premium</Link>
            <Link href="/payment">Ödeme</Link>
          </footer>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          VibeLens Premium Report
        </h1>

        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">
            Profil Özeti
          </h2>

          <div className="space-y-3 text-sm text-gray-200">
            <p><strong>Profil Tipi:</strong> {report.profile_type}</p>
            <p><strong>Karizma Tipi:</strong> {report.charisma_type}</p>
            <p><strong>Profil Nadirliği:</strong> {report.rarity}</p>
            <p><strong>Skor:</strong> {report.score}/100</p>
            <p><strong>Vibe:</strong> {report.vibe}</p>
          </div>
        </div>

        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">
            Genel Değerlendirme
          </h2>

          <p className="text-gray-200 leading-relaxed">
            {report.summary}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
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

        <footer className="mt-10 flex flex-wrap justify-center gap-4 text-xs text-gray-400">
          <Link href="/">Ana Sayfa</Link>
          <Link href="/upload">Yeni Analiz</Link>
          <Link href="/premium">Premium</Link>
        </footer>
      </div>
    </main>
  );
}