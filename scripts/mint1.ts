import { ethers } from 'hardhat';
import { getEnvValue, toGwei, waitTx } from './lib/common';
import { uploadImageFile } from './lib/upload';

async function main() {
  const contractAddress = getEnvValue('CONTRACT_ADDRESS');

  const [owner] = await ethers.getSigners();
  console.log('owner:', owner.address);
  const contract = await ethers.getContractAt('LightSculpture', contractAddress);
  console.log('gasPrice:', toGwei(await ethers.provider.getGasPrice()));

  const tokenInfo = {
    filePath: './data/sample_50kb.jpg',
    tokenId: 1,
    name: 'test image #1',
    description: `test image description...`,
  };

  // upload
  await uploadImageFile(contract, tokenInfo, 14000, false);

  // mint
  const tx = await contract.mint(tokenInfo.tokenId);
  await waitTx('mint', tx);

  console.log('done!');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
