import Image from "next/image";
import Titlebar from "../titlebar/Titlebar";
import Table from "../table/Table";
import Columns from "../table/Columns";
import data from "../table/TestData";

interface Props {
  addBitcoinAddress: () => void;
}

export default function BitcoinBody(props: Props) {
  const { addBitcoinAddress } = props;

  const actions = {
    // clickCell: () => console.log("Clicked Cell"),
    clickRow: (x: any) => {
      console.log({ selected: x });
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
              data={data}
              columns={Columns}
              loading={false}
              actions={actions}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
