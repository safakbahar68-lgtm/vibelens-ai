import Link from "next/link";

export default function PaymentPage() {
  const shopierLink = "https://www.shopier.com/vibelensai/47868020";

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Premium Rapor Satın Al
        </h1>

        <p className="text-gray-300 mb-8">
          VibeLens Premium Social Report için ödeme ve teslimat bilgileri.
        </p>

        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-yellow-300 mb-3">
            VibeLens Premium Social Report
          </h2>

          <div className="space-y-3 text-sm text-gray-200 mb-6">
            <p><strong>Fiyat:</strong> 49 TL</p>
            <p><strong>Hizmet Türü:</strong> Dijital sosyal algı ve ilk izlenim raporu</p>
            <p><strong>Teslim Şekli:</strong> E-posta yoluyla dijital teslimat</p>
            <p><strong>Teslim Süresi:</strong> Gerekli yönlendirmeler en geç 2 saat içinde gönderilir</p>
          </div>

          <div className="bg-black/30 rounded-xl p-4 mb-6 text-sm text-gray-300 space-y-3">
            <p>
              Satın alma işleminizin ardından sipariş bilgileriniz tarafımıza ulaşacaktır.
            </p>

            <p>
              Siparişiniz incelendikten sonra premium rapor sürecine ilişkin gerekli yönlendirmeler kayıtlı e-posta adresinize en geç 2 saat içerisinde gönderilecektir.
            </p>

            <p>
              Premium raporunuz dijital olarak hazırlanacak ve e-posta yoluyla teslim edilecektir.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 text-xs text-gray-300">
            <p>
              Önemli Not: Bu rapor yapay zeka destekli değerlendirmeler içerir. Sonuçlar bilgilendirme ve eğlence amaçlıdır; psikolojik, tıbbi veya hukuki değerlendirme niteliği taşımaz.
            </p>
          </div>

          <a
            href={shopierLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full p-3 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition"
          >
            Shopier ile Güvenli Ödeme Yap
          </a>
        </div>

        <footer className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-gray-400">
          <Link href="/">Ana Sayfa</Link>
          <Link href="/about">Hakkımızda</Link>
          <Link href="/premium">Premium</Link>
          <Link href="/upload">Analiz</Link>
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