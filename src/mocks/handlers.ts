import { rest } from "msw";

const urlTest: string = `${process.env.NEXT_PUBLIC_COINSTER_API}main-page/list`;
const handlers = [
  rest.get(urlTest, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          name: "Bitcoin",
          symbol: "BTC",
          slug: "bitcoin",
          date_added: "08/03/2022",
          max_supply: 200000000000,
          circulating_supply: 2000000000,
          total_supply: 2200000000,
          last_updated: "08/03/2022",
          USD: {
            price: 40000,
          },
        },
        {
          name: "Ethereum",
          symbol: "ETC",
          slug: "ethereum",
          date_added: "08/03/2022",
          max_supply: 200000000000,
          circulating_supply: 2000000000,
          total_supply: 2200000000,
          last_updated: "08/03/2022",
          USD: {
            price: 40000,
          },
        },
      ])
    )
  ),
];

export default handlers;
