/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Utensils, MapPin, Clock, Phone, ChevronRight, Star, Globe, X } from "lucide-react";
import { useState } from "react";

// --- Components ---

const LOCATION_DATA = {
  carcavelos: {
    name: "Kai Fu Carcavelos",
    address: "Edifício Alagoa Parque, Armazém 4, 2775-716 Carcavelos",
    phone: "+351 214 444 444",
    hours: "12:00-15:00 • 19:00-23:00",
    description: "O nosso restaurante original em Carcavelos oferece um ambiente vibrante e moderno, ideal para almoços de negócios ou jantares em grupo. Especialista em buffet de sushi e chapa quente.",
    features: ["Buffet Completo", "Takeaway", "Estacionamento Próximo", "Acesso PMR"]
  },
  tires: {
    name: "Kai Fu Tires",
    address: "Estrada de Polima 672, 2785-543 São Domingos de Rana",
    phone: "+351 214 444 445",
    hours: "12:00-15:00 • 19:00-23:00",
    description: "Com uma das maiores salas da região, o Kai Fu Tires é o local perfeito para eventos familiares e grandes grupos. Estacionamento privado disponível para maior conveniência.",
    features: ["Grande Capacidade", "Parque Infantil", "Estacionamento Privado", "Buffet Premium"]
  },
  boutique: {
    name: "Kai Fu São Domingos de Rana",
    address: "Rua Manuel Espírito Santo, Localização Boutique em Cascais",
    phone: "+351 214 444 446",
    hours: "12:00-15:00 • 19:00-23:00",
    description: "A nossa localização mais exclusiva. Um ambiente calmo e sofisticado para quem procura uma experiência gastronómica mais íntima com a máxima qualidade.",
    features: ["Ambiente Calmo", "Atendimento Personalizado", "Sushi de Autor", "Vinhos Selecionados"]
  }
};

const LegalSection = ({ type, onBack }: { type: 'privacy' | 'terms', onBack: () => void }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="py-32 px-12 max-w-4xl mx-auto min-h-screen pt-40"
  >
    <button 
      onClick={onBack}
      className="mb-12 flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest font-sans"
    >
      <ChevronRight className="w-4 h-4 rotate-180" /> Voltar
    </button>
    
    <div className="prose prose-invert prose-orange max-w-none">
      {type === 'privacy' ? (
        <div className="space-y-8 font-sans">
          <h2 className="text-4xl font-serif italic text-white mb-8">Política de Privacidade</h2>
          <p className="text-white/60">A sua privacidade é fundamental na experiência Kai Fu. Comprometemo-nos a proteger a sua identidade digital com o mesmo rigor que dedicamos à nossa cozinha.</p>
          
          <h3 className="text-xl text-white italic">Recolha de Informações</h3>
          <p className="text-white/60">Solicitamos dados pessoais apenas quando essencial para elevar o seu serviço — como na reserva da sua mesa favorita. Fazemo-lo de transparência total e sempre com o seu consentimento explícito.</p>
          
          <h3 className="text-xl text-white italic">Infraestrutura e Segurança</h3>
          <p className="text-white/60">Para lhe oferecer uma navegação fluida e segura, o nosso ecossistema digital é suportado por infraestruturas de elite mundial (como a Vercel). No âmbito da entrega técnica e proteção do site, estes parceiros podem processar metadados padrão, incluindo o seu endereço IP, para garantir a máxima performance e defesa contra ameaças digitais.</p>

          <h3 className="text-xl text-white italic">Retenção e Proteção</h3>
          <p className="text-white/60">Mantemos os seus dados apenas o tempo estritamente necessário. Protegemo-los através dos mais avançados protocolos da indústria para prevenir acessos não autorizados, mantendo a sua confiança como o nosso ingrediente mais precioso.</p>
        </div>
      ) : (
        <div className="space-y-8 font-sans">
          <h2 className="text-4xl font-serif italic text-white mb-8">Termos e Condições</h2>
          <h3 className="text-xl text-white">1. Termos</h3>
          <p className="text-white/60">Ao aceder ao site Kai Fu, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
          <h3 className="text-xl text-white">2. Uso de Licença</h3>
          <p className="text-white/60">É concedida permissão para descarregar temporariamente uma cópia dos materiais (informações ou software) no site Kai Fu apenas para visualização transitória pessoal e não comercial.</p>
          <h3 className="text-xl text-white">3. Isenção de Responsabilidade</h3>
          <p className="text-white/60">Os materiais no site do Kai Fu são fornecidos 'como estão'. O Kai Fu não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização.</p>
        </div>
      )}
    </div>
  </motion.section>
);

const LocationDetail = ({ location, onBack }: { location: any, onBack: () => void }) => (
  <motion.section 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="py-32 px-12 max-w-5xl mx-auto min-h-screen pt-40"
  >
    <button 
      onClick={onBack}
      className="mb-12 flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest font-sans"
    >
      <ChevronRight className="w-4 h-4 rotate-180" /> Voltar para o Início
    </button>
    
    <div className="grid md:grid-cols-2 gap-20">
      <div className="space-y-10">
        <div>
          <h2 className="text-5xl font-serif text-white italic tracking-tight mb-6">{location.name}</h2>
          <p className="text-white/60 leading-relaxed font-sans">{location.description}</p>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-white/80">
            <MapPin className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-sans">{location.address}</span>
          </div>
          <div className="flex items-center gap-4 text-white/80">
            <Clock className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-sans">{location.hours}</span>
          </div>
          <div className="flex items-center gap-4 text-white/80">
            <Phone className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-sans">{location.phone}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {location.features.map((f: string) => (
            <span key={f} className="text-[10px] uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full font-sans text-white/40">
              {f}
            </span>
          ))}
        </div>
      </div>
      
      <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden aspect-square flex items-center justify-center relative">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1470" 
          className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
          alt="Vista Interior"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
      </div>
    </div>
  </motion.section>
);

const Navbar = ({ onHome }: { onHome: () => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
    <div className="max-w-7xl mx-auto px-12 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3 cursor-pointer" onClick={onHome}>
        <h1 className="text-2xl font-bold tracking-tighter text-white font-serif italic">
          Kai Fu
        </h1>
      </div>
      <div className="hidden md:flex items-center gap-10 text-[10px] font-medium text-gray-300 uppercase tracking-[0.3em] font-sans">
        <a href="#highlights" onClick={(e) => {e.preventDefault(); onHome(); const el = document.getElementById('highlights'); el?.scrollIntoView({behavior: 'smooth'});}} className="hover:text-orange-500 transition-colors">Menu</a>
        <a href="#reviews" onClick={(e) => {e.preventDefault(); onHome(); const el = document.getElementById('reviews'); el?.scrollIntoView({behavior: 'smooth'});}} className="hover:text-orange-500 transition-colors">Críticas</a>
        <a href="#locations" onClick={(e) => {e.preventDefault(); onHome(); const el = document.getElementById('locations'); el?.scrollIntoView({behavior: 'smooth'});}} className="hover:text-orange-500 transition-colors">Localizações</a>
        <button 
          onClick={() => { onHome(); window.location.hash = "locations"; }}
          className="border border-orange-600 text-orange-600 px-6 py-2 rounded-full transition-all text-[10px] uppercase tracking-widest hover:bg-orange-600 hover:text-white"
        >
          Reservar Mesa
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex items-center px-12 overflow-hidden bg-[#0d0d0d]">
    <div className="absolute right-0 top-0 w-2/3 h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent z-10" />
      <img
        src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=2070"
        alt="Sleek Sushi"
        className="w-full h-full object-cover opacity-60"
      />
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-orange-400 mb-6 font-sans">
          <span className="w-1 h-1 rounded-full bg-orange-400" /> Experiência de Fusão Asiática
        </div>
        <h2 className="text-6xl md:text-8xl font-serif leading-[1.1] text-white mb-6 tracking-tight">
          Kai Fu - <br /> <span className="text-orange-600 italic">Restaurante Asiático</span>
        </h2>
        <p className="text-lg opacity-60 max-w-md leading-relaxed mb-8 font-sans">
          Descubra os sabores autênticos da fusão asiática. Desde sushi delicado preparado à mão até ao chiar das nossas chapas quentes exclusivas.
        </p>
        
        <div className="flex gap-8 mb-10">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white font-display tracking-tighter">4.2/5</span>
            <span className="text-[10px] uppercase tracking-widest opacity-40 font-sans">Classificação Google</span>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white font-display tracking-tighter">1.8k+</span>
            <span className="text-[10px] uppercase tracking-widest opacity-40 font-sans">Críticas de Clientes</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <a href="#locations" className="w-full md:w-auto bg-orange-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-orange-700 transition-colors font-sans shadow-lg shadow-orange-600/20">
            Encontrar Mesa
          </a>
        </div>
      </motion.div>
    </div>
    
    <div className="absolute bottom-12 right-12 z-20 hidden md:flex gap-2">
      <div className="w-12 h-1 bg-orange-600" />
      <div className="w-12 h-1 bg-white/20" />
      <div className="w-12 h-1 bg-white/20" />
    </div>
  </section>
);

const HighlightCard = ({ title, desc, img, onExpand }: { title: string, desc: string, img: string, onExpand: (img: string) => void }) => (
  <motion.div
    whileHover={{ y: -10 }}
    onClick={() => onExpand(img)}
    className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-zinc-900 border border-white/10 cursor-zoom-in"
  >
    <img src={img} alt={title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
    <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent">
      <div>
        <h3 className="text-2xl font-serif text-white mb-2 italic tracking-tight">{title}</h3>
        <p className="text-white/40 text-xs line-clamp-2 font-sans tracking-wide">{desc}</p>
      </div>
    </div>
  </motion.div>
);

const Highlights = ({ onExpand }: { onExpand: (img: string) => void }) => (
  <section id="highlights" className="py-32 bg-[#0d0d0d] px-12">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight mb-4 italic">
            Buffet <span className="text-orange-600 not-italic font-bold">Asiático</span>
          </h2>
          <p className="text-white/40 max-w-xl font-sans tracking-wide leading-relaxed">
            Uma seleção ilimitada da melhor gastronomia Chinesa e Japonesa de qualidade superior.
            <span className="block mt-4 text-orange-500 font-bold text-lg tracking-tight">Preço: 12€ - 20€ (Buffet Completo)</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <HighlightCard
          title="Sushi e Sashimi"
          desc="Variedade premium de peças frescas preparadas pelos nossos sushimen."
          img="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&q=80&w=1924"
          onExpand={onExpand}
        />
        <HighlightCard
          title="Teppanyaki e Grelhados"
          desc="Carnes e peixes suculentos grelhados no momento com o toque tradicional."
          img="https://images.unsplash.com/photo-1615362524987-9f7956461a2b?auto=format&fit=crop&q=80&w=2070"
          onExpand={onExpand}
        />
        <HighlightCard
          title="Cozinha Chinesa"
          desc="Os sabores clássicos e autênticos da cozinha tradicional chinesa."
          img="https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=1974"
          onExpand={onExpand}
        />
      </div>
    </div>
  </section>
);

const LocationCard = ({ name, address, onClick }: any) => (
  <div 
    onClick={onClick}
    className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-600/50 transition-all duration-300 group block cursor-pointer"
  >
    <h3 className="text-xl font-serif text-white mb-4 italic tracking-tight group-hover:text-orange-500 transition-colors">{name}</h3>
    <p className="text-sm opacity-50 mb-8 font-sans leading-relaxed tracking-wide">{address}</p>
    <div className="flex justify-end items-center">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-orange-500 font-bold font-sans">
        Saber Mais Informação <ChevronRight className="w-3 h-3" />
      </div>
    </div>
  </div>
);

const Locations = ({ onSelectLocation }: { onSelectLocation: (id: string) => void }) => (
  <section id="locations" className="py-24 bg-zinc-900 px-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight italic mb-4">
          As Nossas <span className="text-red-600 not-italic font-bold">Localizações</span>
        </h2>
        <p className="text-white/40 max-w-xl font-sans tracking-wide leading-relaxed">
          Encontre-nos nos locais mais exclusivos de Portugal, onde a tradição asiática encontra a sofisticação moderna.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <LocationCard
          name="Kai Fu Carcavelos"
          address="Edifício Alagoa Parque, Armazém 4, 2775-716 Carcavelos"
          onClick={() => onSelectLocation('carcavelos')}
        />
        <LocationCard
          name="Kai Fu Tires"
          address="Estrada de Polima 672, 2785-543 São Domingos de Rana"
          onClick={() => onSelectLocation('tires')}
        />
        <LocationCard
          name="Kai Fu São Domingos de Rana"
          address="Rua Manuel Espírito Santo, Localização Boutique em Cascais"
          onClick={() => onSelectLocation('boutique')}
        />
      </div>
    </div>
  </section>
);

const Reviews = () => (
  <section id="reviews" className="py-32 bg-[#0d0d0d] px-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-white italic tracking-tight mb-4">
          A Voz dos Nossos <span className="text-orange-600 not-italic font-bold">Clientes</span>
        </h2>
        <div className="flex justify-center gap-1 text-orange-500 mb-4">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            text: "Óptimo buffet, variado e com qualidade!! Espaço agradável e bonito e atendimento eficiente e simpático. 👍",
            author: "Cliente Satisfeito",
            date: "Há 1 mês"
          },
          {
            text: "Comida maravilhosa, local perfeito e muito calmo! Já vou vir sempre! A qualidade é excelente e o ambiente convida a ficar.",
            author: "Visitante Frequente",
            date: "Há 2 meses"
          },
          {
            text: "Já estivemos aqui pelo menos 20 vezes. O almoço é imbatível. De sushi a pratos quentes, encontrará tudo o que um amante da comida asiática pode desejar. Funcionários excelentes!",
            author: "Cliente Fiel",
            date: "Há 2 anos"
          }
        ].map((review, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <p className="text-white/70 italic mb-8 font-sans leading-relaxed">"{review.text}"</p>
            </div>
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
              <span className="text-xs font-bold text-white uppercase tracking-widest">{review.author}</span>
              <span className="text-[10px] text-white/30 uppercase tracking-widest">{review.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default function App() {
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null);
  const [activeLegal, setActiveLegal] = useState<'privacy' | 'terms' | null>(null);
  const [expandedImg, setExpandedImg] = useState<string | null>(null);

  const activeLocation = activeLocationId 
    ? (LOCATION_DATA as any)[activeLocationId] 
    : null;

  const handleHome = () => {
    setActiveLocationId(null);
    setActiveLegal(null);
  };

  return (
    <main className="bg-[#0d0d0d] min-h-screen text-zinc-100 font-sans selection:bg-orange-600/30 overflow-x-hidden">
      <Navbar onHome={handleHome} />
      
      {activeLegal ? (
        <LegalSection type={activeLegal} onBack={() => setActiveLegal(null)} />
      ) : activeLocation ? (
        <LocationDetail 
          location={activeLocation} 
          onBack={() => setActiveLocationId(null)} 
        />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Hero />
          <Highlights onExpand={setExpandedImg} />
          <Reviews />
          <Locations onSelectLocation={setActiveLocationId} />
        </motion.div>
      )}

      <AnimatePresence>
        {expandedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedImg(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-2xl w-full aspect-video md:aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={expandedImg} className="w-full h-full object-cover" alt="Expanded view" />
              <button 
                onClick={() => setExpandedImg(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="bg-[#0d0d0d] py-24 border-t border-white/5 px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-3xl font-bold tracking-tighter text-white font-serif italic">
              Kai Fu
            </h2>
            <p className="text-white/20 text-[10px] uppercase tracking-widest font-sans">© 2024 Experiência Kai Fu. Todos os direitos reservados.</p>
          </div>
          <div className="flex flex-col md:items-end gap-6">
            <div className="flex gap-10 text-[10px] font-bold text-white uppercase tracking-[0.3em] font-sans">
              <a 
                href="https://web.facebook.com/p/Restaurante-kaifu-100070671377649/?_rdc=1&_rdr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-orange-500 transition-colors"
              >
                Facebook
              </a>
              <a 
                href="https://www.tripadvisor.pt/Restaurant_Review-g780694-d7660385-Reviews-Kai_Fu-Carcavelos_Lisbon_District_Central_Portugal.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-orange-500 transition-colors"
              >
                TripAdvisor
              </a>
            </div>
            <div className="flex gap-6 text-[9px] uppercase tracking-widest text-white/30 font-sans">
              <button onClick={() => setActiveLegal('privacy')} className="hover:text-white transition-colors">Política de Privacidade</button>
              <button onClick={() => setActiveLegal('terms')} className="hover:text-white transition-colors">Termos e Condições</button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
