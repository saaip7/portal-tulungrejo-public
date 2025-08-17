"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DocumentsUpdated() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="container mx-auto px-4 pb-12 max-w-3xl">
        <section className="py-12">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 text-center text-2xl">
                Pembaruan Dokumen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 text-gray-700">
                <p>
                  File "Profil Desa Tulungrejo Tahun 2025" baru saja diperbarui
                  oleh tim administrasi. Saat ini file lama telah dihapus sementara
                  dan dokumen baru sedang diproses untuk publikasi.
                </p>

                <p>
                  Jika Anda mencari tautan unduhan sebelumnya, cek kembali beberapa
                  saat kemudian atau hubungi pihak desa untuk versi final. Kami
                  mohon maaf atas ketidaknyamanan ini.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/profil">
                    <Button className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-2">
                      Kembali ke Profil
                    </Button>
                  </Link>

                  <Link href="/">
                    <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2">
                      Beranda
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
