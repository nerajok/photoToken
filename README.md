PhotoToken Contract:

Concept: Using ERC721 token standard to tokenize digital photos and trade them for other ERC20 token(s).

The photo_base contract defines the structure of the phototokens and enables exchange of tokens using the lookup function.
The value of each ERC721 token is based upon their size for clarity and originality as factors for setting the exchange standards.

References: 
1. https://www.youtube.com/watch?v=YPbgjPPC1d0&t=726s
2. Lab6 of Smart contract essentials.
3. https://github.com/OpenZeppelin/openzeppelin-contracts-ethereum-package/blob/master/test/token/ERC721/ERC721.test.js

Technical difficulties: I was unable to test this contract completely due to a known bug which is:
https://github.com/trufflesuite/truffle/issues/2463

Notes:
1. This project is similar to both the references mentioned above. As of now this contract is designed in a way that ERC721(PIC) token can be exchanged with only one type of ERC20 token. 
2. I was able to successfully compile and deploy photo_base.sol after a lot of dependency problems. Kindly install and setup the dependencies before evaluation and feel free to contact me for any clarification.
3. There are two test files one is photoToken which was written by me and the other one from openzeppelin team. As I'm unable to run any tests, I can't confirm how each one works.
