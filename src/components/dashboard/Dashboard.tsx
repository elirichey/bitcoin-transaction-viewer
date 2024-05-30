"use client";

import { useState } from "react";
import BitcoinAddress from "@/components/bitcoin-address/BitcoinAddress";
import BitcoinBody from "@/components/bitcoin-body/BitcoinBody";
import AddNewAddress from "@/components/add-new-address/AddNewAddress";
import { UserContext } from "@/context/UserContext";
import { redirect } from "next/navigation";
import { magic } from "@/libs/magic";

interface Props {
  price: any;
  transactions: any[];
  holdings: any;
}

export default function DashboardMain(props: Props) {
  const { price, transactions, holdings } = props;
  console.log({ transactions: transactions[0], holdings });

  const [user, setUser] = useState<any | null>(null);

  const id: string = holdings?.address;
  const currentPrice: number = price?.USD;
  const tokens = holdings?.chain_stats?.tx_count;

  const loading = user?.loading;

  const [showAddNewBitcoinAddress, setShowAddNewBitcoinAddress] =
    useState<boolean>(false);

  function addNewBitcoinAddress() {
    setShowAddNewBitcoinAddress(true);
  }

  //function logout() {
  //  magic.user.logout().then(() => {
  //    setUser({ user: null });
  //    redirect("/login");
  //  });
  //}

  //if (!user?.issuer) return logout();

  return (
    <UserContext.Provider value={[user, setUser]}>
      <BitcoinAddress
        id={id}
        tokens={tokens}
        valuation={tokens * currentPrice}
      />
      <BitcoinBody id={id} addBitcoinAddress={addNewBitcoinAddress} />

      {loading && <p>Loading...</p>}
      {showAddNewBitcoinAddress ? (
        <AddNewAddress closeModal={() => setShowAddNewBitcoinAddress(false)} />
      ) : (
        <></>
      )}
    </UserContext.Provider>
  );
}
