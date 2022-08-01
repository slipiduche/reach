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
      1: [ctc0, ctc1, ctc1, ctc1],
      3: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc0, ctc1, ctc1]
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
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v264 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v265 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v265, v264],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:56:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v265, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v269, v270], secs: v272, time: v271, didSend: v77, from: v268 } = txn1;
      
      sim_r.txns.push({
        amt: v269,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v281 = stdlib.add(v271, v270);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v269, v270], secs: v272, time: v271, didSend: v77, from: v268 } = txn1;
  ;
  const v281 = stdlib.add(v271, v270);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v281],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v268, v269, v270, v281],
      evt_cnt: 0,
      funcNum: 2,
      lct: v271,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v382, time: v381, didSend: v216, from: v380 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v268,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v382, time: v381, didSend: v216, from: v380 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:46:29:application',
      fs: ['at ./index.rsh:45:9:application call to [unknown function] (defined at: ./index.rsh:45:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:44:28:function exp)', 'at ./index.rsh:61:61:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v287, time: v286, didSend: v86, from: v285 } = txn2;
    const v289 = stdlib.add(v269, v269);
    ;
    const v296 = stdlib.add(v286, v270);
    const v300 = stdlib.protect(ctc0, await interact.getFingers(), {
      at: './index.rsh:66:52:application',
      fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)'],
      msg: 'getFingers',
      who: 'Alice'
      });
    const v301 = stdlib.protect(ctc0, await interact.getGuess(), {
      at: './index.rsh:67:48:application',
      fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)'],
      msg: 'getGuess',
      who: 'Alice'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v268, v269, v270, v285, v289, v296, v300, v301],
      evt_cnt: 2,
      funcNum: 3,
      lct: v286,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:69:5:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v303, v304], secs: v306, time: v305, didSend: v98, from: v302 } = txn3;
        
        ;
        const v314 = stdlib.add(v305, v270);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v296],
      tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v268, v269, v270, v285, v289, v296],
        evt_cnt: 0,
        funcNum: 4,
        lct: v286,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v364, time: v363, didSend: v185, from: v362 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v285,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v364, time: v363, didSend: v185, from: v362 } = txn4;
      ;
      const v365 = stdlib.addressEq(v268, v362);
      const v366 = stdlib.addressEq(v285, v362);
      const v367 = v365 ? true : v366;
      stdlib.assert(v367, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:69:76:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:46:29:application',
        fs: ['at ./index.rsh:45:9:application call to [unknown function] (defined at: ./index.rsh:45:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:44:28:function exp)', 'at ./index.rsh:69:76:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v303, v304], secs: v306, time: v305, didSend: v98, from: v302 } = txn3;
      ;
      const v307 = stdlib.addressEq(v268, v302);
      stdlib.assert(v307, {
        at: './index.rsh:69:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v314 = stdlib.add(v305, v270);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 5,
        out_tys: [ctc0, ctc0],
        timeoutAt: ['time', v314],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v268, v269, v285, v289, v314],
          evt_cnt: 0,
          funcNum: 6,
          lct: v305,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v346, time: v345, didSend: v151, from: v344 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v268,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc2, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v346, time: v345, didSend: v151, from: v344 } = txn5;
        ;
        const v347 = stdlib.addressEq(v268, v344);
        const v348 = stdlib.addressEq(v285, v344);
        const v349 = v347 ? true : v348;
        stdlib.assert(v349, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:78:76:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:46:29:application',
          fs: ['at ./index.rsh:45:9:application call to [unknown function] (defined at: ./index.rsh:45:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:44:28:function exp)', 'at ./index.rsh:78:76:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v321, v322], secs: v324, time: v323, didSend: v110, from: v320 } = txn4;
        ;
        const v325 = stdlib.addressEq(v285, v320);
        stdlib.assert(v325, {
          at: './index.rsh:78:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v326 = stdlib.add(v303, v321);
        const v327 = stdlib.eq(v326, v304);
        const v328 = stdlib.eq(v326, v322);
        const v329 = v328 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
        const v331 = v328 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v332 = v327 ? v329 : v331;
        const v333 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:82:12:decimal', stdlib.UInt_max, '2'), v269);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v332), {
          at: './index.rsh:88:24:application',
          fs: ['at ./index.rsh:87:7:application call to [unknown function] (defined at: ./index.rsh:87:19:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        return;
        }
      
      }
    
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v269, v270], secs: v272, time: v271, didSend: v77, from: v268 } = txn1;
  ;
  const v281 = stdlib.add(v271, v270);
  stdlib.protect(ctc1, await interact.acceptWager(v269), {
    at: './index.rsh:59:25:application',
    fs: ['at ./index.rsh:58:9:application call to [unknown function] (defined at: ./index.rsh:58:13:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v268, v269, v270, v281],
    evt_cnt: 0,
    funcNum: 1,
    lct: v271,
    onlyIf: true,
    out_tys: [],
    pay: [v269, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v287, time: v286, didSend: v86, from: v285 } = txn2;
      
      const v289 = stdlib.add(v269, v269);
      sim_r.txns.push({
        amt: v269,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v296 = stdlib.add(v286, v270);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v281],
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v268, v269, v270, v281],
      evt_cnt: 0,
      funcNum: 2,
      lct: v271,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v382, time: v381, didSend: v216, from: v380 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v268,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v382, time: v381, didSend: v216, from: v380 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:46:29:application',
      fs: ['at ./index.rsh:45:9:application call to [unknown function] (defined at: ./index.rsh:45:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:44:28:function exp)', 'at ./index.rsh:61:61:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v287, time: v286, didSend: v86, from: v285 } = txn2;
    const v289 = stdlib.add(v269, v269);
    ;
    const v296 = stdlib.add(v286, v270);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 3,
      out_tys: [ctc0, ctc0],
      timeoutAt: ['time', v296],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v268, v269, v270, v285, v289, v296],
        evt_cnt: 0,
        funcNum: 4,
        lct: v286,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v364, time: v363, didSend: v185, from: v362 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v285,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v364, time: v363, didSend: v185, from: v362 } = txn4;
      ;
      const v365 = stdlib.addressEq(v268, v362);
      const v366 = stdlib.addressEq(v285, v362);
      const v367 = v365 ? true : v366;
      stdlib.assert(v367, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:69:76:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:46:29:application',
        fs: ['at ./index.rsh:45:9:application call to [unknown function] (defined at: ./index.rsh:45:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:44:28:function exp)', 'at ./index.rsh:69:76:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v303, v304], secs: v306, time: v305, didSend: v98, from: v302 } = txn3;
      ;
      const v307 = stdlib.addressEq(v268, v302);
      stdlib.assert(v307, {
        at: './index.rsh:69:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v314 = stdlib.add(v305, v270);
      const v318 = stdlib.protect(ctc0, await interact.getFingers(), {
        at: './index.rsh:75:52:application',
        fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:13:function exp)'],
        msg: 'getFingers',
        who: 'Bob'
        });
      const v319 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:76:48:application',
        fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:13:function exp)'],
        msg: 'getGuess',
        who: 'Bob'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v268, v269, v285, v289, v314, v318, v319],
        evt_cnt: 2,
        funcNum: 5,
        lct: v305,
        onlyIf: true,
        out_tys: [ctc0, ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:78:5:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v321, v322], secs: v324, time: v323, didSend: v110, from: v320 } = txn4;
          
          ;
          const v326 = stdlib.add(v303, v321);
          const v327 = stdlib.eq(v326, v304);
          const v328 = stdlib.eq(v326, v322);
          const v329 = v328 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          const v331 = v328 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v332 = v327 ? v329 : v331;
          const v333 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:82:12:decimal', stdlib.UInt_max, '2'), v269);
          sim_r.txns.push({
            kind: 'from',
            to: v285,
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
        timeoutAt: ['time', v314],
        tys: [ctc2, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v268, v269, v285, v289, v314],
          evt_cnt: 0,
          funcNum: 6,
          lct: v305,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v346, time: v345, didSend: v151, from: v344 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v268,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc2, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v346, time: v345, didSend: v151, from: v344 } = txn5;
        ;
        const v347 = stdlib.addressEq(v268, v344);
        const v348 = stdlib.addressEq(v285, v344);
        const v349 = v347 ? true : v348;
        stdlib.assert(v349, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:78:76:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:46:29:application',
          fs: ['at ./index.rsh:45:9:application call to [unknown function] (defined at: ./index.rsh:45:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:44:28:function exp)', 'at ./index.rsh:78:76:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v321, v322], secs: v324, time: v323, didSend: v110, from: v320 } = txn4;
        ;
        const v325 = stdlib.addressEq(v285, v320);
        stdlib.assert(v325, {
          at: './index.rsh:78:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v326 = stdlib.add(v303, v321);
        const v327 = stdlib.eq(v326, v304);
        const v328 = stdlib.eq(v326, v322);
        const v329 = v328 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
        const v331 = v328 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v332 = v327 ? v329 : v331;
        const v333 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:82:12:decimal', stdlib.UInt_max, '2'), v269);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v332), {
          at: './index.rsh:88:24:application',
          fs: ['at ./index.rsh:87:7:application call to [unknown function] (defined at: ./index.rsh:87:19:function exp)'],
          msg: 'seeOutcome',
          who: 'Bob'
          });
        
        return;
        }
      
      }
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAMAAEFCANQIAIGWCgwJgIBAAAiNQAxGEEDMilkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAAZpJJAxAALhJIQgMQABTIQgSRCQ0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gARhtKwMsDIGNAMhBVsPRDT/MQASNANXKCAxABIRRLEisgE0A4FIW7III7IQNP+yB7NCAlVIJDQBEkQ0BEkiEkw0AhIRRChkSTUDVyggNf9JNQVJIls1/iVbNf2ABLNR9480/hZQNP0WULAyBjQDIQVbDEQ0/zEAEkSxIrIBIQc0AyEGWwuyCCOyEDT/sgezQgH3SYEEDEAAUUghBDQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABJEnNPOwMgY0AyEJWw9ENANXACAxABI0/zEAEhFEsSKyATQDIQVbsggjshA0/7IHs0IBn0ghBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEGWzX+VzAgNf0hBVs1/Ek1BUkiWzX7JVs1+oAEpKXwiDT7FlA0+hZQsDIGNAMhCVsMRDT/MQASRDIGNAMhClsINfk0/zT+FlA0/VA0/BZQNPkWUChLAVcAWGdIJDUBMgY1AkIBNkkjDEAAtkkhBwxAAD5IIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyELWw9EsSKyATQDIQZbsggjshA0A1cAILIHs0IA0EgjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQZbNf4hCls1/YAEmouRdLAyBjQDIQtbDEQ0/kkINfw0/ogA+zIGNP0INfs0/zT+FlA0/RZQMQBQNPwWUDT7FlAoSwFXAGBnSCEENQEyBjUCQgB6SIGgjQaIAMQiNAESRDQESSISTDQCEhFESTUFSSJbNf8lWzX+gASs0R/DNP8WUDT+FlCwNP+IAJQyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCABsxGSQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 96,
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
                "name": "v269",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v270",
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
                "name": "v269",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v270",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
                "name": "v303",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v304",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
                "name": "v321",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v322",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
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
                "name": "v303",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v304",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
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
                "name": "v321",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v322",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620014323803806200143283398101604081905262000026916200024b565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f903414600762000144565b6020808301510151620000b39043620002ab565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013a92600292909101906200016e565b505050506200030f565b816200016a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017c90620002d2565b90600052602060002090601f016020900481019282620001a05760008555620001eb565b82601f10620001bb57805160ff1916838001178555620001eb565b82800160010185558215620001eb579182015b82811115620001eb578251825591602001919060010190620001ce565b50620001f9929150620001fd565b5090565b5b80821115620001f95760008155600101620001fe565b604080519081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025f57600080fd5b6200026962000214565b835181526040601f19830112156200028057600080fd5b6200028a62000214565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002cd57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e757607f821691505b602082108114156200030957634e487b7160e01b600052602260045260246000fd5b50919050565b611113806200031f6000396000f3fe6080604052600436106100845760003560e01c8063a7661d5411610056578063a7661d54146100ec578063ab53f2c6146100ff578063ad2d91d114610122578063aff5115f14610135578063c79800371461014857005b80631e93b0f11461008d5780632c10a159146100b15780637eea518c146100c457806383230757146100d757005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf366004610d90565b61015b565b61008b6100d2366004610d90565b6103c6565b3480156100e357600080fd5b5060015461009e565b61008b6100fa366004610d90565b610544565b34801561010b57600080fd5b506101146106df565b6040516100a8929190610da8565b61008b610130366004610e17565b61077c565b61008b610143366004610e17565b610974565b61008b610156366004610d90565b610afe565b61016b6001600054146009610c95565b6101858135158061017e57506001548235145b600a610c95565b60008080556002805461019790610e3a565b80601f01602080910402602001604051908101604052809291908181526020018280546101c390610e3a565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b50505050508060200190518101906102289190610e8b565b9050610247604051806040016040528060008152602001600081525090565b61025882606001514310600b610c95565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13384604051610289929190610f04565b60405180910390a160208201516102a09080610f57565b815260208201516102b49034146008610c95565b60408201516102c39043610f57565b8160200181815250506103176040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b82516001600160a01b0390811680835260208086015181850190815260408088015181870190815233606080890191825289516080808b019182528b88015160a0808d019182526003600055436001558751998a019a909a529651958801959095529251908601525190951690830152925191810191909152905160c082015260e0015b604051602081830303815290604052600290805190602001906103bf929190610cba565b5050505050565b6103d6600160005414600d610c95565b6103f0813515806103e957506001548235145b600e610c95565b60008080556002805461040290610e3a565b80601f016020809104026020016040519081016040528092919081815260200182805461042e90610e3a565b801561047b5780601f106104505761010080835404028352916020019161047b565b820191906000526020600020905b81548152906001019060200180831161045e57829003601f168201915b50505050508060200190518101906104939190610e8b565b90506104a78160600151431015600f610c95565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516104d8929190610f04565b60405180910390a16104ec3415600c610c95565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610529573d6000803e3d6000fd5b506000808055600181905561054090600290610d3e565b5050565b6105546003600054146017610c95565b61056e8135158061056757506001548235145b6018610c95565b60008080556002805461058090610e3a565b80601f01602080910402602001604051908101604052809291908181526020018280546105ac90610e3a565b80156105f95780601f106105ce576101008083540402835291602001916105f9565b820191906000526020600020905b8154815290600101906020018083116105dc57829003601f168201915b50505050508060200190518101906106119190610f6f565b90506106258160a001514310156019610c95565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051610656929190610f04565b60405180910390a161066a34156015610c95565b805161069e906001600160a01b031633146106945760608201516001600160a01b03163314610697565b60015b6016610c95565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610529573d6000803e3d6000fd5b6000606060005460028080546106f490610e3a565b80601f016020809104026020016040519081016040528092919081815260200182805461072090610e3a565b801561076d5780601f106107425761010080835404028352916020019161076d565b820191906000526020600020905b81548152906001019060200180831161075057829003601f168201915b50505050509050915091509091565b61078c6003600054146012610c95565b6107a68135158061079f57506001548235145b6013610c95565b6000808055600280546107b890610e3a565b80601f01602080910402602001604051908101604052809291908181526020018280546107e490610e3a565b80156108315780601f1061080657610100808354040283529160200191610831565b820191906000526020600020905b81548152906001019060200180831161081457829003601f168201915b50505050508060200190518101906108499190610f6f565b90506108616040518060200160405280600081525090565b6108728260a0015143106014610c95565b7f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d163433846040516108a3929190611003565b60405180910390a16108b734156010610c95565b81516108cf906001600160a01b031633146011610c95565b60408201516108de9043610f57565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c516001600160a01b03908116808c528e89015188528e860151821687528e84015185528d5183526005909955436001558b519788019890985294519986019990995291519094169383019390935291519481019490945251908301529060c00161039b565b610984600560005414601c610c95565b61099e8135158061099757506001548235145b601d610c95565b6000808055600280546109b090610e3a565b80601f01602080910402602001604051908101604052809291908181526020018280546109dc90610e3a565b8015610a295780601f106109fe57610100808354040283529160200191610a29565b820191906000526020600020905b815481529060010190602001808311610a0c57829003601f168201915b5050505050806020019051810190610a419190611034565b9050610a5481608001514310601e610c95565b7f5371140060fe309c492663b0377a291d12d8d92a35dabb2b67a32d0ade04bb663383604051610a85929190611003565b60405180910390a1610a993415601a610c95565b6040810151610ab4906001600160a01b03163314601b610c95565b80604001516001600160a01b03166108fc82602001516002610ad691906110be565b6040518115909202916000818181858888f19350505050158015610529573d6000803e3d6000fd5b610b0e6005600054146021610c95565b610b2881351580610b2157506001548235145b6022610c95565b600080805560028054610b3a90610e3a565b80601f0160208091040260200160405190810160405280929190818152602001828054610b6690610e3a565b8015610bb35780601f10610b8857610100808354040283529160200191610bb3565b820191906000526020600020905b815481529060010190602001808311610b9657829003601f168201915b5050505050806020019051810190610bcb9190611034565b9050610bdf81608001514310156023610c95565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610c10929190610f04565b60405180910390a1610c243415601f610c95565b8051610c58906001600160a01b03163314610c4e5760408201516001600160a01b03163314610c51565b60015b6020610c95565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610529573d6000803e3d6000fd5b816105405760405163100960cb60e01b81526004810182905260240160405180910390fd5b828054610cc690610e3a565b90600052602060002090601f016020900481019282610ce85760008555610d2e565b82601f10610d0157805160ff1916838001178555610d2e565b82800160010185558215610d2e579182015b82811115610d2e578251825591602001919060010190610d13565b50610d3a929150610d7b565b5090565b508054610d4a90610e3a565b6000825580601f10610d5a575050565b601f016020900490600052602060002090810190610d789190610d7b565b50565b5b80821115610d3a5760008155600101610d7c565b600060408284031215610da257600080fd5b50919050565b82815260006020604081840152835180604085015260005b81811015610ddc57858101830151858201606001528201610dc0565b81811115610dee576000606083870101525b50601f01601f191692909201606001949350505050565b600060608284031215610da257600080fd5b600060608284031215610e2957600080fd5b610e338383610e05565b9392505050565b600181811c90821680610e4e57607f821691505b60208210811415610da257634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610e8657600080fd5b919050565b600060808284031215610e9d57600080fd5b6040516080810181811067ffffffffffffffff82111715610ece57634e487b7160e01b600052604160045260246000fd5b604052610eda83610e6f565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610f3257600080fd5b80604085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610f6a57610f6a610f41565b500190565b600060c08284031215610f8157600080fd5b60405160c0810181811067ffffffffffffffff82111715610fb257634e487b7160e01b600052604160045260246000fd5b604052610fbe83610e6f565b81526020830151602082015260408301516040820152610fe060608401610e6f565b60608201526080830151608082015260a083015160a08201528091505092915050565b6001600160a01b038316815260808101610e3360208301848035825260208082013590830152604090810135910152565b600060a0828403121561104657600080fd5b60405160a0810181811067ffffffffffffffff8211171561107757634e487b7160e01b600052604160045260246000fd5b60405261108383610e6f565b81526020830151602082015261109b60408401610e6f565b604082015260608301516060820152608083015160808201528091505092915050565b60008160001904831182151516156110d8576110d8610f41565b50029056fea264697066735822122084237c8c8c1e188f746d54caf800679b019c32f0ae7ceae852b3c663888dd75d64736f6c634300080c0033`,
  BytecodeLen: 5170,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:57:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:61:61:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:64:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:69:76:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:72:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:78:76:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:83:11:after expr stmt semicolon',
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
