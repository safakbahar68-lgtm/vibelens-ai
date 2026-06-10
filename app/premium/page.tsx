import Link from "next/link";

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          VibeLens Premium Social Report
        </h1>

        <p className="text-gray-300 mb-8">
          VibeLens Premium Report, fotoğrafın üzerinden oluşturulan sosyal algı,
          ilk izlenim ve kişisel etki değerlendirmelerini içeren detaylı bir
          dijital rapordur.
        </p>

        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">
            Premium Raporda Seni Neler Bekliyor?
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="bg-black/30 rounded-xl p-4">
              <h3 className="font-bold mb-2">🔍 Profil Tipi Analizi</h3>
              <p>
                VibeLens tarafından belirlenen profil sınıfın ve genel sosyal
                etki değerlendirmen.
              </p>
            </div>

            <div className="bg-black/30 rounded-xl p-4">
              <h3 className="font-bold mb-2">⭐ Karizma Tipi</h3>
              <p>
                Sosyal ortamda nasıl bir etki bıraktığını gösteren özel karizma
                sınıflandırması.
              </p>
            </div>

            <div className="bg-black/30 rounded-xl p-4">
              <h3 className="font-bold mb-2">📊 Profil Nadirliği</h3>
              <p>
                Profilinin VibeLens sınıflandırmasındaki konumu ve nadirlik
                seviyesi.
              </p>
            </div>

            <div className="bg-black/30 rounded-xl p-4">
              <h3 className="font-bold mb-2">🏆 VibeLens Rozetleri</h3>
              <p>
                Profiline özel kazanılan rozetler ve öne çıkan özellikler.
              </p>
            </div>

            <div className="bg-black/30 rounded-xl p-4">
              <h3 className="font-bold mb-2">👥 Sosyal Algı Profili</h3>
              <p>
                İnsanların seni ilk etapta nasıl algılayabileceğine dair detaylı
                değerlendirme.
              </p>
            </div>

            <div className="bg-black/30 rounded-xl p-4">
              <h3 className="font-bold mb-2">💬 İletişim Profili</h3>
              <p>
                İletişim tarzın ve sosyal etkileşimlerdeki güçlü yönlerin.
              </p>
            </div>

            <div className="bg-black/30 rounded-xl p-4">
              <h3 className="font-bold mb-2">💪 Güçlü Yönler</h3>
              <p>
                Profilinde öne çıkan olumlu özellikler ve avantajlar.
              </p>
            </div>

            <div className="bg-black/30 rounded-xl p-4">
              <h3 className="font-bold mb-2">📈 Geliştirilebilir Alanlar</h3>
              <p>
                Daha güçlü bir ilk izlenim bırakabilmek için öneriler.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/40 to-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">
            Örnek Premium Sonuçlar
          </h2>

          <div className="space-y-3 text-sm text-gray-200">
            <p>✓ Güven Veren Profil</p>
            <p>✓ Karizmatik Profil</p>
            <p>✓ Lider Profil</p>
            <p>✓ Profesyonel Profil</p>
            <p>✓ Analitik Profil</p>
            <p>✓ Sosyal Profil</p>
            <p>✓ Enerjik Profil</p>
            <p>✓ Samimi Profil</p>
            <p>✓ Dengeli Profil</p>
            <p>✓ Sakin Profil</p>
          </div>
        </div>

        <div className="bg-black/30 rounded-2xl p-6 mb-8 border border-white/10">
          <p className="text-yellow-300 text-4xl font-bold mb-2">
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

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-sm text-gray-300 mb-8">
          <h3 className="font-bold text-white mb-2">
            Önemli Bilgilendirme
          </h3>

          <p>
            VibeLens sonuçları yapay zeka destekli sosyal algı
            değerlendirmeleridir. Sonuçlar eğlence ve bilgilendirme amaçlıdır.
            Psikolojik, tıbbi veya hukuki değerlendirme niteliği taşımaz.
          </p>
        </div>

        <footer className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-gray-400">
          <Link href="/">Ana Sayfa</Link>
          <Link href="/about">Hakkımızda</Link>
          <Link href="/upload">Analiz</Link>
          <Link href="/premium">Premium</Link>
          <Link href="/payment">Ödeme</Link>
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