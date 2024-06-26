import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'
import { ToastContainer } from 'react-toastify'
import { GlobalProvider } from '@/context/GlobalContext'
import '@/assets/styles/global.css'
import 'react-toastify/dist/ReactToastify.css'
import 'photoswipe/dist/photoswipe.css'


export const metadata = {
  title: 'Next Property | Find your perfect space',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentasl, find properties',
}

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang="en">
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  )
}

export default MainLayout
