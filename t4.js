1.	function createNewCertificate(
2.	 string memory partner1, string memory partner2, address _address, string memory location
3.	   ) public payable {
4.	   // certificate fee must be paid
5.	 require(msg.value >= certificateFee, "Insufficient fee");
6.	 // new certificate creation
7.	 MarriageCertificate newCertificate = new MarriageCertificate(
8.	     msg.sender,
9.	     partner1,
10.	     partner2,
11.	     _address,
12.	       location);
13.	    // we save the address in array
14.	    certificates.push(newCertificate);
15.	    // we update last marriage array
16.	    lastMarriage = [partner1, partner2, location];
17.	    // we return an event for the web3 interface
18.	    emit LogNewCertificateCreated(newCertificate, certificates.length);
19.	}
