import Link from "next/link";

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Premium Rapor Satın Al
        </h1>

        <p className="text-gray-300 mb-8">
          VibeLens Premium Social Report için ödeme adımındasınız.
        </p>

        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-yellow-300 mb-3">
            VibeLens Premium Social Report
          </h2>

          <div className="space-y-3 text-sm text-gray-200 mb-6">
            <p><strong>Fiyat:</strong> 49 TL</p>
            <p><strong>Hizmet Türü:</strong> Dijital sosyal algı ve ilk izlenim raporu</p>
            <p><strong>Teslim Şekli:</strong> Online dijital rapor</p>
            <p><strong>Teslim Süresi:</strong> Ödeme sonrası anında erişim</p>
          </div>

          <div className="bg-black/30 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-300 mb-2">
              Ödeme altyapısı şu anda iyzico değerlendirme sürecindedir.
            </p>

            <p className="text-sm text-gray-300">
              İyzico onayı sonrası bu sayfadan güvenli ödeme alınacak ve premium rapor ödeme sonrası otomatik olarak açılacaktır.
            </p>
          </div>

          <button
            disabled
            className="w-full p-3 rounded-xl bg-gray-500 text-black font-bold cursor-not-allowed"
          >
            Güvenli Ödeme Yakında Aktif
          </button>
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