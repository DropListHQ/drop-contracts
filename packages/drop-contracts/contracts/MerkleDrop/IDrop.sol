//SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/contracts/utils/introspection/IERC165.sol";

interface IDrop is IERC165 {

  /**
   * @dev Constructor for Drop contract as an instance is a proxy (conforming to EIP-1167), the init function is used on initialization.
   * @param tokenOwner owner of the token to be distributed.
   * @param token Address of the token contract to be distributed.
   * @param merkleRoot Merkle root of the merkle drop.
   * @param expiryTimestamp Unix-timestamp of the deadline until which users are able to claim the drop.
   * @param ipfsHash IPFS-hash of the drop metadata JSON-file stored via IPFS.
   */
  function init(address tokenOwner, address token, bytes32 merkleRoot, uint256 expiryTimestamp, bytes32 ipfsHash) external;


  /**
   * @dev Executes claim transaction.
   * @param index Leaf index in the Merkle tree.
   * @param tokenId token ID being claimed. 
   * @param amount amount of tokens to claim.
   * @param maxSupply maximum tokens that is being distributed via by the merkle drop.
   * @param beneficiary The account that the claim should benefit.
   * @param merkleProof Merkle proof for the leaf index. 
   */
  function claim(uint256 index, uint256 tokenId, uint256 amount, uint256 maxSupply, address beneficiary, bytes32[] calldata merkleProof) external;


  /**
   * @dev Returns if leaf is claimed. 
   * @param index Leaf index in the Merkle tree.
   * @return Boolean if leaf is claimed.
   */
  function isClaimed(uint256 index) external view returns (bool);

  /**
   * @dev Returns if drop is expired.
   * @return Boolean if drop is claimed.
   */
  function isExpired() external view returns (bool);
}
