// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface GetApproved {
    function getApproved(uint256 tokenId) external view returns (address);
}