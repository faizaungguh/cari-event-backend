## Sistem Terdistribusi

### Identitas Kelompok 2

| No  | Nama                  | NPM        |
| --- | --------------------- | ---------- |
| 1.  | Ungguh Faizaturrohman | 23SA11C216 |
| 2.  | Bagus Ade Prayoga     | 21SA1205   |
| 3.  | M. Najmi              | 22SA11B281 |
| 4.  | Hakim Annaisaburi     | 23SA11B030 |

### Dosen dan Asisten Dosen

| No  | Nama                 | Status        |
| --- | -------------------- | ------------- |
| 1.  | Riyanto              | Dosen         |
| 2.  | Velizha Sandy Kusuma | Asisten Dosen |
| 3.  | Aldona Septiana      | Asisten Dosen |

> **REST API**
>
> REST API digunakan untuk menjembatani komunikasi pertukaran data dari client server ke database, client dapat berupa web/aplikasi "Cari Event", dashboard konsumen, dashboard kreator, dashboard admin, dan sebagainya
>
> **Frontend Client**
>
> Frontend terdiri dari 3 halaman utama, yaitu Web "Cari Event", Dashboard Creator, Dashboard Customer, dan Dashboard Admin

### Stack

#### Backend API

- Express Js
- MongoDB
- Prisma Js
- JSON Web Token

#### Frontend Client

Repository:

- Vue Js
- Pinia Js
- Axios

```bash
git clone https://github.com/faizaungguh/cari-event-docs
```

### Repository Backend

```bash
git clone https://github.com/faizaungguh/cari-event-backend
```

### Repository Frontend

```bash
git clone https://github.com/faizaungguh/cari-event-frontend
```

### BaseUrl

Berikut adalah contoh Based URL yang digunakan untuk mengakses

BaseUrl :

```url
http://localhost:3000/api/v1
```

Menyertakan token access berupa JWT untuk Endpoint yang diproteksi

## Cara untuk menjalankan

harus ada mysql dan nodejs
install semua package

```bash
npm install
```

inisiasi prisma

```bash
npx prisma init
```

generate prisma || supaya bisa dipakai PrismaClient nya

```bash
npx prisma generate
```

migrate model

```bash
npx prisma migrate dev --create-only
```

run development

```bash
npm run dev
```

lalu buka api client untuk testing
