import React from 'react';
import { motion } from 'motion/react';
import { PosterTemplate, PosterData } from '../types';
import { Type, ImageIcon, Download } from 'lucide-react';

interface EditorPanelProps {
  selectedTemplate: PosterTemplate;
  posterData: Record<string, string>;
  onImageUploadClick: (key: string) => void;
  onDataChange: (key: string, value: string) => void;
  posterRef: React.RefObject<HTMLDivElement | null>;
}

export const EditorPanel: React.FC<EditorPanelProps> = ({
  selectedTemplate,
  posterData,
  onImageUploadClick,
  onDataChange,
  posterRef
}) => {
  const colors = [
    '#000000', '#ffffff', '#ef4444', '#f97316', '#f59e0b', '#10b981', 
    '#3b82f6', '#6366f1', '#8b5cf6', '#ec4899', '#71717a'
  ];

  return (
    <motion.div 
      key="editor"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center"
    >
      <div className="flex flex-col lg:flex-row gap-8 items-start w-full justify-center">
        <div className="flex flex-col items-center">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8 flex items-start gap-3 max-w-md">
            <div className="bg-blue-600 text-white p-1 rounded">
              <Type className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-blue-900">Hướng dẫn chỉnh sửa</p>
              <p className="text-xs text-blue-700">Click vào chữ để nhập nội dung mới. Click vào ảnh để tải ảnh từ máy tính của bạn.</p>
            </div>
          </div>

          <div 
            className="workspace-active shadow-2xl rounded-lg overflow-hidden" 
            ref={posterRef}
            style={{ '--poster-text-color': posterData.globalTextColor } as React.CSSProperties}
          >
            {selectedTemplate.render(posterData, onImageUploadClick)}
          </div>
        </div>

        <div className="w-full lg:w-80 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-blue-600 rounded-full" />
              Màu chữ chủ đạo
            </h4>
            <div className="grid grid-cols-5 gap-3">
              {colors.map(color => (
                <button
                  key={color}
                  onClick={() => onDataChange('globalTextColor', color)}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    posterData.globalTextColor === color 
                      ? 'border-blue-600 scale-110 shadow-md' 
                      : 'border-transparent hover:scale-105'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
              <div className="relative w-10 h-10 rounded-full border-2 border-gray-100 overflow-hidden">
                <input 
                  type="color" 
                  value={posterData.globalTextColor || '#000000'}
                  onChange={(e) => onDataChange('globalTextColor', e.target.value)}
                  className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                />
                <div 
                  className="w-full h-full flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: posterData.globalTextColor || '#f3f4f6' }}
                >
                  +
                </div>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 mt-4 italic">
              * Một số mẫu có thể không áp dụng màu này cho tất cả các thành phần để đảm bảo tính thẩm mỹ.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-xl">
                <ImageIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Thay ảnh</h4>
                <p className="text-xs text-gray-500">Tải ảnh cá nhân của bạn lên</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                <Type className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Sửa chữ</h4>
                <p className="text-xs text-gray-500">Thay đổi thông tin trực tiếp</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl">
                <Download className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Tải về</h4>
                <p className="text-xs text-gray-500">Xuất file ảnh chất lượng cao</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
