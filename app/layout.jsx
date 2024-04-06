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
        <div>{children}</div>
      </body>
    </html>
  )
}

export default MainLayout
