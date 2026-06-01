export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Gizlilik Politikası
        </h1>

        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 space-y-4 text-sm text-gray-200">
          <p>
            VibeLens AI, kullanıcı gizliliğine önem verir. Bu sayfa, uygulamamızın hangi bilgileri topladığını ve bu bilgilerin nasıl kullanıldığını açıklar.
          </p>

          <h2 className="text-xl font-bold text-white">
            Toplanan Bilgiler
          </h2>

          <p>
            Kullanıcılar analiz almak için fotoğraf yükleyebilir. Yüklenen görseller yalnızca analiz deneyimini sağlamak amacıyla kullanılır.
          </p>

          <h2 className="text-xl font-bold text-white">
            Bilgilerin Kullanımı
          </h2>

          <p>
            Toplanan bilgiler; analiz sonucu oluşturmak, kullanıcı deneyimini geliştirmek ve hizmetin güvenli şekilde çalışmasını sağlamak için kullanılabilir.
          </p>

          <p>
            Kullanıcılar tarafından yüklenen görseller yalnızca analiz işlemini gerçekleştirmek amacıyla kullanılır. Görseller kalıcı olarak saklanmaz ve analiz işlemi tamamlandıktan sonra sistem tarafından tutulmaz.
          </p>

          <h2 className="text-xl font-bold text-white">
            Ödeme Bilgileri
          </h2>

          <p>
            Ödeme işlemleri güvenli ödeme altyapıları üzerinden gerçekleştirilir. Kart bilgileriniz VibeLens AI tarafından saklanmaz.
          </p>

          <h2 className="text-xl font-bold text-white">
            İletişim
          </h2>

          <p>
            Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
          </p>

          <p className="text-purple-300">
            safakbahar68@gmail.com
          </p>
        </div>
      </div>
    </main>
  );
}