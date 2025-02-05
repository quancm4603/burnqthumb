"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const images = [
  { id: 1, src: "/MC.webp", title: "Minecraft Landscape", price: "$10" },
  { id: 2, src: "/minecraft2.jpg", title: "Creeper Explosion", price: "$12" },
  { id: 3, src: "/minecraft3.jpg", title: "Diamond Mine", price: "$15" },
  { id: 4, src: "/minecraft4.jpg", title: "Nether Adventure", price: "$18" },
];

export default function MinecraftShop() {
  const [selected, setSelected] = useState<{ id: number; src: string; title: string; price: string } | null>(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      {/* Slider lớn */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000 }}
        className="w-full h-[60vh]" // Chiều rộng full màn hình và chiều cao 60% chiều cao màn hình
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className="flex justify-center items-center">
            <Image
              src={image.src}
              alt={image.title}
              width={800}
              height={400}
              className="rounded-lg object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Tiêu đề */}
      <motion.h1
        className="text-4xl font-bold mt-10 mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Minecraft Image Shop
      </motion.h1>

      {/* Danh sách ảnh */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <motion.div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelected(image)}
          >
            <Image
              src={image.src}
              alt={image.title}
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-70 text-white w-full p-2 text-center">
              <p className="text-lg font-semibold">{image.title}</p>
              <p className="text-sm">{image.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup chi tiết hình ảnh */}
      {selected && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
        >
          <motion.div
            className="bg-white rounded-lg p-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
          >
            <Image src={selected.src} alt={selected.title} width={500} height={300} />
            <p className="text-black text-center mt-2">{selected.title} - {selected.price}</p>
          </motion.div>
        </motion.div>
      )}
      <iframe width="878" height="494" src="https://www.youtube.com/embed/-UDguPEyDiw" title="Minecraft  Banner SpeedArt - Keep" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe width="878" height="494" src="https://www.youtube.com/embed/M7Z0_coxJSw" title="Minecraft Banner SpeedArt - BdvnDepzai" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
}
