import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await request.json();

    // Di sini Anda dapat memanggil API Midtrans/Xendit/Mayar secara riil
    // Contoh response mock data:
    return NextResponse.json({
      status: 'success',
      paymentUrl: 'https://checkout.paymentgateway.com/pay-12345',
      message: 'Transaksi berhasil dibuat',
    });
  } catch {
    return NextResponse.json(
      { status: 'error', message: 'Gagal memproses transaksi' },
      { status: 500 }
    );
  }
}