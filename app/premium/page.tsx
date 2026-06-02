import Link from "next/link";

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          VibeLens Premium Rapor
        </h1>

        <p className="text-gray-300 mb-8">
          VibeLens Premium Social Report, kullanıcıların yüklediği fotoğraf üzerinden sosyal algı, ilk izlenim ve dating uyumluluğu hakkında dijital rapor sunan ücretli bir hizmettir.
        </p>

        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-yellow-300 mb-3">
            Satışı Yapılan Hizmet
          </h2>

          <div className="space-y-3 text-sm text-gray-200 mb-6">
            <p><strong>Ürün/Hizmet Adı:</strong> VibeLens Premium Social Report</p>
            <p><strong>Hizmet Türü:</strong> Dijital sosyal algı ve ilk izlenim raporu</p>
            <p><strong>Fiyat:</strong> 49 TL</p>
            <p><strong>Teslim Şekli:</strong> Online dijital rapor</p>
            <p><strong>Teslim Süresi:</strong> Ödeme sonrası anında erişim</p>
          </div>

          <h3 className="text-xl font-bold text-white mb-3">
            Premium Raporda Neler Var?
          </h3>

          <ul className="space-y-3 text-sm text-gray-200 mb-6">
            <li>✓ İlk 3 saniye algı analizi</li>
            <li>✓ Sosyal çekicilik skoru</li>
            <li>✓ Dating uyumluluk yorumu</li>
            <li>✓ Özgüven ve güvenilirlik değerlendirmesi</li>
            <li>✓ Güçlü ve geliştirilebilir yönler</li>
            <li>✓ Kişisel ilk izlenim tavsiyesi</li>
          </ul>

          <div className="bg-black/30 rounded-xl p-4 mb-6">
            <p className="text-yellow-300 text-3xl font-bold">
              49 TL
            </p>
            <p className="text-xs text-gray-400">
              Tek seferlik dijital premium rapor
            </p>
          </div>

          <Link
            href="/payment"
            className="block text-center w-full p-3 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition"
          >
            Premium Rapor Satın Al - 49 TL
          </Link>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-sm text-gray-300 mb-8">
          <h3 className="font-bold text-white mb-2">
            Önemli Bilgilendirme
          </h3>

          <p>
            VibeLens AI sonuçları yapay zeka destekli tahmini sosyal algı analizleridir. Sonuçlar eğlence ve bilgilendirme amaçlıdır; profesyonel psikolojik, tıbbi veya hukuki tavsiye niteliği taşımaz.
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