import Header from '../layout/Header'
import GlobalRoutes from '../routes'
import Footer from '../layout/Footer'
import { Toaster } from '../components/ui/sonner'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const Future = () => {
  const { pathname } = useLocation();

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
