import Head from "next/head";
import TopNavigation from "../Navigation/TopNavigation";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Coinster</title>
        <meta name="description" content="Seguimiento de criptoactivos" />
      </Head>
      <TopNavigation />
      {children}
    </>
  );
};

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}

export default Layout;