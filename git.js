const gitjs = {
  git2raw:function g2r(p){let e=p.replace(/https?:\/\//,"").split('/'),l="";for(let i=4;i<e.length;i++)l+="/"+e[i];return`https://raw.githubusercontent.com/${e[1]}/${e[2]}${l}`}
}
