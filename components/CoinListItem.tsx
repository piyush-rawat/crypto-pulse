"use client";

import { Coin } from "@/utils/types";
import millify from "millify";
import Image from "next/image";

import Chart7D from "./Chart7D";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const CoinListItem = ({ coin, border }: { coin: Coin; border: boolean }) => {
  return (
    <tr
      className={`${
        border && "border-b-[0.25px]"
      } dark:bg-gray-800. dark:border-gray-700. cursor-pointer hover:bg-n-10 bg-n-11 border-n-5`}
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium whitespace-nowrap text-n-2"
      >
        {coin.market_cap_rank}
      </th>
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          <Image src={coin.image} alt="img" width={50} height={50} />
          <div>
            <p className="font-bold">{coin.symbol.toUpperCase()}</p>
            <p className="text-sm text-gray-200">{coin.name}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">{coin.current_price}</td>
      <td className="px-6 py-4">
        <div>
          <p
            className={`${
              coin.price_change_percentage_24h < 0
                ? "text-red-500"
                : "text-green-500"
            } flex items-center gap-1`}
          >
            {coin.price_change_percentage_24h < 0 ? (
              <FaCaretDown />
            ) : (
              <FaCaretUp />
            )}
            {Math.abs(coin.price_change_percentage_24h)}%
          </p>
        </div>
      </td>
      <td className="px-6 py-4">{millify(coin.market_cap, { space: true })}</td>
      <td className="px-6 py-4">
        {millify(coin.circulating_supply, { space: true })}
      </td>
      <td>
        <Chart7D data={coin.sparkline_in_7d.price} />
      </td>
    </tr>
  );
};

export default CoinListItem;
