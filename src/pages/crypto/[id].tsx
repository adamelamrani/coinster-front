import CryptoDetails from "../../components/CryptoDetails/CryptoDetails";
import Crypto from "../../interfaces/Crypto";

interface DetailsProps {
  crypto: Crypto;
}

const DetailsPage = ({ crypto }: DetailsProps) => {
  return <CryptoDetails actionOnClick={() => {}} crypto={crypto} />;
};

export default DetailsPage;
