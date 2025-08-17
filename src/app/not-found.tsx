"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <section>
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 text-center text-2xl">Halaman Tidak Ditemukan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700 text-center">
                <p>Maaf, halaman yang Anda cari tidak tersedia.</p>
                <p>Periksa URL atau kembali ke halaman utama.</p>

                <div className="flex justify-center gap-3 mt-4">
                  <Link href="/">
                    <Button className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-2">Beranda</Button>
                  </Link>

                  <Link href="/profil">
                    <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2">Profil</Button>
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
