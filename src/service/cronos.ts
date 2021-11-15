import crc20abi from '../contractABI/crc20.json';
import BigNumber from 'bignumber.js';
import Web3 from 'web3';
import { TransactionReceipt } from 'web3-eth';
export type { TransactionReceipt } from 'web3-eth';

export enum TransactionStatus {
    NotOnChain = 'Not on Chain',
    SuccessOnChain = 'Success on chain',
    FailedOnChain = 'Failed on chain',
}

export default class CronosService {
    private web3: Web3;

    public constructor(private url: string) {
        this.web3 = new Web3(new Web3.providers.HttpProvider(url));
    }

    public async getTransactionRecord(txHash: string): Promise<TransactionRecord> {
        const receipt = await this.web3.eth.getTransactionReceipt(txHash)

        if (receipt === null) {
            return {
                status: TransactionStatus.NotOnChain,
            }
        }

        if (!receipt.status) {
            return {
                status: TransactionStatus.FailedOnChain,
                receipt: receipt,
            }
        }

        return {
            status: TransactionStatus.SuccessOnChain,
            receipt: receipt,
        }
    }

    public async getBlockHeight(): Promise<number> {
        return this.web3.eth.getBlockNumber();
    }

    public async getBalance(account: string): Promise<BigNumber> {
        const balance = await this.web3.eth.getBalance(account);
        return new BigNumber(balance);
    }

    public async getCRC20Balance(account: string, contractAddress: string): Promise<BigNumber> {
        const contract = new this.web3.eth.Contract(crc20abi as any, contractAddress);
        const balance = await contract.methods.balanceOf(account).call();
        return new BigNumber(balance);
    }

    public isValidAddress(account: string): boolean {
        return this.web3.utils.isAddress(account);
    }
}

export type TransactionRecord = {
    status: TransactionStatus,
    receipt?: TransactionReceipt,
} & ({
    status: TransactionStatus.NotOnChain
} | {
    status: TransactionStatus.SuccessOnChain
    receipt: TransactionReceipt,
} | {
    status: TransactionStatus.FailedOnChain,
    receipt: TransactionReceipt,
})