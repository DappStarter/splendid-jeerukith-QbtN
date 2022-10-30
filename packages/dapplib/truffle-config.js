require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remember erosion grace neck food spoon'; 
let testAccounts = [
"0x1c95f39ab97857941b94cd6b34c844a2dac263f4e071f88c7babcad75ea6f5f8",
"0xa9f00f59009dd2a7c0e33351651ff4bbb783d6a64c5d061d3cb8c86ebdc2eae4",
"0xa9ce701b890974cd363e313b3e47d3c0776f0b5d0dac52eeeaba75ff43a999a5",
"0xcb62dcb4504aceaf92ff111dd0cce0c0637faa259639a6a47a58d0c3b13de3dc",
"0x79cc9ec1289f5f748e348a6b3ec6bd98bc2e9e6168a0bced8d6b76405012a182",
"0xa8da9529f08e77c332916acfcd3ca1b490c15bce4867c1d035e76fbad83ac6b7",
"0x3ff40dd9162c48a27190101576ea80bc7a40e005cbf55ae071adea29b19895dc",
"0x2531172c801cb3e21c5cba1b78cf6d9e8e8ad86537293ffe39f7470981586e72",
"0xb284d9393920fa21b0327d73c14cfffa38414021abd8d8c198e24bff10b3024f",
"0xd28610b67b8bc728ef7ff9b234041b467c54270391d28ba36e30f992b7dba7e5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

