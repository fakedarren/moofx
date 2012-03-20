/*
---
provides: moofx
version: 3.0.5-dev
description: A CSS3-enabled javascript animation library
homepage: http://moofx.it
author: Valerio Proietti <@kamicane> (http://mad4milk.net)
license: MIT (http://mootools.net/license.txt)
includes: cubic-bezier by Arian Stolwijk (https://github.com/arian/cubic-bezier)
...
*/

(function(a){var b={},c=function(d){var e;if(e=b[d])return e.exports;e=b[d]={exports:{}};var f=e.exports;return a[d].call(f,c,e,f,window),e.exports};window.moofx=c("0")})({0:function(a,b){var e=a("1"),f=a("2"),g=typeof document!="undefined"?a("3"):{};g.requestFrame=function(a,b){return f(b).push(a),this},g.cancelFrame=function(a,b){return f(b).pull(a),this},g.color=e,b.exports=g},1:function(a,b){var k,l,m,n,o,p,q,r,s,t,u,v,e={maroon:"#800000",red:"#ff0000",orange:"#ffA500",yellow:"#ffff00",olive:"#808000",purple:"#800080",fuchsia:"#ff00ff",white:"#ffffff",lime:"#00ff00",green:"#008000",navy:"#000080",blue:"#0000ff",aqua:"#00ffff",teal:"#008080",black:"#000000",silver:"#c0c0c0",gray:"#808080",transparent:"#0000"},f=function(a,b,c,d){return d==null&&(d=1),a=parseInt(a,10),b=parseInt(b,10),c=parseInt(c,10),d=parseFloat(d),a<=255&&a>=0&&b<=255&&b>=0&&c<=255&&c>=0&&d<=1&&d>=0?[Math.round(a),Math.round(b),Math.round(c),d]:null},g=function(a){a.length===3&&(a+="f");if(a.length===4){var b=a.charAt(0),c=a.charAt(1),d=a.charAt(2),e=a.charAt(3);a=b+b+c+c+d+d+e+e}a.length===6&&(a+="ff");var f=[];for(var g=0,h=a.length;g<h;g+=2)f.push(parseInt(a.substr(g,2),16)/(g===6?255:1));return f},h=function(a,b,c){return c<0&&(c+=1),c>1&&(c-=1),c<1/6?a+(b-a)*6*c:c<.5?b:c<2/3?a+(b-a)*(2/3-c)*6:a},i=function(a,b,c,d){var e,f,g;d==null&&(d=1),a/=360,b/=100,c/=100,d/=1;if(a>1||a<0||b>1||b<0||c>1||c<0||d>1||d<0)return null;if(b===0)e=f=g=c;else{var i=c<.5?c*(1+b):c+b-c*b,j=2*c-i;e=h(j,i,a+1/3),g=h(j,i,a),f=h(j,i,a-1/3)}return[e*255,g*255,f*255,d]},j=[];for(k in e)j.push(k);l="(?:#([a-f0-9]{3,8}))",m="\\s*([.\\d%]+)\\s*",n="(?:,\\s*([.\\d]+)\\s*)?",o="\\("+[m,m,m]+n+"\\)",p="(?:rgb)a?",q="(?:hsl)a?",r="("+j.join("|")+")",s=RegExp(l),t=RegExp(p+o),u=RegExp(q+o),v=function(a,b){if(a==null)return null;a=(a+"").replace(/\s+/,"");var c=e[a];if(c)return v(c,b);if(c=a.match(s))a=g(c[1]);else if(c=a.match(t))a=c.slice(1);else{if(!(c=a.match(u)))return null;a=i.apply(null,c.slice(1))}return!a||!(a=f.apply(null,a))?null:b?a:(a[3]===1&&a.splice(3,1),"rgb"+(a.length===4?"a":"")+"("+a+")")};v.x=RegExp([r,l,p+o,q+o].join("|"),"g"),b.exports=v},2:function(a,b,c,d){var e=d.requestAnimationFrame||d.webkitRequestAnimationFrame||d.mozRequestAnimationFrame||d.oRequestAnimationFrame||d.msRequestAnimationFrame,f=1e3/60,g=function(a){var b=[],c=!1,d=a===f&&e?function(){e(g)}:function(){setTimeout(g,a)},g=function(){c=!1;var a=+(new Date);for(var d=b.length;d--;){var e=b.shift();e&&e(a)}};this.push=function(a){return b.push(a),c||(c=!0,d()),this},this.pull=function(a){for(var c=b.length;c--;)if(b[c]===a){b.splice(c,1);break}return this}},h={};b.exports=function(a){return a==null&&(a=f),h[a]||(h[a]=new g(a))}},3:function(a,b,c,d){var O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,e=a("4"),f=a("1"),g=a("2"),h=g(),i=g(1),j=a("5"),k=a("6"),l=a("8"),m=l.camelize,n=l.hyphenate,o=l.clean,p=l.capitalize,q=k.map,r=k.forEach,s=k.indexOf,t=function(a){return+(+a).toPrecision(3)},u=d.getComputedStyle?function(a){var b=getComputedStyle(a);return function(a){return b?b.getPropertyValue(n(a)):""}}:function(a){var b=a.currentStyle;return function(a){return b?b[m(a)]:""}},v=document.createElement("div"),w="border:none;margin:none;padding:none;visibility:hidden;position:absolute;height:0;",x=function(a,b){var c=a.parentNode,d=1;return c&&(v.style.cssText=w+("width:100"+b+";"),c.appendChild(v),d=v.offsetWidth/100,c.removeChild(v)),d},y=function(a){var b=a.length;return b===1?a.push(a[0],a[0],a[0]):b===2?a.push(a[0],a[1]):b===3&&a.push(a[1]),a},z="([-.\\d]+)(%|cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vm)",A="([-.\\d]+)([\\w%]+)?",B="none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit",C="cubic-bezier\\(([-.\\d]+),([-.\\d]+),([-.\\d]+),([-.\\d]+)\\)",D="([\\d.]+)(s|ms)?",E=RegExp(z,"g"),F=RegExp(A),G=RegExp(A,"g"),H=RegExp(B),I=RegExp(C),J=RegExp(C,"g"),K=RegExp(D),L=function(a){return a==null?"":a+""},M=function(a,b){if(a==null||a==="")return b?"1":"";var c=+a;return isFinite(c)?c+"":"1"};try{v.style.color="rgba(0,0,0,0.5)"}catch(N){}O=/^rgba/.test(v.style.color),P=function(a,b){if(!a)return b?"rgba(0,0,0,1)":"";if(a==="transparent")return b?"rgba(0,0,0,0)":a;var c=f(a,!0);return c?c[3]===0&&!O?"transparent":!b&&(!O||c[3]===1)?"rgb("+c.slice(0,3)+")":"rgba("+c+")":b?"rgba(0,0,0,1)":""},Q=function(a,b,c){if(a==null||a==="")return b?"0px":"";var d=l.match(a,F);if(!d)return a;var a=+d[1],e=d[2]||"px";return a===0?a+e:c&&e!=="px"?t(x(c,e)*a)+"px":a+e},R=function(a,b){if(a==null||a==="")return b?"none":"";var c=a.match(H);return c?a:b?"none":""},S=function(a,b,c){var d="0px none rgba(0,0,0,1)";if(a==null||a==="")return b?d:"";if(a===0||a==="none")return b?d:a;var e;a=a.replace(f.x,function(a){return e=a,""});var g=a.match(H),h=a.match(G);return o([Q(h?h[0]:"",b,c),R(g?g[0]:"",b),P(e,b)].join(" "))},T=function(a,b,c){return a==null||a===""?b?"0px 0px 0px 0px":"":o(y(q(o(a).split(" "),function(a){return Q(a,b,c)})).join(" "))},U=function(a,b,c,d){var e="rgba(0,0,0,0)",g=d===3?e+" 0px 0px 0px":e+" 0px 0px 0px 0px";if(a==null||a==="")return b?g:"";if(a==="none")return b?g:a;var h=[],a=o(a).replace(f.x,function(a){return h.push(a),""});return q(a.split(","),function(a,e){var f=P(h[e],b),g=/inset/.test(a),i=a.match(G)||["0px"];i=q(i,function(a){return Q(a,b,c)});while(i.length<d)i.push("0px");var j=g?["inset",f]:[f];return j.concat(i).join(" ")}).join(", ")},V=function(a,b,c){return a==null||a===""?"":a.replace(f.x,function(a){return P(a,b)}).replace(E,function(a){return Q(a,b,c)})},W={},X={},Y={},Z={},$=function(a){return W[a]||(W[a]=function(){var b=Z[a]||a,c=Y[a]||V;return function(){return c(u(this)(b),!0,this)}}())},_=function(a){return X[a]||(X[a]=function(){var b=Z[a]||a,c=Y[a]||V;return function(a){this.style[b]=c(a)}}())},ba=["Top","Right","Bottom","Left"],bb=["TopLeft","TopRight","BottomRight","BottomLeft"];r(ba,function(a){var b="border"+a;r(["margin"+a,"padding"+a,b+"Width",a.toLowerCase()],function(a){Y[a]=Q}),Y[b+"Color"]=P,Y[b+"Style"]=R,Y[b]=S,W[b]=function(){return[$(b+"Width").call(this),$(b+"Style").call(this),$(b+"Color").call(this)].join(" ")}}),r(bb,function(a){Y["border"+a+"Radius"]=Q}),Y.color=Y.backgroundColor=P,Y.width=Y.height=Y.fontSize=Y.backgroundSize=Q,r(["margin","padding"],function(a){Y[a]=T,W[a]=function(){return q(ba,function(b){return $(a+b).call(this)},this).join(" ")}}),Y.borderWidth=T,Y.borderStyle=function(a,b){return a==null||a===""?b?y(["none"]).join(" "):"":(a=o(a).split(" "),o(y(q(a,function(a){R(a,b)})).join(" ")))},Y.borderColor=function(a,b){return!a||!(a=l.match(a,f.x))?b?y(["rgba(0,0,0,1)"]).join(" "):"":o(y(q(a,function(a){return P(a,b)})).join(" "))},r(["Width","Style","Color"],function(a){W["border"+a]=function(){return q(ba,function(b){return $("border"+b+a).call(this)},this).join(" ")}}),Y.borderRadius=T,W.borderRadius=function(){return q(bb,function(a){return $("border"+a+"Radius").call(this)},this).join(" ")},Y.border=S,W.border=function(){var a,b,c;for(b=0;b<ba.length;b++){c=$("border"+ba[b]).call(this);if(a&&c!==a)return null;a=c}return a},Y.zIndex=L;bc=v.style.MsFilter!=null?"MsFilter":v.style.filter!=null?"filter":null;Y.opacity=M;if(bc&&v.style.opacity==null){bd=/alpha\(opacity=([\d.]+)\)/i;X.opacity=function(a){var b;a=(a=+a)===1?"":"alpha(opacity="+a*100+")";b=u(this)(bc);return this.style[bc]=bd.test(b)?b.replace(bd,a):b+a},W.opacity=function(){var a=u(this)(bc).match(bd);return(a?a[1]/100:1)+""}}be=Y.boxShadow=function(a,b,c){return U(a,b,c,4)},bf=Y.textShadow=function(a,b,c){return U(a,b,c,3)};r(["Webkit","Moz","O","ms",null],function(a){r(["transition","transform","transformOrigin","transformStyle","perspective","backfaceVisibility"],function(b){var c=a?a+p(b):b;v.style[c]!=null&&(Z[b]=c)})});bg=Z.transition,bh={"default":"cubic-bezier(0.25, 0.1, 0.25, 1.0)",linear:"cubic-bezier(0, 0, 1, 1)","ease-in":"cubic-bezier(0.42, 0, 1.0, 1.0)","ease-out":"cubic-bezier(0, 0, 0.58, 1.0)","ease-in-out":"cubic-bezier(0.42, 0, 0.58, 1.0)"};bh.ease=bh["default"];bi=j({constructor:function(a,b){var c=$(b),d=_(b);this.get=function(){return c.call(a)},this.set=function(b){return d.call(a,b)},this.node=a,this.property=b,this.parse=Y[b]||V},setOptions:function(a){a==null&&(a={});var b=a.duration;if(!(this.duration=this.parseDuration(b||"500ms")))throw new Error(this.duration+" is not a valid duration");if(!(this.equation=this.parseEquation(a.equation||"default")))throw new Error(this.equation+" is not a valid equation");return this.callback=a.callback||function(){},this},prepare:function(a){if(this.duration===0)return this.set(a),i.push(this.callback),null;var b=this.node,c=this.parse,d=this.get(),e=c(a,!0);if(c===Q||c===S||c===T){var f=e.match(E),g=0;f&&(d=d.replace(E,function(a){var c=f[g++],d=a.match(F)[1],e=c.match(F)[2];return e!=="px"?t(d/x(b,e))+e:a})),g>0&&this.set(d)}return d===e?(i.push(this.callback),null):[d,e]},parseDuration:function(a){if(a=l.match(a,K)){var b=+a[1],c=a[2]||"ms";if(c==="s")return b*1e3;if(c==="ms")return b}return null},parseEquation:function(a){a=bh[a]||a;var b=a.replace(/\s+/g,"").match(I);return b?q(b.slice(1),function(a){return+a}):null}}),bj=function(a){var b=[],c=a.replace(/[-.\d]+/g,function(a){return b.push(+a),"@"});return[b,c]},bk=function(a,b,c){return(b-a)*c+a},bl=j({inherits:bi,constructor:function(a,b){bl.parent.constructor.call(this,a,b);var c=this;this.bstep=function(a){return c.step(a)}},start:function(a){var b=this.prepare(a),c=this.parse;if(b){this.time=0;var d=bj(b[0]),e=bj(b[1]);if(d[0].length!==e[0].length||(c===be||c===bf||c===V)&&d[1]!==e[1])return this.set(a),i.push(this.callback),null;this.from=d[0],this.to=e[0],this.template=e[1],h.push(this.bstep)}return this},stop:function(){return h.pull(this.bstep),this},step:function(a){this.time||(this.time=a);var b=(a-this.time)/this.duration;b>1&&(b=1);var c=this.equation(b),d=this.template,e=this.from,f=this.to;for(var g=0,i=e.length;g<i;g++){var j=e[g],k=f[g];d=d.replace("@",k!==j?bk(j,k,c):k)}this.set(d),b!==1?h.push(this.bstep):this.callback(a)},parseEquation:function(a){var a=bl.parent.parseEquation.call(this,a);return a==[0,0,1,1]?function(a){return a}:e(a[0],a[1],a[2],a[3],1e3/60/this.duration/4)}}),bm=function(a,b,c,d){var e=s(b,a);e!==-1&&(b.splice(s,1),c.splice(s,1),d.splice(s,1))},bn=j({inherits:bi,constructor:function(a,b){bn.parent.constructor.call(this,a,b),this.hproperty=n(Z[b]||b);var c=this;this.bdefer=function(a){return c.defer(a)},this.bcomplete=function(){return c.complete()}},start:function(a){var b=this.prepare(a);return b&&(this.to=b[1],this.started=!0,this.cleanCSS(!0),i.push(this.bdefer)),this},stop:function(a){return this.started&&(this.started=!1,this.cleanCSS(),i.pull(this.bdefer)),this.running&&(this.running=!1,g(this.duration).pull(this.bcomplete),a&&this.set(this.get())),this},defer:function(a){return this.running=!0,g(this.duration).push(this.bcomplete),this.endTime=a+this.duration,this.set(this.to),null},complete:function(){return this.running=!1,this.started=!1,this.cleanCSS(),this.callback(this.endTime),null},cleanCSS:function(a){var b=u(this.node),c=b(bg+"Property").replace(/\s+/g,"").split(","),d=b(bg+"Duration").replace(/\s+/g,"").split(","),e=b(bg+"TimingFunction").replace(/\s+/g,"").match(J);bm("all",c,d,e),bm(this.hproperty,c,d,e),a&&(c.push(this.hproperty),d.push(this.duration+"ms"),e.push("cubic-bezier("+this.equation+")"));var f=this.node.style;f[bg+"Property"]=c,f[bg+"Duration"]=d,f[bg+"TimingFunction"]=e}}),bo={uid:0,animations:{},retrieve:function(a,b){var c,d,e=bg?bn:bl,f=(d=a._muid)!=null?d:a._muid=(this.uid++).toString(36),g=(c=this.animations)[f]||(c[f]={});return g[b]||(g[b]=new e(a,b))},starts:function(a,b,c){c==null&&(c={});var d=typeof c;c=d==="function"?{callback:c}:d==="string"||d==="number"?{duration:c}:c;var e=c.callback||function(){},f=0,g=0;c.callback=function(a){++f===g&&e(a)};for(var h in b){var i=b[h],h=m(h);for(var j=0,k=a.length;j<k;j++)g++,this.retrieve(a[j],h).setOptions(c).start(i)}},start:function(a,b,c,d){var e={};return e[b]=c,this.starts(a,e,d)},sets:function(a,b){for(var c in b){var d=b[c],e=_(c=m(c));for(var f=0,g=a.length;f<g;f++){var h=a[f],i,j;(i=this.animations[h["µid"]])&&(j=i[c])&&j.stop(!0),e.call(h,d)}}return this},set:function(a,b,c){var d={};return d[b]=c,this.sets(a,d)}},bp=j({constructor:function(a){if(a==null)return;if(!(this instanceof bp))return new bp(a);a.length==null&&(a=[a]),this.valueOf=function(){return a}},animate:function(a,b,c){return typeof a!="string"?bo.starts(this.valueOf(),a,b):bo.start(this.valueOf(),a,b,c),this},style:function(a,b){return typeof a!="string"?bo.sets(this.valueOf(),a):bo.set(this.valueOf(),a,b),this},compute:function(a){return $(m(a)).call(this.valueOf()[0])}});bp.parse=function(a,b,c,d){return Y[a=m(a)]?Y[a](b,c,d):null},b.exports=bp},4:function(a,b){b.exports=function(a,b,c,d,e){var f=function(b){var d=1-b;return 3*d*d*b*a+3*d*b*b*c+b*b*b},g=function(a){var c=1-a;return 3*c*c*a*b+3*c*a*a*d+a*a*a},h=function(b){var d=1-b;return 3*(2*(b-1)*b+d*d)*a+3*(-b*b*b+2*d*b)*c};return function(a){var c,d,i,j,k,l,b=a;for(i=b,l=0;l<8;l++){j=f(i)-b;if(Math.abs(j)<e)return g(i);k=h(i);if(Math.abs(k)<1e-6)break;i-=j/k}c=0,d=1,i=b;if(i<c)return g(c);if(i>d)return g(d);while(c<d){j=f(i);if(Math.abs(j-b)<e)return g(i);b>j?c=i:d=i,i=(d-c)*.5+c}return g(i)}}},5:function(a,b){var e=function(a,b){return Object.hasOwnProperty.call(a,b)},f=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a)===!1)break;return a},g=Object.create||function(a){var b=function(){};return b.prototype=a,new b},h=function(a,b){var c=g(a);return f(b,function(a,b){c[b]=a}),c},i=function(a,b){this.prototype[a]=b},j=function(a){return f(a,function(a,b){b!=="constructor"&&b!=="inherits"&&b!=="mutator"&&this.mutator(b,a)},this),this},k=function(a){var b=a.inherits,c;b&&(c=b.prototype);var d=e(a,"constructor")?a.constructor:b?function(){return c.constructor.apply(this,arguments)}:function(){};if(b){var f=d.prototype=g(c);d.parent=c,f.constructor=d}return d.mutator=a.mutator||b&&b.mutator||i,d.implement=j,d.implement(a)};"use strict";k.each=f,k.has=e,k.create=g,b.exports=k},6:function(a,b){var h,i,j,k,l,e=a("7"),f=Array.prototype,g=e({filter:f.filter,indexOf:f.indexOf||function(a,b){for(var c=this.length>>>0,d=b<0?Math.max(0,c+b):b||0;d<c;d++)if(d in this&&this[d]===a)return d;return-1},map:f.map||function(a,b){var c=this.length>>>0,d=Array(c);for(var e=0,f=c;e<f;e++)e in this&&(d[e]=a.call(b,this[e],e,this));return d},forEach:f.forEach||function(a,b){for(var c=0,d=this.length>>>0;c<d;c++)c in this&&a.call(b,this[c],c,this)},every:f.every,some:f.some});"use strict";g.isArray=Array.isArray;h={},i="pop,push,reverse,shift,sort,splice,unshift,concat,join,slice,lastIndexOf,reduce,reduceRight".split(",");for(j=0;k=i[j++];)if(l=f[k])h[k]=l;g.implement(h),b.exports=g},7:function(a,b){var e=a("5"),f=Array.prototype.slice,g=e({mutator:function(a,b){this[a]=function(a){var c=arguments.length>1?f.call(arguments,1):[];return b.apply(a,c)},this.prototype[a]=b},constructor:{prototype:{}}});"use strict";b.exports=function(a){var b=a.inherits||(a.inherits=g);return a.constructor=e.create(b),e(a)}},8:function(a,b){var e=a("7"),f=e({inherits:a("9"),clean:function(){return f.trim((this+"").replace(/\s+/g," "))},camelize:function(){return(this+"").replace(/-\D/g,function(a){return a.charAt(1).toUpperCase()})},hyphenate:function(){return(this+"").replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()})},capitalize:function(){return(this+"").replace(/\b[a-z]/g,function(a){return a.toUpperCase()})}});"use strict";b.exports=f},9:function(a,b){var j,k,l,e=a("7"),f=String.prototype,g=e({trim:f.trim||function(){return(this+"").replace(/^\s+|\s+$/g,"")}}),h={},i="charAt,charCodeAt,concat,indexOf,lastIndexOf,match,quote,replace,search,slice,split,substr,substring,toLowerCase,toUpperCase".split(",");"use strict";for(j=0;k=i[j++];)if(l=f[k])h[k]=l;g.implement(h),b.exports=g}})