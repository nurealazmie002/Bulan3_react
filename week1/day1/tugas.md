soal2. Memahami perbedaan JSX dan html 
jawab:
-perbedaan nya adalah jsx butuh {} untuk menyisipkan variabel
-berbeda di beberapa atribut sepert class = className ,dll
contoh

html 
<div class="container">
  <h1>Hello World</h1>
</div>

JSX
const name = "Naufal";
const element = (
  <div className="container">
    <h1>Hello {name}</h1>
  </div>
);


soal3. Menjelaskan konsep virtual DOM
jawab: 
adalah representasi ringan dari DOM yang disimpan di memori.
cara kerja:
Render - Diffing - commit untuk optimalisasi performa


soal4. Menjelaskan perbedaan SPA dan MPA
jawab: 

SPA:
Memuat satu halaman html dan memperbarui konten secara dinamis
minus - susah untuk search engine dan load mulai nya lama
plus - performa cepat setelah initial load & user experience yang mulus

MPA:
Memuat multiple halamn HTML
minus - user experience kurang mulus ,interaksi lambat
plus - bagus untuk search engine,initial load cepat