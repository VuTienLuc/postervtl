import React from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  Trophy, 
  GraduationCap, 
  Calendar, 
  Music, 
  Compass, 
  Baby, 
  Layout, 
  ChevronRight 
} from 'lucide-react';
import { THEMES } from '../constants';
import { ThemeKey } from '../types';
import { cn } from '../lib/utils';

interface ThemeSelectorProps {
  onThemeSelect: (themeId: ThemeKey) => void;
}

const getThemeIcon = (id: ThemeKey) => {
  switch (id) {
    case 'tuyenduong': return <Star className="w-6 h-6" />;
    case 'thethao': return <Trophy className="w-6 h-6" />;
    case 'kyyeu': return <GraduationCap className="w-6 h-6" />;
    case 'sukien': return <Calendar className="w-6 h-6" />;
    case 'prom': return <Music className="w-6 h-6" />;
    case 'ngoaikhoa': return <Compass className="w-6 h-6" />;
    case 'tieuhoc': return <Baby className="w-6 h-6" />;
    default: return <Layout className="w-6 h-6" />;
  }
};

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onThemeSelect }) => {
  return (
    <motion.div 
      key="menu"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-anton text-gray-900 mb-4 uppercase">Chọn Chủ Đề Thiết Kế</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Khám phá hàng trăm mẫu poster chuyên nghiệp được thiết kế riêng cho học sinh và sinh viên.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {THEMES.map((theme) => (
          <button
            key={theme.id}
            onClick={() => onThemeSelect(theme.id)}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 text-left"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={theme.image} 
                alt={theme.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className={cn(
                  "p-2 rounded-lg",
                  theme.id === 'tuyenduong' ? "bg-emerald-100 text-emerald-600" :
                  theme.id === 'tieuhoc' ? "bg-pink-100 text-pink-600" :
                  theme.id === 'thethao' ? "bg-orange-100 text-orange-600" :
                  theme.id === 'kyyeu' ? "bg-yellow-100 text-yellow-600" :
                  theme.id === 'sukien' ? "bg-red-100 text-red-600" :
                  theme.id === 'prom' ? "bg-purple-100 text-purple-600" :
                  "bg-blue-100 text-blue-600"
                )}>
                  {getThemeIcon(theme.id)}
                </div>
                <h3 className="text-xl font-bold font-oswald uppercase">{theme.name}</h3>
              </div>
              <p className="text-gray-500 text-sm">{theme.description}</p>
              <div className="mt-4 flex items-center text-blue-600 font-bold text-sm">
                Bắt đầu thiết kế <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
};
