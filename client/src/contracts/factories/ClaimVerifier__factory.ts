/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ClaimVerifier, ClaimVerifierInterface } from "../ClaimVerifier";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Trustus__InvalidPacket",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "claimer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "claimManager",
        type: "address",
      },
    ],
    name: "Claimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "claimManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isClaimManager",
        type: "bool",
      },
    ],
    name: "UpdatedClaimManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isTrusted",
        type: "bool",
      },
    ],
    name: "UpdatedTrustedSigner",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "request",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "request",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
        ],
        internalType: "struct Trustus.TrustusPacket",
        name: "packet",
        type: "tuple",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ClaimManager",
        name: "",
        type: "address",
      },
    ],
    name: "isClaimManager",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ClaimManager",
        name: "claimManager",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isClaimManager_",
        type: "bool",
      },
    ],
    name: "setIsClaimManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isTrusted",
        type: "bool",
      },
    ],
    name: "setIsTrusted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5046608081815250506200002a6200005760201b60201c565b60a081815250506200005162000045620000ef60201b60201c565b620000f760201b60201c565b62000295565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7fdf69610c0b387da9d15be15abce6a2001b01d78457c2fe3f30ceca4e1f28ff457fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc64630604051602001620000d495949392919062000238565b60405160208183030381529060405280519060200120905090565b600033905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000819050919050565b620001d281620001bd565b82525050565b6000819050919050565b620001ed81620001d8565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200022082620001f3565b9050919050565b620002328162000213565b82525050565b600060a0820190506200024f6000830188620001c7565b6200025e6020830187620001c7565b6200026d6040830186620001c7565b6200027c6060830185620001e2565b6200028b608083018462000227565b9695505050505050565b60805160a051611372620002bb60003960006102830152600061024f01526113726000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146100ed578063b345775f1461010b578063ed0934221461013b578063f2fde38b1461015757610088565b80631393916a1461008d5780633644e515146100a957806369783c0b146100c7578063715018a6146100e3575b600080fd5b6100a760048036038101906100a29190610ca5565b610173565b005b6100b161024b565b6040516100be9190610cfe565b60405180910390f35b6100e160048036038101906100dc9190610d57565b6102a8565b005b6100eb61043c565b005b6100f56104c4565b6040516101029190610da6565b60405180910390f35b61012560048036038101906101209190610dc1565b6104ee565b6040516101329190610dfd565b60405180910390f35b61015560048036038101906101509190610e3c565b61050e565b005b610171600480360381019061016c9190610e7c565b610751565b005b61017b610848565b73ffffffffffffffffffffffffffffffffffffffff166101996104c4565b73ffffffffffffffffffffffffffffffffffffffff16146101ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101e690610f06565b60405180910390fd5b6101f98282610850565b8173ffffffffffffffffffffffffffffffffffffffff167f25dd6eb01b7025ce5739289bada84924797a8424b23d6d473a80dec94af8845e8260405161023f9190610dfd565b60405180910390a25050565b60007f000000000000000000000000000000000000000000000000000000000000000046146102815761027c6108aa565b6102a3565b7f00000000000000000000000000000000000000000000000000000000000000005b905090565b6102b0610848565b73ffffffffffffffffffffffffffffffffffffffff166102ce6104c4565b73ffffffffffffffffffffffffffffffffffffffff1614610324576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031b90610f06565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610393576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038a90610f72565b60405180910390fd5b80600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff167fb83782fdecadf388321231f2ccdcd1f7ca373ab5ee39c3364af08fc1119dba5f826040516104309190610dfd565b60405180910390a25050565b610444610848565b73ffffffffffffffffffffffffffffffffffffffff166104626104c4565b73ffffffffffffffffffffffffffffffffffffffff16146104b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104af90610f06565b60405180910390fd5b6104c26000610940565b565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60026020528060005260406000206000915054906101000a900460ff1681565b818161051a8282610a06565b610550576040517fe06dc05000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168360a001602081019061057a9190610e7c565b73ffffffffffffffffffffffffffffffffffffffff16146105d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c790610fde565b60405180910390fd5b6000849050600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610661576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065890611070565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16631e83409a8560a00160208101906106909190610e7c565b6040518263ffffffff1660e01b81526004016106ac9190610da6565b600060405180830381600087803b1580156106c657600080fd5b505af11580156106da573d6000803e3d6000fd5b505050508473ffffffffffffffffffffffffffffffffffffffff168460a00160208101906107089190610e7c565b73ffffffffffffffffffffffffffffffffffffffff167f89309c9b2aeaffbdce717113df9427298b20448c05919bf889e05f8c3094254b60405160405180910390a35050505050565b610759610848565b73ffffffffffffffffffffffffffffffffffffffff166107776104c4565b73ffffffffffffffffffffffffffffffffffffffff16146107cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c490610f06565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361083c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083390611102565b60405180910390fd5b61084581610940565b50565b600033905090565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7fdf69610c0b387da9d15be15abce6a2001b01d78457c2fe3f30ceca4e1f28ff457fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6463060405160200161092595949392919061113b565b60405160208183030381529060405280519060200120905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008160800135421115610a1d5760009050610c04565b816060016020810190610a309190610e7c565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610a6b5760009050610c04565b60006001610a7761024b565b7fd06252d8f37c21da936046cd0f697bebc7d622858892a9525b169439b1c210f9856060016020810190610aab9190610e7c565b86608001358760a0016020810190610ac39190610e7c565b604051602001610ad6949392919061118e565b60405160208183030381529060405280519060200120604051602001610afd92919061124b565b60405160208183030381529060405280519060200120846000016020810190610b2691906112bb565b8560200135866040013560405160008152602001604052604051610b4d94939291906112f7565b6020604051602081039080840390855afa158015610b6f573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614158015610c0057506000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b9150505b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c3a82610c0f565b9050919050565b610c4a81610c2f565b8114610c5557600080fd5b50565b600081359050610c6781610c41565b92915050565b60008115159050919050565b610c8281610c6d565b8114610c8d57600080fd5b50565b600081359050610c9f81610c79565b92915050565b60008060408385031215610cbc57610cbb610c0a565b5b6000610cca85828601610c58565b9250506020610cdb85828601610c90565b9150509250929050565b6000819050919050565b610cf881610ce5565b82525050565b6000602082019050610d136000830184610cef565b92915050565b6000610d2482610c2f565b9050919050565b610d3481610d19565b8114610d3f57600080fd5b50565b600081359050610d5181610d2b565b92915050565b60008060408385031215610d6e57610d6d610c0a565b5b6000610d7c85828601610d42565b9250506020610d8d85828601610c90565b9150509250929050565b610da081610c2f565b82525050565b6000602082019050610dbb6000830184610d97565b92915050565b600060208284031215610dd757610dd6610c0a565b5b6000610de584828501610d42565b91505092915050565b610df781610c6d565b82525050565b6000602082019050610e126000830184610dee565b92915050565b600080fd5b600060c08284031215610e3357610e32610e18565b5b81905092915050565b60008060e08385031215610e5357610e52610c0a565b5b6000610e6185828601610c58565b9250506020610e7285828601610e1d565b9150509250929050565b600060208284031215610e9257610e91610c0a565b5b6000610ea084828501610c58565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610ef0602083610ea9565b9150610efb82610eba565b602082019050919050565b60006020820190508181036000830152610f1f81610ee3565b9050919050565b7f436c61696d56657269666965723a207a65726f20616464726573730000000000600082015250565b6000610f5c601b83610ea9565b9150610f6782610f26565b602082019050919050565b60006020820190508181036000830152610f8b81610f4f565b9050919050565b7f436c61696d4d616e616765723a206e6f7420796f7572207061636b6574000000600082015250565b6000610fc8601d83610ea9565b9150610fd382610f92565b602082019050919050565b60006020820190508181036000830152610ff781610fbb565b9050919050565b7f436c61696d4d616e616765723a20696e76616c696420636c61696d206d616e6160008201527f6765722061646472657373000000000000000000000000000000000000000000602082015250565b600061105a602b83610ea9565b915061106582610ffe565b604082019050919050565b600060208201905081810360008301526110898161104d565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006110ec602683610ea9565b91506110f782611090565b604082019050919050565b6000602082019050818103600083015261111b816110df565b9050919050565b6000819050919050565b61113581611122565b82525050565b600060a0820190506111506000830188610cef565b61115d6020830187610cef565b61116a6040830186610cef565b611177606083018561112c565b6111846080830184610d97565b9695505050505050565b60006080820190506111a36000830187610cef565b6111b06020830186610d97565b6111bd604083018561112c565b6111ca6060830184610d97565b95945050505050565b600081905092915050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b60006112146002836111d3565b915061121f826111de565b600282019050919050565b6000819050919050565b61124561124082610ce5565b61122a565b82525050565b600061125682611207565b91506112628285611234565b6020820191506112728284611234565b6020820191508190509392505050565b600060ff82169050919050565b61129881611282565b81146112a357600080fd5b50565b6000813590506112b58161128f565b92915050565b6000602082840312156112d1576112d0610c0a565b5b60006112df848285016112a6565b91505092915050565b6112f181611282565b82525050565b600060808201905061130c6000830187610cef565b61131960208301866112e8565b6113266040830185610cef565b6113336060830184610cef565b9594505050505056fea2646970667358221220c75dfd0de83b532e97f1bc20f6507da0f4a4c4aff3b9c057a9c4f3fb9171426264736f6c634300080d0033";

type ClaimVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ClaimVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ClaimVerifier__factory extends ContractFactory {
  constructor(...args: ClaimVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ClaimVerifier> {
    return super.deploy(overrides || {}) as Promise<ClaimVerifier>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ClaimVerifier {
    return super.attach(address) as ClaimVerifier;
  }
  override connect(signer: Signer): ClaimVerifier__factory {
    return super.connect(signer) as ClaimVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClaimVerifierInterface {
    return new utils.Interface(_abi) as ClaimVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClaimVerifier {
    return new Contract(address, _abi, signerOrProvider) as ClaimVerifier;
  }
}