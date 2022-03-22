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
            id: "622cdb2eaa2f5a4e7dd16917",
            img: "https://cryptologos.cc/logos/filecoin-fil-logo.svg?v=022",
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
            id: "622cdb2eaa2f5a4e7dd16912",
            img: "https://cryptologos.cc/logos/filecoin-fil-logo.svg?v=022",
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

  rest.post(
    `${process.env.NEXT_PUBLIC_COINSTER_API}/cryptos/new-crypto`,
    (req, res, ctx) =>
      res(
        ctx.status(201),
        ctx.json({
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
          id: "622cdb2eaa2f5a4e7dd16917",
          img: "https://cryptologos.cc/logos/filecoin-fil-logo.svg?v=022",
        })
      )
  ),

  rest.patch(
    `${process.env.NEXT_PUBLIC_COINSTER_API}/cryptos/crypto/622cdb2eaa2f5a4e7dd16917`,
    (req, res, ctx) => res(ctx.status(200), ctx.json("Crypto updated"))
  ),

  rest.get(
    `${process.env.NEXT_PUBLIC_COINSTER_API}/cryptos/crypto/622cdb2eaa2f5a4e7dd16917`,
    (req, res, ctx) => {
      const id = "622cdb2eaa2f5a4e7dd16917";
      if (id === "622cdb2eaa2f5a4e7dd16917") {
        return res(
          ctx.status(200),
          ctx.json({
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
            id: "622cdb2eaa2f5a4e7dd16917",
            img: "https://cryptologos.cc/logos/filecoin-fil-logo.svg?v=022",
          })
        );
      } else {
        return res(
          ctx.status(404),
          ctx.json({ error: true, message: "error" })
        );
      }
    }
  ),

  rest.post(
    `${process.env.NEXT_PUBLIC_COINSTER_API}/user/login`,
    (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ token: "adawdawfeafn3jrjo1h1" }))
  ),

  rest.post(
    `${process.env.NEXT_PUBLIC_COINSTER_API}/user/register`,
    (req, res, ctx) => {
      const user = {
        name: "Adam",
        username: "Adam2",
        password: "12345",
      };
      if (user) {
        return res(ctx.status(200), ctx.json("Register succesfull"));
      } else {
        return res(
          ctx.status(400),
          ctx.json({ error: true, message: "error" })
        );
      }
    }
  ),
];

export default handlers;
