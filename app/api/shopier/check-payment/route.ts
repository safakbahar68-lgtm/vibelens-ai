import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { reportId } = await req.json();

    if (!reportId) {
      return NextResponse.json(
        { success: false, message: "Report ID bulunamadı." },
        { status: 400 }
      );
    }

    const token = process.env.SHOPIER_PAT;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "SHOPIER_PAT tanımlı değil." },
        { status: 500 }
      );
    }

    const res = await fetch(
      "https://api.shopier.com/v1/orders?limit=50&page=1&sort=dateDesc",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      const errorText = await res.text();

      return NextResponse.json(
        {
          success: false,
          message: "Shopier siparişleri alınamadı.",
          detail: errorText,
        },
        { status: 500 }
      );
    }

    const orders = await res.json();

    const orderList = Array.isArray(orders)
      ? orders
      : orders.data || orders.orders || [];

    const matchedOrder = orderList.find((order: any) => {
      const note = String(order.note || "");
      const paymentStatus = String(order.paymentStatus || "").toLowerCase();

      return note.includes(reportId) && paymentStatus === "paid";
    });

    if (!matchedOrder) {
      return NextResponse.json({
        success: false,
        message:
          "Ödeme henüz bulunamadı. Lütfen Shopier ödeme notuna Premium Report Link'i eklediğinden emin ol.",
      });
    }

    const { error } = await supabase
      .from("reports")
      .update({ is_premium: true })
      .eq("report_id", reportId);

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: "Premium rapor açılırken hata oluştu.",
          detail: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Ödeme doğrulandı. Premium rapor açıldı.",
      reportId,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Beklenmeyen bir hata oluştu.",
      },
      { status: 500 }
    );
  }
}