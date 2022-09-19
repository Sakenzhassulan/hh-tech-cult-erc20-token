const { run } = require("hardhat")

async function verify(contractAddress, args) {
    console.log("Verifying contract ...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
            contract: "contracts/MyERC20Token.sol:MyERC20Token",
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified")
        } else {
            console.log(e)
        }
    }
}

module.exports = { verify }
