import Image from "next/image";
import TopNavStyle from "./TopNavStyle";

const TopNavigation = () => {
  return (
    <>
      <TopNavStyle className="top-nav-bar">
        <Image
          className="navigation-logo"
          src="/coinster.png"
          alt="Coinster logo"
          width={70}
          height={70}
        />
        <ul className="top-nav-list">
          <li className="listitem-search">
            <p>Buscar</p>
            <input type="text" placeholder="Buscar..." />
          </li>
          <li>Login</li>
        </ul>
      </TopNavStyle>
    </>
  );
};

export default TopNavigation;
