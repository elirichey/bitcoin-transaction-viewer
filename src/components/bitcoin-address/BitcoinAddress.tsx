"use client";

import Image from "next/image";

interface Props {
  id: string | null;
  tokens: number;
  valuation: number;
}

export default function BitcoinAddress(props: Props) {
  const { id, tokens, valuation } = props;

  // format id to have the first and last 9 characters with the rest as dots
  const formattedId = id ? `${id.slice(0, 9)}...${id.slice(-9)}` : "NO ADDRESS";

  function numberWithCommas(x: number) {
    return x
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div id="bitcoin-address">
      <p className="bitcoin-id">{formattedId}</p>
      <div className="bitcoin-breakdown">
        <div className="coins-container">
          <Image
            src="/svg/bitcoin-alt.svg"
            width={17}
            height={22}
            alt="Bitcoin"
            priority
          />

          <p className="coins">{id ? tokens : 0} BTC</p>
        </div>
        <p className="valuation">${numberWithCommas(id ? valuation : 0)} USD</p>
      </div>
    </div>
  );
}
