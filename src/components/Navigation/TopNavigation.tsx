import Image from "next/image";

const TopNavigation = () => {
  return (
    <>
      <nav>
        <Image src="coinster.png" alt="Coinster logo" />
        <ul>
          <li>Buscar</li>
          <li>Login</li>
        </ul>
      </nav>
    </>
  );
};

export default TopNavigation;
