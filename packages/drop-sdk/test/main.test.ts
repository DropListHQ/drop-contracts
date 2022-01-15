import { buildMerkleTreeERC1155 } from '../src'
import { hexlify } from '@ethersproject/bytes';
// import { randomBytes } from '@ethersproject/random';
// import { computeAddress } from '@ethersproject/transactions';
// import { SigningKey } from '@ethersproject/signing-key';
// import { ethers } from 'ethers'

type DataOldFormat = {
    [account: string]: {
        amount: number | string,
        tokenId: number | string,
        maxSupply: number
    }
}

// type DataNewFormat = {
//     address: string;
//     earnings: string;
//     reasons: string;
//     tokenId: number | string;
//     maxSupply: string
// }

describe('buildMerkleTreeERC1155', () => {
    it('should build Merkle tree for erc1155 NFTs', async () => {
        const data: DataOldFormat = {
            '0x88EC069E5151cFad602A06AD13fea7e87Ba089C8': { amount: 1, tokenId: 1, maxSupply: 3 },
            '0x092464dFF81eAb2111D0A7f8d6334Ef31f4eF5Da': { amount: 1, tokenId: 1, maxSupply: 3 },
            '0xBb41E77278c0f4afE9F4cF1Ee8866432FE024482': { amount: 1, tokenId: 1, maxSupply: 3 }
        }

        const result = buildMerkleTreeERC1155(data);

        expect(Object.keys(result.claims).length).toEqual(3);
        expect(result.merkleRoot).toEqual('0xf01f308c9098b219e95cde85b9a69256ab5d5aad63728e9a8036044c3f95937c');

        const claim = result.claims['0x88EC069E5151cFad602A06AD13fea7e87Ba089C8'];
        expect(claim.amount).toEqual(hexlify(1));
        expect(claim.tokenId).toEqual(1);
        expect(claim.maxSupply).toEqual(hexlify(3));
        expect(claim.proof.length).toBeGreaterThan(0);
    })
})
