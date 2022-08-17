require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift riot place honey hockey fashion flower gauge'; 
let testAccounts = [
"0xf273a4e31a1f6c56d84b9956aa54b04471ba340dcbfbcf0aab10e4538a4d17e5",
"0x7020b35bdd184785bf96e0ef7bfcf0cbe09b696059511fd0e915eec874e8874a",
"0x2e1dc416ac0fc7acbd19ceb20819edd713fae0080357b8f66fb510d88416b53d",
"0xec00ab6979e4595b557c3784bdbd28a78ddf17c13b99e39c38cb16470501228a",
"0x0e26686a579dc440ee3b9730c96b06bd69c4879b23cbf693c898b25b55d785a5",
"0xb959b77fbf7d104d1a84e1530731b25e7caa57105dc638fb9e47ab5bbffc8cd0",
"0xb26f62685ebe2a8163aaf70aa0027dc130cdbd1df799651a00bb679a43a9fccc",
"0xd2be9c1548a282743babc03e809badd89b425c0939ffc6555e658868b8298279",
"0x5934b964e3275bc2301dd291708dbf425a8f25f2ef7693e105edbc607408a7b9",
"0x06a653217304a1f889110fb1955332631d3eed6840e95e75979df8aba9434f25"
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

