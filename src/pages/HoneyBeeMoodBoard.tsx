import React, { useState, useEffect } from 'react';
import { 
  Palette, 
  Type, 
  Lightbulb, 
  Image as ImageIcon, 
  Hexagon, 
  Camera, 
  MessageSquare, 
  Bug
} from 'lucide-react';

// --- TYPE DEFINITIONS ---
type MoodSectionProps = { title: string; icon: React.ReactNode; children: React.ReactNode; className?: string };
type ColorSwatchProps = { color: string; name: string };
type ImageryCardProps = { icon: string; title: string; desc: string };
type ProductCardProps = { icon: string; title: string; origin: string; rating: string; price: string; onClick: () => void };
type CartItemProps = { icon: string; title: string; size: string; price: string };
type NavItemProps = { icon: string; label: string; active: boolean; onClick: () => void };
type TimelineItemProps = { icon: string; status: string; desc: string; time: string; completed?: boolean; active?: boolean };
type ScreenProps = { onNavigate: (screen: number) => void };

const HoneyBeeMoodBoard = () => {
  const [currentView, setCurrentView] = useState('moodboard');

  // Inject Google Fonts
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;500;600&family=Georgia&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50">
      <style>{`
        .font-montserrat {
          font-family: Montserrat, sans-serif;
        }
      `}</style>
      {/* NA  */}
      {/* --- TOP NAVIGATION --- */}
      <nav className="sticky top-0 z-50 text-white shadow-lg bg-[#212121]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Bug className="w-8 h-8 text-[#FFC107]" />
              <span className="text-xl font-bold tracking-wider font-montserrat">
                HoneyBee Hub
              </span>
            </div>
            <div className="flex space-x-4 md:space-x-8">
              <button
                onClick={() => setCurrentView('moodboard')}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-[#FFC107] ${
                  currentView === 'moodboard' ? 'text-[#FFC107] border-b-2 border-[#FFC107]' : 'text-white'
                }`}
              >
                Lab 1: Mood Board
              </button>
              <button
                onClick={() => setCurrentView('prototype')}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-[#FFC107] ${
                  currentView === 'prototype' ? 'text-[#FFC107] border-b-2 border-[#FFC107]' : 'text-white'
                }`}
              >
                Lab 2: Prototype
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- VIEW CONTENT --- */}
      <main>
        {currentView === 'moodboard' ? <MoodBoardView /> : <PrototypeView />}
      </main>
    </div>
  );
};

// --- VIEW 1: MOOD BOARD COMPONENT (Unchanged) ---
const MoodBoardView = () => {
  return (
    <div className="moodboard-gradient min-h-screen p-6 md:p-12 animate-in fade-in duration-500">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-8 md:p-12">
        
        {/* Header */}
        <div className="text-center mb-12 border-b-4 border-[#FFD700] pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-4 drop-shadow-sm">
            🐝 HoneyBee Hub
          </h1>
          <p className="text-lg italic text-gray-500">Mood Board - Design Direction & Visual Identity</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 1. Color Palette */}
          <MoodSection title="Color Palette" icon={<Palette className="w-6 h-6" />} className="lg:col-span-3">
            <div className="flex flex-wrap gap-4 mt-4">
              <ColorSwatch color="#FFD700" name="Golden Honey" />
              <ColorSwatch color="#FFA500" name="Amber Glow" />
              <ColorSwatch color="#8B4513" name="Saddle Brown" />
              <ColorSwatch color="#4CAF50" name="Natural Green" />
              <ColorSwatch color="#FFF8DC" name="Cornsilk" />
              <ColorSwatch color="#333333" name="Charcoal" />
            </div>
          </MoodSection>

          {/* 2. Typography */}
          <MoodSection title="Typography" icon={<Type className="w-6 h-6" />}>
            <div className="space-y-6 mt-2">
              <div className="p-4 bg-white border-l-4 border-[#FFD700] rounded shadow-sm">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1 font-sans">Primary (Headings)</span>
                <p className="text-3xl text-[#8B4513] font-serif">Georgia Serif</p>
                <p className="text-xs text-gray-500 mt-1 font-sans">Warm, trustworthy, and classic</p>
              </div>
              <div className="p-4 bg-white border-l-4 border-[#FFD700] rounded shadow-sm">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1 font-sans">Secondary (Body)</span>
                <p className="text-xl text-gray-700 font-sans">Open Sans / Arial</p>
                <p className="text-xs text-gray-500 mt-1 font-sans">Clean and readable for data</p>
              </div>
            </div>
          </MoodSection>

          {/* 3. Keywords */}
          <MoodSection title="Keywords & Values" icon={<Lightbulb className="w-6 h-6" />}>
            <div className="flex flex-wrap gap-2 mt-4 font-sans">
              {['Authentic', 'Natural', 'Pure', 'Sustainable', 'Transparent', 'Trusted', 'Organic', 'Local', 'Fresh', 'Health'].map(word => (
                <span key={word} className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full shadow-md transform hover:scale-105 transition-transform cursor-default">
                  {word}
                </span>
              ))}
            </div>
          </MoodSection>

          {/* 4. Visual Elements */}
          <MoodSection title="Visual Elements" icon={<ImageIcon className="w-6 h-6" />}>
            <div className="grid grid-cols-3 gap-3 mt-4">
              {['🐝', '🍯', '🌻', '⬡', '🌿', '✓'].map((emoji, i) => (
                <div key={i} className="aspect-square flex items-center justify-center text-4xl bg-white border-2 border-gray-100 rounded-xl hover:rotate-6 hover:scale-110 transition-transform cursor-default shadow-sm">
                  {emoji}
                </div>
              ))}
            </div>
          </MoodSection>

          {/* 5. Patterns */}
          <MoodSection title="Patterns" icon={<Hexagon className="w-6 h-6" />}>
             <p className="text-sm text-gray-500 font-sans mb-3">Honeycomb hexagonal pattern as primary design metaphor</p>
             <div className="h-32 border-2 border-gray-200 rounded-lg overflow-hidden relative bg-white">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
                      <polygon points="25,0 50,14.43 50,43.3 25,57.73 0,43.3 0,14.43" fill="none" stroke="#FFD700" strokeWidth="2"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#hexagons)" opacity="0.3"/>
                  <polygon points="100,30 130,47 130,82 100,99 70,82 70,47" fill="#FFD700" stroke="#FFA500" strokeWidth="2" opacity="0.8" />
                </svg>
             </div>
          </MoodSection>

          {/* 6. Imagery Style */}
          <MoodSection title="Imagery Style" icon={<Camera className="w-6 h-6" />} className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 mt-4 font-sans">
              <ImageryCard icon="🏞️" title="Natural Settings" desc="Beehives, flowers, meadows, and apiaries" />
              <ImageryCard icon="🍯" title="Product Focus" desc="Honey jars, drizzling honey, golden textures" />
              <ImageryCard icon="👥" title="People & Stories" desc="Beekeepers, families, authentic moments" />
              <ImageryCard icon="🎨" title="Style" desc="Warm lighting, soft focus, natural tones" />
            </div>
          </MoodSection>

          {/* 7. Design Philosophy */}
          <div className="lg:col-span-3 p-8 rounded-2xl text-white shadow-lg bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
            <h2 className="flex items-center gap-2 text-2xl font-bold mb-4">
              <MessageSquare className="w-6 h-6" /> Design Philosophy
            </h2>
            <p className="text-xl italic leading-relaxed font-serif">
              "HoneyBee Hub bridges the gap between authentic honey producers and conscious consumers, 
              creating trust through transparency, simplicity through intuitive design, and connection through storytelling. 
              Every element reflects nature's golden gift."
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- VIEW 2: PROTOTYPE COMPONENT ---
const PrototypeView = () => {
  // Screens: 0: Home, 1: Detail, 2: Cart, 3: Scanner, 4: Tracking
  const [activeScreen, setActiveScreen] = useState(0);

  // --- INJECTED CSS STYLES FOR CUSTOM ELEMENTS (Hexagons, etc) ---
  const customStyles = `
    .hexagon { width: 90px; height: 52px; position: relative; cursor: pointer; transition: transform 0.3s; margin: 27px 0; display: flex; justify-content: center; align-items: center; }
    .hexagon:hover { transform: scale(1.1); }
    .hexagon::before, .hexagon::after { content: ""; position: absolute; width: 0; border-left: 45px solid transparent; border-right: 45px solid transparent; z-index: 0; }
    .hexagon::before { bottom: 100%; border-bottom: 26px solid; border-bottom-color: inherit; }
    .hexagon::after { top: 100%; border-top: 26px solid; border-top-color: inherit; }
    .hex-content { position: absolute; z-index: 10; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    
    /* Specific Hex Colors */
    .hex-raw { background-color: #FFD700; border-bottom-color: #FFD700; border-top-color: #FFD700; }
    .hex-organic { background-color: #FFA500; border-bottom-color: #FFA500; border-top-color: #FFA500; }
    .hex-flavored { background-color: #FF8C00; border-bottom-color: #FF8C00; border-top-color: #FF8C00; }
    .hex-medicinal { background-color: #FFB347; border-bottom-color: #FFB347; border-top-color: #FFB347; }
    .hex-combo { background-color: #FFDAB9; border-bottom-color: #FFDAB9; border-top-color: #FFDAB9; }

    /* Timeline */
    .timeline-item::before { content: ""; position: absolute; left: 17px; top: 35px; bottom: -30px; width: 2px; background: #ddd; }
    .timeline-item:last-child::before { display: none; }
    @keyframes pulse-ring { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
    .animate-pulse-ring { animation: pulse-ring 2s infinite; }
  `;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col items-center">
      <style>{customStyles}</style>

      {/* SCREEN SELECTOR BUTTONS (For Demo) */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {['🏠 Home', '📱 Detail', '🛒 Cart', '📷 Scanner', '📦 Tracking'].map((label, idx) => (
          <button
            key={idx}
            onClick={() => setActiveScreen(idx)}
            className={`px-4 py-2 rounded-full font-bold text-sm transition-all transform hover:-translate-y-1 ${
              activeScreen === idx 
              ? 'bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white shadow-lg' 
              : 'bg-white text-[#8B4513] border-2 border-[#FFD700]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      
      {/* PHONE FRAME */}
      <div className="w-[375px] h-[812px] bg-black rounded-[40px] p-3 shadow-2xl relative overflow-hidden border-[10px] border-black">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[150px] h-[28px] bg-black rounded-b-[20px] z-50"></div>
        
        {/* Screen Content Container */}
        <div className="w-full h-full bg-white rounded-[30px] overflow-hidden relative font-sans flex flex-col">
          
          {/* Status Bar */}
          <div className="h-12 flex justify-between items-end px-6 pb-2 bg-transparent absolute top-0 left-0 right-0 z-40 text-xs font-bold text-black mix-blend-darken">
             <span>9:41</span>
             <span>📶 📡 🔋</span>
          </div>

          {/* --- SCREEN CONTENT RENDERER --- */}
          <div className="flex-1 overflow-y-auto scrollbar-hide pb-20 bg-[#FFF9E5]">
            {activeScreen === 0 && <ScreenHome onNavigate={setActiveScreen} />}
            {activeScreen === 1 && <ScreenDetail onNavigate={setActiveScreen} />}
            {activeScreen === 2 && <ScreenCart onNavigate={setActiveScreen} />}
            {activeScreen === 3 && <ScreenScanner onNavigate={setActiveScreen} />}
            {activeScreen === 4 && <ScreenTracking onNavigate={setActiveScreen} />}
          </div>

          {/* --- BOTTOM NAVIGATION (Global) --- */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 h-[80px] flex justify-around items-start pt-4 z-50 rounded-b-[30px]">
             <NavItem icon="🏠" label="Home" active={activeScreen === 0} onClick={() => setActiveScreen(0)} />
             <NavItem icon="🛒" label="Cart" active={activeScreen === 2} onClick={() => setActiveScreen(2)} />
             <NavItem icon="📦" label="Orders" active={activeScreen === 4} onClick={() => setActiveScreen(4)} />
             <NavItem icon="👤" label="Profile" active={false} onClick={() => setActiveScreen(5)} />
          </div>

        </div>
      </div>
    </div>
  );
};

// --- SCREEN 0: HOME ---
const ScreenHome = ({ onNavigate }: ScreenProps) => (
  <>
    {/* App Header */}
    <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] pt-14 pb-6 px-6 rounded-b-[30px] shadow-md text-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold font-heading">🐝 HoneyBee Hub</h1>
        <div className="flex gap-3">
          <div className="w-9 h-9 bg-white/30 rounded-full flex items-center justify-center cursor-pointer backdrop-blur-sm">🔔</div>
          <div className="w-9 h-9 bg-white/30 rounded-full flex items-center justify-center cursor-pointer backdrop-blur-sm">👤</div>
        </div>
      </div>
      <div className="bg-white rounded-full px-4 py-3 flex items-center gap-2 shadow-sm">
        <span>🔍</span>
        <input type="text" placeholder="Search honey varieties..." className="flex-1 outline-none text-gray-700 text-sm placeholder-gray-400" />
      </div>
    </div>

    <div className="p-5 space-y-6">
      {/* Categories (Hexagon Grid) */}
      <section>
        <h2 className="text-lg font-bold text-[#8B4513] mb-4 font-serif">Browse Categories</h2>
        <div className="flex flex-col items-center">
          {/* Row 1 */}
          <div className="flex gap-4">
            <div className="hexagon hex-raw">
              <div className="hex-content text-white"><span className="text-xl">🍯</span><span className="text-[10px] font-bold mt-1">Raw</span></div>
            </div>
            <div className="hexagon hex-organic">
              <div className="hex-content text-white"><span className="text-xl">🌿</span><span className="text-[10px] font-bold mt-1">Organic</span></div>
            </div>
          </div>
          {/* Row 2 (Offset) */}
          <div className="flex gap-4 -mt-6">
            <div className="hexagon hex-flavored">
              <div className="hex-content text-white"><span className="text-xl">✨</span><span className="text-[10px] font-bold mt-1">Flavored</span></div>
            </div>
            <div className="hexagon hex-medicinal">
              <div className="hex-content text-white"><span className="text-xl">💊</span><span className="text-[10px] font-bold mt-1">Medicinal</span></div>
            </div>
          </div>
          {/* Row 3 */}
          <div className="flex gap-4 -mt-6">
            <div className="hexagon hex-combo">
              <div className="hex-content text-white"><span className="text-xl">🎁</span><span className="text-[10px] font-bold mt-1">Combos</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-lg font-bold text-[#8B4513] mb-4 font-serif">Featured Products</h2>
        <div className="space-y-4">
          <ProductCard 
            icon="🍯" 
            title="Raw Himalayan Honey" 
            origin="📍 Kashmir Valley" 
            rating="⭐⭐⭐⭐⭐ (128)" 
            price="$15.99"
            onClick={() => onNavigate(1)}
          />
          <ProductCard 
            icon="🌼" 
            title="Organic Wildflower" 
            origin="📍 Punjab Meadows" 
            rating="⭐⭐⭐⭐⭐ (96)" 
            price="$18.99"
            onClick={() => onNavigate(1)}
          />
          <ProductCard 
            icon="🌿" 
            title="Medicinal Sidr Honey" 
            origin="📍 Khyber Region" 
            rating="⭐⭐⭐⭐⭐ (84)" 
            price="$24.99"
            onClick={() => onNavigate(1)}
          />
        </div>
      </section>
    </div>
  </>
);

// --- SCREEN 1: PRODUCT DETAIL ---
const ScreenDetail = ({ onNavigate }: ScreenProps) => (
  <div className="bg-white min-h-full">
    {/* Header Image Area */}
    <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] pt-14 pb-8 px-6 relative h-[300px] flex flex-col items-center">
      <button onClick={() => onNavigate(0)} className="absolute top-12 left-5 w-9 h-9 bg-white/30 rounded-full flex items-center justify-center text-white backdrop-blur-md">←</button>
      <div className="absolute top-12 right-5 flex gap-3">
        <div className="w-9 h-9 bg-white/30 rounded-full flex items-center justify-center text-white cursor-pointer">❤️</div>
        <div className="w-9 h-9 bg-white/30 rounded-full flex items-center justify-center text-white cursor-pointer">🔗</div>
      </div>
      <div className="text-[120px] mt-8 drop-shadow-xl animate-bounce-slow">🍯</div>
    </div>

    {/* Content Sheet */}
    <div className="bg-white rounded-t-[30px] -mt-8 relative p-6 space-y-6 shadow-2xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Raw Himalayan Honey</h1>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[#FFD700] text-sm">⭐⭐⭐⭐⭐</span>
          <span className="text-gray-400 text-xs">(128 reviews)</span>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-2 font-bold">Select Size:</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 border-2 border-[#FFD700] bg-[#FFF8DC] rounded-xl font-bold text-sm text-[#8B4513]">500g</button>
          <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm text-gray-600">1kg</button>
          <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm text-gray-600">2kg</button>
        </div>
      </div>

      <div className="text-3xl font-bold text-[#4CAF50]">$15.99</div>

      <div className="bg-gray-50 p-4 rounded-xl">
        <h3 className="font-bold text-gray-800 mb-2">📖 About this honey</h3>
        <ul className="text-sm text-gray-500 space-y-1 list-disc pl-4">
          <li>Sourced from pristine Kashmir Valley</li>
          <li>100% Pure & Natural - No additives</li>
          <li>Rich in antioxidants and enzymes</li>
          <li>Cold-extracted to preserve nutrients</li>
        </ul>
      </div>

      <div className="flex gap-3 pt-2">
        <button onClick={() => onNavigate(2)} className="flex-1 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition">
          🛒 Add to Cart
        </button>
        <button className="flex-1 py-4 bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition">
          ⚡ Buy Now
        </button>
      </div>
    </div>
  </div>
);

// --- SCREEN 2: CART ---
const ScreenCart = ({ onNavigate }: ScreenProps) => (
  <div className="pt-14 px-5 h-full bg-white">
    <div className="flex items-center gap-4 mb-6">
      <button onClick={() => onNavigate(0)} className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">←</button>
      <h1 className="text-xl font-bold">My Cart (2)</h1>
    </div>

    <div className="space-y-4">
      <CartItem icon="🍯" title="Raw Himalayan Honey" size="500g" price="$15.99" />
      <CartItem icon="🌼" title="Organic Wildflower" size="500g" price="$18.99" />
    </div>

    <div className="mt-8">
      <h3 className="font-bold text-gray-800 mb-3">Have a promo code?</h3>
      <div className="flex gap-3 mb-6">
        <input type="text" placeholder="Enter code" className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#4CAF50]" />
        <button className="bg-[#4CAF50] text-white px-6 rounded-xl font-bold text-sm">Apply</button>
      </div>

      <div className="bg-gray-50 p-5 rounded-xl space-y-2 mb-6">
        <div className="flex justify-between text-sm text-gray-600"><span>Subtotal:</span><span>$34.98</span></div>
        <div className="flex justify-between text-sm text-gray-600"><span>Delivery:</span><span>$3.00</span></div>
        <div className="flex justify-between text-sm text-[#4CAF50]"><span>Discount:</span><span>-$0.00</span></div>
        <div className="flex justify-between text-lg font-bold text-gray-800 pt-2 border-t border-gray-200 mt-2"><span>Total:</span><span className="text-[#4CAF50]">$37.98</span></div>
      </div>

      <button className="w-full py-4 bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white font-bold rounded-xl shadow-lg shadow-green-100">
        Proceed to Checkout 🔒
      </button>
    </div>
  </div>
);

// --- SCREEN 3: SCANNER ---
const ScreenScanner = ({ onNavigate }: ScreenProps) => (
  <div className="h-full bg-black relative flex flex-col">
    {/* Camera Overlay Header */}
    <div className="absolute top-0 left-0 right-0 p-6 pt-14 flex justify-between items-center z-20 bg-gradient-to-b from-black/70 to-transparent">
      <button onClick={() => onNavigate(0)} className="text-white text-2xl">←</button>
      <span className="text-white font-bold text-lg">Scan QR Code</span>
      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md">💡</div>
    </div>

    {/* Camera Viewfinder */}
    <div className="flex-1 relative flex items-center justify-center">
      <div className="w-64 h-64 border-4 border-[#FFD700] rounded-3xl relative shadow-[0_0_0_999px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#FFD700] -ml-[2px] -mt-[2px]"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#FFD700] -mr-[2px] -mt-[2px]"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#FFD700] -ml-[2px] -mb-[2px]"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#FFD700] -mr-[2px] -mb-[2px]"></div>
      </div>
      <p className="absolute bottom-32 text-white text-center px-10 opacity-80">
        Position the QR code on your honey jar within the frame to verify authenticity
      </p>
    </div>

    {/* Result Sheet */}
    <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[30px] p-6 pb-24 animate-in slide-in-from-bottom duration-500">
      <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-3xl mx-auto -mt-14 border-4 border-white shadow-lg mb-4">✓</div>
      <h2 className="text-center text-xl font-bold text-gray-800 mb-4">Authentic Product Verified!</h2>
      
      <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
        <div className="flex justify-between"><span className="text-gray-500">Product:</span><span className="font-bold">Raw Himalayan Honey</span></div>
        <div className="flex justify-between"><span className="text-gray-500">Origin:</span><span className="font-bold">Kashmir Valley</span></div>
        <div className="flex justify-between"><span className="text-gray-500">Batch #:</span><span className="font-bold">KSH-2024-11-089</span></div>
        <div className="flex justify-between"><span className="text-gray-500">Quality:</span><span className="font-bold text-[#4CAF50]">✓ Lab Certified</span></div>
      </div>
      
      <button className="w-full mt-4 py-3 bg-gray-800 text-white font-bold rounded-xl">View Full Details</button>
    </div>
  </div>
);

// --- SCREEN 4: TRACKING ---
const ScreenTracking = ({ onNavigate }: ScreenProps) => (
  <div className="bg-gray-50 min-h-full">
    <div className="bg-gradient-to-br from-[#4CAF50] to-[#45a049] pt-14 pb-10 px-6 text-white rounded-b-[30px] shadow-lg">
      <button onClick={() => onNavigate(0)} className="mb-4 text-2xl">←</button>
      <p className="text-white/80 text-sm mb-1">Order #HBH-2024-11-1234</p>
      <h1 className="text-3xl font-bold mb-2">Out for Delivery 🚚</h1>
      <p className="text-white/90 text-sm">Estimated arrival: Today, 4:00 PM</p>
    </div>

    <div className="px-6 py-8">
      {/* Timeline */}
      <div className="space-y-0 pl-2">
        <TimelineItem 
          icon="✓" status="Order Placed" desc="Your order has been confirmed" time="Nov 23, 10:30 AM" completed 
        />
        <TimelineItem 
          icon="📦" status="Order Packed" desc="Your honey is packed with care" time="Nov 23, 2:15 PM" completed 
        />
        <TimelineItem 
          icon="🚚" status="Shipped" desc="Package left our facility" time="Nov 24, 9:00 AM" completed 
        />
        <TimelineItem 
          icon="📍" status="Out for Delivery" desc="Driver is 2.5 km away" time="Nov 25, 2:45 PM" active 
        />
        <TimelineItem 
          icon="🏠" status="Delivered" desc="Package will be delivered soon" time="Pending" completed={false} active={false} 
        />
      </div>

      <div className="bg-[#FFF8DC] p-5 rounded-xl mt-8">
        <h3 className="font-bold text-gray-800 mb-4">Order Items (2)</h3>
        <div className="space-y-3">
          <div className="flex gap-3 bg-white p-3 rounded-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-lg flex items-center justify-center text-xl">🍯</div>
            <div>
              <p className="font-bold text-sm">Raw Himalayan Honey</p>
              <p className="text-xs text-gray-500">500g x 1</p>
            </div>
          </div>
          <div className="flex gap-3 bg-white p-3 rounded-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-lg flex items-center justify-center text-xl">🌼</div>
            <div>
              <p className="font-bold text-sm">Organic Wildflower</p>
              <p className="text-xs text-gray-500">500g x 1</p>
            </div>
          </div>
        </div>
        <button className="w-full mt-4 py-3 bg-[#FFD700] text-[#8B4513] font-bold rounded-xl">Contact Driver 📞</button>
      </div>
    </div>
  </div>
);

// --- HELPER COMPONENTS ---

const MoodSection = ({ title, icon, children, className = '' }: MoodSectionProps) => (
  <div className={`bg-[#FFFEF7] p-6 rounded-2xl border-2 border-[#FFD700] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${className}`}>
    <h2 className="text-2xl font-bold text-[#8B4513] flex items-center gap-3 mb-2 font-serif">
      {icon} {title}
    </h2>
    {children}
  </div>
);

const ColorSwatch = ({ color, name }: ColorSwatchProps) => {
  useEffect(() => {
    const swatches = document.querySelectorAll('[data-swatch-color]');
    swatches.forEach(el => {
      const c = (el as HTMLElement).getAttribute('data-swatch-color');
      if (c) (el as HTMLElement).style.backgroundColor = c;
    });
  }, [color]);

  return (
    <div className="flex-1 min-w-[120px] text-center group">
      <div 
        className="h-24 rounded-xl mb-2 shadow-md border-4 border-[#333] transition-transform group-hover:scale-105" 
        data-swatch-color={color}
      ></div>
      <div className="font-bold text-[#333] text-sm font-sans">{name}</div>
      <div className="text-gray-500 text-xs font-mono">{color}</div>
    </div>
  );
};

const ImageryCard = ({ icon, title, desc }: ImageryCardProps) => (
  <div className="p-4 bg-white rounded-xl border-2 border-[#FFE8C5] text-center hover:bg-[#FFF9E5] transition-colors">
    <div className="text-4xl mb-2">{icon}</div>
    <div className="font-bold text-[#8B4513] mb-1">{title}</div>
    <div className="text-xs text-gray-500">{desc}</div>
  </div>
);

const NavItem = ({ icon, label, active, onClick }: NavItemProps) => (
  <button onClick={onClick} className={`flex flex-col items-center gap-1 ${active ? 'text-[#FFA000]' : 'text-gray-400'} hover:text-[#FFA000] transition`}>
    <span className="text-2xl">{icon}</span>
    <span className="text-[10px] font-bold">{label}</span>
  </button>
);

const ProductCard = ({ icon, title, origin, rating, price, onClick }: ProductCardProps) => (
  <div onClick={onClick} className="bg-white p-4 rounded-2xl shadow-sm flex gap-4 hover:shadow-md transition transform hover:-translate-y-1 cursor-pointer">
    <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-xl flex items-center justify-center text-4xl">
      {icon}
    </div>
    <div className="flex-1 flex flex-col justify-center">
      <h3 className="font-bold text-gray-800">{title}</h3>
      <p className="text-xs text-gray-500 mb-1">{origin}</p>
      <p className="text-xs text-[#FFD700] mb-1">{rating}</p>
      <p className="font-bold text-[#4CAF50]">{price}</p>
    </div>
  </div>
);

const CartItem = ({ icon, title, size, price }: CartItemProps) => (
  <div className="bg-[#FFF8DC] p-4 rounded-xl flex gap-4 items-center">
    <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-xl flex items-center justify-center text-3xl">
      {icon}
    </div>
    <div className="flex-1">
      <h3 className="font-bold text-gray-800">{title}</h3>
      <p className="text-xs text-gray-500">Size: {size}</p>
      <p className="font-bold text-[#4CAF50]">{price}</p>
    </div>
    <div className="flex flex-col items-end gap-2">
      <div className="bg-white rounded-full px-2 py-1 flex items-center gap-3 shadow-sm">
        <button className="w-5 h-5 bg-[#FFD700] rounded-full text-white font-bold flex items-center justify-center text-xs">-</button>
        <span className="text-xs font-bold">1</span>
        <button className="w-5 h-5 bg-[#FFD700] rounded-full text-white font-bold flex items-center justify-center text-xs">+</button>
      </div>
      <span className="text-red-500 text-lg cursor-pointer">🗑️</span>
    </div>
  </div>
);

const TimelineItem = ({ icon, status, desc, time, completed, active }: TimelineItemProps) => (
  <div className={`relative flex gap-4 pb-8 timeline-item ${completed ? 'opacity-100' : active ? 'opacity-100' : 'opacity-50'}`}>
    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-lg z-10 border-4 
      ${completed ? 'bg-[#4CAF50] border-[#4CAF50] text-white' : active ? 'bg-[#FFD700] border-[#FFD700] text-white animate-pulse-ring' : 'bg-white border-gray-200 text-gray-400'}`}>
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-gray-800 text-sm">{status}</h4>
      <p className="text-xs text-gray-500">{desc}</p>
      <p className="text-[10px] text-gray-400 mt-1">{time}</p>
    </div>
  </div>
);

export default HoneyBeeMoodBoard;