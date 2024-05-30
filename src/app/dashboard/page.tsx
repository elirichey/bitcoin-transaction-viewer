import DashboardMain from "@/components/dashboard/Dashboard";
import styles from "./page.module.sass";

async function getCurrentPrice() {
  const url = "https://mempool.space/api/v1/prices";
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}
async function getTransactions() {
  const address = "1wiz18xYmhRX6xStj2b9t1rwWX4GKUgpv";
  const url = `https://mempool.space/api/address/${address}/txs`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

async function getHoldings() {
  const address = "1wiz18xYmhRX6xStj2b9t1rwWX4GKUgpv";
  const url = `https://mempool.space/api/address/${address}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function Dashboard() {
  const price = await getCurrentPrice();
  const transactions = await getTransactions();
  const holdings = await getHoldings();

  return (
    <main className={styles.main}>
      <DashboardMain
        price={price}
        transactions={transactions}
        holdings={holdings}
      />
    </main>
  );
}
