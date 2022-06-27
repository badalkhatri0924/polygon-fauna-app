const abiDecoder = require("abi-decoder");

// pulled from Allowlist.json "abi" field
const testABI = [
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "_uuid",
        type: "string",
      },
    ],
    name: "_createAllowlister",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
abiDecoder.addABI(testABI);

// add in your input data hash as a string here
const testData = "0x0caa58e00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002434356235393336622d643362642d346465632d616130622d34383862616637623831333700000000000000000000000000000000000000000000000000000000";
const decodedData = abiDecoder.decodeMethod(testData);
console.log(decodedData);
