import{n as c,s as h}from"./scheduler.7k7RoCQC.js";const e=[];function d(n,l=c){let o;const i=new Set;function b(t){if(h(n,t)&&(n=t,o)){const r=!e.length;for(const s of i)s[1](),e.push(s,n);if(r){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){b(t(n))}function _(t,r=c){const s=[t,r];return i.add(s),i.size===1&&(o=l(b,u)||c),t(n),()=>{i.delete(s),i.size===0&&o&&(o(),o=null)}}return{set:b,update:u,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_13thb02)==null?void 0:f.base)??"/bonus";var a;const q=((a=globalThis.__sveltekit_13thb02)==null?void 0:a.assets)??p;export{q as a,p as b,d as w};
