import { Brain, ArrowLeftRight } from "lucide-react";
import {
  SiTensorflow,
  SiAndroidstudio,
  SiFirebase,
  SiReact,
  SiYoutube,
} from "react-icons/si";
import pythonLogo from "devicon/icons/python/python-original.svg";
import javaLogo from "devicon/icons/java/java-plain.svg";
import html5Logo from "devicon/icons/html5/html5-plain.svg";

// Styling per teknologi: konsep "outline" — badge nggak ada background fill,
// cuma border tipis yang warnanya ngikutin warna icon-nya persis.
// Kalau icon-nya cuma 1 warna → border solid 1 warna.
// Kalau icon-nya 2 warna (misal Python: biru + kuning) → border-nya gradient
// dua warna itu juga (pakai array [warna1, warna2]).
// Tech yang belum didaftarin di sini otomatis fallback ke gaya default netral.
export const techColors = {
  Python: ["#3776AB", "#FFD43B"],
  TensorFlow: "#FF6F00",
  GAN: "#8B5CF6",
  pix2pix: "#8B5CF6",
  Java: "#f89820",
  "Android Studio": "#3DDC84",
  Firebase: "#FFCA28",
  React: "#61DAFB",
  Canvas: "#E34F26",
  "YouTube API": "#FF0000",
};
export const defaultBadgeClass = "border-border bg-surface text-ink";

export const techIcons = {
  Python: <img src={pythonLogo} alt="Python" style={{ width: "14px", height: "14px" }} />,
  TensorFlow: (
    <span style={{ color: "#FF6F00" }}>
      <SiTensorflow />
    </span>
  ),
  GAN: (
    <span className="text-accent">
      <Brain size={13} />
    </span>
  ),
  pix2pix: (
    <span className="text-accent">
      <ArrowLeftRight size={13} />
    </span>
  ),
  Java: <img src={javaLogo} alt="Java" style={{ width: "14px", height: "14px" }} />,
  "Android Studio": (
    <span style={{ color: "#3DDC84" }}>
      <SiAndroidstudio />
    </span>
  ),
  Firebase: (
    <span style={{ color: "#FFCA28" }}>
      <SiFirebase />
    </span>
  ),
  React: (
    <span style={{ color: "#61DAFB" }}>
      <SiReact />
    </span>
  ),
  Canvas: <img src={html5Logo} alt="Canvas" style={{ width: "14px", height: "14px" }} />,
  "YouTube API": (
    <span style={{ color: "#FF0000" }}>
      <SiYoutube />
    </span>
  ),
};

export default function TechBadge({ tech }) {
  const icon = techIcons[tech] || null;
  const color = techColors[tech];
  const isGradient = Array.isArray(color);

  // Border gradient dibikin pakai trik 2 layer background: layer dalam (warna
  // putih, nutupin bagian tengah) + layer luar (gradient, cuma keliatan di
  // pinggir karena di-"potong" pas di batas border lewat backgroundClip).
  const style = isGradient
    ? {
        border: "1.5px solid transparent",
        backgroundImage: `linear-gradient(#fff, #fff), linear-gradient(90deg, ${color[0]}, ${color[1]})`,
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      }
    : color
      ? { border: `1.5px solid ${color}`, backgroundColor: "#fff" }
      : undefined;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12.5px] font-medium text-ink ${
        color ? "" : `border ${defaultBadgeClass}`
      }`}
      style={style}
    >
      {icon && <span className="flex items-center text-[13px]">{icon}</span>}
      {tech}
    </span>
  );
}
