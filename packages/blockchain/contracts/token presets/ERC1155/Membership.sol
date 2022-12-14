// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../../oz/access/Ownable.sol";
import "../../oz/security/Pausable.sol";
import "../../oz/token/ERC1155/ERC1155.sol";

/**
 * @title Membership NFT Contract v 0.0.1, proto version of a membership smart contract of the ZION® protocol.
 * this version will be mainly used to perform a pre-seed sale of the ZION token.
 *
 * @dev This contract create 1 token of ID 0 per mint.
 * NOTE We should decide if the token can be transferable, and if it can be burnt.
 * My personal advice is to
 */

contract Membership is ERC1155, Ownable, Pausable {
    /////////////////////
    /// Minting constants
    /////////////////////
    uint256 internal TOKENID_ = 0;
    uint256 internal AMOUNT_ = 1;
    bytes internal DATA_ = "0x00";

    event LogSafeMint(address inviter, address newMember);

    /// @dev constructor of the functio which mint a token with ID 0 to the msg.sender which should be a DAO minion.
    constructor() ERC1155("") {
        _mint(msg.sender, TOKENID_, AMOUNT_, DATA_);
    }

    /// @dev Modifier to allow only token holders to call a function
    modifier onlyTokenHolders() {
        require(
            IERC1155(address(this)).balanceOf(msg.sender, 0) != 0,
            "Only token holders can perform this action"
        );
        _;
    }

    /// @dev Modifier to allow only one token per address
    modifier onlyOneNFTperAddress(address account) {
        require(
            IERC1155(address(this)).balanceOf(account, 0) < 1,
            "Members can only hold one membership token"
        );
        _;
    }

    /// @dev function to pause the contract (transfer, mint and burn)
    function pause() public onlyOwner {
        _pause();
    }

    /// @dev function to unpause the contract (transfer, mint and burn)
    function unpause() public onlyOwner {
        _unpause();
    }

    /// @dev function mint tokens, the data field has been omitted and the value has been hardcoded in the contract
    /// data message = "0x00"
    /// @param account address to which the member want to send a newly minted membership token
    function mint(address account)
        public
        onlyTokenHolders
        onlyOneNFTperAddress(account)
    {
        require(account != address(0), "ZION.MEMBERSHIO.NFT::mint:: invalid recipient" );
        _mint(account, TOKENID_, AMOUNT_, DATA_);
    }

    /// @dev function which checks if the token is paused before performing any action.
    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    function getMsgSenderBalance() external view returns (uint256) {
        return (balanceOf(msg.sender, TOKENID_));
    }

    function safeTransferFrom(
        address,
        address,
        uint256,
        uint256,
        bytes memory
    ) public pure override {
        revert("This is a memebership token which can't be transferred");
    }

    function setUri(string memory newUri) public whenNotPaused returns(string memory){
        _setURI(newUri);
        return newUri;
    }
}
