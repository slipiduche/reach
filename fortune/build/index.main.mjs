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
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1]
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
  
  
  const v184 = stdlib.protect(ctc0, interact.amount, 'for Alice\'s interact field amount');
  const v185 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  
  const txn1 = await (ctc.sendrecv({
    args: [v184, v185],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:35:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v184, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v189, v190], secs: v192, time: v191, didSend: v31, from: v188 } = txn1;
      
      sim_r.txns.push({
        amt: v189,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v201 = stdlib.add(v191, v190);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v189, v190], secs: v192, time: v191, didSend: v31, from: v188 } = txn1;
  ;
  const v201 = stdlib.add(v191, v190);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v201],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v188, v189, v190, v201],
      evt_cnt: 0,
      funcNum: 2,
      lct: v191,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v294, time: v293, didSend: v152, from: v292 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v188,
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
    const {data: [], secs: v294, time: v293, didSend: v152, from: v292 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:26:29:application',
      fs: ['at ./index.rsh:25:9:application call to [unknown function] (defined at: ./index.rsh:25:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:24:28:function exp)', 'at ./index.rsh:39:62:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v205, time: v204, didSend: v35, from: v203 } = txn2;
    ;
    let v206 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v207 = v204;
    let v214 = v189;
    
    while (await (async () => {
      const v217 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v217;})()) {
      const v224 = stdlib.add(v207, v190);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc0],
        timeoutAt: ['time', v224],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v188, v189, v190, v203, v214, v224],
          evt_cnt: 0,
          funcNum: 5,
          lct: v207,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v270, time: v269, didSend: v115, from: v268 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v188,
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
        const {data: [], secs: v270, time: v269, didSend: v115, from: v268 } = txn4;
        ;
        const v271 = stdlib.addressEq(v188, v268);
        const v272 = stdlib.addressEq(v203, v268);
        const v273 = v271 ? true : v272;
        stdlib.assert(v273, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:52:71:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:26:29:application',
          fs: ['at ./index.rsh:25:9:application call to [unknown function] (defined at: ./index.rsh:25:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:24:28:function exp)', 'at ./index.rsh:52:71:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v230], secs: v232, time: v231, didSend: v51, from: v229 } = txn3;
        ;
        const v233 = stdlib.addressEq(v203, v229);
        stdlib.assert(v233, {
          at: './index.rsh:52:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v240 = stdlib.add(v231, v190);
        const v244 = stdlib.protect(ctc0, await interact.decide(v230), {
          at: './index.rsh:57:50:application',
          fs: ['at ./index.rsh:56:15:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
          msg: 'decide',
          who: 'Alice'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v188, v189, v190, v203, v214, v240, v244],
          evt_cnt: 1,
          funcNum: 6,
          lct: v231,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:59:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v246], secs: v248, time: v247, didSend: v61, from: v245 } = txn4;
            
            ;
            const cv206 = v246;
            const cv207 = v247;
            const cv214 = v214;
            
            await (async () => {
              const v206 = cv206;
              const v207 = cv207;
              const v214 = cv214;
              
              if (await (async () => {
                const v217 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                
                return v217;})()) {
                const v224 = stdlib.add(v207, v190);
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'from',
                  to: v203,
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
          timeoutAt: ['time', v240],
          tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v188, v189, v190, v203, v214, v240],
            evt_cnt: 0,
            funcNum: 7,
            lct: v231,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v252, time: v251, didSend: v81, from: v250 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v203,
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
          const {data: [], secs: v252, time: v251, didSend: v81, from: v250 } = txn5;
          ;
          const v253 = stdlib.addressEq(v188, v250);
          const v254 = stdlib.addressEq(v203, v250);
          const v255 = v253 ? true : v254;
          stdlib.assert(v255, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:59:74:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:26:29:application',
            fs: ['at ./index.rsh:25:9:application call to [unknown function] (defined at: ./index.rsh:25:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:24:28:function exp)', 'at ./index.rsh:59:74:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v246], secs: v248, time: v247, didSend: v61, from: v245 } = txn4;
          ;
          const v249 = stdlib.addressEq(v188, v245);
          stdlib.assert(v249, {
            at: './index.rsh:59:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const cv206 = v246;
          const cv207 = v247;
          const cv214 = v214;
          
          v206 = cv206;
          v207 = cv207;
          v214 = cv214;
          
          continue;}
        
        }
      
      }
    ;
    return;
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
  const {data: [v189, v190], secs: v192, time: v191, didSend: v31, from: v188 } = txn1;
  ;
  const v201 = stdlib.add(v191, v190);
  const txn2 = await (ctc.sendrecv({
    args: [v188, v189, v190, v201],
    evt_cnt: 0,
    funcNum: 1,
    lct: v191,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v205, time: v204, didSend: v35, from: v203 } = txn2;
      
      ;
      const v206 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v207 = v204;
      const v214 = v189;
      
      if (await (async () => {
        const v217 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v217;})()) {
        const v224 = stdlib.add(v207, v190);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v203,
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
    timeoutAt: ['time', v201],
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v188, v189, v190, v201],
      evt_cnt: 0,
      funcNum: 2,
      lct: v191,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v294, time: v293, didSend: v152, from: v292 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v188,
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
    const {data: [], secs: v294, time: v293, didSend: v152, from: v292 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:26:29:application',
      fs: ['at ./index.rsh:25:9:application call to [unknown function] (defined at: ./index.rsh:25:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:24:28:function exp)', 'at ./index.rsh:39:62:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v205, time: v204, didSend: v35, from: v203 } = txn2;
    ;
    let v206 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v207 = v204;
    let v214 = v189;
    
    while (await (async () => {
      const v217 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v217;})()) {
      const v224 = stdlib.add(v207, v190);
      const v228 = stdlib.protect(ctc0, await interact.readFortune(), {
        at: './index.rsh:49:54:application',
        fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:17:function exp)'],
        msg: 'readFortune',
        who: 'Bob'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v188, v189, v190, v203, v214, v224, v228],
        evt_cnt: 1,
        funcNum: 4,
        lct: v207,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:52:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v230], secs: v232, time: v231, didSend: v51, from: v229 } = txn3;
          
          ;
          const v240 = stdlib.add(v231, v190);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v224],
        tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v188, v189, v190, v203, v214, v224],
          evt_cnt: 0,
          funcNum: 5,
          lct: v207,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v270, time: v269, didSend: v115, from: v268 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v188,
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
        const {data: [], secs: v270, time: v269, didSend: v115, from: v268 } = txn4;
        ;
        const v271 = stdlib.addressEq(v188, v268);
        const v272 = stdlib.addressEq(v203, v268);
        const v273 = v271 ? true : v272;
        stdlib.assert(v273, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:52:71:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:26:29:application',
          fs: ['at ./index.rsh:25:9:application call to [unknown function] (defined at: ./index.rsh:25:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:24:28:function exp)', 'at ./index.rsh:52:71:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v230], secs: v232, time: v231, didSend: v51, from: v229 } = txn3;
        ;
        const v233 = stdlib.addressEq(v203, v229);
        stdlib.assert(v233, {
          at: './index.rsh:52:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v240 = stdlib.add(v231, v190);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc0],
          timeoutAt: ['time', v240],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v188, v189, v190, v203, v214, v240],
            evt_cnt: 0,
            funcNum: 7,
            lct: v231,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v252, time: v251, didSend: v81, from: v250 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v203,
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
          const {data: [], secs: v252, time: v251, didSend: v81, from: v250 } = txn5;
          ;
          const v253 = stdlib.addressEq(v188, v250);
          const v254 = stdlib.addressEq(v203, v250);
          const v255 = v253 ? true : v254;
          stdlib.assert(v255, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:59:74:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:26:29:application',
            fs: ['at ./index.rsh:25:9:application call to [unknown function] (defined at: ./index.rsh:25:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:24:28:function exp)', 'at ./index.rsh:59:74:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v246], secs: v248, time: v247, didSend: v61, from: v245 } = txn4;
          ;
          const v249 = stdlib.addressEq(v188, v245);
          stdlib.assert(v249, {
            at: './index.rsh:59:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const cv206 = v246;
          const cv207 = v247;
          const cv214 = v214;
          
          v206 = cv206;
          v207 = cv207;
          v214 = cv214;
          
          continue;}
        
        }
      
      }
    ;
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiALAAEHBVhQICgCCDAmAgEAACI1ADEYQQNQKWRJIls1ASEJWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBBAxAAY1JgQYMQACwSSQMQABSJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABOIbs6mwMgY0AyEEWw9ENANXACAxABI0/zEAEhFEsSKyATQDIQVbsggjshA0/7IHs0ICc0gkNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BRc1/oAEcO3vejT+FlCwMgY0AyEEWwxENP8xABJENP80AyEGWzQDIQdbNANXMCA0/jIGNAMhBVtCAcVJJQxAAFBIJTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABMyZklywMgY0AyEEWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDIQVbsggjshA0/7IHs0IBxUglNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEGWzX+IQdbNf1XMCA1/CEFWzX7STUFFzX6gAT5i694NPoWULAyBjQDIQRbDEQ0/DEAEkQyBjT9CDX5NP80/hZQNP0WUDT8UDT7FlA0+RZQKEsBVwBgZ0gkNQEyBjUCQgFgSSMMQACJSSEIDEAAQSEIEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQpbD0SxIrIBNAMhBluyCCOyEDQDVwAgsgezQgD3SCM0ARJENARJIhJMNAISEUQoZEk1AyEGWzX/gASai5F0sDIGNAMhClsMRDQDVwAgNP80AyEHWzEAIzIGNP9CAGBIgaCNBogBGyI0ARJENARJIhJMNAISEURJNQVJIls1/yEJWzX+gASs0R/DNP8WUDT+FlCwNP+IAOoyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCAHE1/zX+Nf01/DX7Nfo1+TT9IxJBAC40/jT7CDX4NPk0+hZQNPsWUDT8UDT/FlA0+BZQKEsBVwBgZ0glNQEyBjUCQgAusSKyATT6sggjshA0/LIHs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEIMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
                "name": "v189",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v190",
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
                "name": "v189",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v190",
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
                "name": "v230",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v246",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
    "name": "_reach_e7",
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
                "name": "v230",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v246",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200149c3803806200149c83398101604081905262000026916200024b565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f903414600762000144565b6020808301510151620000b39043620002ab565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013a92600292909101906200016e565b505050506200030f565b816200016a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017c90620002d2565b90600052602060002090601f016020900481019282620001a05760008555620001eb565b82601f10620001bb57805160ff1916838001178555620001eb565b82800160010185558215620001eb579182015b82811115620001eb578251825591602001919060010190620001ce565b50620001f9929150620001fd565b5090565b5b80821115620001f95760008155600101620001fe565b604080519081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025f57600080fd5b6200026962000214565b835181526040601f19830112156200028057600080fd5b6200028a62000214565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002cd57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e757607f821691505b602082108114156200030957634e487b7160e01b600052602260045260246000fd5b50919050565b61117d806200031f6000396000f3fe6080604052600436106100845760003560e01c80638e314769116100565780638e314769146100ec578063980b6eac146100ff578063a209ad4e14610112578063ab53f2c614610125578063bf2c5b241461014857005b80631e93b0f11461008d5780632c10a159146100b15780637eea518c146100c457806383230757146100d757005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf366004610e76565b61015b565b61008b6100d2366004610e76565b6102df565b3480156100e357600080fd5b5060015461009e565b61008b6100fa366004610e76565b61045d565b61008b61010d366004610e76565b6105f4565b61008b610120366004610e76565b610798565b34801561013157600080fd5b5061013a6109a8565b6040516100a8929190610e99565b61008b610156366004610e76565b610a45565b61016b6001600054146009610be0565b6101858135158061017e57506001548235145b600a610be0565b60008080556002805461019790610ef6565b80601f01602080910402602001604051908101604052809291908181526020018280546101c390610ef6565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b50505050508060200190518101906102289190610f47565b905061023b81606001514310600b610be0565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161026c929190610fc0565b60405180910390a161028034156008610be0565b610288610d2f565b815181516001600160a01b03909116905260208083018051835183015260408085015184518201528351336060909101528284018051600190528051439401939093529051915101526102da81610c05565b505050565b6102ef600160005414600d610be0565b6103098135158061030257506001548235145b600e610be0565b60008080556002805461031b90610ef6565b80601f016020809104026020016040519081016040528092919081815260200182805461034790610ef6565b80156103945780601f1061036957610100808354040283529160200191610394565b820191906000526020600020905b81548152906001019060200180831161037757829003601f168201915b50505050508060200190518101906103ac9190610f47565b90506103c08160600151431015600f610be0565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516103f1929190610fc0565b60405180910390a16104053415600c610be0565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610442573d6000803e3d6000fd5b506000808055600181905561045990600290610d88565b5050565b61046d6005600054146017610be0565b6104878135158061048057506001548235145b6018610be0565b60008080556002805461049990610ef6565b80601f01602080910402602001604051908101604052809291908181526020018280546104c590610ef6565b80156105125780601f106104e757610100808354040283529160200191610512565b820191906000526020600020905b8154815290600101906020018083116104f557829003601f168201915b505050505080602001905181019061052a9190611091565b905061053e8160a001514310156019610be0565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161056f929190610fc0565b60405180910390a161058334156015610be0565b80516105b7906001600160a01b031633146105ad5760608201516001600160a01b031633146105b0565b60015b6016610be0565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610442573d6000803e3d6000fd5b610604600760005414601c610be0565b61061e8135158061061757506001548235145b601d610be0565b60008080556002805461063090610ef6565b80601f016020809104026020016040519081016040528092919081815260200182805461065c90610ef6565b80156106a95780601f1061067e576101008083540402835291602001916106a9565b820191906000526020600020905b81548152906001019060200180831161068c57829003601f168201915b50505050508060200190518101906106c19190611091565b90506106d48160a001514310601e610be0565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c33836040516107059291906110ad565b60405180910390a16107193415601a610be0565b8051610731906001600160a01b03163314601b610be0565b610739610d2f565b815181516001600160a01b0391821690526020808401518351820152604080850151845182015260608086015185519416930192909252808301805186830135905280514392019190915260808401519051909101526102da81610c05565b6107a86005600054146012610be0565b6107c2813515806107bb57506001548235145b6013610be0565b6000808055600280546107d490610ef6565b80601f016020809104026020016040519081016040528092919081815260200182805461080090610ef6565b801561084d5780601f106108225761010080835404028352916020019161084d565b820191906000526020600020905b81548152906001019060200180831161083057829003601f168201915b50505050508060200190518101906108659190611091565b905061087d6040518060200160405280600081525090565b61088e8260a0015143106014610be0565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc033846040516108bf9291906110ad565b60405180910390a16108d334156010610be0565b60608201516108ee906001600160a01b031633146011610be0565b60408201516108fd90436110d4565b81526040805160c081018252600080825260208083018281528385018381526060808601858152608080880187815260a089018881528c516001600160a01b039081168b528d8901519097528c8b0151909552928b0151909416905291880151909152855190526007909155436001559151909161097d918391016110fa565b604051602081830303815290604052600290805190602001906109a1929190610dc5565b5050505050565b6000606060005460028080546109bd90610ef6565b80601f01602080910402602001604051908101604052809291908181526020018280546109e990610ef6565b8015610a365780601f10610a0b57610100808354040283529160200191610a36565b820191906000526020600020905b815481529060010190602001808311610a1957829003601f168201915b50505050509050915091509091565b610a556007600054146021610be0565b610a6f81351580610a6857506001548235145b6022610be0565b600080805560028054610a8190610ef6565b80601f0160208091040260200160405190810160405280929190818152602001828054610aad90610ef6565b8015610afa5780601f10610acf57610100808354040283529160200191610afa565b820191906000526020600020905b815481529060010190602001808311610add57829003601f168201915b5050505050806020019051810190610b129190611091565b9050610b268160a001514310156023610be0565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610b57929190610fc0565b60405180910390a1610b6b3415601f610be0565b8051610b9f906001600160a01b03163314610b955760608201516001600160a01b03163314610b98565b60015b6020610be0565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610442573d6000803e3d6000fd5b816104595760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815260208201515160011415610cec578151604001516020808401510151610c3a91906110d4565b81526040805160c0810182526000808252602080830182815283850183815260608086018581526080870186815260a088018781528b51516001600160a01b039081168a528c518801519096528b518a01519094528a5190920151909316909252878301518601519091528551905260059091554360015591519091610cc2918391016110fa565b60405160208183030381529060405260029080519060200190610ce6929190610dc5565b50505050565b815160608101516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610442573d6000803e3d6000fd5b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001610d8360405180606001604052806000815260200160008152602001600081525090565b905290565b508054610d9490610ef6565b6000825580601f10610da4575050565b601f016020900490600052602060002090810190610dc29190610e49565b50565b828054610dd190610ef6565b90600052602060002090601f016020900481019282610df35760008555610e39565b82601f10610e0c57805160ff1916838001178555610e39565b82800160010185558215610e39579182015b82811115610e39578251825591602001919060010190610e1e565b50610e45929150610e49565b5090565b5b80821115610e455760008155600101610e4a565b600060408284031215610e7057600080fd5b50919050565b600060408284031215610e8857600080fd5b610e928383610e5e565b9392505050565b82815260006020604081840152835180604085015260005b81811015610ecd57858101830151858201606001528201610eb1565b81811115610edf576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610f0a57607f821691505b60208210811415610e7057634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610f4257600080fd5b919050565b600060808284031215610f5957600080fd5b6040516080810181811067ffffffffffffffff82111715610f8a57634e487b7160e01b600052604160045260246000fd5b604052610f9683610f2b565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610fee57600080fd5b80604085015250509392505050565b600060c0828403121561100f57600080fd5b60405160c0810181811067ffffffffffffffff8211171561104057634e487b7160e01b600052604160045260246000fd5b60405290508061104f83610f2b565b8152602083015160208201526040830151604082015261107160608401610f2b565b60608201526080830151608082015260a083015160a08201525092915050565b600060c082840312156110a357600080fd5b610e928383610ffd565b6001600160a01b038316815260608101610e92602083018480358252602090810135910152565b600082198211156110f557634e487b7160e01b600052601160045260246000fd5b500190565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0918201519181019190915260c0019056fea2646970667358221220fd399d27f551b4773ab404a3882cb534c2df12d0dd2ba15a11d8efdce3c0fb6c64736f6c634300080c0033`,
  BytecodeLen: 5276,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:37:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:39:62:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:80:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:47:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:52:71:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:55:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:59:74:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
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
