"use client";

import { useState } from "react";

export default function CheckPaymentButton({
  reportId,
}: {
  reportId: string;
}) {
  const [loading, setLoading] = useState(false);

  const checkPayment = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/shopier/check-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reportId }),
      });

      const data = await res.json();

      alert(data.message);

      if (data.success) {
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
      alert("Ödeme kontrol edilirken hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={checkPayment}
      disabled={loading}
      className="w-full p-4 rounded-xl bg-green-500 text-black font-bold hover:bg-green-400 transition disabled:opacity-60"
    >
      {loading ? "Kontrol Ediliyor..." : "✅ Ödememi Kontrol Et"}
    </button>
  );
}