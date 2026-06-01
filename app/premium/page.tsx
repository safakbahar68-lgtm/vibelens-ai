export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          VibeLens Premium Rapor
        </h1>

        <p className="text-gray-300 mb-8">
          Fotoğrafın üzerinden sosyal algı, ilk izlenim ve dating uyumluluğu hakkında daha detaylı rapor al.
        </p>

        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-yellow-300 mb-3">
            Premium Social Report
          </h2>

          <p className="text-sm text-gray-300 mb-5">
            Ücretsiz analiz yalnızca temel sonucu gösterir. Premium rapor, sosyal algını daha detaylı şekilde yorumlar.
          </p>

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
              Tek seferlik premium rapor
            </p>
          </div>

          <a
            href="/upload"
            className="block text-center w-full p-3 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition"
          >
            Premium Rapor Al
          </a>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-sm text-gray-300">
          <h3 className="font-bold text-white mb-2">
            Önemli Bilgilendirme
          </h3>

          <p>
            VibeLens AI sonuçları yapay zeka destekli tahmini sosyal algı analizleridir. Sonuçlar eğlence ve bilgilendirme amaçlıdır; profesyonel psikolojik, tıbbi veya hukuki tavsiye niteliği taşımaz.
          </p>
        </div>
      </div>
    </main>
  );
}