function setup() {
  createCanvas(400, 400, WEBGL);  // Menentukan ukuran canvas dan mode WEBGL untuk 3D
}

function draw() {
  background(200);

  // Penerapan transformasi untuk rotasi
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  
  // Membuat topi (menggunakan bentuk kerucut dengan radius yang berbeda)
  push();  // Simpan keadaan transformasi
  fill(34, 139, 34);  // Warna hijau untuk kerucut
  cone(100);  // Membuat kerucut sebagai topi dengan radius 100
  pop();  // Kembalikan transformasi ke keadaan semula
}
