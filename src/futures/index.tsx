import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import GlobalRoutes from '@/routes';
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Toaster } from 'sonner';
const Future = () => {
  const { pathname } = useLocation();
  // har gal render bolsa path almashinsa scroll tepaga chiqaradi
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <section className='relative'>
      <Toaster richColors position="top-right" />
      <Header/>
      <GlobalRoutes/>
      <Footer/>
    </section>
  )
}
export default Future
