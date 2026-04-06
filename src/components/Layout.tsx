import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import MobileTelegramBtn from "./MobileTelegramBtn";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navigation />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
      <MobileTelegramBtn />
    </div>
  );
}
