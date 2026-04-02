/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter, 
  ChevronRight, 
  Star, 
  Menu, 
  X, 
  Calendar,
  MessageCircle,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'nav-blur py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center border border-gold">
            <span className="text-gold font-serif font-bold text-xl">L</span>
          </div>
          <span className={`font-serif text-base sm:text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap ${isScrolled ? 'text-navy' : 'text-navy'}`}>
            LAVANYA <span className="text-gold">DENTAL CLINIC</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-gold transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#appointment" 
            className="bg-navy text-white px-6 py-2.5 rounded-full text-sm font-semibold gold-glow transition-all border border-gold/30"
          >
            BOOK NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-navy" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl py-8 px-6 flex flex-col gap-6 md:hidden border-t border-gold/10"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-navy hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#appointment" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-navy text-white text-center py-4 rounded-xl font-bold"
            >
              BOOK APPOINTMENT
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white py-20">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-navy rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold font-semibold tracking-[0.3em] uppercase text-sm mb-4 block">Premium Oral Care</span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-navy leading-[1.1] mb-6">
            Crafting <br />
            <span className="italic font-normal text-gold">Confident</span> <br />
            Smiles
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed">
            Experience world-class dental excellence combined with luxury comfort. Your journey to a perfect smile begins here.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#appointment" className="bg-navy text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 gold-glow transition-all">
              Book Appointment <Calendar size={18} />
            </a>
            <a href="tel:+919876543210" className="border-2 border-navy text-navy px-8 py-4 rounded-full font-bold hover:bg-navy hover:text-white transition-all">
              Call Now
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
              ].map((url, i) => (
                <img key={i} src={url} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Patient" referrerPolicy="no-referrer" />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-gold">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-gray-500 font-medium">Trusted by 2,000+ happy patients</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-white shadow-2xl bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop" 
              alt="Smiling Patient" 
              className="w-full h-[350px] md:h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 glass-card p-6 z-20 max-w-[200px]">
            <p className="text-navy font-serif italic text-lg leading-tight">"The best dental experience I've ever had."</p>
            <p className="text-gold text-xs font-bold mt-2 uppercase tracking-tighter">— Sarah Jenkins</p>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-gold/20 rounded-full animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop" 
                alt="Dr. Lavanya" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-10 -left-10 w-32 h-32 bg-gold/10 rounded-full -z-10" />
            <div className="absolute bottom-10 -right-10 w-48 h-48 bg-navy/5 rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Meet the Expert</span>
            <h2 className="text-5xl font-bold text-navy mb-6">Dr. Lavanya Reddy</h2>
            <p className="text-gold font-medium text-xl mb-8 font-serif italic">MDS, Prosthodontics & Implantology</p>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                With over 15 years of experience in aesthetic dentistry, Dr. Lavanya has dedicated her career to transforming lives through beautiful smiles. Her approach combines clinical precision with an artistic eye.
              </p>
              <p>
                She believes that every patient deserves a personalized treatment plan that respects their unique facial features and oral health goals.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy">15+ Years</h4>
                  <p className="text-xs text-gray-500">Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy">5000+</h4>
                  <p className="text-xs text-gray-500">Smiles Created</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Teeth Whitening",
      desc: "Brighten your smile by several shades with our advanced laser whitening technology.",
      icon: "✨",
      image: "https://images.unsplash.com/photo-1588776814546-1ffce47267a5?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Dental Implants",
      desc: "Permanent, natural-looking solutions for missing teeth using premium titanium implants.",
      icon: "🦷",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Smile Design",
      desc: "A comprehensive makeover using veneers, crowns, and contouring for your perfect look.",
      icon: "💎",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Root Canal Treatment",
      desc: "Painless, single-sitting root canal procedures to save your natural teeth.",
      icon: "🛡️",
      image: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-5xl font-bold text-navy">Exceptional Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group glass-card p-8 hover:bg-navy hover:text-white transition-all duration-500 cursor-pointer overflow-hidden relative"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="flex items-center gap-2 text-gold font-bold text-sm">
                Learn More <ChevronRight size={16} />
              </div>
              
              {/* Hover Image Reveal */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10">
                <img src={service.image} className="w-full h-full object-cover" alt={service.title} referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const transformations = [
    { 
      before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop", 
      after: "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?q=80&w=800&auto=format&fit=crop", 
      label: "Smile Makeover" 
    },
    { 
      before: "https://images.unsplash.com/photo-1588776814546-1ffce47267a5?q=80&w=800&auto=format&fit=crop", 
      after: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop", 
      label: "Teeth Whitening" 
    },
    { 
      before: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop", 
      after: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=800&auto=format&fit=crop", 
      label: "Dental Implants" 
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Transformation</span>
            <h2 className="text-5xl font-bold">Real Results</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-400 max-w-md"
          >
            Witness the artistic precision and clinical excellence of our smile transformations. Every case is a masterpiece.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <h4 className="text-center font-serif italic text-xl text-gold group-hover:text-white transition-colors">{item.label}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reviews = [
    {
      name: "Anjali Sharma",
      role: "Fashion Designer",
      text: "Dr. Lavanya is a true artist. My smile makeover has given me so much confidence. The clinic feels more like a spa than a dentist's office!",
      rating: 5
    },
    {
      name: "Vikram Malhotra",
      role: "Tech Entrepreneur",
      text: "Professional, efficient, and painless. The dental implants look and feel completely natural. Highly recommended for premium care.",
      rating: 5
    },
    {
      name: "Priya Reddy",
      role: "Architect",
      text: "The attention to detail is incredible. They use the latest technology and the results speak for themselves. Best in the city.",
      rating: 5
    }
  ];

  const next = () => setActiveIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 text-[200px] font-serif text-gold select-none">"</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Patient Stories</span>
          <h2 className="text-5xl font-bold text-navy">What Our Clients Say</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {reviews.map((review, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="glass-card p-12 md:p-20 relative text-center">
                    <div className="flex justify-center text-gold mb-8">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
                    </div>
                    <p className="text-2xl md:text-3xl text-navy font-serif italic mb-10 leading-relaxed">
                      "{review.text}"
                    </p>
                    <div>
                      <h4 className="font-bold text-xl text-navy">{review.name}</h4>
                      <p className="text-gold text-sm font-semibold uppercase tracking-widest mt-1">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-all"
            >
              <ChevronRight size={24} className="rotate-180" />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-8 bg-gold' : 'bg-gray-200'}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const AppointmentForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="appointment" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden grid md:grid-cols-2">
          <div className="p-12 md:p-20 bg-navy text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            <h2 className="text-5xl font-bold mb-8 relative z-10">Book Your <br /><span className="text-gold">Consultation</span></h2>
            <p className="text-gray-400 mb-12 relative z-10 max-w-md">
              Take the first step towards your dream smile. Our team will contact you within 24 hours to confirm your preferred slot.
            </p>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Call Us</p>
                  <p className="text-xl font-bold">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Email Us</p>
                  <p className="text-base md:text-xl font-bold break-all">care@lavanyadental.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 md:p-20 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-navy uppercase tracking-widest">Full Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-navy uppercase tracking-widest">Phone Number</label>
                      <input required type="tel" placeholder="+91 00000 00000" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-widest">Service Interested In</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none">
                      <option>Smile Design</option>
                      <option>Teeth Whitening</option>
                      <option>Dental Implants</option>
                      <option>General Checkup</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-widest">Preferred Date</label>
                    <input required type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-widest">Message (Optional)</label>
                    <textarea rows={4} placeholder="Tell us about your dental goals..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                  </div>

                  <button type="submit" className="w-full bg-navy text-white py-5 rounded-xl font-bold gold-glow transition-all flex items-center justify-center gap-3">
                    CONFIRM APPOINTMENT <ChevronRight size={20} />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-navy">Request Received!</h3>
                  <p className="text-gray-600">
                    Thank you for choosing Lavanya Dental. Our concierge will contact you shortly to finalize your appointment.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-gold font-bold uppercase tracking-widest text-sm hover:underline"
                  >
                    Send another request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-navy mb-12">Visit Our Clinic</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-gray-50 border border-gray-100 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-navy text-xl mb-2">Location</h4>
                <p className="text-gray-500">Kaluvoya, Nellore,<br />Andhra Pradesh – 524343</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-gray-50 border border-gray-100 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-navy text-xl mb-2">Working Hours</h4>
                <p className="text-gray-500">Mon - Sat: 10:00 AM - 08:00 PM<br />Sunday: By Appointment Only</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-6">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-navy hover:bg-gold hover:border-gold hover:text-white transition-all shadow-sm">
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy py-16 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-gold/30">
              <span className="text-gold font-serif font-bold text-xl">L</span>
            </div>
            <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight whitespace-nowrap">
              LAVANYA <span className="text-gold">DENTAL CLINIC</span>
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Patient Portal</a>
            <a href="#" className="hover:text-gold transition-colors">FAQ</a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-xs tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} Lavanya Dental Clinic. All Rights Reserved. Designed for Excellence.
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl z-[100] cursor-pointer"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-bounce">1</span>
    </motion.a>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-28 right-8 w-12 h-12 bg-navy text-gold rounded-full flex items-center justify-center shadow-2xl z-[100] border border-gold/30 hover:bg-gold hover:text-navy transition-all"
        >
          <ChevronRight size={24} className="-rotate-90" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-navy">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <AppointmentForm />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
