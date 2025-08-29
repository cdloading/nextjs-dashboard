// 在 app/ui/fonts.ts 中
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
});