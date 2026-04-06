import React from 'react';

export type ThemeKey = 'tuyenduong' | 'tieuhoc' | 'thethao' | 'kyyeu' | 'sukien' | 'prom' | 'ngoaikhoa';

export interface Theme {
  id: ThemeKey;
  name: string;
  description: string;
  image: string;
  color: string;
}

export interface PosterTemplate {
  id: number;
  name: string;
  tags: string[];
  render: (data: Record<string, string>, onImageClick: (id: string) => void) => React.ReactNode;
}

export interface PosterData {
  texts: Record<string, string>;
  images: Record<string, string>;
}
