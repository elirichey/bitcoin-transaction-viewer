import Image from "next/image";

interface Record {
  type: string;
  date: string;
  tx_id: string;
  amount: string;
  balance: string;
  status: string;
}

const accessorType = (props: Record) => {
  const { type } = props;
  return <span className="type">{type}</span>;
};
const accessorDate = (props: Record) => {
  const { date } = props;
  return <span className="date">{date}</span>;
};
const accessorTxID = (props: Record) => {
  const { tx_id } = props;
  return <span className="txid">{tx_id}</span>;
};
const accessorAmount = (props: Record) => {
  const { amount } = props;
  return <span className="amount">{amount}</span>;
};
const accessorBalance = (props: Record) => {
  const { balance } = props;
  return <span className="balance">{balance}</span>;
};
const accessorStatus = (props: Record) => {
  const { status } = props;
  const isCompleted = status.toLowerCase() === "completed";
  const isPending = status.toLowerCase() === "pending";
  const addClass = isCompleted ? "completed" : isPending ? "pending" : "";
  return <span className={`status ${addClass}`}>{status}</span>;
};

const Columns = [
  {
    Header: "Type",
    accessor: (props: Record) => accessorType(props),
    Cell: (props: any) => props.value,
  },
  {
    Header: "Date",
    accessor: (props: Record) => accessorDate(props),
    Cell: (props: any) => props.value,
  },
  {
    Header: "TXID",
    accessor: (props: Record) => accessorTxID(props),
    Cell: (props: any) => props.value,
  },
  {
    Header: "Amount",
    accessor: (props: Record) => accessorAmount(props),
    Cell: (props: any) => props.value,
  },
  {
    Header: "Balance",
    accessor: (props: Record) => accessorBalance(props),
    Cell: (props: any) => props.value,
  },
  {
    Header: "Status",
    accessor: (props: Record) => accessorStatus(props),
    Cell: (props: any) => props.value,
  },
];

export default Columns;
