function createNewCertificate(
  string memory partner1, string memory partner2, address _address, string memory location
  ) public payable {
    
   // certificate fee must be paid
  require(msg.value >= certificateFee, "Insufficient fee");
    
  // new certificate creation
   MarriageCertificate newCertificate = new MarriageCertificate(
	     msg.sender,
	     partner1,
	     partner2,
	     _address,
	     location);
    
   // we save the address in array
	    certificates.push(newCertificate);
    
	 // we update last marriage array
	    lastMarriage = [partner1, partner2, location];
    
	 // we return an event for the web3 interface
	    emit LogNewCertificateCreated(newCertificate, certificates.length);
}
