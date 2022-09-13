# Light Sculpture

This contract was developed for [Shinichi Maruyama](https://twitter.com/ShinichiMrym)'s ["Light Sculpture | Fully on-chain NFTs"](https://opensea.io/ja/collection/lightsculpture).  
The photo data (jpeg format) is stored on the Ethereum blockchain.

## Getting started

```
git clone https://github.com/NowAndNawoo/light-sculpture-nft-pub.git
cd light-sculpture-nft-pub
npm ci
cp .env.sample .env
```

## Deploy

Set `PRIVATE_KEY` and RPC URLs in `.env`.  
Deploy contract with the following command.

```
npx hardhat run scripts/deploy.ts --network rinkeby
```

The contract address is shown after `deployed to:`.

## Mint

Set `CONTRACT_ADDRESS` in `.env`.  
Mint the NFT #1 with the following command.

```
npx hardhat run scripts/mint1.ts --network rinkeby
```

## Verify

Set `ETHERSCAN_API_KEY` in `.env`

```
npx hardhat verify --network rinkeby <ContractAddress>
```

## Freeze

Execute the `freeze` function at Etherscan. The argument is `tokenId`.  
After Freeze, you will not be able to modify the metadata.

## Set royalty

Execute the `setDefaultRoyalty` function at Etherscan.  
The arguments are `receiver` (recipient address) and `feeNumerator` (numerator of commission rate).  
The denominator of the commission rate is `10000`, so set `1000` for 10% and `500` for 5%.

### Delete royalty

Execute the `deleteDefaultRoyalty` function at Etherscan.

## Links

- [OpenSea Collection](https://opensea.io/ja/collection/lightsculpture)
- [OpenSea NFT #1](https://opensea.io/ja/assets/ethereum/0x8f4d172acb9d228df38f7221927944f05dcdc26f/1)
- [Etherscan](https://etherscan.io/address/0x8f4d172acb9d228df38f7221927944f05dcdc26f#code)
- [Shinichi Maruyama (Photographer/Artist)](https://www.shinichimaruyama.com/)
- [nawoo (Programmer)](https://twitter.com/NowAndNawoo)

## License

This contract is released under the [MIT License](https://opensource.org/licenses/MIT).  
Copyright 2022 nawoo ([@NowAndNawoo](https://twitter.com/NowAndNawoo))
