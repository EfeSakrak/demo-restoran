import React, { useState } from 'react';
import { Phone, MapPin, MessageCircle, Star, Clock } from 'lucide-react';

const MENU_DATA = [
  {
    id: 1,
    category: 'Burgerler',
    name: 'Trio Smoked Burger',
    description: '%100 dana köfte, tütsülenmiş cheddar, karamelize soğan, özel sos.',
    price: '340 TL',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 2,
    category: 'Burgerler',
    name: 'Crispy Chicken Burger',
    description: 'Çıtır tavuk pirzola, coleslaw salata, acılı mayonez.',
    price: '280 TL',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 3,
    category: 'İçecekler',
    name: 'Ev Yapımı Buzlu Çay',
    description: 'Taze şeftali aromalı, nane yaprakları ile.',
    price: '85 TL',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 4,
    category: 'Tatlılar',
    name: 'San Sebastian Cheesecake',
    description: 'Akışkan kıvamlı, sıcak Belçika çikolatası sosu ile.',
    price: '190 TL',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&auto=format&fit=crop&q=60'
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Burgerler');
  const categories = ['Burgerler', 'İçecekler', 'Tatlılar'];

  const filteredMenu = MENU_DATA.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pb-24 font-sans">
      {/* Hero Header */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&auto=format&fit=crop&q=60')` }}>
        <div className="absolute inset-0 bg-black/65 backdrop-blur-sm flex flex-col justify-end p-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
              <Clock className="w-3 h-3" /> Şu an Açık (23:00'e kadar)
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Lezzet Durağı Burger</h1>
          <p className="text-neutral-300 text-sm mt-1">El Yapımı Gurme Burgerler & Özel Soslar</p>
          
          <div className="flex items-center gap-4 mt-3 text-xs text-neutral-400">
            <span className="flex items-center gap-1 text-amber-400 font-semibold">
              <Star className="w-4 h-4 fill-amber-400" /> 4.9 (240+ Değerlendirme)
            </span>
            <span>•</span>
            <span>İzmir</span>
          </div>
        </div>
      </div>

      {/* İletişim & Aksiyon Butonları */}
      <div className="grid grid-cols-3 gap-2 p-4 bg-neutral-900 border-b border-neutral-800 text-xs">
        <a href="tel:05555555555" className="flex flex-col items-center justify-center p-2.5 bg-neutral-800 rounded-lg text-neutral-200 active:scale-95 transition">
          <Phone className="w-4 h-4 mb-1 text-emerald-400" />
          Hemen Ara
        </a>
        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-2.5 bg-neutral-800 rounded-lg text-neutral-200 active:scale-95 transition">
          <MapPin className="w-4 h-4 mb-1 text-amber-400" />
          Yol Tarifi
        </a>
        <a href="https://wa.me/905555555555" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-2.5 bg-neutral-800 rounded-lg text-neutral-200 active:scale-95 transition">
          <MessageCircle className="w-4 h-4 mb-1 text-green-400" />
          WhatsApp
        </a>
      </div>

      {/* Menü Kategori Tabları */}
      <div className="sticky top-0 bg-neutral-950/90 backdrop-blur-md z-10 p-4 border-b border-neutral-800">
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                activeCategory === cat
                  ? 'bg-amber-500 text-neutral-950'
                  : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menü Listesi */}
      <div className="p-4 space-y-4 max-w-2xl mx-auto">
        {filteredMenu.map((item) => (
          <div key={item.id} className="flex gap-4 p-3 bg-neutral-900 border border-neutral-800/80 rounded-xl overflow-hidden shadow-sm">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg shrink-0" />
            <div className="flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-semibold text-neutral-100 text-base">{item.name}</h3>
                <p className="text-neutral-400 text-xs mt-1 line-clamp-2">{item.description}</p>
              </div>
              <span className="font-bold text-amber-400 text-sm mt-2">{item.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobil Alt Sabit Aksiyon Çubuğu */}
      <div className="fixed bottom-0 left-0 right-0 bg-neutral-900/95 backdrop-blur-lg border-t border-neutral-800 p-3 flex gap-3 z-50 max-w-md mx-auto">
        <a href="tel:05555555555" className="flex-1 bg-amber-500 text-neutral-950 font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm active:scale-95 transition">
          <Phone className="w-4 h-4" /> Masaya Sipariş / Ara
        </a>
        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="bg-neutral-800 text-neutral-200 p-3 rounded-xl flex items-center justify-center active:scale-95 transition">
          <MapPin className="w-4 h-4 text-amber-400" />
        </a>
      </div>
    </div>
  );
}
