import { Outlet } from "react-router-dom";
import { MobileSidebar } from "./_components/MobileSidebar";
import { NavbarAndSidebar } from "./_components/NavbarAndSidebar";
import { UserMenu } from "./_components/UserMenu";

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <NavbarAndSidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <MobileSidebar />
          <div className="w-full flex-1 flex justify-between items-center">
            <h1 className="text-lg font-semibold">CaterEase</h1>
            <UserMenu />
          </div>
        </header>
        <main className="flex-grow p-4 overflow-auto">
          <Outlet />
        </main>
        <footer className="border-t py-4 text-center text-sm text-muted-foreground">
          <div className="container mx-auto px-4">
            <nav className="flex justify-center space-x-4">
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Contact</a>
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </nav>
            <p className="mt-2">&copy; 2023 CaterEase. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;