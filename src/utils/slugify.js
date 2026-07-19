// Ubah nama project jadi slug URL-friendly, misal:
// "Pix2Pix Sketch Colorizer" -> "pix2pix-sketch-colorizer"
export function slugify(text) {
  return text
    .toString()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // buang diakritik
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // buang karakter selain huruf/angka/spasi/dash
    .replace(/\s+/g, "-") // spasi -> dash
    .replace(/-+/g, "-"); // dash berulang -> satu dash
}
