import { NextResponse } from "next/server";

export async function POST() {
  const scores = [72, 78, 85, 91, 88];
  const vibes = ["Çekici", "Güvenilir", "Etkileyici", "Sakin", "Karizmatik"];

  const results = [
    "Güçlü bir ilk izlenim. Sosyal ortamlarda dikkat çekme potansiyeli yüksek.",
    "Dengeli ve güven veren bir profil. İnsanlar tarafından kolay kabul edilir.",
    "Yüksek sosyal enerji tespit edildi. Pozitif bir etki bırakıyor.",
    "Olgun ve kontrollü bir sosyal duruş mevcut.",
    "Karizmatik ve dikkat çekici bir aura algılandı."
  ];

  const score = scores[Math.floor(Math.random() * scores.length)];
  const vibe = vibes[Math.floor(Math.random() * vibes.length)];
  const result = results[Math.floor(Math.random() * results.length)];

  return NextResponse.json({
    result,
    score,
    vibe
  });
}