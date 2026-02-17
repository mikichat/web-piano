
import React from 'react';
import { Music, PlayCircle, Star, Calendar, MapPin, Phone, Instagram } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-serif text-[#1C1C1C] selection:bg-[#D4AF37] selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#EAEaea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#1C1C1C] rounded-full flex items-center justify-center">
                <Music size={14} strokeWidth={1.5} />
              </div>
              <span className="text-xl tracking-widest uppercase font-light">Melody Piano</span>
            </div>
            <div className="hidden md:flex space-x-12 text-sm uppercase tracking-widest font-light text-gray-500">
              <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
              <a href="#lessons" className="hover:text-[#D4AF37] transition-colors">Lessons</a>
              <a href="#teachers" className="hover:text-[#D4AF37] transition-colors">Teachers</a>
              <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
            </div>
            <button className="hidden md:block px-6 py-2 border border-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white transition-colors text-xs uppercase tracking-widest">
              Book a Lesson
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center parallax"></div>
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto text-white">
          <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-8 font-light text-[#D4AF37] animate-fade-in-up">
            Premium Music Education
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin mb-10 leading-tight tracking-tight font-serif italic">
            Discover the <br/>
            <span className="not-italic font-normal">Art of Piano</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-xl mx-auto font-light leading-relaxed font-sans">
            음악이 주는 깊은 울림을 경험하세요.<br/>
            기초부터 전공까지, 당신만을 위한 프라이빗 레슨.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-[#D4AF37] hover:bg-[#C5A028] text-white font-sans text-sm tracking-widest uppercase transition-all shadow-xl shadow-[#D4AF37]/20 transform hover:scale-105">
              Start Your Journey
            </button>
            <button className="px-10 py-4 border border-white hover:bg-white hover:text-[#1C1C1C] text-white font-sans text-sm tracking-widest uppercase transition-all backdrop-blur-sm">
              View Curriculum
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 animate-pulse">
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-32 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop" alt="Piano Playing" className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#1C1C1C] text-white p-8 flex flex-col justify-center items-center text-center">
                <span className="text-4xl font-light mb-2">15+</span>
                <span className="text-xs uppercase tracking-widest text-gray-400">Years of<br/>Experience</span>
              </div>
            </div>
            
            <div className="space-y-10">
              <div>
                <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4 block">Our Philosophy</span>
                <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                  Music is the <br/>
                  Language of the Soul
                </h2>
                <div className="w-16 h-[1px] bg-[#1C1C1C] mb-8"></div>
                <p className="text-gray-600 leading-loose font-sans font-light text-lg">
                  단순히 악보를 읽고 건반을 누르는 기술이 아닌, <br/>
                  음악을 통해 감정을 표현하고 소통하는 법을 가르칩니다. <br/>
                  한 사람 한 사람의 속도에 맞춘 따뜻한 지도로 <br/>
                  평생의 친구가 될 음악을 선물합니다.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 font-sans">
                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Star size={16} className="text-[#D4AF37]"/> 1:1 Customized</h3>
                  <p className="text-sm text-gray-500 font-light">개인별 맞춤 커리큘럼</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Star size={16} className="text-[#D4AF37]"/> Premium Facility</h3>
                  <p className="text-sm text-gray-500 font-light">야마하 그랜드 피아노 완비</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Section */}
      <section id="lessons" className="py-32 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-4 block">Curriculum</span>
          <h2 className="text-3xl md:text-4xl font-light mb-20">Choose Your Class</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-gray-100 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { title: "Hobby Class", subtitle: "취미반", desc: "좋아하는 곡을 연주하며 힐링하는 시간", time: "Weekly 2 Sessions" },
              { title: "Kids Class", subtitle: "영재반", desc: "음악적 감수성과 기초를 탄탄하게", time: "Weekly 3 Sessions" },
              { title: "Master Class", subtitle: "전공/입시반", desc: "예중, 예고, 음대 입시 완벽 대비", time: "Intensive Course" },
            ].map((cls, idx) => (
              <div key={idx} className="group p-12 hover:bg-[#FDFBF7] transition-colors cursor-pointer relative">
                <div className="mb-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:-translate-y-2">
                  <Music size={32} className="mx-auto text-[#D4AF37]" strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-normal mb-2 font-serif italic">{cls.title}</h3>
                <p className="text-xs text-[#D4AF37] uppercase tracking-widest mb-6">{cls.subtitle}</p>
                <p className="text-gray-500 font-sans font-light text-sm leading-relaxed mb-8">{cls.desc}</p>
                <span className="inline-block border-b border-[#1C1C1C] pb-1 text-xs uppercase tracking-widest group-hover:text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
                  More Details
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video/Performance Section */}
      <section className="py-32 bg-[#1C1C1C] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
             <div>
               <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4 block">Performance</span>
               <h2 className="text-3xl md:text-5xl font-light font-serif italic">Student Recitals</h2>
             </div>
             <div className="mt-8 md:mt-0 flex gap-4">
               <button className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                 <ArrowLeft size={16} />
               </button>
               <button className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                 <ArrowRight size={16} />
               </button>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-video bg-zinc-800 group cursor-pointer overflow-hidden">
              <img src="https://images.unsplash.com/photo-1574706349692-7f9f3032549d?q=80&w=2072&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 scale-105 group-hover:scale-100" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                  <PlayCircle size={32} className="text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-8 left-8">
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] mb-2">Winter Concert 2023</p>
                <h3 className="text-2xl font-serif italic">Chopin: Nocturne Op.9 No.2</h3>
              </div>
            </div>
            <div className="relative aspect-video bg-zinc-800 group cursor-pointer overflow-hidden">
              <img src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 scale-105 group-hover:scale-100" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                   <PlayCircle size={32} className="text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-8 left-8">
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] mb-2">Spring Festival</p>
                <h3 className="text-2xl font-serif italic">Debussy: Clair de Lune</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#FDFBF7] pt-32 pb-12 border-t border-gray-100 font-sans">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-serif italic font-light mb-6">Start Your Musical Journey</h2>
            <p className="text-gray-500 font-light mb-10">
              상담은 예약제로 운영됩니다. 편하신 시간에 방문해주세요.
            </p>
            <div className="flex justify-center gap-8 text-sm text-gray-800 font-medium uppercase tracking-widest">
              <div className="flex flex-col items-center gap-3">
                <Phone size={20} className="text-[#D4AF37]" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <MapPin size={20} className="text-[#D4AF37]" />
                <span>Seoul, Gangnam-gu, Music-ro 123</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Instagram size={20} className="text-[#D4AF37]" />
                <span>@melody_piano_studio</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-light uppercase tracking-widest">
            <p>&copy; 2024 Melody Piano Academy.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#1C1C1C]">Privacy Policy</a>
              <a href="#" className="hover:text-[#1C1C1C]">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ArrowLeft({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  );
}

function ArrowRight({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}
