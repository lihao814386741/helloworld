"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var solo_1 = require("@dydxprotocol/solo");
var web3_1 = require("web3");
var provider = new web3_1.default.providers.HttpProvider(process.env.RPC_NODE_URI);
document.write("in greeter" + '<br>');
// --- Initialize with Web3 provider ---
var solo = new solo_1.Solo(provider, // Valid web3 provider
solo_1.Networks.MAINNET, {
    defaultAccount: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    accounts: [
        {
            address: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
            privateKey: '0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d',
        },
    ],
});
//# sourceMappingURL=greeter.js.map