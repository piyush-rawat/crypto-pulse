import { TrendingCoin } from "@/utils/types";
import Heading from "./Heading";
import Image from "next/image";
import millify from "millify";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Section from "./Section";

export const dynamic = "force-dynamic";

const getTrending = async () => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending",
      { cache: "no-cache" }
    );

    if (response.ok) {
      const json = await response.json();
      return json.coins;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

const Trending = async () => {
  const trending: TrendingCoin[] = await getTrending();

  return (
    <Section>
      <Heading title="Trending Coins" />

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
                Total Volume
              </th>
              <th>Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {trending.map(({ item }, index) => (
              <tr
                key={item.id}
                className={`${
                  trending.length !== index + 1 && "border-b-[0.25px]"
                } dark:bg-gray-800. dark:border-gray-700. cursor-pointer hover:bg-n-10 bg-n-11 border-n-5`}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-n-2"
                >
                  {item.market_cap_rank}
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <Image src={item.thumb} alt="img" width={50} height={50} />
                    <div>
                      <p className="font-bold">{item.symbol.toUpperCase()}</p>
                      <p className="text-sm text-gray-200">{item.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">{item.data.price.toFixed(8)}</td>
                <td className="px-6 py-4">
                  <div>
                    <p
                      className={`${
                        item.data.price_change_percentage_24h.usd < 0
                          ? "text-red-500"
                          : "text-green-500"
                      } flex items-center gap-1`}
                    >
                      {item.data.price_change_percentage_24h.usd < 0 ? (
                        <FaCaretDown />
                      ) : (
                        <FaCaretUp />
                      )}
                      {Math.abs(
                        Number(
                          item.data.price_change_percentage_24h.usd.toFixed(8)
                        )
                      )}
                      %
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {millify(Number(item.data.market_cap.replace(/[$,]/g, "")), {
                    space: true,
                  })}
                </td>
                <td className="px-6 py-4">{item.data.total_volume}</td>
                <td>
                  <Image
                    src={item.data.sparkline}
                    width={200}
                    height={50}
                    className="min-w-[200px] min-h-[50px]"
                    alt="sparkline"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default Trending;
