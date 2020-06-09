const photoToken = artifacts.require('./photoToken.sol');
require('chai')
	.use(require('chai-as-promised'))
	.should()

contract('photoToken',(accounts) => {
	let contract;

	before(async () => {
		contract = await photoToken.deployed();
	})

describe('deployment',async() => {
	it('deploys successfully', async () => {
		contract = await photoToken.deployed();
		const address = contract.address;
		console.log(address);
		assert.notEqual(address, '');
		assert.notEqual(address, 0x0);
		assert.notEqual(address, null);
		assert.notEqual(address, undefined);
	})

	it('has a name', async () => {
		const name = await contract.name();
		assert.equal(name, 'Photo');
	})

	it('has a symbol', async () => {
		const symbol = await contract.symbol();
		assert.equal(symbol, 'PIC');
	})
})

describe('ERC 165 compliance', async() => {
	it('Checks if Contract is ERC 165 compliant', async() => {
		const ERC165test = await contract.supportsInterface.call('0x01ffc9a7');
		assert.equal(ERC165test,true,'Contract is ERC165 compliant');
	})

})

describe('mint test', async() => {
	it('checks minting', async () => {
		const first_photo = {
			photo_id: 11111,
			name: scenary,
			size: 10,
			originality: True
		};
		const checkBalance = await contract.balanceOf.call(accounts[0]);
		assert.equal(checkBalance,0,'zero balance');
		const result = await contract.mint(first_photo);
		const totalSupply = await contract.totalSupply();

		assert.equal(totalSupply,1);
		const event = result.logs[0].args;
		assert.equal(event.tokenId.toNumber(),0,'id is correct');
		assert.equal(event.from,'0x0000000000000000000000000000000000000000','from is correct');
		assert.equal(event.to,accounts[0],'to is correct');

		await contract.mint({
			photo_id: 11111,
			name: scenary,
			size: 10,
			originality: True
		}).should.be.rejected;
	})
})

describe('balanceOf test', async() => {
	it('checks balance', async() => {
		const balanceTest = await contract.balanceOf.call(accounts[0]);
		assert.equal(balanceTest,1,'Balance has been updated');
	})
})

describe('ownerOf test', async() => {
	it('checks owner for photoId', async() => {
		const ownerTest = await contract.ownerOf.call(0);
		assert.equal(ownerTest,accounts[0],'Rightful owner');
	})
})

})