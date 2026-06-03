import React, { useState } from 'react';
import { MapPin, Phone, Clock, Coffee, Utensils, ArrowRight, Send, Instagram, Menu, X, ShoppingBag, CupSoda, Flame, Leaf, GlassWater, Cookie, CakeSlice, Sandwich, Wine, Milk } from 'lucide-react';
import { menuData } from './menuData';

const getCategoryIcon = (category: string) => {
  const map: Record<string, React.ReactNode> = {
    "Кава": <Coffee className="w-5 h-5 text-brand-green" />,
    "Холодні кавові напої": <CupSoda className="w-5 h-5 text-brand-green" />,
    "Гарячі напої": <Flame className="w-5 h-5 text-brand-green" />,
    "Какао": <Coffee className="w-5 h-5 text-brand-green" />,
    "Гарячий шоколад": <Coffee className="w-5 h-5 text-brand-green" />,
    "Матча": <Leaf className="w-5 h-5 text-brand-green" />,
    "Чай": <CupSoda className="w-5 h-5 text-brand-green" />,
    "Сезонні напої": <GlassWater className="w-5 h-5 text-brand-green" />,
    "Вафлі": <Cookie className="w-5 h-5 text-brand-green" />,
    "Десерти": <CakeSlice className="w-5 h-5 text-brand-green" />,
    "Тістечка": <CakeSlice className="w-5 h-5 text-brand-green" />,
    "Тортики": <CakeSlice className="w-5 h-5 text-brand-green" />,
    "Паніні": <Sandwich className="w-5 h-5 text-brand-green" />,
    "Бургери": <Sandwich className="w-5 h-5 text-brand-green" />,
    "Хот-Дог": <Sandwich className="w-5 h-5 text-brand-green" />,
    "Снеки": <Cookie className="w-5 h-5 text-brand-green" />,
    "Лимонад": <GlassWater className="w-5 h-5 text-brand-green" />,
    "Коктейлі": <Wine className="w-5 h-5 text-brand-green" />,
    "Молочні коктейлі": <Milk className="w-5 h-5 text-brand-green" />,
    "Холодні напої": <GlassWater className="w-5 h-5 text-brand-green" />,
  };
  return map[category] || <Utensils className="w-5 h-5 text-brand-green" />;
};

const getCategoryPlaceholderImage = (category: string) => {
  const map: Record<string, string> = {
    "Кава": "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop",
    "Холодні кавові напої": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop",
    "Гарячі напої": "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
    "Какао": "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=800&auto=format&fit=crop",
    "Гарячий шоколад": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop",
    "Матча": "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=800&auto=format&fit=crop",
    "Чай": "https://images.unsplash.com/photo-1594892461821-4eabb18bfa67?q=80&w=800&auto=format&fit=crop",
    "Сезонні напої": "https://images.unsplash.com/photo-1558231589-9a25032543e4?q=80&w=800&auto=format&fit=crop",
    "Холодні напої": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop",
    "Лимонад": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop",
    "Коктейлі": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    "Молочні коктейлі": "https://images.unsplash.com/photo-1572490122747-3968b75bb8ef?q=80&w=800&auto=format&fit=crop",
    "Чай холодний": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop",
    "Напої газовані": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?q=80&w=800&auto=format&fit=crop",
    "Вода": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    "Сік": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=800&auto=format&fit=crop",
    "Вафлі": "https://images.unsplash.com/photo-1596803244618-8dbee441d70b?q=80&w=800&auto=format&fit=crop",
    "Бургери": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    "Паніні": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
    "Хот-Дог": "https://images.unsplash.com/photo-1594212691516-be00bc714f3b?q=80&w=800&auto=format&fit=crop",
    "Тости": "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop",
    "Тістечка": "https://images.unsplash.com/photo-1596706485827-048039d67b34?q=80&w=800&auto=format&fit=crop",
    "Десерти": "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop",
    "Тортики": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
    "Печиво": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop",
    "Пряники": "https://images.unsplash.com/photo-1557080829-4cefa7c585c5?q=80&w=800&auto=format&fit=crop",
    "Снеки": "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=800&auto=format&fit=crop",
    "Смарт кава": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop",
    "Магазин": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop"
  };
  return map[category] || "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop"; 
};

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.24-1.76.19-3.58 1.15-5.06 1.03-1.61 2.72-2.73 4.56-3.13 1.13-.25 2.33-.28 3.5-.15v4.06c-1.12-.11-2.29.13-3.19.82-.9.7-1.37 1.83-1.33 2.95.05 1.12.63 2.18 1.56 2.75 1.05.62 2.45.69 3.55.21 1.25-.56 2.05-1.92 2.14-3.3.09-2.22.06-4.45.08-6.68.01-4.14.01-8.28 0-12.43z" />
  </svg>
);

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("Всі");
  const mapLink = "https://www.google.com/maps/place/Shalena+Kava%26wafti/@50.5412768,30.1920269,17z/data=!4m14!1m7!3m6!1s0x472b3140dbcac571:0x46d154ee8e98a70f!2sShalena+Kava%26wafti!8m2!3d50.5412768!4d30.1920269!16s%2Fg%2F11xmmfmpdg!3m5!1s0x472b3140dbcac571:0x46d154ee8e98a70f!8m2!3d50.5412768!4d30.1920269!16s%2Fg%2F11xmmfmpdg?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D";
  const phoneNumber = "095 881 9986";
  const telegramLink = `https://t.me/+380958819986`;
  const instagramLink = "https://www.instagram.com/shalenacava/";
  const tiktokLink = "https://www.tiktok.com/@shalena.kava.bar";

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-green selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-panel border-b border-black/5 bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center z-50">
            <img src={`${import.meta.env.BASE_URL}ShalenaKava.png`} alt="Shalena Kava Logo" className="h-10 sm:h-12 w-auto object-contain" />
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide text-brand-ink/80">
            <a href="#menu" className="hover:text-brand-green transition-colors">Меню</a>
            <a href="#about" className="hover:text-brand-green transition-colors">Про нас</a>
            <a href="#location" className="hover:text-brand-green transition-colors">Локація</a>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href={tiktokLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-ink/80 hover:text-brand-green transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-5 h-5" />
            </a>
            <a 
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-ink/80 hover:text-brand-green transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="flex items-center space-x-2 bg-brand-green text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-green-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{phoneNumber}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden z-50 p-2 text-brand-ink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-white/70 backdrop-blur-lg z-40 pt-20 pb-10 transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg font-medium text-brand-ink">
          <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-green transition-colors">Меню</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-green transition-colors">Про нас</a>
          <a href="#location" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-green transition-colors">Локація</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
            alt="Coffee and cafe atmosphere" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-sand via-brand-sand/90 to-brand-sand"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center space-x-2 mb-6 border border-brand-green/20 rounded-full px-4 py-1.5 bg-brand-green/5">
              <MapPin className="w-4 h-4 text-brand-green" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">Буча, Київська область</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-brand-green-dark leading-[1.1] mb-6">
              Виняткова кава. <br className="hidden sm:block" />
              <span className="italic font-light text-brand-green">Фірмові вафлі.</span>
            </h1>
            <p className="text-base sm:text-lg text-brand-ink/70 mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Відчуйте атмосферу найкращого закладу Бучі з майстерно приготованою спешелті кавою та крафтовими солодкими й солоними вафлями у вишуканій та затишній атмосфері.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap">
              <a 
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-brand-green text-white px-8 py-4 rounded-full font-medium hover:bg-brand-green-dark transition-all hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>Завітати до нас</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-white text-brand-green border border-brand-green/20 px-8 py-4 rounded-full font-medium hover:bg-brand-green/5 transition-all w-full sm:w-auto"
              >
                <Send className="w-4 h-4" />
                <span>Написати в Telegram</span>
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] rounded-t-full overflow-hidden border-8 border-white shadow-2xl transform rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop" 
                alt="Artisanal coffee preparation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 aspect-square w-48 rounded-full overflow-hidden border-8 border-white shadow-xl transform -rotate-6">
              <img 
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop" 
                alt="Coffee and dessert" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-green-dark mb-4">Створено з пристрастю</h2>
            <p className="text-brand-ink/70">Ми зосереджені на тому, щоб робити кілька речей винятково добре, даруючи вам найкращі смаки в кожному шматочку та ковтку.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 md:p-8 rounded-3xl bg-brand-sand/50 border border-brand-sand hover:border-brand-green/20 transition-colors group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors text-brand-green">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium text-brand-green-dark mb-3">Спешелті кава</h3>
              <p className="text-brand-ink/70 leading-relaxed text-sm">
                Майстерно зварена з кавових зерен преміального обсмаження. Незалежно від того, чи віддаєте ви перевагу насиченому еспресо, чи ніжному флет-вайту, наші бариста щоразу створюють ідеальну чашку.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-3xl bg-brand-sand/50 border border-brand-sand hover:border-brand-green/20 transition-colors group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors text-brand-green">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium text-brand-green-dark mb-3">Фірмові вафлі</h3>
              <p className="text-brand-ink/70 leading-relaxed text-sm">
                Крафтові вафлі, які готуються свіжими на замовлення. Відкрийте для себе наше меню як солодких насолод, так і ситних солоних поєднань.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-3xl bg-brand-sand/50 border border-brand-sand hover:border-brand-green/20 transition-colors group sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors text-brand-green">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium text-brand-green-dark mb-3">Затишна атмосфера</h3>
              <p className="text-brand-ink/70 leading-relaxed text-sm">
                Вишуканий, привітний простір, створений для вашого комфорту. Ідеально підходить для ранкових зустрічей, віддаленої роботи або відпочинку з друзями.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 md:py-24 bg-white/50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-green-dark mb-6">Меню</h2>
            <p className="text-brand-ink/70 text-lg max-w-2xl mx-auto">
              Обирайте свої улюблені позиції. Від класичної кави до фірмових солодощів — у нас є все для вашого ідеального дня.
            </p>
          </div>
          
          {/* Category Filters */}
          <div className="flex overflow-x-auto gap-3 mb-14 pb-4 px-2 snap-x snap-mandatory md:flex-wrap md:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <button
              onClick={() => setActiveCategory("Всі")}
              className={`snap-start shrink-0 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === "Всі" ? "bg-brand-green text-white shadow-md" : "bg-white text-brand-ink/70 hover:bg-brand-sand hover:text-brand-ink border border-brand-sand/50"}`}
            >
              Всі позиції
            </button>
            {Object.keys(menuData).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`snap-start shrink-0 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? "bg-brand-green text-white shadow-md" : "bg-white text-brand-ink/70 hover:bg-brand-sand hover:text-brand-ink border border-brand-sand/50"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-20">
            {Object.entries(menuData)
              .filter(([category]) => activeCategory === "Всі" || category === activeCategory)
              .map(([category, items]) => (
              <div key={category} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-brand-sand shrink-0">
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="text-3xl font-serif text-brand-green-dark">
                    {category}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                  {items.map((item, i) => (
                    <div 
                      key={i} 
                      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-brand-green/5 border border-brand-sand/50 transition-all duration-300 group flex flex-col"
                    >
                      <div className="aspect-square w-full relative overflow-hidden bg-brand-sand/20">
                        <img 
                          src={item.image || getCategoryPlaceholderImage(category)} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-between bg-white relative top-0 group-hover:-top-1 transition-all">
                        <div>
                          <h4 className="font-semibold text-lg text-brand-ink mb-1 group-hover:text-brand-green-dark transition-colors">{item.name}</h4>
                          {item.description && (
                            <p className="text-sm text-brand-ink/60 line-clamp-2 mt-2">{item.description}</p>
                          )}
                        </div>
                        <div className="flex justify-between items-end mt-6 pt-4 border-t border-brand-sand/50">
                          <span className="font-serif text-xl text-brand-green-dark font-medium">{item.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Credibility */}
      <section id="about" className="py-16 md:py-24 px-4 sm:px-6 bg-brand-green-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Підносячи ваш <br className="hidden sm:block" />
              <span className="italic font-light text-brand-gold">щоденний ритуал.</span>
            </h2>
            <p className="text-white/80 mb-6 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
              Ласкаво просимо до Shalena Kava & Wafli. Розташовані в самому серці Бучі, ми прагнемо створити простір, де якість зустрічається з комфортом. 
            </p>
            <p className="text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Ми віримо, що чудова їжа та напої починаються з виняткових інгредієнтів. Від наших ретельно відібраних кавових сумішей до фірмового тіста для вафель — кожна деталь продумана з точністю, щоб забезпечити незабутні враження для наших гостей.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10 max-w-md mx-auto lg:mx-0">
              <div>
                <div className="text-brand-gold font-serif text-xl sm:text-2xl mb-1">Свіжі</div>
                <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">Випікаємо щодня</div>
              </div>
              <div>
                <div className="text-brand-gold font-serif text-xl sm:text-2xl mb-1">Преміум</div>
                <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">Локальні зерна</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative max-w-md mx-auto lg:max-w-none w-full">
            <div className="aspect-[4/3] sm:aspect-[3/4] rounded-[2rem] sm:rounded-full overflow-hidden border border-white/10">
              <img 
                src={`${import.meta.env.BASE_URL}about-us.jpg`} 
                alt="Shalena Kava Interior" 
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="location" className="py-16 md:py-24 px-4 sm:px-6 bg-brand-sand">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-green-dark mb-8 text-center lg:text-left">Завітайте до нас</h2>
              
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-brand-green">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-ink mb-1">Локація</h4>
                    <p className="text-brand-ink/70 leading-relaxed">
                      вулиця Бориса Гмирі, 7б<br />
                      Буча, Київська область, 08297
                    </p>
                    <a 
                      href={mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm font-medium text-brand-green hover:text-brand-green-dark underline underline-offset-4"
                    >
                      Отримати маршрут
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-brand-green">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-full sm:w-auto">
                    <h4 className="font-semibold text-brand-ink mb-2">Години роботи</h4>
                    <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 text-sm text-brand-ink/70 max-w-[280px] mx-auto sm:mx-0 text-left">
                      <span>Понеділок - Субота</span>
                      <span className="text-right sm:text-left">07:00 – 20:00</span>
                      <span>Неділя</span>
                      <span className="text-right sm:text-left">07:00 – 20:00</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-brand-green">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h4 className="font-semibold text-brand-ink mb-1">Контакти</h4>
                    <p className="text-brand-ink/70 mb-4">Зателефонуйте нам, щоб зробити замовлення або забронювати столик.</p>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center sm:justify-start">
                      <div 
                        className="inline-flex items-center justify-center space-x-2 bg-[#FC2765] text-white px-5 py-3 sm:py-2.5 rounded-full text-sm font-medium w-full sm:w-auto"
                      >
                        <img src={`${import.meta.env.BASE_URL}loko-logo.png`} alt="Loko" className="w-4 h-4 object-contain rounded-sm shadow-sm" />
                        <span>Доставка Loko</span>
                      </div>
                      <a 
                        href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                        className="inline-flex items-center justify-center space-x-2 bg-brand-green text-white px-5 py-3 sm:py-2.5 rounded-full text-sm font-medium hover:bg-brand-green-dark transition-colors w-full sm:w-auto"
                      >
                        <Phone className="w-4 h-4" />
                        <span>{phoneNumber}</span>
                      </a>
                      <a 
                        href={telegramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 bg-white text-brand-green border border-brand-green/20 px-5 py-3 sm:py-2.5 rounded-full text-sm font-medium hover:bg-brand-green/5 transition-colors w-full sm:w-auto"
                      >
                        <Send className="w-4 h-4" />
                        <span>Telegram</span>
                      </a>
                      <a 
                        href={tiktokLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 bg-white text-brand-green border border-brand-green/20 px-5 py-3 sm:py-2.5 rounded-full text-sm font-medium hover:bg-brand-green/5 transition-colors w-full sm:w-auto"
                      >
                        <TikTokIcon className="w-4 h-4" />
                        <span>TikTok</span>
                      </a>
                      <a 
                        href={instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 bg-white text-brand-green border border-brand-green/20 px-5 py-3 sm:py-2.5 rounded-full text-sm font-medium hover:bg-brand-green/5 transition-colors w-full sm:w-auto"
                      >
                        <Instagram className="w-4 h-4" />
                        <span>Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[300px] sm:h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-lg border border-white mt-8 lg:mt-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2535.534884214532!2d30.18945201255866!3d50.54127677149957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b3140dbcac571%3A0x46d154ee8e98a70f!2sShalena%20Kava%26wafti!5e0!3m2!1sen!2sus!4v1712876543210!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Shalena Cava & Wafli Map Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-ink text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center justify-center md:justify-start">
            <img src={`${import.meta.env.BASE_URL}ShalenaKava.png`} alt="Shalena Kava Logo" className="h-12 sm:h-16 w-auto object-contain" />
          </div>
          
          <div className="text-center md:text-right text-sm text-white/60">
            <div className="flex items-center justify-center md:justify-end space-x-4 mb-4 md:mb-3">
              <a href={tiktokLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="TikTok">
                <TikTokIcon className="w-6 h-6 md:w-5 md:h-5" />
              </a>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6 md:w-5 md:h-5" />
              </a>
            </div>
            <p>вулиця Бориса Гмирі, 7б, Буча</p>
            <p className="mt-2 md:mt-1">© {new Date().getFullYear()} Shalena Kava & Wafli. Всі права захищені.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}