

import { Inter } from 'next/font/google';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DisasterEd Pro',
  description: 'National Disaster Management Authority - Education Division Admin Portal',
};


export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0F0E17] text-white`}>
        {children}
      </body>
    </html>
  );
}

