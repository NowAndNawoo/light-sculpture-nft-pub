import { Contract, ContractTransaction } from 'ethers';
import { ethers } from 'hardhat';
import { BigNumber } from 'ethers';

export const getEnvValue = (key: string): string => {
  const value = process.env[key];
  console.log(key + ' is:', value);
  if (value === undefined) throw Error(key + ' is undefined');
  if (value === '') throw Error(key + ' is empty');
  return value;
};

export const getEnvValueAsBoolean = (key: string): boolean => {
  const value = getEnvValue(key);
  if (value === 'true') return true;
  if (value === 'false') return false;
  throw Error(key + ' is invalid');
};

export const getEnvValueAsNumber = (key: string): number => {
  const value = getEnvValue(key);
  const num = Number(value);
  if (Number.isNaN(num)) throw Error(key + ' is invalid');
  return num;
};

export function toGwei(gasPrice: BigNumber | undefined): string {
  if (gasPrice === undefined) return 'undefined';
  return ethers.utils.formatUnits(gasPrice, 'gwei') + ' gwei';
}

export const waitDeployed = async (title: string, contract: Contract) => {
  console.log('# Deploy ' + title);
  console.log('contract deploy to:', contract.address);
  console.log('hash:', contract.deployTransaction.hash);
  console.log('nonce:', contract.deployTransaction.nonce);
  console.log('gasLimit:', contract.deployTransaction.gasLimit.toString());
  console.log('gasPrice:', toGwei(contract.deployTransaction.gasPrice));
  await contract.deployed();
  console.log('deployed!');
  console.log();
};

// TODO: quietモード
export const waitTx = async (title: string, tx: ContractTransaction) => {
  console.log('# ' + title);
  console.log('hash:', tx.hash);
  console.log('nonce:', tx.nonce);
  console.log('gasLimit:', tx.gasLimit.toString());
  console.log('gasPrice:', toGwei(tx.gasPrice));
  const receipt = await tx.wait();
  console.log('gasUsed:', receipt.gasUsed.toString());
  console.log('confirmed!');
  console.log();
};
