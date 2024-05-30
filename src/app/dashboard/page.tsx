"use client";

import { useState } from "react";
import styles from "./page.module.sass";
import BitcoinAddress from "@/components/bitcoin-address/BitcoinAddress";
import BitcoinBody from "@/components/bitcoin-body/BitcoinBody";
import AddNewAddress from "@/components/add-new-address/AddNewAddress";

export default function Dashboard() {
  const test: string =
    "02A349D7817F2F26F95DEFEA1A1CCE732F2719F18D5E74597F6E49C1F4E7C27C4A";

  const [id, setId] = useState<string | null>(test); // test null
  const [coins, setCoins] = useState<number>(12.897363721);
  const [currentPrice, setCurrentPrice] = useState<number>(9361.30922658);

  const [showAddNewBitcoinAddress, setShowAddNewBitcoinAddress] =
    useState<boolean>(false);

  function addNewBitcoinAddress() {
    setShowAddNewBitcoinAddress(true);
  }

  return (
    <main className={styles.main}>
      <BitcoinAddress id={id} coins={coins} valuation={coins * currentPrice} />
      <BitcoinBody id={id} addBitcoinAddress={addNewBitcoinAddress} />

      {showAddNewBitcoinAddress ? (
        <AddNewAddress closeModal={() => setShowAddNewBitcoinAddress(false)} />
      ) : (
        <></>
      )}
    </main>
  );
}
