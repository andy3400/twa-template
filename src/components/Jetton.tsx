import { beginCell, toNano, Address, Cell, fromNano } from "ton";
import { useTonConnect } from "../hooks/useTonConnect";
import { useFaucetJettonContract } from "../hooks/useFaucetJettonContract";
import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Button,
  Ellipsis,
} from "./styled/styled";

export function Jetton() {
  const { connected, wallet } = useTonConnect();
  const { mint, jettonWalletAddress, balance } = useFaucetJettonContract();

  return (
    <Card title="Jetton">
      <FlexBoxCol>
        <h1>GET Cookie Jettons</h1>
        <FlexBoxRow>
          <p>Cookie jetton is Crypto Currency by CookieLabs.</p>
          <p>This is for special network KOL.</p>
          <p>you can use in GateKeeper.</p>
        </FlexBoxRow>
        <Button
          disabled={!connected}
          onClick={async () => {
            mint();
          }}

          
        >
         mint jetton 
        </Button>
      </FlexBoxCol>
    </Card>
  );
}
