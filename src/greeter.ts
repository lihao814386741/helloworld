import { Solo, Networks } from '@dydxprotocol/solo';
import { MarketId, BigNumber } from '@dydxprotocol/solo';
import Web3 from 'web3';

const provider = new Web3.providers.HttpProvider(process.env.RPC_NODE_URI);

document.write("in greeter" + '<br>')
// --- Initialize with Web3 provider ---
const solo = new Solo(
  provider,  // Valid web3 provider
  Networks.MAINNET,
  {
    defaultAccount: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1', // Optional
    accounts: [
      {
        address: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1', // Optional
        privateKey: '0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d',
      },
    ], // Optional: loading in an account for signing transactions
  }, // Optional
);
