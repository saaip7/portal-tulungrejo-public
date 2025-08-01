# Portal Tulungrejo Public

Portal informasi publik untuk Desa Tulungrejo yang menyediakan berbagai link penting dan informasi bagi masyarakat.

## Features

- 📱 Responsive design untuk semua perangkat
- 🔗 Manajemen link dinamis dari backend
- 🎨 Hero slideshow untuk informasi penting
- 🏷️ Kategori link yang terorganisir
- ⚡ Fast loading dengan Next.js

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, atau bun
- Backend API (berjalan di localhost:5000 secara default)

### Installation

1. Clone repository:
   ```bash
   git clone <repository-url>
   cd portal-tulungrejo-public
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Setup environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Edit `.env.local` sesuai konfigurasi backend Anda:
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
   ```

5. Run development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) dengan browser Anda.

## Environment Configuration

Aplikasi ini menggunakan environment variables untuk konfigurasi backend API. Lihat [docs/ENVIRONMENT.md](./docs/ENVIRONMENT.md) untuk detail lengkap.

### Development
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
```

### Production
```env
NEXT_PUBLIC_API_BASE_URL=https://api.tulungrejo.com
```

## API Integration

Aplikasi ini terintegrasi dengan backend API untuk:
- Mengambil daftar link dinamis
- Kategori link
- Manajemen konten

Expected API endpoints:
- `GET /api/links` - Ambil semua link
- `GET /api/links/:id` - Ambil link spesifik
- `POST /api/links` - Buat link baru
- `PUT /api/links/:id` - Update link
- `DELETE /api/links/:id` - Hapus link

## Deployment

### Vercel (Recommended)

1. Connect repository ke Vercel
2. Set environment variable `NEXT_PUBLIC_API_BASE_URL` ke production backend URL
3. Deploy

### Other Platforms

1. Build aplikasi:
   ```bash
   npm run build
   ```

2. Start production server:
   ```bash
   npm start
   ```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React

## Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push ke branch
5. Create Pull Request

## License

[MIT License](LICENSE)
