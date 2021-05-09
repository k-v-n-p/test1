1.	modifier isSigned() {
2.	 require(signed == true, "Contract has not been signed by both spouses yet!");
3.	 _;
4.	}
