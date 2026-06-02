import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Hakkımızda
        </h1>

        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 space-y-4 text-sm text-gray-200">
          <p>
            VibeLens AI, kullanıcıların yüklediği fotoğraflar üzerinden sosyal algı, ilk izlenim ve kişisel izlenim değerlendirmeleri sunan yapay zeka destekli bir dijital analiz platformudur.
          </p>

          <p>
            Amacımız, kullanıcıların kendilerini dışarıdan nasıl algılanabilecekleri konusunda eğlenceli, anlaşılır ve bilgilendirici bir bakış açısı sunmaktır.
          </p>

          <p>
            VibeLens AI tarafından sunulan analizler eğlence ve bilgilendirme amaçlıdır. Sonuçlar kesin doğruluk iddiası taşımaz; psikolojik, tıbbi, hukuki veya profesyonel danışmanlık yerine geçmez.
          </p>

          <p>
            Premium Social Report hizmeti; sosyal çekicilik, özgüven, güvenilirlik, dating uyumluluğu ve güçlü/geliştirilebilir yönlere dair daha detaylı bir dijital rapor sunar.
          </p>
        </div>

        <footer className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-gray-400">
          <Link href="/">Ana Sayfa</Link>
          <Link href="/premium">Premium</Link>
          <Link href="/upload">Analiz</Link>
          <Link href="/contact">İletişim</Link>
          <Link href="/privacy">Gizlilik Politikası</Link>
          <Link href="/terms">Kullanım Şartları</Link>
        </footer>
      </div>
    </main>
  );
}