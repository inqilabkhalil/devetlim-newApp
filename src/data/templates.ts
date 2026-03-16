export type TemplateCategory = 'Toy' | 'Nişan' | 'Ad günü';

export interface Template {
  id: string;
  name: string;
  category: TemplateCategory;
  color: string;          // dominant bg color for placeholder
  folderPath: string;     // relative to /sablonlar/
  price: string;
  preview?: string;       // optional public image path
}

export const templates: Template[] = [
  {
    id: 'yasilt',
    name: 'Zümrüd',
    category: 'Toy',
    color: '#2d5a4f',
    folderPath: 'zumrut',
    price: '29 ₼',
    preview: '/sablonlar/zumrut/preview.png',
  },
  {
    id: 'qirmizi-xalca',
    name: 'Əlvan',
    category: 'Toy',
    color: '#8b1a2a',
    folderPath: 'elvan',
    price: '29 ₼',
    preview: '/sablonlar/elvan/preview.png',
  },
  {
    id: 'pink',
    name: 'Şəfəq',
    category: 'Nişan',
    color: '#e8a0b8',
    folderPath: 'sefeq',
    price: '29 ₼',
    preview: '/sablonlar/sefeq/preview.svg',
  },
  {
    id: 'mektub-qutu',
    name: 'Xatirə',
    category: 'Ad günü',
    color: '#c9a96e',
    folderPath: 'xatire',
    price: '29 ₼',
    preview: '/sablonlar/xatire/preview.svg',
  },
  {
    id: 'mektub-qutulu',
    name: 'Yasəmən',
    category: 'Toy',
    color: '#4a6741',
    folderPath: 'yasemen',
    price: '29 ₼',
    preview: '/sablonlar/yasemen/preview.png',
  },
  {
    id: 'dairevi',
    name: 'Sehrli',
    category: 'Nişan',
    color: '#7b5ea7',
    folderPath: 'sehrli',
    price: '29 ₼',
    preview: '/sablonlar/sehrli/preview.svg',
  },
  {
    id: 'xususi-mint',
    name: 'Dəniz Mavisi',
    category: 'Toy',
    color: '#8BBCB5',
    folderPath: 'xususi',
    price: '39 ₼',
    preview: '/sablonlar/xususi/basliqSon.png',
  },
  {
    id: 'mavi-zerafet',
    name: 'Mavi Zəriflik',
    category: 'Toy',
    color: '#0f2740',
    folderPath: 'mavi-zerafet',
    price: '39 ₼',
    preview: '/sablonlar/mavi-zerafet/preview.svg',
  },
  {
    id: 'nisan-ahenk',
    name: 'Nişan Ahəngi',
    category: 'Nişan',
    color: '#5f2f67',
    folderPath: 'nisan-ahenk',
    price: '39 ₼',
    preview: '/sablonlar/nisan-ahenk/preview.svg',
  },
  {
    id: 'bahar-zerafeti',
    name: 'Bahar Zərifəti',
    category: 'Toy',
    color: '#6a8a58',
    folderPath: 'bahar-zerafeti',
    price: '29 ₼',
    preview: '/sablonlar/bahar-zerafeti/preview.svg',
  },
];

export const categories: (TemplateCategory | 'Hamısı')[] = [
  'Hamısı', 'Toy', 'Nişan', 'Ad günü',
];
