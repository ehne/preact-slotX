import{createContext as n,useState as e,useEffect as t,useMemo as c,html as d}from"htm/preact";let o,r=n=>n;const a=n({named:{},changed:[]});function h({name:n,children:c}){const d=useContext(a),[o,r]=e(c);return t(()=>(r(d.named[n]),()=>{d.changed=d.changed.filter(e=>e!=n),console.log(d)}),[d.changed.filter(e=>e===n)]),void 0===d.named[n]?c:o}function i({name:n,children:e}){const t=useContext(a);return t.named[n]=e,c(()=>{t.named[n]=e,t.changed.push(n)},[e]),null}function l({children:n}){const[t,c]=e({}),[h,i]=e([]);return d(o||(o=r`<${0} value=${0}>
        ${0}
    <//>
    `),a.Provider,{named:t,changed:h},n)}export{h as Slot,i as SlotContent,l as SlotProvider};
//# sourceMappingURL=preact-slotx.modern.js.map
