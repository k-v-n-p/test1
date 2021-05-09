function signContract() external onlySpouse {
  require(isSameString(writtenContractIpfsHash, ""), "Written contract ipfs hash has been proposed yet!");
  require(hasSigned[msg.sender] == false, "Spouse has already signed the contract!");
  
  // Sender signed
  hasSigned[msg.sender] = true;

    emit Signed(now, msg.sender);

  // Check if both spouses have signed
  if (hasSigned[husbandAddress] && hasSigned[wifeAddress]) {
    signed = true;
    emit ContractSigned(now);
  }
}
