import { useEffect } from 'react';
import type { ReactNode } from 'react';

const CUMoodboard = () => {
  // Pattern styles moved to global CSS classes (`cu-pattern1`, `cu-pattern3`, `cu-pattern4`).

  return (
    <div className="min-h-screen p-6 font-sans bg-gradient-to-br from-[#667eea] to-[#764ba2]">
      <div className="max-w-[1400px] mx-auto bg-white rounded-3xl p-10 shadow-2xl">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-[#2c3e50] text-4xl md:text-5xl font-bold mb-3">COMSATS CUOnline MOODBOARD</h1>
          <p className="text-[#7f8c8d] text-lg">COMSATS University Islamabad - Abbottabad Campus - Student Information System</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {/* Color Palette */}
          <Section title="🎨 Color Palette">
            <div className="grid grid-cols-2 gap-4">
              <ColorBox color="#005a9c" name="COMSATS Blue" />
              <ColorBox color="#00a651" name="Success Green" />
              <ColorBox color="#e74c3c" name="Alert Red" />
              <ColorBox color="#34495e" name="Professional Gray" />
              <ColorBox color="#ecf0f1" name="Clean White" textColor="#2c3e50" />
              <ColorBox color="#f39c12" name="Highlight Orange" />
            </div>
          </Section>

          {/* Typography */}
          <Section title="✍️ Typography">
            <div className="flex flex-col gap-4">
              <FontSample 
                title="Heading Font" 
                sample="Segoe UI Bold - Clear & Professional" 
                className="font-bold text-2xl" 
              />
              <FontSample 
                title="Body Text Sample" 
                sample="Segoe UI Regular - Easy to read for long content" 
                className="text-lg" 
              />
              <FontSample 
                title="Code: Monospace" 
                sample="For course codes and technical content" 
                className="font-mono" 
              />
            </div>
          </Section>

          {/* Patterns & Textures */}
          <Section title="🎭 Patterns & Textures">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-32 rounded-xl flex items-center justify-center text-[#2c3e50] font-bold shadow-sm hover:scale-105 transition-transform cu-pattern1">Subtle Grid</div>
              <div className="h-32 rounded-xl flex items-center justify-center text-white font-bold bg-gradient-to-br from-[#667eea] to-[#764ba2] shadow-sm hover:scale-105 transition-transform">Gradient</div>
              <div className="h-32 rounded-xl flex items-center justify-center text-[#2c3e50] font-bold shadow-sm hover:scale-105 transition-transform cu-pattern4">Dots Pattern</div>
              <div className="h-32 rounded-xl flex items-center justify-center text-[#2c3e50] font-bold shadow-sm hover:scale-105 transition-transform cu-pattern3">Stripes</div>
            </div>
          </Section>

          {/* Icons & Elements */}
          <Section title="🎯 Icons & Elements">
            <div className="grid grid-cols-4 gap-4">
              <IconBox icon="📚" label="Courses" />
              <IconBox icon="📊" label="Analytics" />
              <IconBox icon="✅" label="Tasks" />
              <IconBox icon="📅" label="Schedule" />
              <IconBox icon="🔔" label="Alerts" />
              <IconBox icon="👤" label="Profile" />
              <IconBox icon="💬" label="Chat" />
              <IconBox icon="⚙️" label="Settings" />
            </div>
          </Section>

          {/* Keywords */}
          <div className="lg:col-span-2 xl:col-span-3 bg-gray-50 p-6 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition-transform duration-300">
            <h2 className="text-[#34495e] mb-5 text-2xl border-b-4 border-[#3498db] pb-2 font-bold">💡 Core Values & Keywords</h2>
            <div className="flex flex-wrap gap-3">
              {['Intuitive', 'Modern', 'Accessible', 'Efficient', 'Responsive', 'User-Friendly', 'Professional', 'Collaborative', 'Organized', 'Streamlined'].map((kw, i) => (
                <span key={i} className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white px-6 py-3 rounded-full font-semibold shadow-sm hover:scale-110 hover:shadow-md transition-all cursor-default">
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Imagery */}
          <div className="lg:col-span-2 xl:col-span-3 bg-gray-50 p-6 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition-transform duration-300">
             <h2 className="text-[#34495e] mb-5 text-2xl border-b-4 border-[#3498db] pb-2 font-bold">🖼️ Imagery & Visual Direction</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ImagePlaceholder icon="📖" text="Clean Dashboard Layouts" />
                <ImagePlaceholder icon="🎓" text="Student-Focused Interface" />
                <ImagePlaceholder icon="📱" text="Mobile-First Design" />
                <ImagePlaceholder icon="🔒" text="Secure & Private Data" />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Prop Types ---
type SectionProps = { title: string; children: ReactNode };
type ColorBoxProps = { color: string; name: string; textColor?: string };
type FontSampleProps = { title: string; sample: string; className?: string };
type IconBoxProps = { icon: ReactNode; label: string };
type ImagePlaceholderProps = { icon: ReactNode; text: string };

// --- Sub-Components ---

const Section = ({ title, children }: SectionProps) => (
  <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition-transform duration-300">
    <h2 className="text-[#34495e] mb-5 text-2xl border-b-4 border-[#3498db] pb-2 font-bold">{title}</h2>
    {children}
  </div>
);

const ColorBox = ({ color, name, textColor = 'white' }: ColorBoxProps) => {
  const safeName = color.replace(/[^a-zA-Z0-9]/g, '');
  const dynamicClass = `cu-dyn-bg-${safeName}`;

  useEffect(() => {
    const styleId = `cu-style-${dynamicClass}`;
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `.${dynamicClass} { background-color: ${color}; color: ${textColor}; }`;
      document.head.appendChild(style);
    }
  }, [dynamicClass, color, textColor]);

  return (
    <div className={`h-24 rounded-xl flex flex-col justify-center items-center font-bold shadow-md hover:scale-105 transition-transform ${dynamicClass}`}>
      <span>{color}</span>
      <span className="text-xs font-normal mt-1 opacity-90">{name}</span>
    </div>
  );
};

const FontSample = ({ title, sample, className }: FontSampleProps) => (
  <div className="p-4 bg-white rounded-lg border-l-4 border-[#3498db] shadow-sm">
    <div className={className}>{title}</div>
    <p className="text-[#7f8c8d] text-sm mt-1">{sample}</p>
  </div>
);

const IconBox = ({ icon, label }: IconBoxProps) => (
  <div className="bg-white p-3 rounded-xl flex flex-col items-center justify-center shadow-sm hover:bg-[#3498db] hover:text-white transition-colors group cursor-pointer h-24">
    <span className="text-3xl mb-1 group-hover:scale-110 transition-transform">{icon}</span>
    <span className="text-xs text-center font-medium">{label}</span>
  </div>
);

const ImagePlaceholder = ({ icon, text }: ImagePlaceholderProps) => (
  <div className="h-40 rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-[#3498db] bg-blue-50/50 text-[#34495e] hover:bg-blue-100/50 hover:border-[#2ecc71] transition-all cursor-pointer">
    <span className="text-4xl mb-2">{icon}</span>
    <span className="font-semibold text-center px-4">{text}</span>
  </div>
);

export default CUMoodboard;