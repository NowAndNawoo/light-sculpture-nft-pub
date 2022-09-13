import { ethers } from 'hardhat';

async function main() {
  const [owner] = await ethers.getSigners();
  console.log('Owner:', owner.address);

  const factory = await ethers.getContractFactory('LightSculpture');
  const contract = await factory.deploy();
  await contract.deployed();
  console.log('deployed to:', contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
