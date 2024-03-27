import Header from './../components/header/page';
import Footer from './../components/footer/page';

export default function DashboardLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    )
  }