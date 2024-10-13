import CoinListItem from "./CoinListItem";
import Heading from "./Heading";
import Section from "./Section";
import { Coin } from "@/utils/types";

export const dynamic = "force-dynamic";

const getCoins = async () => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&sparkline=true",
      { cache: "no-cache" }
    );

    if (response.status === 429) {
      throw new Error("Too many requests. Please try again later.");
    }

    if (!response.ok) {
      throw new Error("Failed to fetch data from API.");
    }

    if (response.ok) return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const Top100 = async () => {
  let coins: Coin[] = [];
  let errorMessage = null;

  try {
    coins = await getCoins();
  } catch (error: unknown) {
    if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = "An unknown error occured.";
    }
  }

  return (
    <Section>
      <Heading title="Top 100 (Market Cap)" />
      {errorMessage ? (
        <h1 className="text-center text-red-500">{errorMessage}</h1>
      ) : (
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-n-2">
            <thead className="text-xs text-n-3 uppercase bg-n-12">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  24H Price Change
                </th>
                <th scope="col" className="px-6 py-3">
                  Market Cap
                </th>
                <th scope="col" className="px-6 py-3">
                  Circ Supply
                </th>
                <th>Last 7 Days</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin, index) => (
                <CoinListItem
                  key={coin.id}
                  coin={coin}
                  border={coins.length !== index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Section>
  );
};

export default Top100;
