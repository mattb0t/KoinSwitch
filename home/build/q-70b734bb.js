const t=(s,n,o=.1)=>{const e=new IntersectionObserver(([r])=>{r.isIntersecting&&(n(),e.disconnect())},{threshold:o});e.observe(s)};export{t as o};
