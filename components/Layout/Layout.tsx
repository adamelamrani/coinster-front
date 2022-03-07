import Head from "next/head";
interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Coinster</title>
        <meta name="description" content="Seguimiento de criptoactivos" />
      </Head>
      {children}
    </>
  );
};

export default Layout;
