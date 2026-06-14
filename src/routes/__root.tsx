import { createRootRoute, Outlet } from '@tanstack/react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col max-w-5xl mx-auto px-6">
      <Navbar />
      
      {/* This Outlet is the "window" where your page content will appear */}
      <main className="flex-grow pt-16 pb-8">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  ),
});