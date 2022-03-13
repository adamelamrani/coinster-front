import { rest } from "msw";

const urlTest = `${process.env.NEXT_PUBLIC_COINSTER_API}/cryptos/list`;
const handlers = [
  rest.get(urlTest, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          name: "Bitcoin",
          market_cap: 2000000,
          percent_change_1h: 2,
          percent_change_7d: 5,
          platform: null,
          tags: [""],
          symbol: "BTC",
          slug: "bitcoin",
          max_supply: 200000000000,
          total_supply: 2200000000,
          price: 325235,
          percent_change_24h: 12,
          id: 1,
          img: "https://cryptologos.cc/logos/filecoin-fil-logo.svg?v=022",
        },
        {
          name: "Bitcoin",
          market_cap: 2000000,
          percent_change_1h: 2,
          percent_change_7d: 5,
          platform: null,
          tags: [""],
          symbol: "BTC",
          slug: "bitcoin",
          max_supply: 200000000000,
          total_supply: 2200000000,
          price: 325235,
          percent_change_24h: 12,
          id: 2,
          img: "https://cryptologos.cc/logos/filecoin-fil-logo.svg?v=022",
        },
      ])
    )
  ),
];

export default handlers;
