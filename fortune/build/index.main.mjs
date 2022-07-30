// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
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
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0]
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
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  
  const v65 = stdlib.protect(ctc0, interact.amount, 'for Alice\'s interact field amount');
  const v66 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  
  const txn1 = await (ctc.sendrecv({
    args: [v65, v66],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v65, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v70, v71], secs: v73, time: v72, didSend: v31, from: v69 } = txn1;
      
      sim_r.txns.push({
        amt: v70,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v70, v71], secs: v73, time: v72, didSend: v31, from: v69 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v80], secs: v82, time: v81, didSend: v40, from: v79 } = txn2;
  ;
  const v85 = stdlib.protect(ctc0, await interact.decide(v80), {
    at: './index.rsh:48:48:application',
    fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:17:function exp)'],
    msg: 'decide',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v69, v70, v79, v85],
    evt_cnt: 1,
    funcNum: 2,
    lct: v81,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v87], secs: v89, time: v88, didSend: v50, from: v86 } = txn3;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v79,
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
    tys: [ctc1, ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v87], secs: v89, time: v88, didSend: v50, from: v86 } = txn3;
  ;
  const v90 = stdlib.addressEq(v69, v86);
  stdlib.assert(v90, {
    at: './index.rsh:51:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  ;
  return;
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v70, v71], secs: v73, time: v72, didSend: v31, from: v69 } = txn1;
  ;
  const v78 = stdlib.protect(ctc0, await interact.readFortune(), {
    at: './index.rsh:42:52:application',
    fs: ['at ./index.rsh:41:11:application call to [unknown function] (defined at: ./index.rsh:41:15:function exp)'],
    msg: 'readFortune',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v69, v70, v78],
    evt_cnt: 1,
    funcNum: 1,
    lct: v72,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:45:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v80], secs: v82, time: v81, didSend: v40, from: v79 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v80], secs: v82, time: v81, didSend: v40, from: v79 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v87], secs: v89, time: v88, didSend: v50, from: v86 } = txn3;
  ;
  const v90 = stdlib.addressEq(v69, v86);
  stdlib.assert(v90, {
    at: './index.rsh:51:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  ;
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAFAAECCCAmAgEAACI1ADEYQQFqKWRJIls1ASVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQACdSSQMQABKJBJEJDQBEkQ0BEkiEkw0AhIRRChkNQNJNQUXNf+ABJdO9xc0/xZQsDQDVwAgMQASRLEisgE0AyEEW7III7IQNANXKCCyB7NCAJ1IIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQRbNf5JNQUXNf2ABNUVGRQ0/RZQsDT/NP4WUDEAUChLAVcASGdIJDUBMgY1AkIAbEiBoI0GiAC1IjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JVs1/oAErNEfwzT/FlA0/hZQsDT/iACFMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v70",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v71",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v70",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v71",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
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
                "name": "v80",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
                "name": "v87",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
                "name": "v80",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
                "name": "v87",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
  Bytecode: `0x6080604052604051610a31380380610a31833981016040819052610022916101e7565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a160208101515161008c90341460076100ef565b6040805180820182526000602080830182815233808552868301515182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100e79260029290910190610118565b50505061027c565b816101145760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461012490610241565b90600052602060002090601f016020900481019282610146576000855561018c565b82601f1061015f57805160ff191683800117855561018c565b8280016001018555821561018c579182015b8281111561018c578251825591602001919060010190610171565b5061019892915061019c565b5090565b5b80821115610198576000815560010161019d565b604080519081016001600160401b03811182821017156101e157634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156101fa57600080fd5b6102026101b1565b835181526040601f198301121561021857600080fd5b6102206101b1565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061025557607f821691505b6020821081141561027657634e487b7160e01b600052602260045260246000fd5b50919050565b6107a68061028b6000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f11461005457806345f7039614610078578063832307571461008b578063873779a1146100a0578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b6100526100863660046105a0565b6100d6565b34801561009757600080fd5b50600154610065565b6100526100ae3660046105a0565b61025e565b3480156100bf57600080fd5b506100c86103f0565b60405161006f9291906105c3565b6100e6600260005414600d61048d565b610100813515806100f957506001548235145b600e61048d565b60008080556002805461011290610620565b80601f016020809104026020016040519081016040528092919081815260200182805461013e90610620565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a39190610671565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b833836040516101d69291906106e4565b60405180910390a16101ea3415600b61048d565b8051610202906001600160a01b03163314600c61048d565b80604001516001600160a01b03166108fc82602001519081150290604051600060405180830381858888f19350505050158015610243573d6000803e3d6000fd5b506000808055600181905561025a906002906104b2565b5050565b61026e600160005414600961048d565b6102888135158061028157506001548235145b600a61048d565b60008080556002805461029a90610620565b80601f01602080910402602001604051908101604052809291908181526020018280546102c690610620565b80156103135780601f106102e857610100808354040283529160200191610313565b820191906000526020600020905b8154815290600101906020018083116102f657829003601f168201915b505050505080602001905181019061032b919061070b565b90507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225338360405161035e9291906106e4565b60405180910390a16103723415600861048d565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b03908116808852898501518452338352600295869055436001558851808601919091529251838901529051168185015285518082039094018452608001909452815192936103ea93919201906104ef565b50505050565b60006060600054600280805461040590610620565b80601f016020809104026020016040519081016040528092919081815260200182805461043190610620565b801561047e5780601f106104535761010080835404028352916020019161047e565b820191906000526020600020905b81548152906001019060200180831161046157829003601f168201915b50505050509050915091509091565b8161025a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546104be90610620565b6000825580601f106104ce575050565b601f0160209004906000526020600020908101906104ec9190610573565b50565b8280546104fb90610620565b90600052602060002090601f01602090048101928261051d5760008555610563565b82601f1061053657805160ff1916838001178555610563565b82800160010185558215610563579182015b82811115610563578251825591602001919060010190610548565b5061056f929150610573565b5090565b5b8082111561056f5760008155600101610574565b60006040828403121561059a57600080fd5b50919050565b6000604082840312156105b257600080fd5b6105bc8383610588565b9392505050565b82815260006020604081840152835180604085015260005b818110156105f7578581018301518582016060015282016105db565b81811115610609576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061063457607f821691505b6020821081141561059a57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461066c57600080fd5b919050565b60006060828403121561068357600080fd5b6040516060810181811067ffffffffffffffff821117156106b457634e487b7160e01b600052604160045260246000fd5b6040526106c083610655565b8152602083015160208201526106d860408401610655565b60408201529392505050565b6001600160a01b0383168152606081016105bc602083018480358252602090810135910152565b60006040828403121561071d57600080fd5b6040516040810181811067ffffffffffffffff8211171561074e57634e487b7160e01b600052604160045260246000fd5b60405261075a83610655565b815260208301516020820152809150509291505056fea2646970667358221220ecd496b08da886ffa5a3c2a94bd90da8448d3e2dcfc0f8aa59e4873d2623437d64736f6c634300080c0033`,
  BytecodeLen: 2609,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:39:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:46:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:53:11:after expr stmt semicolon',
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
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
