import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import TopNavStyle from "./TopNavStyle";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const TopNavigation = () => {
  return (
    <>
      <TopNavStyle className="top-nav-bar">
        <ul>
          <li>
            <Image
              className="navigation-logo"
              src="/coinster.png"
              alt="Coinster logo"
              width={96}
              height={45}
            />
          </li>
          <li className="cryptos-link">
            <Link href={"/main-page"}>Criptomonedas</Link>
          </li>
          <li className="wallet-link">
            <Link href={"/wallet"}>Cartera</Link>
          </li>
        </ul>
        <ul className="top-nav-list">
          <li className="listitem-search-input">
            <input type="text" placeholder="Buscar..." />
          </li>
          <li className="listitem-search-icon">
            <Link href={"/login"} passHref>
              <FontAwesomeIcon icon={faSearch} />
            </Link>
          </li>
          <li>
            <Link href={"/login"} passHref>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
        </ul>
      </TopNavStyle>
    </>
  );
};

export default TopNavigation;
