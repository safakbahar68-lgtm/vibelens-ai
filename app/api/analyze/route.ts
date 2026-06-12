import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const profiles = [
  {
    profileType: "Güven Veren Profil",
    charismaType: "Sessiz Güven",
    vibelensSignature: "Güven Veren Güç",
    aura: "Kozmik Mavi",
    auraDescription:
      "Dengeli, kontrollü ve güven oluşturan bir sosyal enerji yansıtıyor.",
    rarity: "İlk %29",
    rarityLevel: "Az Görülen",
    badges: ["🏆 Güven Oluşturucu", "⭐ Sessiz Karizma", "🛡️ Güçlü Duruş"],
    score: 88,
    vibe: "Güven Veren",
    result:
      "İlk izlenimde dengeli, kontrollü ve güven veren bir enerji yansıtıyorsun.",
    firstImpression:
      "İlk karşılaşmada profilin sakin, kontrollü ve güven veren bir izlenim oluşturuyor. İnsanlar seni aceleci ya da agresif biri olarak değil, daha çok dengeli ve oturaklı biri olarak algılayabilir.",
    firstThreeSeconds:
      "İlk 3 saniyede sende güven, denge ve sakin bir güç algısı öne çıkıyor.",
    socialPerception:
      "Sosyal ortamlarda hızlı dikkat çekmekten çok, zaman içinde değer kazanan bir izlenim bırakıyorsun. Bu profil tipi özellikle güven, sadakat ve tutarlılık algısı açısından güçlüdür.",
    trustAnalysis:
      "Güven algın yüksek. İnsanlar seninle iletişim kurarken daha öngörülebilir ve güvenli bir enerji hissedebilir.",
    communicationStyle:
      "Sakin İletişimci. Dinlemeyi bilen, düşünerek konuşan ve karşı tarafa güven veren bir iletişim tarzı öne çıkıyor.",
    strengths: [
      "Güven veren duruş",
      "Dengeli sosyal enerji",
      "Olgun görünüm",
      "Uzun vadeli olumlu izlenim oluşturma potansiyeli"
    ],
    improvements: [
      "İlk karşılaşmalarda daha sıcak görünmek",
      "Yüz ifadelerinde enerjiyi artırmak",
      "İlk iletişimde daha ulaşılabilir görünmek"
    ],
    recommendations: [
      "Doğal gülümseme kullanılan fotoğrafları tercih et.",
      "Aydınlık ortamlarda çekilmiş fotoğraflar kullan.",
      "Göz temasının belirgin olduğu profil fotoğrafları seç."
    ],
    finalSummary:
      "VibeLens değerlendirmesine göre profilin güven veren, dengeli ve kontrollü bir enerji taşıyor. İnsanlar seni tanıdıkça daha güçlü ve olumlu algılama eğiliminde olabilir."
  },
  {
    profileType: "Karizmatik Profil",
    charismaType: "Doğal Karizma",
    vibelensSignature: "Galaktik Karizma",
    aura: "Mor Nebula",
    auraDescription:
      "Merak uyandıran, dikkat çeken ve kolay unutulmayan bir enerji taşıyor.",
    rarity: "İlk %6",
    rarityLevel: "Çok Nadir",
    badges: ["🔥 Sosyal Mıknatıs", "💎 Premium Aura", "🌟 Dikkat Çekici Aura"],
    score: 92,
    vibe: "Karizmatik",
    result:
      "Dikkat çekici, güçlü ve kendinden emin bir ilk izlenim oluşturuyorsun.",
    firstImpression:
      "İlk bakışta profilin dikkat çekici ve güçlü bir enerji veriyor. İnsanlar seni sıradan kalabalık içinde kolay fark edilebilecek biri olarak algılayabilir.",
    firstThreeSeconds:
      "İlk 3 saniyede dikkat çekme, merak uyandırma ve güçlü sosyal etki öne çıkıyor.",
    socialPerception:
      "Sosyal algında güçlü bir çekim etkisi var. Bu tarz profiller genellikle merak uyandırır ve karşı tarafta 'bu kişi hakkında daha fazlasını bilmek istiyorum' hissi oluşturabilir.",
    trustAnalysis:
      "Güven algın etkileyici fakat güçlü duruşun bazı kişilerde ilk etapta mesafe hissi de yaratabilir. Bu yüzden sıcaklık ve ulaşılabilirlik dengesi önemlidir.",
    communicationStyle:
      "Etkileyici İletişimci. Konuşmadan önce bile duruşuyla mesaj verebilen, ortamda fark edilen bir iletişim enerjisi taşıyor.",
    strengths: [
      "Dikkat çekici ilk izlenim",
      "Güçlü sosyal aura",
      "Kendinden emin duruş",
      "Merak uyandırma potansiyeli"
    ],
    improvements: [
      "Daha ulaşılabilir görünmek",
      "İlk izlenimde sıcaklığı artırmak",
      "Güçlü enerjiyi daha yumuşak ifadelerle dengelemek"
    ],
    recommendations: [
      "Net yüz ifadesi olan fotoğraflar kullan.",
      "Duruşunu korurken daha doğal bir ifade ekle.",
      "Profil açıklamalarında kısa ama etkileyici cümleler tercih et."
    ],
    finalSummary:
      "VibeLens değerlendirmesine göre profilin yüksek karizma ve sosyal çekim etkisi taşıyor. Doğru fotoğraf ve ifade seçimiyle bu etki daha da güçlü hale gelebilir."
  },
  {
    profileType: "Lider Profil",
    charismaType: "Lider Enerji",
    vibelensSignature: "Doğal Lider",
    aura: "Altın Enerji",
    auraDescription:
      "Kararlılık, yön verme gücü ve yüksek sosyal etki hissi oluşturuyor.",
    rarity: "İlk %11",
    rarityLevel: "Nadir",
    badges: ["👑 Lider Enerji", "🎯 Güçlü Etki", "🏆 Üst Düzey Karizma"],
    score: 90,
    vibe: "Lider",
    result:
      "Kararlı, güçlü ve yön veren bir ilk izlenim oluşturuyorsun.",
    firstImpression:
      "İlk karşılaşmada kararlı, güçlü ve kendinden emin bir izlenim bırakıyorsun. İnsanlar seni karar alabilen ve bulunduğu ortamda yön belirleyebilen biri olarak algılayabilir.",
    firstThreeSeconds:
      "İlk 3 saniyede kendinden emin duruş, liderlik ve güçlü etki algısı öne çıkıyor.",
    socialPerception:
      "Sosyal ortamlarda pasif kalmayan, varlığı hissedilen bir profil çiziyorsun. Bu durum özellikle profesyonel ve ciddi ortamlarda avantaj sağlayabilir.",
    trustAnalysis:
      "Güven algın yüksek ancak lider enerji bazı kişilerde mesafe veya otorite hissi de oluşturabilir. Bu yüzden güçlü duruşu sıcaklıkla dengelemek önemlidir.",
    communicationStyle:
      "Yön Veren İletişimci. Net, kararlı ve doğrudan bir iletişim tarzı öne çıkıyor.",
    strengths: [
      "Kararlı görünüm",
      "Güçlü ilk etki",
      "Yön verici enerji",
      "Ciddiye alınma potansiyeli"
    ],
    improvements: [
      "Daha yumuşak yüz ifadeleri kullanmak",
      "Otoriter algıyı dengelemek",
      "İlk iletişimde samimiyeti artırmak"
    ],
    recommendations: [
      "Profesyonel ama sıcak fotoğraflar tercih et.",
      "Çok sert pozlardan kaçın.",
      "Profilinde net ve güven veren ifadeler kullan."
    ],
    finalSummary:
      "VibeLens değerlendirmesine göre profilin güçlü bir liderlik etkisi taşıyor. Doğru denge kurulduğunda bu enerji hem güven hem de saygı algısını artırabilir."
  },
  {
    profileType: "Profesyonel Profil",
    charismaType: "Profesyonel Etki",
    vibelensSignature: "İlk İzlenim Ustası",
    aura: "Gümüş Denge",
    auraDescription:
      "Düzenli, güvenilir ve ciddiye alınan bir profesyonel enerji veriyor.",
    rarity: "İlk %21",
    rarityLevel: "Az Görülen",
    badges: ["💼 Profesyonel Aura", "🏆 Güven Oluşturucu", "🎯 Net İfade Gücü"],
    score: 87,
    vibe: "Profesyonel",
    result:
      "Düzenli, güvenilir ve ciddiye alınan bir profil izlenimi veriyorsun.",
    firstImpression:
      "İlk izlenimde düzenli, kontrollü ve ciddiye alınabilir bir profil çiziyorsun. İnsanlar seni sorumluluk sahibi ve güvenilir biri olarak algılayabilir.",
    firstThreeSeconds:
      "İlk 3 saniyede düzen, ciddiyet ve güvenilirlik hissi öne çıkıyor.",
    socialPerception:
      "Sosyal algın özellikle profesyonel ortamlarda güçlü. İş, networking ve ciddi iletişimlerde olumlu bir başlangıç yapma potansiyelin yüksek.",
    trustAnalysis:
      "Güven algın istikrarlı. İnsanlar sende düzen, planlılık ve sorumluluk hissi görebilir.",
    communicationStyle:
      "Profesyonel İletişimci. Ölçülü, net ve dikkatli bir iletişim profili öne çıkıyor.",
    strengths: [
      "Ciddiye alınan duruş",
      "Güvenilir görünüm",
      "Düzenli profil algısı",
      "Profesyonel ortamlara uygun enerji"
    ],
    improvements: [
      "Daha samimi detaylar eklemek",
      "Profilde fazla resmi görünmemek",
      "İnsani sıcaklığı biraz daha göstermek"
    ],
    recommendations: [
      "Profesyonel ama doğal fotoğraflar kullan.",
      "Profilinde kısa ve net açıklamalar tercih et.",
      "Çok ciddi fotoğrafları daha sıcak karelerle dengele."
    ],
    finalSummary:
      "VibeLens değerlendirmesine göre profilin güvenilir ve profesyonel bir etki taşıyor. Bu enerji özellikle ciddi sosyal ve iş ortamlarında güçlü avantaj sağlayabilir."
  },
  {
    profileType: "Analitik Profil",
    charismaType: "Stratejik Zihin",
    vibelensSignature: "Zihin Mimarı",
    aura: "Derin Okyanus",
    auraDescription:
      "Derinlikli, düşünceli ve kolay çözülemeyen bir sosyal izlenim oluşturuyor.",
    rarity: "İlk %18",
    rarityLevel: "Nadir",
    badges: ["🧠 Stratejik Zihin", "📊 Analitik Bakış", "🌌 Kozmik Aura"],
    score: 86,
    vibe: "Analitik",
    result:
      "Düşünceli, kontrollü ve stratejik bir izlenim oluşturuyorsun.",
    firstImpression:
      "İlk bakışta düşünceli, sakin ve detaylara önem veren bir izlenim oluşturuyorsun. İnsanlar seni yüzeysel değil, daha derinlikli biri olarak algılayabilir.",
    firstThreeSeconds:
      "İlk 3 saniyede düşünceli, kontrollü ve merak uyandıran bir zihin algısı öne çıkıyor.",
    socialPerception:
      "Sosyal algında akılcı ve gözlemci bir taraf öne çıkıyor. Bu profil tipi genellikle hızlı parlamaktan çok, kaliteli iletişimlerde değer kazanır.",
    trustAnalysis:
      "Güven algın zihinsel derinlik ve tutarlılık üzerinden kuruluyor. İnsanlar seni mantıklı, kontrollü ve ölçülü biri olarak görebilir.",
    communicationStyle:
      "Analitik İletişimci. Konuşmadan önce değerlendiren, hızlı tepki vermek yerine anlamaya çalışan bir iletişim tarzı öne çıkıyor.",
    strengths: [
      "Düşünceli görünüm",
      "Kontrollü enerji",
      "Derinlikli algı",
      "Stratejik duruş"
    ],
    improvements: [
      "Daha spontane görünmek",
      "İlk izlenimde sıcaklığı artırmak",
      "Duygusal ifadeyi biraz daha görünür kılmak"
    ],
    recommendations: [
      "Daha doğal ve anlık fotoğraflar ekle.",
      "Profilinde sadece ciddi değil, samimi ifadeler de kullan.",
      "Göz teması ve hafif gülümseme algını güçlendirebilir."
    ],
    finalSummary:
      "VibeLens değerlendirmesine göre profilin stratejik, düşünceli ve kontrollü bir enerji taşıyor. Bu tarz profiller doğru ortamda oldukça güçlü ve kalıcı bir izlenim bırakabilir."
  },
  {
    profileType: "Enerjik Profil",
    charismaType: "Yüksek Enerji",
    vibelensSignature: "Enerjik Etki",
    aura: "Kozmik Alev",
    auraDescription:
      "Canlı, dinamik ve yüksek görünürlük potansiyeli taşıyan bir enerji veriyor.",
    rarity: "İlk %9",
    rarityLevel: "Çok Nadir",
    badges: ["⚡ Yüksek Enerji", "🔥 Sosyal Mıknatıs", "🚀 Yüksek Sosyal Potansiyel"],
    score: 91,
    vibe: "Enerjik",
    result:
      "Dinamik, canlı ve pozitif bir ilk izlenim oluşturuyorsun.",
    firstImpression:
      "İlk izlenimde hareketli, canlı ve dikkat çeken bir enerji yayıyorsun. İnsanlar seni bulunduğu ortama dinamizm katabilecek biri olarak algılayabilir.",
    firstThreeSeconds:
      "İlk 3 saniyede canlılık, sosyal hareket ve yüksek enerji algısı öne çıkıyor.",
    socialPerception:
      "Sosyal algında pozitiflik ve hareket öne çıkıyor. Bu profil tipi genellikle sosyal ortamlarda fark edilir ve çevresine enerji verebilir.",
    trustAnalysis:
      "Güven algın sıcaklık ve açıklık üzerinden oluşuyor. Ancak yüksek enerji bazen fazla hızlı veya dağınık algılanabilir; denge önemlidir.",
    communicationStyle:
      "Canlı İletişimci. Hızlı bağ kurabilen, enerjisiyle ortamı hareketlendiren bir iletişim tarzı öne çıkıyor.",
    strengths: [
      "Pozitif enerji",
      "Sosyal dikkat çekme",
      "Canlı ilk izlenim",
      "Ortam enerjisini yükseltme potansiyeli"
    ],
    improvements: [
      "Enerjiyi daha dengeli göstermek",
      "Daha sakin kareler de kullanmak",
      "İlk izlenimde güven hissini artırmak"
    ],
    recommendations: [
      "Doğal gülümsemeli fotoğraflar kullan.",
      "Hareketli ama net fotoğraflar seç.",
      "Profilinde enerjik ama sade ifadeler kullan."
    ],
    finalSummary:
      "VibeLens değerlendirmesine göre profilin canlı, pozitif ve dikkat çekici bir enerji taşıyor. Doğru dengeyle bu enerji güçlü bir sosyal avantaja dönüşebilir."
  },
  {
    profileType: "Sakin Profil",
    charismaType: "Sakin Güç",
    vibelensSignature: "Sessiz Etki",
    aura: "Gece Yıldızı",
    auraDescription:
      "Sessiz fakat zamanla güçlenen, olgun ve kalıcı bir etki oluşturuyor.",
    rarity: "İlk %16",
    rarityLevel: "Nadir",
    badges: ["🌙 Sakin Güç", "🏆 Güven Oluşturucu", "⭐ Sessiz Etki"],
    score: 85,
    vibe: "Sakin",
    result:
      "Olgun, huzurlu ve dengeli bir ilk izlenim oluşturuyorsun.",
    firstImpression:
      "İlk karşılaşmada sakin, huzurlu ve kontrollü bir izlenim bırakıyorsun. İnsanlar seni gerginlik yaratmayan, dengeli ve olgun biri olarak algılayabilir.",
    firstThreeSeconds:
      "İlk 3 saniyede sakinlik, olgunluk ve güvenli bir enerji hissi öne çıkıyor.",
    socialPerception:
      "Sosyal algında sakinlik ve güven hissi öne çıkıyor. Bu profil tipi özellikle derin ve kaliteli ilişkilerde güçlü bir etki bırakabilir.",
    trustAnalysis:
      "Güven algın yüksek çünkü profilin düşük çatışma ve yüksek denge hissi veriyor. İnsanlar senin yanında daha rahat hissedebilir.",
    communicationStyle:
      "Huzurlu İletişimci. Sakin, dinleyen ve karşı tarafı yormayan bir iletişim tarzı öne çıkıyor.",
    strengths: [
      "Huzurlu enerji",
      "Olgun görünüm",
      "Denge hissi",
      "Güven veren sakinlik"
    ],
    improvements: [
      "Daha canlı ifadeler kullanmak",
      "İlk izlenimde enerjiyi biraz artırmak",
      "Sosyal görünürlüğü yükseltmek"
    ],
    recommendations: [
      "Aydınlık ve sade fotoğraflar tercih et.",
      "Hafif gülümseme profilini güçlendirir.",
      "Profilinde sıcak ve kısa ifadeler kullan."
    ],
    finalSummary:
      "VibeLens değerlendirmesine göre profilin sakin ama etkili bir enerji taşıyor. Bu tarz etki hızlı değil, kalıcıdır; tanındıkça güçlenir."
  },
  {
    profileType: "Samimi Profil",
    charismaType: "Doğal Yakınlık",
    vibelensSignature: "Doğal Yakınlık",
    aura: "Kuzey Işığı",
    auraDescription:
      "Yakın hissettiren, sıcak ve pozitif sosyal bağ kurma enerjisi taşıyor.",
    rarity: "İlk %24",
    rarityLevel: "Az Görülen",
    badges: ["🤝 Doğal Yakınlık", "🌟 Pozitif Etki", "🫶 Yaklaşılabilir Karakter"],
    score: 86,
    vibe: "Samimi",
    result:
      "Yakın hissettiren, doğal ve pozitif bir izlenim oluşturuyorsun.",
    firstImpression:
      "İlk izlenimde ulaşılabilir, doğal ve samimi bir enerji veriyorsun. İnsanlar seninle iletişim kurmanın kolay olabileceğini düşünebilir.",
    firstThreeSeconds:
      "İlk 3 saniyede sıcaklık, doğallık ve yaklaşılabilirlik algısı öne çıkıyor.",
    socialPerception:
      "Sosyal algında sıcaklık ve doğallık öne çıkıyor. Bu profil tipi genellikle karşı tarafta güvenli ve rahat bir iletişim hissi oluşturur.",
    trustAnalysis:
      "Güven algın samimiyet üzerinden güçleniyor. İnsanlar sende yapay olmayan, doğal bir enerji hissedebilir.",
    communicationStyle:
      "Yakın İletişimci. Karşı tarafı rahatlatan, doğal ve sıcak bir iletişim tarzı öne çıkıyor.",
    strengths: [
      "Samimi duruş",
      "Doğal görünüm",
      "Ulaşılabilir enerji",
      "Pozitif ilk etki"
    ],
    improvements: [
      "Daha güçlü profil kompozisyonu kullanmak",
      "Fotoğraf kalitesini artırmak",
      "Samimiyeti profesyonel görünümle dengelemek"
    ],
    recommendations: [
      "Doğal ışıkta çekilmiş fotoğraflar kullan.",
      "Gülümseme içeren kareleri tercih et.",
      "Profilinde kısa ve içten açıklamalar kullan."
    ],
    finalSummary:
      "VibeLens değerlendirmesine göre profilin sıcak, doğal ve güven veren bir sosyal etki taşıyor. Bu özellik özellikle ilk iletişimlerde güçlü avantaj sağlayabilir."
  },
  {
    profileType: "Sosyal Profil",
    charismaType: "Sosyal Çekim",
    vibelensSignature: "Sosyal Mıknatıs",
    aura: "Galaktik Mor",
    auraDescription:
      "Sosyal ortamlarda fark edilme ve iletişim başlatma potansiyeli yüksek bir enerji taşıyor.",
    rarity: "İlk %14",
    rarityLevel: "Nadir",
    badges: ["🎉 Sosyal Çekim", "🔥 Sosyal Mıknatıs", "🌟 Dikkat Çekici Aura"],
    score: 89,
    vibe: "Sosyal",
    result:
      "Ulaşılabilir, dikkat çekici ve sosyal ortamlara uyumlu bir izlenim oluşturuyorsun.",
    firstImpression:
      "İlk izlenimde sosyal, açık ve iletişime yatkın bir profil çiziyorsun. İnsanlar seni yeni ortamlara kolay uyum sağlayabilecek biri olarak algılayabilir.",
    firstThreeSeconds:
      "İlk 3 saniyede sosyal açıklık, pozitif enerji ve iletişim potansiyeli öne çıkıyor.",
    socialPerception:
      "Sosyal algın oldukça güçlü. Bu profil tipi genellikle arkadaş ortamlarında, yeni tanışmalarda ve topluluk içinde olumlu görünürlük sağlar.",
    trustAnalysis:
      "Güven algın açıklık ve iletişim enerjisi üzerinden oluşuyor. İnsanlar seninle konuşmanın kolay olacağını düşünebilir.",
    communicationStyle:
      "Sosyal İletişimci. Bağ kurmayı bilen, ortamın havasını okuyabilen ve iletişimi canlı tutabilen bir tarz öne çıkıyor.",
    strengths: [
      "Sosyal görünürlük",
      "Ulaşılabilir enerji",
      "Yeni insanlarla bağ kurma potansiyeli",
      "Pozitif ortam etkisi"
    ],
    improvements: [
      "Daha derinlikli görünüm eklemek",
      "Enerjiyi fazla dağınık göstermemek",
      "Güven algısını güçlendirmek"
    ],
    recommendations: [
      "Sosyal ama sade fotoğraflar kullan.",
      "Profilinde pozitif ama abartısız ifadeler tercih et.",
      "Tek başına net göründüğün fotoğrafları öne çıkar."
    ],
    finalSummary:
      "VibeLens değerlendirmesine göre profilin sosyal çekim gücü yüksek ve ulaşılabilir bir enerji taşıyor. Doğru sunumla bu etki oldukça güçlü bir avantaja dönüşebilir."
  },
  {
    profileType: "Dengeli Profil",
    charismaType: "Dengeli Etki",
    vibelensSignature: "Dengeli Güç",
    aura: "Gümüş Denge",
    auraDescription:
      "Aşırılıktan uzak, güvenli, ölçülü ve istikrarlı bir sosyal enerji taşıyor.",
    rarity: "İlk %48",
    rarityLevel: "Yaygın",
    badges: ["🎯 Dengeli Profil", "🏆 Güven Oluşturucu", "⚖️ Dengeli Duruş"],
    score: 84,
    vibe: "Dengeli",
    result:
      "Ölçülü, tutarlı ve güvenli bir ilk izlenim oluşturuyorsun.",
    firstImpression:
      "İlk izlenimde dengeli, ölçülü ve sakin bir profil çiziyorsun. İnsanlar seni abartılı değil, daha tutarlı ve güvenli biri olarak algılayabilir.",
    firstThreeSeconds:
      "İlk 3 saniyede denge, ölçülülük ve güvenli bir ilk temas algısı öne çıkıyor.",
    socialPerception:
      "Sosyal algın uçlarda değil; bu da seni geniş kitleler için daha rahat kabul edilebilir hale getirir. Profilin dengeli ve istikrarlı bir enerji sunuyor.",
    trustAnalysis:
      "Güven algın orta-yüksek seviyede. İnsanlar sende aşırılıktan uzak, daha kontrollü ve güvenli bir izlenim görebilir.",
    communicationStyle:
      "Dengeli İletişimci. Ne fazla baskın ne de fazla geri planda kalan, ölçülü bir iletişim tarzı öne çıkıyor.",
    strengths: [
      "Tutarlı görünüm",
      "Dengeli enerji",
      "Geniş sosyal uyum",
      "Güvenli ilk izlenim"
    ],
    improvements: [
      "Daha belirgin bir kişisel stil oluşturmak",
      "Profilde ayırt edici detaylar eklemek",
      "İlk izlenimi daha akılda kalıcı hale getirmek"
    ],
    recommendations: [
      "Profilinde seni ayıran bir detay kullan.",
      "Fotoğraflarda daha net yüz ifadesi tercih et.",
      "Kısa ama karakterini gösteren açıklamalar ekle."
    ],
    finalSummary:
      "VibeLens değerlendirmesine göre profilin dengeli, güvenli ve sosyal olarak uyumlu bir etki taşıyor. Bu yapı geniş bir kitle tarafından olumlu algılanma potansiyeline sahip."
  }
];

export async function POST() {
  const selectedProfile =
    profiles[Math.floor(Math.random() * profiles.length)];

  const reportId = crypto.randomUUID();

 const { error } = await supabase.from("reports").insert({
  report_id: reportId,
  score: selectedProfile.score,
  vibe: selectedProfile.vibe,

  profile_type: selectedProfile.profileType,
  charisma_type: selectedProfile.charismaType,

  rarity: selectedProfile.rarity,

  vibelens_signature: selectedProfile.vibelensSignature,
  aura: selectedProfile.aura,
  aura_description: selectedProfile.auraDescription,
  rarity_level: selectedProfile.rarityLevel,
  first_three_seconds: selectedProfile.firstThreeSeconds,

  summary: selectedProfile.finalSummary,

  strengths: selectedProfile.strengths,
  weaknesses: selectedProfile.improvements,

  is_premium: false,
});

  if (error) {
    console.log("SUPABASE ERROR:", error);
  }

  return NextResponse.json({
    reportId,
    result: selectedProfile.result,
    score: selectedProfile.score,
    vibe: selectedProfile.vibe,
    premium: {
      attraction: selectedProfile.score,
      confidence: Math.min(selectedProfile.score + 2, 99),
      trust: Math.min(selectedProfile.score + 3, 99),
      dating: Math.max(selectedProfile.score - 4, 70),

      summary: selectedProfile.finalSummary,
      strengths: selectedProfile.strengths,
      weaknesses: selectedProfile.improvements,

      profileType: selectedProfile.profileType,
      charismaType: selectedProfile.charismaType,
      vibelensSignature: selectedProfile.vibelensSignature,
      aura: selectedProfile.aura,
      auraDescription: selectedProfile.auraDescription,
      rarity: selectedProfile.rarity,
      rarityLevel: selectedProfile.rarityLevel,
      badges: selectedProfile.badges,

      firstImpression: selectedProfile.firstImpression,
      firstThreeSeconds: selectedProfile.firstThreeSeconds,
      socialPerception: selectedProfile.socialPerception,
      trustAnalysis: selectedProfile.trustAnalysis,
      communicationStyle: selectedProfile.communicationStyle,
      improvements: selectedProfile.improvements,
      recommendations: selectedProfile.recommendations,
      finalSummary: selectedProfile.finalSummary,

      shareCardTitle: selectedProfile.profileType,
      shareCardSubtitle: `${selectedProfile.rarity} • ${selectedProfile.rarityLevel}`,
    },
  });
}