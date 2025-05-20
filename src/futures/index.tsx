import Header from '../layout/Header'
import GlobalRoutes from '../routes'
import Footer from '../layout/Footer'
import { Toaster } from '../components/ui/sonner'
const Future = () => {
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
