import React, { useState } from 'react';
import { MapPin, Phone, Clock, Coffee, Utensils, ArrowRight, Send, Instagram, Menu, X, ShoppingBag } from 'lucide-react';
import { menuData } from './menuData';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mapLink = "https://www.google.com/maps/place/Shalena+Kava%26wafti/@50.5412768,30.1920269,17z/data=!4m14!1m7!3m6!1s0x472b3140dbcac571:0x46d154ee8e98a70f!2sShalena+Kava%26wafti!8m2!3d50.5412768!4d30.1920269!16s%2Fg%2F11xmmfmpdg!3m5!1s0x472b3140dbcac571:0x46d154ee8e98a70f!8m2!3d50.5412768!4d30.1920269!16s%2Fg%2F11xmmfmpdg?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D";
  const phoneNumber = "095 881 9986";
  const telegramLink = `https://t.me/+380958819986`;
  const instagramLink = "https://www.instagram.com/shalenacava/";
  const lokoLink = "https://loko.silpo.ua/"; // TODO: replace with specific restuarant link

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
            <a href="#services" className="hover:text-brand-green transition-colors">Послуги</a>
            <a href="#menu" className="hover:text-brand-green transition-colors">Меню</a>
            <a href="#about" className="hover:text-brand-green transition-colors">Про нас</a>
            <a href="#location" className="hover:text-brand-green transition-colors">Локація</a>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
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
            <a 
              href={lokoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#FC2765] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#E01E55] transition-colors"
            >
              <img src={`${import.meta.env.BASE_URL}loko-logo.png`} alt="Loko" className="w-4 h-4 object-contain rounded-sm shadow-sm" />
              <span>Loko</span>
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

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg font-medium text-brand-ink">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-green transition-colors">Послуги</a>
            <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-green transition-colors">Меню</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-green transition-colors">Про нас</a>
            <a href="#location" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-green transition-colors">Локація</a>
            
            <div className="flex flex-col items-center space-y-6 pt-8 border-t border-brand-ink/10 w-2/3">
              <a 
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="flex items-center justify-center space-x-2 bg-brand-green text-white w-full py-3.5 rounded-full text-base font-medium hover:bg-brand-green-dark transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Зателефонувати</span>
              </a>
              <a 
                href={lokoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#FC2765] text-white w-full py-3.5 rounded-full text-base font-medium hover:bg-[#E01E55] transition-colors"
              >
                <img src={`${import.meta.env.BASE_URL}loko-logo.png`} alt="Loko" className="w-5 h-5 object-contain rounded-sm shadow-sm" />
                <span>Замовити в Loko</span>
              </a>
              <a 
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-brand-ink hover:text-brand-green transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

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
                href={lokoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-[#FC2765] text-white px-8 py-4 rounded-full font-medium hover:bg-[#E01E55] transition-all hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <img src={`${import.meta.env.BASE_URL}loko-logo.png`} alt="Loko" className="w-5 h-5 object-contain rounded-sm shadow-sm" />
                <span>Замовити в Loko</span>
              </a>
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
                src="https://images.unsplash.com/photo-1562376552-0d160a2f148c?q=80&w=1925&auto=format&fit=crop" 
                alt="Delicious waffles" 
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
      <section id="menu" className="py-16 md:py-24 bg-brand-sand/30 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-green-dark mb-4">Наше Меню</h2>
            <p className="text-brand-ink/70">Найкращі позиції для вашого задоволення</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(menuData).map(([category, items]) => (
              <div key={category} className="bg-white p-6 rounded-3xl shadow-sm border border-brand-sand h-fit">
                <h3 className="text-xl font-serif text-brand-green-dark mb-6 flex items-center border-b border-brand-green/20 pb-4">
                  {category}
                </h3>
                <div className="space-y-4">
                  {items.map((item, i) => (
                    <div key={i} className="flex justify-between items-baseline gap-2">
                      <h4 className="text-sm md:text-base font-medium text-brand-ink flex-1 pr-2 leading-tight">{item.name}</h4>
                      <div className="hidden sm:block flex-grow border-b border-dotted border-brand-ink/20 mx-2"></div>
                      <div className="text-right whitespace-nowrap shrink-0">
                        <span className="font-serif text-brand-green-dark font-medium">{item.price}</span>
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
                      <a 
                        href={lokoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 bg-[#FC2765] text-white px-5 py-3 sm:py-2.5 rounded-full text-sm font-medium hover:bg-[#E01E55] transition-colors w-full sm:w-auto"
                      >
                        <img src={`${import.meta.env.BASE_URL}loko-logo.png`} alt="Loko" className="w-4 h-4 object-contain rounded-sm shadow-sm" />
                        <span>Loko Доставка</span>
                      </a>
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