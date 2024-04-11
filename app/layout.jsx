import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/assets/styles/global.css'

export const metadata = {
  title: 'Next Property | Find your perfect space',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentasl, find properties',
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default MainLayout
