import Head from "next/head";

interface layoutProps {
  children: React.ReactNode;
}

const Layout = (children: layoutProps) => {
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
