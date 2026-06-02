import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
      <div className="max-w-3xl mx-auto text-center">

        <h1 className="text-5xl font-bold mb-4">
          VibeLens AI
        </h1>

        <p className="text-gray-300 mb-8 text-lg">
          Yapay zeka destekli sosyal algı ve ilk izlenim analizi
        </p>

        <Link href="/upload">
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold">
            Fotoğraf Yükle
          </button>
        </Link>

        <div className="mt-10 bg-white/10 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-yellow-300 mb-3">
            Premium Social Report
          </h2>

          <p className="text-gray-300 mb-4">
            İlk izlenim, sosyal çekicilik, dating uyumluluğu ve kişisel tavsiyeler içeren detaylı premium rapor.
          </p>

          <p className="text-3xl font-bold text-yellow-300 mb-4">
            49 TL
          </p>

          <Link href="/premium">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold">
              Premium Raporu İncele
            </button>
          </Link>
        </div>

        <div className="mt-10 bg-white/10 border border-white/10 rounded-2xl p-6 text-left">
          <h2 className="text-2xl font-bold mb-5 text-center">
            Nasıl Çalışır?
          </h2>

          <div className="space-y-4">
            <div>
              <strong>1. Fotoğrafını Yükle</strong>
              <p className="text-gray-300 text-sm">
                Analiz etmek istediğin fotoğrafı sisteme yükle.
              </p>
            </div>

            <div>
              <strong>2. Ücretsiz Analizi Gör</strong>
              <p className="text-gray-300 text-sm">
                Yapay zeka tarafından oluşturulan ilk izlenim sonucunu incele.
              </p>
            </div>

            <div>
              <strong>3. Premium Raporu İncele</strong>
              <p className="text-gray-300 text-sm">
                Sosyal çekicilik, dating uyumluluğu ve detaylı analizleri görüntüle.
              </p>
            </div>

            <div>
              <strong>4. Detaylı Dijital Rapora Eriş</strong>
              <p className="text-gray-300 text-sm">
                Premium rapor ile daha kapsamlı değerlendirmelere ulaş.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white/10 border border-white/10 rounded-2xl p-6 text-left">
          <h2 className="text-2xl font-bold mb-4 text-center">
            VibeLens AI Nedir?
          </h2>

          <p className="text-gray-300 text-sm">
            VibeLens AI, kullanıcıların yüklediği fotoğraflar üzerinden sosyal algı,
            ilk izlenim ve kişisel izlenim değerlendirmeleri sunan yapay zeka destekli
            dijital analiz platformudur.
          </p>
        </div>

        <footer className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <Link href="/about">Hakkımızda</Link>
          <Link href="/premium">Premium</Link>
          <Link href="/contact">İletişim</Link>
          <Link href="/privacy">Gizlilik Politikası</Link>
          <Link href="/terms">Kullanım Şartları</Link>
        </footer>

      </div>
    </main>
  );
}