// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import './IzCheckpointable.sol';
import '../PrivatezCheckpointable.sol';

contract zCheckpointable is IzCheckpointable, PrivatezCheckpointable {}
