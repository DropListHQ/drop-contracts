// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/contracts/utils/cryptography/MerkleProof.sol";
import "./BaseDrop.sol";
import "./IMerkleDropERC1155.sol";

contract MerkleDropERC1155 is BaseDrop, IMerkleDropERC1155 {
  
  function claim(uint256 index, uint256 tokenId, uint256 amount, address account, bytes32[] calldata merkleProof) public virtual override {
    // standard merkle drop checks working for all token standards (ERC20, ERC721, ERC1155)
    bytes32 node = keccak256(abi.encodePacked(index, tokenId, account, amount));
    require(super.checkClaim(index, node, merkleProof), 'invalid claim');
    
    // Mark leaf as claimed and send the token.
    _setClaimed(index);
    IERC1155(token).safeTransferFrom(sender, account, tokenId, amount, "");
    
    emit ClaimedERC1155(index, tokenId, amount, account);
  }    
}
