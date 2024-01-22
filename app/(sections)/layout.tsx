import Header from './../components/header/page';

export default function DashboardLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Header />
        {children}
      </>
    )
  }