import Image from "next/image";
import Titlebar from "../titlebar/Titlebar";
import Table from "../table/Table";
import Columns from "../table/Columns";
import data from "../table/TestData";
import EmptyList from "../empty-list/EmptyList";

interface Props {
  id: string | null;
  addBitcoinAddress: () => void;
}

export default function BitcoinBody(props: Props) {
  const { id, addBitcoinAddress } = props;

  const actions = {
    // clickCell: () => console.log("Clicked Cell"),
    clickRow: (x: any) => {
      alert(JSON.stringify(x));
    },
  };

  return (
    <div id="bitcoin-body">
      <div id="bitcoin-sidebar">
        <div className="quick-actions">
          <p>QUICK ACTIONS</p>
        </div>

        <ul>
          <li>
            <button onClick={addBitcoinAddress}>
              <Image
                src="/svg/bitcoin.svg"
                alt="Add"
                width={20}
                height={20}
                priority
              />
              ADD BTC ADDRESS
            </button>
          </li>
        </ul>
      </div>

      <div id="bitcoin-stats">
        <div className="void-bar">
          <p>Anchorwatch</p>
        </div>

        <div className="overview-container">
          <div className="overview-section">
            <Titlebar title="HOLDINGS" />
            <div className="table-header">
              <ul>
                <li>
                  <button onClick={() => alert("Clicked: 1 D")}>1 D</button>
                </li>
                <li>
                  <button onClick={() => alert("Clicked: 1 WK")}>1 WK</button>
                </li>
                <li>
                  <button onClick={() => alert("Clicked: 1 MO")}>1 MO</button>
                </li>
                <li>
                  <button onClick={() => alert("Clicked: 3 MO")}>3 MO</button>
                </li>
                <li>
                  <button onClick={() => alert("Clicked: 1 YR")}>1 YR</button>
                </li>
              </ul>
            </div>
            {/* Table */}

            <div className="table-container">
              {!id || [].length === 0 ? (
                <EmptyList id={0} title="Add a BTC address to see holdings" />
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="overview-section">
            <Titlebar title="TRANSACTIONS" />
            <div className="table-header alt">
              <ul>
                <li>
                  <button onClick={() => alert("Clicked: All")}>ALL</button>
                </li>
                <li>
                  <button onClick={() => alert("Clicked: Sent")}>SENT</button>
                </li>
                <li>
                  <button onClick={() => alert("Clicked: Received")}>
                    RECEIVED
                  </button>
                </li>
              </ul>
            </div>

            {/* Table */}

            <Table
              id="transactions-table"
              data={id ? data : []}
              columns={Columns}
              loading={false}
              actions={actions}
            />

            {!id || data.length === 0 ? (
              <EmptyList id={1} title="No transactions to show" />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
