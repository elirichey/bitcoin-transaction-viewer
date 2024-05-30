import Image from "next/image";

interface Record {
  type: string;
  date: string;
  label: string;
  amount: string;
  balance: string;
  status: string;
}

const accessorType = (props: Record) => {
  return <span className="type">{props.type}</span>;
};

const accessorDate = (props: Record) => {
  return <span className="date">{props.date}</span>;
};

const accessorLabel = (props: Record) => {
  return <span className="label">{props.label}</span>;
};

const accessorAmount = (props: Record) => {
  return <span className="amount">{props.amount}</span>;
};

const accessorBalance = (props: Record) => {
  return <span className="balance">{props.balance}</span>;
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
    Header: "Label",
    accessor: (props: Record) => accessorLabel(props),
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
