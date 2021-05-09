 contract MarriageCertificate {
	string public location;
  string public partner1;
  string public parnter2;
	bool[2] public isValid;
  address[2] public _Addresses;
	uint public timestamp;
	mapping(bytes32 => uint) public accounts;
	struct withdrawRequestFromSavings {
	   address payable sender;
    uint amount;
    uint timestamp;
     bool approved;
  }
  mapping(uint => withdrawRequestFromSavings) public withdrawRequests;
  uint public version;
}    
