import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import MagicmushroomLogo from '@/assets/alice.png';
import testimonio1 from '@/assets/preg.jpeg';
import testimonio2 from '@/assets/preg.jpeg';
import testimonio3 from '@/assets/preg.jpeg';
import { GiSpotedFlower, GiMeditation, GiForestCamp } from "react-icons/gi";
import { TbMushroom } from "react-icons/tb";
import { FaLeaf } from "react-icons/fa";
import Header from "../components/header/Header";
import Shop from "./Shop";

export default function MagicmushroomPage() {

  const experiencias = [
    {
      icon: <GiMeditation className="w-12 h-12 text-[var(--brown-2)]" />,
      title: "Retiros Guiados",
      desc: "Sesiones terapéuticas con psicólogos certificados en entornos naturales.",
    },
    {
      icon: <GiForestCamp className="w-12 h-12 text-[var(--brown-2)]" />,
      title: "Conexión con la Naturaleza",
      desc: "Experiencias de inmersión en bosques sagrados con ceremonias ancestrales.",
    },
    {
      icon: <TbMushroom className="w-12 h-12 text-[var(--brown-2)]" />,
      title: "Talleres Educativos",
      desc: "Aprende sobre micología y uso responsable de psilocibina.",
    },
  ];

  const productosSalud = [
    {
      icon: <FaLeaf className="w-12 h-12 text-[var(--green)]" />,
      title: "Tés Ancestrales",
      desc: "Mezclas de hierbas para apoyo emocional y claridad mental",
    },
    {
      icon: <GiSpotedFlower className="w-12 h-12 text-[var(--green)]" />,
      title: "Suplementos Naturales",
      desc: "Microdosis en cápsulas con seguimiento terapéutico",
    },
  ];

  const icons = [
    { id: 1, imgSrc: 'busq.jpeg', label: 'Naturaleza' },
    { id: 2, imgSrc: 'cacao.jpeg', label: 'Bienestar' },
    { id: 3, imgSrc: 'fung.jpeg', label: 'Salud' },
    { id: 4, imgSrc: 'granj.jpeg', label: 'Meditación' },
    { id: 5, imgSrc: 'magicul.jpeg', label: 'Yoga' },
    { id: 6, imgSrc: 'preg.jpeg', label: 'Terapias' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--light-tan)] text-[var(--black)]">
      <Header />
      {/* Sección Hero minimalista */}
      <section className="relative py-40 overflow-hidden">
        {/* Fondo con imagen y opacidad */}
        <div className="absolute inset-0 bg-black opacity-80 ">
          <img
            src="/backg.jpeg"
            alt="Fondo"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-wrap items-center -mx-4">
            {/* Columna izquierda con texto */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-xl">
                <h1 className="text-6xl font-bold mb-6 text-[var(--tan)] tracking-wide">
                  Universe
                  <span className="block text-3xl mt-4 font-normal">Freshen up your mind</span>
                </h1>

                <p className="text-xl mb-8 text-[var(--tan)]">
                  Un espacio desde la naturaleza, lo carácter y lo constructo se encuentran para transformar tu bienestar.
                </p>

                <Button className="bg-transparent border-2 border-[var(--brown)] text-[var(--tan)] hover:bg-[var(--brown)] hover:text-white px-8 py-3">
                  ¡Comprar ahora!
                </Button>
              </div>
            </div>

            {/* Columna derecha con imagen secundaria */}
            <div className="w-full lg:w-1/2 px-4 flex justify-center">
              <div className="relative rounded-lg overflow-hidden shadow-xl group">
                {/* Imagen principal */}
                <img
                  src="/choco.png"
                  alt="Espacio natural"
                  className="w-auto h-80 object-cover transform transition-all duration-300 mx-auto rounded-2xl group-hover:rounded-[50px] group-hover:scale-105"
                />

                {/* Imagen secundaria sobrepuesta */}
                <img
                  src="/Magicmushroom-logo.png"
                  alt="Detalle"
                  className="absolute bottom-[-15px] right-[-15px] w-24 h-24 object-cover rounded-full border-1 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex justify-center flex-wrap gap-8">
          {icons.map((item) => (
            <div key={item.id} className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-full bg-[var(--tan)] flex items-center justify-center mb-4 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <img
                  src={item.imgSrc}
                  alt={item.label}
                  className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-medium text-[var(--brown)] text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>
      
      <Shop />

      {/* Sección Hero
      <section className="relative py-32 bg-[url('nature-background.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[var(--tan)]/80"></div>
        <div className="container mx-auto px-4 relative text-center">
          <h1 className="text-5xl font-bold mb-6 text-[var(--brown-2)]">
            Transformación a través de la naturaleza
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Guiados por profesionales de la salud mental, redescubre tu conexión interior
          </p>
          <Button className="bg-[var(--brown-2)] text-[var(--light-tan)] hover:bg-[var(--brown)]">
            Explora Nuestras Experiencias
          </Button>
        </div>
      </section>
      <section className="py-20 bg-[var(--light-tan)]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[var(--brown)]">
            Experiencias Conscientes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {experiencias.map((exp, index) => (
              <div key={index} className="p-8 bg-[var(--tan)] rounded-lg shadow-md">
                <div className="text-center mb-6">{exp.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--brown-2)]">{exp.title}</h3>
                <p className="text-[var(--faded-brown)]">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Sección Healthy
      <section className="py-20 bg-[var(--light-tan)]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[var(--green)]">
            Bienestar Integral
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {productosSalud.map((prod, index) => (
              <div key={index} className="flex items-start gap-6 p-6 bg-[var(--tan)] rounded-lg">
                <div className="flex-shrink-0">{prod.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[var(--green)]">{prod.title}</h3>
                  <p className="text-[var(--faded-brown)]">{prod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-black text-white py-12 mt-auto">
  <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
    {/* Logo y descripción */}
    <div>
      <img src={MagicmushroomLogo} alt="Logo" className="h-20 mb-4" />
      <p className="text-gray-400">Guiados por profesionales de la salud mental</p>
    </div>

    {/* Contacto */}
    <div>
      <h4 className="text-lg font-bold mb-4 text-white">Contacto</h4>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-green-400" />
          <span className="text-gray-300">+57 312 2592720</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-green-400" />
          <span className="text-gray-300">magicmushroomchocolate@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-green-400" />
          <span className="text-gray-300">Manizales, Colombia</span>
        </div>
      </div>
    </div>

    {/* Redes sociales */}
    <div>
      <h4 className="text-lg font-bold mb-4 text-white">Síguenos</h4>
      <a
        href="https://instagram.com/magic.mushroomcol"
        target="_blank"
        rel="noopener"
        className="flex items-center gap-2 hover:text-green-400 transition-colors"
      >
        <Instagram className="w-6 h-6" />
        <span className="text-gray-300">@magic.mushroomcol</span>
      </a>
    </div>
  </div>

  {/* Copyright */}
  <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
    <p>© 2025 Magic Mushroom Col. Todos los derechos reservados.</p>
  </div>
</footer>

    </div>
  );
}