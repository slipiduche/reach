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
      4: [ctc0, ctc1, ctc0],
      5: [ctc0, ctc1, ctc0]
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
  
  
  const v85 = stdlib.protect(ctc0, interact.amount, 'for Alice\'s interact field amount');
  const v86 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  
  const txn1 = await (ctc.sendrecv({
    args: [v85, v86],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:30:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v85, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v90, v91], secs: v93, time: v92, didSend: v31, from: v89 } = txn1;
      
      sim_r.txns.push({
        amt: v90,
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
  const {data: [v90, v91], secs: v93, time: v92, didSend: v31, from: v89 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v98, time: v97, didSend: v35, from: v96 } = txn2;
  ;
  let v99 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v100 = v97;
  
  while (await (async () => {
    const v110 = stdlib.eq(v99, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    
    return v110;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v115], secs: v117, time: v116, didSend: v51, from: v114 } = txn3;
    ;
    const v118 = stdlib.addressEq(v96, v114);
    stdlib.assert(v118, {
      at: './index.rsh:45:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v121 = stdlib.protect(ctc0, await interact.decide(v115), {
      at: './index.rsh:48:50:application',
      fs: ['at ./index.rsh:47:15:application call to [unknown function] (defined at: ./index.rsh:47:19:function exp)'],
      msg: 'decide',
      who: 'Alice'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v89, v90, v96, v121],
      evt_cnt: 1,
      funcNum: 4,
      lct: v116,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:50:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v123], secs: v125, time: v124, didSend: v61, from: v122 } = txn4;
        
        ;
        const cv99 = v123;
        const cv100 = v124;
        
        await (async () => {
          const v99 = cv99;
          const v100 = cv100;
          
          if (await (async () => {
            const v110 = stdlib.eq(v99, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            
            return v110;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v96,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc0, ctc1, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v123], secs: v125, time: v124, didSend: v61, from: v122 } = txn4;
    ;
    const v126 = stdlib.addressEq(v89, v122);
    stdlib.assert(v126, {
      at: './index.rsh:50:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const cv99 = v123;
    const cv100 = v124;
    
    v99 = cv99;
    v100 = cv100;
    
    continue;
    
    
    
    }
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
  const {data: [v90, v91], secs: v93, time: v92, didSend: v31, from: v89 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v89, v90],
    evt_cnt: 0,
    funcNum: 1,
    lct: v92,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v98, time: v97, didSend: v35, from: v96 } = txn2;
      
      ;
      const v99 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v100 = v97;
      
      if (await (async () => {
        const v110 = stdlib.eq(v99, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v110;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v96,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v98, time: v97, didSend: v35, from: v96 } = txn2;
  ;
  let v99 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v100 = v97;
  
  while (await (async () => {
    const v110 = stdlib.eq(v99, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    
    return v110;})()) {
    const v113 = stdlib.protect(ctc0, await interact.readFortune(), {
      at: './index.rsh:42:54:application',
      fs: ['at ./index.rsh:41:13:application call to [unknown function] (defined at: ./index.rsh:41:17:function exp)'],
      msg: 'readFortune',
      who: 'Bob'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v89, v90, v96, v113],
      evt_cnt: 1,
      funcNum: 3,
      lct: v100,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:45:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v115], secs: v117, time: v116, didSend: v51, from: v114 } = txn3;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc0, ctc1, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v115], secs: v117, time: v116, didSend: v51, from: v114 } = txn3;
    ;
    const v118 = stdlib.addressEq(v96, v114);
    stdlib.assert(v118, {
      at: './index.rsh:45:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v123], secs: v125, time: v124, didSend: v61, from: v122 } = txn4;
    ;
    const v126 = stdlib.addressEq(v89, v122);
    stdlib.assert(v126, {
      at: './index.rsh:50:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const cv99 = v123;
    const cv100 = v124;
    
    v99 = cv99;
    v100 = cv100;
    
    continue;
    
    
    
    }
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAGAAEEBSAIJgIBAAAiNQAxGEEB6ilkSSJbNQEhBVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJgQMMQACmSSQMQABHJBJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQUXNf6ABPmLr3g0/hZQsDT/MQASRDT/NAMhBFs0A1coIDT+MgZCAOBIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEEWzX+VyggNf1JNQUXNfyABNQMbNY0/BZQsDT9MQASRDT/NP4WUDT9UChLAVcASGdIJTUBMgY1AkIA4UkjDEAAMCMSRCM0ARJENARJIhJMNAISEUQoZDUDgASai5F0sDQDVwAgNAMhBFsxACMyBkIAUUiBoI0GiAD1IjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/IQVbNf6ABKzRH8M0/xZQNP4WULA0/4gAxDEANP8WUChLAVcAKGdIIzUBMgY1AkIAWjX/Nf41/TX8Nfs0/iMSQQAbNPs0/BZQNP1QKEsBVwBIZ0gkNQEyBjUCQgAusSKyATT8sggjshA0/bIHs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
                "name": "v90",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v91",
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
                "name": "v90",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v91",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
                "name": "v115",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
                "name": "v123",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
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
                "name": "v115",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
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
                "name": "v123",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000d5438038062000d548339810160408190526200002691620001ff565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a1602081015151620000929034146007620000f8565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000ef926002929091019062000122565b5050506200029c565b816200011e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000130906200025f565b90600052602060002090601f0160209004810192826200015457600085556200019f565b82601f106200016f57805160ff19168380011785556200019f565b828001600101855582156200019f579182015b828111156200019f57825182559160200191906001019062000182565b50620001ad929150620001b1565b5090565b5b80821115620001ad5760008155600101620001b2565b604080519081016001600160401b0381118282101715620001f957634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200021357600080fd5b6200021d620001c8565b835181526040601f19830112156200023457600080fd5b6200023e620001c8565b60208581015182526040909501518582015293810193909352509092915050565b600181811c908216806200027457607f821691505b602082108114156200029657634e487b7160e01b600052602260045260246000fd5b50919050565b610aa880620002ac6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a159146100835780638323075714610096578063a209ad4e146100ab578063ab53f2c6146100be578063f4cedab0146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610865565b6100f4565b3480156100a257600080fd5b50600154610070565b61005d6100b9366004610865565b610251565b3480156100ca57600080fd5b506100d36103ca565b60405161007a929190610888565b61005d6100ef366004610865565b610467565b610104600160005414600961061c565b61011e8135158061011757506001548235145b600a61061c565b600080805560028054610130906108e5565b80601f016020809104026020016040519081016040528092919081815260200182805461015c906108e5565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610936565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101f492919061099b565b60405180910390a16102083415600861061c565b610210610733565b815181516001600160a01b0390911690526020808301518251820152815133604090910152808201805160019052514391015261024c81610645565b505050565b610261600560005414601161061c565b61027b8135158061027457506001548235145b601261061c565b60008080556002805461028d906108e5565b80601f01602080910402602001604051908101604052809291908181526020018280546102b9906108e5565b80156103065780601f106102db57610100808354040283529160200191610306565b820191906000526020600020905b8154815290600101906020018083116102e957829003601f168201915b505050505080602001905181019061031e91906109d8565b90507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03383604051610351929190610a4b565b60405180910390a16103653415600f61061c565b805161037d906001600160a01b03163314601061061c565b610385610733565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091528082018051858301359052514391015261024c81610645565b6000606060005460028080546103df906108e5565b80601f016020809104026020016040519081016040528092919081815260200182805461040b906108e5565b80156104585780601f1061042d57610100808354040283529160200191610458565b820191906000526020600020905b81548152906001019060200180831161043b57829003601f168201915b50505050509050915091509091565b610477600460005414600d61061c565b6104918135158061048a57506001548235145b600e61061c565b6000808055600280546104a3906108e5565b80601f01602080910402602001604051908101604052809291908181526020018280546104cf906108e5565b801561051c5780601f106104f15761010080835404028352916020019161051c565b820191906000526020600020905b8154815290600101906020018083116104ff57829003601f168201915b505050505080602001905181019061053491906109d8565b90507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc13383604051610567929190610a4b565b60405180910390a161057b3415600b61061c565b6040810151610596906001600160a01b03163314600c61061c565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b03908116808852898501518452898901518216835260059095554360015587518085019590955291518488015251168284015284518083039093018352608090910190935280519192610616926002929091019061077e565b50505050565b816106415760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b602081015151600114156106d6576040805160608082018352600080835260208084018281528486018381528751516001600160a01b03908116808852895185015184528951890151821683526004909555436001558751808501959095529151848801525116828401528451808303909301835260809091019093528051919261024c926002929091019061077e565b805160408082015160209092015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610719573d6000803e3d6000fd5b506000808055600181905561073090600290610802565b50565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610779604051806040016040528060008152602001600081525090565b905290565b82805461078a906108e5565b90600052602060002090601f0160209004810192826107ac57600085556107f2565b82601f106107c557805160ff19168380011785556107f2565b828001600101855582156107f2579182015b828111156107f25782518255916020019190600101906107d7565b506107fe929150610838565b5090565b50805461080e906108e5565b6000825580601f1061081e575050565b601f01602090049060005260206000209081019061073091905b5b808211156107fe5760008155600101610839565b60006040828403121561085f57600080fd5b50919050565b60006040828403121561087757600080fd5b610881838361084d565b9392505050565b82815260006020604081840152835180604085015260005b818110156108bc578581018301518582016060015282016108a0565b818111156108ce576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806108f957607f821691505b6020821081141561085f57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461093157600080fd5b919050565b60006040828403121561094857600080fd5b6040516040810181811067ffffffffffffffff8211171561097957634e487b7160e01b600052604160045260246000fd5b6040526109858361091a565b8152602083015160208201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146109c957600080fd5b80604085015250509392505050565b6000606082840312156109ea57600080fd5b6040516060810181811067ffffffffffffffff82111715610a1b57634e487b7160e01b600052604160045260246000fd5b604052610a278361091a565b815260208301516020820152610a3f6040840161091a565b60408201529392505050565b6001600160a01b03831681526060810161088160208301848035825260209081013591015256fea2646970667358221220be1c9aa7621f0b259ea624e85eac6b1289b18e5797715a14f0bf03168342196d64736f6c634300080c0033`,
  BytecodeLen: 3412,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:32:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:69:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:40:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:46:5:after expr stmt',
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
