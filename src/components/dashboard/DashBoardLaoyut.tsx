import { Header } from './header/Header';
import { Sidebar } from './sidebar/Sidebar';

export default function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen 2xl:grid-cols-[1.1fr_6fr] grid-cols-[1.2fr_6fr]">
      <Sidebar />
      <main className="p-[2.3rem] overflow-x-hidden max-h-screen relative">
        <Header />
        {children}
      </main>
    </div>
  );
}
