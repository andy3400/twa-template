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
        <h3>Cookies labs Jetton</h3>
        <FlexBoxRow>
          Wallet
          <Ellipsis>{ wallet ? Address.parse(wallet as string).toString() : "Loading..."}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          FT(jetton) 잔액 : 
          <div>{jettonWalletAddress ? jettonWalletAddress : "Loading..."}</div>
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
