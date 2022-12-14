// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../ERC1155.sol";
import "./draft-IERC1155Permit.sol";
import "../../../oz/utils/cryptography/draft-EIP712.sol";
import "../../../oz/utils/cryptography/ECDSA.sol";
import "../../../oz/utils/Counters.sol";

abstract contract ERC1155Permit is ERC1155, IERC1155Permit, EIP712 {
  using Counters for Counters.Counter;

  mapping(address => Counters.Counter) private _nonces;

  bytes32 private immutable _PERMIT_TYPEHASH = keccak256("Permit(address owner,address spender,uint256 id,uint256 value,uint256 nonces,uint256 deadline)");

  constructor(string memory name) EIP712(name, "1") {}

  function permit(
    address owner,
    address spender,
    uint256 id,
    uint256 value,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) public virtual override {
    require(block.timestamp <= deadline, "ERC1155Permit: expired deadline");

    bytes32 structHash = keccak256(abi.encode(_PERMIT_TYPEHASH, owner, spender, id, value, _useNonce(owner), deadline));

    bytes32 hash = _hashTypedDataV4(structHash);

    address signer = ECDSA.recover(hash, v, r, s);
    require(signer == owner, "ERC1155Permit: invalid signature");

    _setApprovalForAll(owner, spender, true);

  }

  function nonces(address owner) public view virtual override returns(uint256) {
    return _nonces[owner].current();
  }

  function DOMAIN_SEPARATOR() external view override returns(bytes32) {
    return _domainSeparatorV4();
  }

  function _useNonce(address owner) internal virtual returns(uint256 current) {
    Counters.Counter storage nonce = _nonces[owner];
    current = nonce.current();
    nonce.increment();
  }

}