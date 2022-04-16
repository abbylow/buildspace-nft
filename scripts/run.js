const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  // Call the function.
  let txn = await nftContract.makeAnEpicNFT()
  // Wait for it to be mined.
  await txn.wait()
  let currentMintedNum = await nftContract.getTotalNFTsMintedSoFar();
  let maxNum = await nftContract.getMaxLimit();
  console.log("MAX: ", maxNum.toNumber());
  console.log("Get the minted number so far ", currentMintedNum.toNumber());

  // Mint another NFT for fun.
  txn = await nftContract.makeAnEpicNFT()
  // Wait for it to be mined.
  await txn.wait()
  currentMintedNum = await nftContract.getTotalNFTsMintedSoFar();
  console.log("Get the minted number so far ", currentMintedNum.toNumber());

  txn = await nftContract.makeAnEpicNFT()
  // Wait for it to be mined.
  await txn.wait()
  currentMintedNum = await nftContract.getTotalNFTsMintedSoFar();
  console.log("Get the minted number so far ", currentMintedNum.toNumber());
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();