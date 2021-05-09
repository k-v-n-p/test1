1.	function signContract() external onlySpouse {
2.	require(isSameString(writtenContractIpfsHash, ""), "Written contract ipfs hash has been proposed yet!");
3.	require(hasSigned[msg.sender] == false, "Spouse has already signed the contract!");
  
4.	// Sender signed
5.	hasSigned[msg.sender] = true;

6.	emit Signed(now, msg.sender);

7.	// Check if both spouses have signed
8.	if (hasSigned[husbandAddress] && hasSigned[wifeAddress]) {
9.	signed = true;
10.	emit ContractSigned(now);
11.	}
12.	}
