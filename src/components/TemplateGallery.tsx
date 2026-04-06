import React from 'react';
import { motion } from 'motion/react';
import { THEMES } from '../constants';
import { TEMPLATES } from '../templates';
import { ThemeKey, PosterTemplate, PosterData } from '../types';
import { cn } from '../lib/utils';

interface TemplateGalleryProps {
  selectedTheme: ThemeKey | null;
  filter: string;
  setFilter: (filter: string) => void;
  onTemplateSelect: (template: PosterTemplate) => void;
  posterData: PosterData;
}

export const TemplateGallery: React.FC<TemplateGalleryProps> = ({ 
  selectedTheme, 
  filter, 
  setFilter, 
  onTemplateSelect,
  posterData
}) => {
  const filteredTemplates = TEMPLATES.filter(t => 
    filter === 'all' || t.tags.includes(filter)
  );

  return (
    <motion.div 
      key="gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 py-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-anton text-gray-900 uppercase">
            {THEMES.find(t => t.id === selectedTheme)?.name || 'Tất cả mẫu'}
          </h2>
          <p className="text-gray-500">Chọn một bố cục để bắt đầu chỉnh sửa</p>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {['all', '1anh', '2anh', '3anh', '4anh'].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition",
                filter === t ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-100"
              )}
            >
              {t === 'all' ? 'Tất cả' : t.replace('anh', ' Ảnh')}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTemplates.map((template) => (
          <div 
            key={template.id}
            onClick={() => onTemplateSelect(template)}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group-hover:shadow-xl transition-all">
              <div className="absolute inset-0 scale-[0.4] origin-top-left pointer-events-none">
                {template.render(posterData, () => {})}
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                  SỬ DỤNG MẪU
                </span>
              </div>
            </div>
            <p className="mt-2 text-center font-bold text-gray-700 text-sm uppercase">#{template.id} {template.name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
