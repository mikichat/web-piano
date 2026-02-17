
import React from 'react';
import { Play, Music2, Star, ChevronRight, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1C1C1C] font-sans selection:bg-[#D4AF37] selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-[#1C1C1C] rounded-full flex items-center justify-center">
                <Music2 size={18} strokeWidth={1} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif tracking-wider uppercase">Melody</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">Piano Studio</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-12 text-xs uppercase tracking-[0.2em] font-medium text-gray-500">
              <a href="#philosophy" className="hover:text-[#D4AF37] transition-colors">Philosophy</a>
              <a href="#lessons" className="hover:text-[#D4AF37] transition-colors">Lessons</a>
              <a href="#teachers" className="hover:text-[#D4AF37] transition-colors">Teachers</a>
              <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
            </div>
            <button className="hidden md:block border border-[#1C1C1C] px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-[#1C1C1C] hover:text-white transition-colors duration-500">
              Inquiry
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center parallax scale-105"></div>
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto text-white">
          <p className="text-xs md:text-sm tracking-[0.5em] uppercase mb-8 font-light text-[#D4AF37] animate-fade-in-up">
            Premium Music Education
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin mb-12 leading-none font-serif italic tracking-tight">
            The Art of <br/>
            <span className="not-italic font-light">Resonance</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-16 font-light leading-relaxed max-w-lg mx-auto border-t border-white/20 pt-8 mt-8">
            깊이 있는 울림, 섬세한 터치.<br/>
            당신의 일상에 음악이라는 우아함을 더해드립니다.
          </p>
          <button className="group flex items-center gap-4 mx-auto text-sm uppercase tracking-[0.3em] hover:text-[#D4AF37] transition-colors">
            <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center group-hover:border-[#D4AF37] transition-colors">
              <ArrowRight size={16} />
            </div>
            View Curriculum
          </button>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-32 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#D4AF37] z-0"></div>
              <div className="aspect-[4/5] overflow-hidden relative z-10">
                <img src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
            </div>
            <div className="space-y-10">
              <h2 className="text-5xl md:text-6xl font-serif font-light leading-tight">
                Music is the <br/>
                <span className="italic text-[#D4AF37]">Language</span> of<br/>
                the Soul.
              </h2>
              <div className="w-12 h-[1px] bg-[#1C1C1C]"></div>
              <p className="text-gray-500 leading-loose font-light text-lg">
                멜로디 피아노는 단순한 기능 습득을 넘어 음악을 통한 소통과 치유를 지향합니다.
                1:1 개인별 맞춤 커리큘럼으로 기초부터 탄탄하게, 그리고 즐겁게 음악을 향유할 수 있도록 지도합니다.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h3 className="font-serif text-2xl mb-2">15+</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-400">Years Experience</p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl mb-2">100%</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-400">University Acceptance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Cards */}
      <section id="lessons" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">Our Classes</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mt-4">Curriculum</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-100 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { title: "Hobby", desc: "취미반", detail: "For Adult & Kids" },
              { title: "Major", desc: "전공/입시반", detail: "Intensive Care" },
              { title: "Pro", desc: "전문가반", detail: "Master Class" },
            ].map((item, idx) => (
              <div key={idx} className="group p-12 md:p-16 hover:bg-[#FDFBF7] transition-colors cursor-pointer text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <h3 className="text-3xl font-serif italic mb-4">{item.title}</h3>
                <p className="text-sm font-bold text-gray-800 mb-2">{item.desc}</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">{item.detail}</p>
                <div className="w-8 h-8 rounded-full border border-gray-200 mx-auto flex items-center justify-center group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-colors">
                  <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1C1C] text-white py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="mb-10">
            <Music2 size={32} strokeWidth={0.5} className="mx-auto mb-6 text-[#D4AF37]" />
            <h2 className="text-3xl font-serif italic mb-2">Melody Piano</h2>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Premium Studio</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-xs uppercase tracking-widest text-gray-400 mb-16">
            <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-white cursor-pointer transition-colors">Youtube</span>
            <span className="hover:text-white cursor-pointer transition-colors">Blog</span>
          </div>
          <p className="text-[10px] text-gray-600 uppercase tracking-wider">
            © 2024 Melody Piano Studio. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
