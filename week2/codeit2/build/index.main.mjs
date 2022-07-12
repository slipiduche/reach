// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Bidder(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v61, time: v60, didSend: v22, from: v59 } = txn1;
  ;
  const v64 = stdlib.protect(ctc0, await interact.seePrice(), {
    at: './index.rsh:24:47:application',
    fs: ['at ./index.rsh:23:14:application call to [unknown function] (defined at: ./index.rsh:23:18:function exp)'],
    msg: 'seePrice',
    who: 'Bidder'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v59, v64],
    evt_cnt: 1,
    funcNum: 1,
    lct: v60,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v66], secs: v68, time: v67, didSend: v31, from: v65 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v66], secs: v68, time: v67, didSend: v31, from: v65 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v74, v75], secs: v77, time: v76, didSend: v44, from: v73 } = txn3;
  ;
  ;
  return;
  
  
  
  
  
  
  };
export async function Buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v61, time: v60, didSend: v22, from: v59 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v66], secs: v68, time: v67, didSend: v31, from: v65 } = txn2;
  ;
  const v71 = stdlib.protect(ctc0, await interact.seePrice(), {
    at: './index.rsh:29:49:application',
    fs: ['at ./index.rsh:28:13:application call to [unknown function] (defined at: ./index.rsh:28:17:function exp)'],
    msg: 'seePrice',
    who: 'Buyer'
    });
  const v72 = stdlib.protect(ctc0, await interact.getDescription(), {
    at: './index.rsh:30:59:application',
    fs: ['at ./index.rsh:28:13:application call to [unknown function] (defined at: ./index.rsh:28:17:function exp)'],
    msg: 'getDescription',
    who: 'Buyer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v59, v71, v72],
    evt_cnt: 2,
    funcNum: 2,
    lct: v67,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v71, []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v74, v75], secs: v77, time: v76, didSend: v44, from: v73 } = txn3;
      
      sim_r.txns.push({
        amt: v74,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v59,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v74, v75], secs: v77, time: v76, didSend: v44, from: v73 } = txn3;
  ;
  ;
  return;
  
  
  
  
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:21:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:21:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v61, time: v60, didSend: v22, from: v59 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v61, time: v60, didSend: v22, from: v59 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v66], secs: v68, time: v67, didSend: v31, from: v65 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v74, v75], secs: v77, time: v76, didSend: v44, from: v73 } = txn3;
  ;
  ;
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAECCCYCAQAAIjUAMRhBAT0pZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAI1JJAxAAEokEkQkNAESRDQESSISTDQCEhFEKGQ1A0k1BUkiWzX/JVs1/oAE8y0KDDT/FlA0/hZQsDT/iADwsSKyATT/sggjshA0A7IHs0IAcEgjNAESRDQESSISTDQCEhFEKGRJNQM1/0k1BRc1/oAE1RUZFDT+FlCwNP8oSwFXACBnSCQ1ATIGNQJCAE9IgaCNBogAmCI0ARJENARJIhJMNAISEUSABF8Nq/qwMQAoSwFXACBnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 32,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v74",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v75",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v74",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v75",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161090b38038061090b8339810160408190526100229161018d565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a161007d341560076100cb565b60408051602080820183523380835260016000819055439055835191820152909101604051602081830303815290604052600290805190602001906100c39291906100f4565b505050610230565b816100f05760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054610100906101f5565b90600052602060002090601f0160209004810192826101225760008555610168565b82601f1061013b57805160ff1916838001178555610168565b82800160010185558215610168579182015b8281111561016857825182559160200191906001019061014d565b50610174929150610178565b5090565b5b808211156101745760008155600101610179565b60006040828403121561019f57600080fd5b604080519081016001600160401b03811182821017156101cf57634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146101e957600080fd5b60208201529392505050565b600181811c9082168061020957607f821691505b6020821081141561022a57634e487b7160e01b600052602260045260246000fd5b50919050565b6106cc8061023f6000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780638323075714610078578063873779a11461008d5780639014596a146100a0578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008457600080fd5b50600154610065565b61005261009b366004610574565b6100d6565b6100526100ae36600461058c565b610255565b3480156100bf57600080fd5b506100c86103dc565b60405161006f92919061059e565b6100e66001600054146009610479565b610100813515806100f957506001548235145b600a610479565b600080805560028054610112906105fb565b80601f016020809104026020016040519081016040528092919081815260200182805461013e906105fb565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a39190610630565b6040805133815284356020808301919091528501358183015290519192507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225919081900360600190a16101f834156008610479565b60408051602081019091526000815281516001600160a01b0316808252600260005543600155604080516020810192909252016040516020818303038152906040526002908051906020019061024f92919061049e565b50505050565b610265600260005414600c610479565b61027f8135158061027857506001548235145b600d610479565b600080805560028054610291906105fb565b80601f01602080910402602001604051908101604052809291908181526020018280546102bd906105fb565b801561030a5780601f106102df5761010080835404028352916020019161030a565b820191906000526020600020905b8154815290600101906020018083116102ed57829003601f168201915b50505050508060200190518101906103229190610630565b604080513381528435602080830191909152850135818301529084013560608201529091507feade97c60783e4c8b7590ebdcad0dcf3d731471c98f3f06328d9701c9d0e19699060800160405180910390a161038534602084013514600b610479565b80516040516001600160a01b0390911690602084013580156108fc02916000818181858888f193505050501580156103c1573d6000803e3d6000fd5b50600080805560018190556103d890600290610522565b5050565b6000606060005460028080546103f1906105fb565b80601f016020809104026020016040519081016040528092919081815260200182805461041d906105fb565b801561046a5780601f1061043f5761010080835404028352916020019161046a565b820191906000526020600020905b81548152906001019060200180831161044d57829003601f168201915b50505050509050915091509091565b816103d85760405163100960cb60e01b81526004810182905260240160405180910390fd5b8280546104aa906105fb565b90600052602060002090601f0160209004810192826104cc5760008555610512565b82601f106104e557805160ff1916838001178555610512565b82800160010185558215610512579182015b828111156105125782518255916020019190600101906104f7565b5061051e92915061055f565b5090565b50805461052e906105fb565b6000825580601f1061053e575050565b601f01602090049060005260206000209081019061055c919061055f565b50565b5b8082111561051e5760008155600101610560565b60006040828403121561058657600080fd5b50919050565b60006060828403121561058657600080fd5b82815260006020604081840152835180604085015260005b818110156105d2578581018301518582016060015282016105b6565b818111156105e4576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061060f57607f821691505b6020821081141561058657634e487b7160e01b600052602260045260246000fd5b60006020828403121561064257600080fd5b6040516020810181811067ffffffffffffffff8211171561067357634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461068d57600080fd5b8152939250505056fea2646970667358221220b398316bf4fd127ea3e222a6622b5fff9a076e869f71f3d44683b935ddb9e2dc64736f6c634300080c0033`,
  BytecodeLen: 2315,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:22:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:27:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:34:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Bidder": Bidder,
  "Buyer": Buyer,
  "Creator": Creator
  };
export const _APIs = {
  };
