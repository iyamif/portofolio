'use client';
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Layers, 
  Smartphone, 
  Terminal,
  ChevronRight,
  Cpu,
  Globe,
  Sparkles,
  Command,
  ArrowUpRight
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const socials = [
    { icon: <Github />, link: "https://github.com/iyamif" },
    { icon: <Linkedin />, link: "https://www.linkedin.com/in/iyamif/" },
    { icon: <Mail />, link: "mailto:iyamif@gmail.com" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi untuk scroll halus ke target ID
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
  
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const skills = [
    { name: "Frontend", items: ["React.js", "Next.js", "Tailwind", "TS", "Bootsrap", "HTML","CSS","Figma"], icon: <Globe size={18} />, color: "text-blue-600", bg: "bg-blue-50" },
    { name: "Backend", items: ["Node.js", "Laravel", "PostgreSQL", "Dart","Firebase","Supabase","Mysql"], icon: <Terminal size={18} />, color: "text-emerald-600", bg: "bg-emerald-50" },
    { name: "DevOps", items: ["Docker", "AWS", "CI/CD", "Gitub action", "Nginx","Hostinger"], icon: <Cpu size={18} />, color: "text-orange-600", bg: "bg-orange-50" },
    { name: "Mobile", items: ["Flutter", "Android", "CI/CD"], icon: <Cpu size={18} />, color: "text-orange-600", bg: "bg-orange-50" }
  ];

  const projects = [
    {
      title: "Integrated Road Safety Management System",
      category: "Fullstack Development",
      description: "Sistem manajemen sumber daya perusahaan skala besar dengan arsitektur microservices.",
      tech: ["Laravel", "Flutter", "Javascript","PostgreSQL","Github Actions"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Irsms Presisi Mobile",
      category: "UI/UX & Frontend",
      description: "Visualisasi data transaksi real-time dengan tingkat keamanan tinggi dan enkripsi data.",
      tech: ["React", "D3.js", "Tailwind"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Fruit Merchant E-commerce Platform",
      category: "Mobile & Backend",
      description: "Aplikasi konsultasi kesehatan yang menghubungkan pasien dengan dokter secara instan.",
      tech: ["React Native", "Node.js", "Socket.io"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-700">
      
      {/* Navbar Transparan ke Solid */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            onClick={(e) => scrollToSection(e, 'home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
              <Command size={20} />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900 uppercase">ILHAM<span className="text-blue-600">FIRMANSYAH</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10 text-[13px] font-semibold uppercase tracking-widest">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-slate-500 hover:text-blue-600 transition-colors"
            >
              Beranda
            </a>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-slate-500 hover:text-blue-600 transition-colors"
            >
              Keahlian
            </a>
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, 'projects')}
              className="text-slate-500 hover:text-blue-600 transition-colors"
            >
              Portofolio
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300"
            >
              Mulai Diskusi
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">Tersedia untuk Freelance</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Fullstack Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Produk Digital Berkelas.</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Membantu startup dan perusahaan membangun aplikasi web berperforma tinggi dengan fokus pada arsitektur bersih dan pengalaman pengguna yang mulus.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <button 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="group flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all"
              >
                Lihat Portofolio <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <div className="flex items-center gap-2">
                {socials.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all"
                  >
                    {React.cloneElement(item.icon, { size: 20 })}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-4 w-24 h-24 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              
              <div className="relative aspect-[4/5] bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-100">
                <img 
                 src="/iyamif.png"
                  alt="Professional Profile" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">5+ Tahun</div>
                    <div className="text-xs text-slate-400 font-medium uppercase">Pengalaman</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Tech Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-[13px] font-black text-blue-600 uppercase tracking-[0.3em]">Spesialisasi</h2>
            <p className="text-4xl font-bold tracking-tight text-slate-900">Kombinasi Seni & Teknologi Modern</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="group p-10 rounded-3xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-50/50 transition-all duration-500">
                <div className={`w-14 h-14 ${skill.bg} ${skill.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span key={item} className="px-3 py-1 bg-slate-50 text-slate-500 text-[12px] font-semibold rounded-lg border border-slate-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-[13px] font-black text-blue-600 uppercase tracking-[0.3em]">Portofolio</h2>
              <p className="text-4xl font-bold tracking-tight">Karya Terkini.</p>
            </div>
            <button 
              onClick={(e) => scrollToSection(e, 'projects')}
              className="px-6 py-3 border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors"
            >
              Eksplorasi Semua <ExternalLink size={16} className="inline ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      Detail Proyek
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{project.description}</p>
                  <div className="flex gap-2">
                    {project.tech.map(t => <span key={t} className="text-[10px] font-bold text-slate-400 border border-slate-100 px-2 py-0.5 rounded-md">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer id="contact" className="bg-[#0F172A] text-white pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8 mb-32">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">Mari ciptakan sesuatu yang luar biasa bersama.</h2>
            <p className="text-slate-400 text-lg">Saya selalu terbuka untuk kolaborasi menarik dan tantangan teknis yang kompleks.</p>
            <div className="pt-8">
              <a href="mailto:halo@emailanda.com" className="inline-flex items-center gap-4 text-2xl md:text-4xl font-light hover:text-blue-400 transition-colors border-b border-slate-700 pb-2">
                iyamif@gmail.com <ArrowUpRight size={32} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-800/50 pt-16 items-center">
            <div 
              onClick={(e) => scrollToSection(e, 'home')}
              className="flex items-center justify-center md:justify-start gap-3 cursor-pointer group"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
                <Command size={16} />
              </div>
              <span className="text-sm font-bold tracking-widest uppercase">ILHAM<span className="text-blue-600">FIRMANSYAH</span></span>
            </div>
            
            <div className="flex justify-center md:justify-end gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              {/* <a href="https://www.linkedin.com/in/iyamif/" className="hover:text-white transition-colors">Twitter</a> */}
              <a href="https://www.linkedin.com/in/iyamif/" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
          
          <p className="text-slate-600 text-[10px] uppercase tracking-widest mt-16">
            © 2024 Crafted with Precision by IlhamFirmansyah.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;