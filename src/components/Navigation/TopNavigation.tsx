import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import TopNavStyle from "./TopNavStyle";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";

const TopNavigation = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (!token) {
      return (
        <>
          <TopNavStyle className="top-nav-bar">
            <ul>
              <li>
                <Link href={"/"} passHref>
                  <Image
                    className="navigation-logo"
                    src="/coinster.png"
                    alt="Coinster logo"
                    width={96}
                    height={45}
                  />
                </Link>
              </li>
              <li className="cryptos-link">
                <Link href={"/"}>Criptomonedas</Link>
              </li>
              <li className="wallet-link">
                <Link href={"/"}>Cartera</Link>
              </li>
            </ul>
            <ul className="top-nav-list">
              <li className="listitem-search-input">
                <input type="text" placeholder="Buscar..." />
              </li>
              <li className="listitem-search-icon">
                <Link href={"/"} passHref>
                  <FontAwesomeIcon
                    width={25}
                    height={25}
                    className="search-icon"
                    icon={faSearch}
                  />
                </Link>
              </li>
              <li>
                <Link href={"/user/login"} passHref>
                  <FontAwesomeIcon
                    width={25}
                    height={25}
                    className="user-icon"
                    icon={faUser}
                  />
                </Link>
              </li>
            </ul>
          </TopNavStyle>
        </>
      );
    }
  }
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
            <Link href={"/"}>Criptomonedas</Link>
          </li>
          <li className="wallet-link">
            <Link href={"/"}>Cartera</Link>
          </li>
          <li className={`create-crypto-link`} id="create-crypto-link">
            <Link href={"/crypto/new-crypto"}>Crea tu Cryptomoneda</Link>
          </li>
        </ul>
        <ul className="top-nav-list">
          <li className="listitem-search-input">
            <input type="text" placeholder="Buscar..." />
          </li>
          <li className="listitem-search-icon">
            <Link href={"/"} passHref>
              <FontAwesomeIcon
                className="search-icon"
                width={25}
                height={25}
                icon={faSearch}
              />
            </Link>
          </li>
          <li>
            <Link href={"/user/profile"} passHref>
              <FontAwesomeIcon
                width={25}
                height={25}
                className="user-icon"
                icon={faUser}
              />
            </Link>
          </li>
        </ul>
      </TopNavStyle>
    </>
  );
};

export default TopNavigation;
