// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract sum 
{
	uint256 num1; 
    uint256 num2;
	function firstNoSet(uint x) public
	{
		num1 = x;
	}
	function secondNoSet(uint y) public
	{
		num2 = y;
	}

	function add() view public returns (uint) 
	{
		uint Sum = num1 + num2 ;
		return Sum;
	}
}
