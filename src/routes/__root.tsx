import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col max-w-5xl mx-auto px-6 font-sans">
      <Navbar />
      <main className="flex-grow py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
})
