(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36769079"],{"0d26":function(t,o,e){"use strict";o["a"]={data:()=>({uid:Math.floor(Math.random()*10**10)}),methods:{dialogoMerge(t,o=!1){return t.dialogo?t.dialogo.map((e,a)=>({...e,id:this.uid+a+1,textoIng:o?this.splitPhrase(e.textoIng):e.textoIng,textoEsp:o?this.splitPhrase(e.textoEsp):e.textoEsp,personaje:t.personajes&&t.personajes.find(t=>t.nombre===e.personaje)})):[]},splitPhrase(t){return t.replace(/^\s+|\s+$/g,"&nbsp;").replace("***","___*___").split("___").filter(Boolean)}}}},"1db7":function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"dialogo__chat dialogo__chat--no-scroll p-4 me-0"},t._l(t.dialogoComputed,(function(t){return e("DialogoBurbuja",{key:"dialogo-item-"+t.id,staticClass:"mb-3",attrs:{dialogoItem:t}})})),1)},i=[],s=e("0d26"),n={name:"Dialogo",mixins:[s["a"]],props:{dialogo:{type:Object,default:function(){return{}}}},computed:{dialogoComputed:function(){return this.dialogoMerge(this.dialogo)}}},l=n,r=e("2877"),d=Object(r["a"])(l,a,i,!1,null,null,null);o["default"]=d.exports}}]);
//# sourceMappingURL=chunk-36769079.9a12640f.js.map