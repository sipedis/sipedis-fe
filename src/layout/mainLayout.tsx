import { ReactNode } from 'react';
import MenuBar from '../component/menuBar';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex">
      <MenuBar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
