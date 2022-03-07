import Head from "next/head";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Coinster</title>
        <meta name="description" content="Seguimiento de criptoactivos" />
      </Head>
      <h2>Test</h2>
      {children}
    </>
  );
};

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}

export default Layout;
