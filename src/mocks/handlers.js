import { rest } from "msw";

const handlers = [
  rest.get(
    `${process.env.NEXT_PUBLIC_COINSTER_API}/cryptos/list`,
    (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json([
          {
            name: "Bitcoin",
            market_cap: "2000000",
            percent_change_1h: "2",
            percent_change_7d: "5",
            platform: "null",
            tags: "",
            symbol: "BTC",
            slug: "bitcoin",
            max_supply: "200000000000",
            total_supply: "2200000000",
            price: "325235",
            percent_change_24h: "12",
            id: "1",
            img: "undefined",
          },
          {
            name: "Bitcoin",
            market_cap: "2000000",
            percent_change_1h: "2",
            percent_change_7d: "5",
            platform: "null",
            tags: "",
            symbol: "BTC",
            slug: "bitcoin",
            max_supply: "200000000000",
            total_supply: "2200000000",
            price: "325235",
            percent_change_24h: "12",
            id: "2",
            img: "undefined",
          },
        ])
      )
  ),

  rest.delete(
    `${process.env.NEXT_PUBLIC_COINSTER_API}/cryptos/crypto/1`,
    (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json("Cryptomoneda con nombre 'Bitcoin e id '1' eliminada.")
      )
  ),
];

export default handlers;
