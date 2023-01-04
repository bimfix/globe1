const OSMBuildings=function(){const e=Math,t=e.exp,i=e.log,r=e.sin,a=e.cos,o=e.tan,s=e.atan,n=e.atan2,l=e.min,c=e.max,h=e.sqrt,f=e.ceil,d=e.pow;class u{constructor(e,t,i,r=1){this.r=this._clamp(e,1),this.g=this._clamp(t,1),this.b=this._clamp(i,1),this.a=this._clamp(r,1)}static parse(e){if("string"==typeof e){let t;if(e=e.toLowerCase(),t=(e=u.w3cColors[e]||e).match(/^#?(\w{2})(\w{2})(\w{2})$/))return new u(parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255);if(t=e.match(/^#?(\w)(\w)(\w)$/))return new u(parseInt(t[1]+t[1],16)/255,parseInt(t[2]+t[2],16)/255,parseInt(t[3]+t[3],16)/255);if(t=e.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new u(parseFloat(t[1])/255,parseFloat(t[2])/255,parseFloat(t[3])/255,t[4]?parseFloat(t[5]):1)}return new u}static fromHSL(e,t,i,r){const a=(new u).fromHSL(e,t,i);return a.a=void 0===r?1:r,a}_hue2rgb(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}_clamp(e,t){if(void 0!==e)return Math.min(t,Math.max(0,e||0))}isValid(){return void 0!==this.r&&void 0!==this.g&&void 0!==this.b}toHSL(){if(!this.isValid())return;const e=Math.max(this.r,this.g,this.b),t=Math.min(this.r,this.g,this.b),i=e-t,r=(e+t)/2;if(!i)return{h:0,s:0,l:r};const a=r>.5?i/(2-e-t):i/(e+t);let o;switch(e){case this.r:o=(this.g-this.b)/i+(this.g<this.b?6:0);break;case this.g:o=(this.b-this.r)/i+2;break;case this.b:o=(this.r-this.g)/i+4}return o*=60,{h:o,s:a,l:r}}fromHSL(e,t,i){if(0===t)return this.r=this.g=this.b=i,this;const r=i<.5?i*(1+t):i+t-i*t,a=2*i-r;return e/=360,this.r=this._hue2rgb(a,r,e+1/3),this.g=this._hue2rgb(a,r,e),this.b=this._hue2rgb(a,r,e-1/3),this}toString(){if(this.isValid())return 1===this.a?"#"+((1<<24)+(Math.round(255*this.r)<<16)+(Math.round(255*this.g)<<8)+Math.round(255*this.b)).toString(16).slice(1,7):`rgba(${Math.round(255*this.r)},${Math.round(255*this.g)},${Math.round(255*this.b)},${this.a.toFixed(2)})`}toArray(){if(this.isValid)return[this.r,this.g,this.b]}hue(e){const t=this.toHSL();return this.fromHSL(t.h+e,t.s,t.l)}saturation(e){const t=this.toHSL();return this.fromHSL(t.h,t.s*e,t.l)}lightness(e){const t=this.toHSL();return this.fromHSL(t.h,t.s,t.l*e)}clone(){return new u(this.r,this.g,this.b,this.a)}}function g(){const e=Math,t=e.PI,i=e.sin,r=e.cos,a=e.tan,o=e.asin,s=e.atan2,n=t/180,l=23.4397*n;function c(e,t,o){return s(i(e),r(e)*i(t)-a(o)*r(t))}function h(e,t,a){return o(i(t)*i(a)+r(t)*r(a)*r(e))}return function(e,f,d){const u=n*-d,g=n*f,p=function(e){return function(e){return e.valueOf()/864e5-.5+2440588}(e)-2451545}(e),y=function(e){return n*(357.5291+.98560028*e)}(p),m=function(e,i){return e+i+102.9372*n+t}(y,function(e){return n*(1.9148*i(e)+.02*i(2*e)+3e-4*i(3*e))}(y)),x=(k=m,o(i(_=0)*r(l)+r(_)*i(l)*i(k))),b=function(e,t){return s(i(e)*r(l)-a(t)*i(l),r(e))}(m,0),w=function(e,t){return n*(280.16+360.9856235*e)-t}(p,u)-b;var k,_;return{altitude:h(w,g,x),azimuth:c(w,g,x)-t/2}}}u.w3cColors={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},"undefined"!=typeof module&&(module.exports=u);const p={brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},y={asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"};function m(e){return"#"===(e=e.toLowerCase())[0]?e:p[y[e]||e]||null}function x(e,t){if(function(e){let t,i,r,a,o=0;for(let s=0,n=e.length-3;s<n;s+=2)t=e[s],i=e[s+1],r=e[s+2],a=e[s+3],o+=t*a-r*i;return o/2>0?"CW":"CCW"}(e)===t)return e;let i=[];for(let t=e.length-2;t>=0;t-=2)i.push(e[t],e[t+1]);return i}function b(e){const t={};e=e||{},t.height=e.height||(e.levels?3*e.levels:G),t.minHeight=e.minHeight||(e.minLevel?3*e.minLevel:0);const i=e.material?m(e.material):e.wallColor||e.color;i&&(t.wallColor=i);const r=e.roofMaterial?m(e.roofMaterial):e.roofColor;switch(r&&(t.roofColor=r),e.shape){case"cylinder":case"cone":case"dome":case"sphere":t.shape=e.shape,t.isRotational=!0;break;case"pyramid":t.shape=e.shape}switch(e.roofShape){case"cone":case"dome":t.roofShape=e.roofShape,t.isRotational=!0;break;case"pyramid":t.roofShape=e.roofShape}return t.roofShape&&e.roofHeight?(t.roofHeight=e.roofHeight,t.height=c(0,t.height-t.roofHeight)):t.roofHeight=0,t}function w(e){let t,i,r=[];switch(e.type){case"GeometryCollection":r=[];for(let t=0,a=e.geometries.length;t<a;t++)(i=w(e.geometries[t]))&&r.push.apply(r,i);return r;case"MultiPolygon":r=[];for(let t=0,a=e.coordinates.length;t<a;t++)(i=w({type:"Polygon",coordinates:e.coordinates[t]}))&&r.push.apply(r,i);return r;case"Polygon":t=e.coordinates;break;default:return[]}let a,o=[],s=[];a=t[0];for(let e=0,t=a.length;e<t;e++)o.push(a[e][1],a[e][0]);o=x(o,"CW");for(let e=0,i=t.length-1;e<i;e++){a=t[e+1],s[e]=[];for(let t=0,i=a.length;t<i;t++)s[e].push(a[t][1],a[t][0]);s[e]=x(s[e],"CCW")}return[{outer:o,inner:s.length?s:null}]}function k(e){let t={};for(const i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}let _,v,H,C,S,M,P='&copy; <a href="https://osmbuildings.org">OSM Buildings</a>',T=Math.PI,z=T/2,I=T/4,O=0,A=0,j=0,R=0,E=0,D=0,F=u.parse("rgba(200, 190, 180)"),N=F.lightness(.8),q=F.lightness(1.2),Z=""+F,V=""+N,X=""+q,$=0,G=5;function W(){}function J(){}function B(e,t){const i=e.x-t.x,r=e.y-t.y;return i*i+r*r}function U(e,t,i,r,a,o){let s,n=a-i,l=o-r;return 0===n&&0===l||(s=((e-i)*n+(t-r)*l)/(n*n+l*l),s>1?(i=a,r=o):s>0&&(i+=n*s,r+=l*s)),n=e-i,l=t-r,n*n+l*l}function Y(e){let t=180,i=-180;for(let r=0,a=e.length;r<a;r+=2)t=l(t,e[r+1]),i=c(i,e[r+1]);return(i-t)/2}function K(e,i){const r={};return e/=v,i/=v,r.latitude=i<=0?90:i>=1?-90:function(e){return e/T*180}(2*s(t(T*(1-2*i)))-z),r.longitude=360*(1===e?1:(e%1+1)%1)-180,r}function Q(e,t){const r=l(1,c(0,.5-i(o(I+z*e/180))/T/2));return{x:(t/360+.5)*v<<0,y:r*v<<0}}function ee(e){const t=O+E,i=A+D;for(let r=0,a=e.length-3;r<a;r+=2)if(e[r]>E&&e[r]<t&&e[r+1]>D&&e[r+1]<i)return!0;return!1}let te,ie={},re=[],ae=0;class oe{static getPixelFootprint(e){let t,i=new Int32Array(e.length);for(let r=0,a=e.length-1;r<a;r+=2)t=Q(e[r],e[r+1]),i[r]=t.x,i[r+1]=t.y;if(i=function(e){let t,i,r,a=e.length/2,o=new Uint8Array(a),s=0,n=a-1,l=[],c=[],h=[];for(o[s]=o[n]=1;n;){t=0;for(let a=s+1;a<n;a++)i=U(e[2*a],e[2*a+1],e[2*s],e[2*s+1],e[2*n],e[2*n+1]),i>t&&(r=a,t=i);t>2&&(o[r]=1,l.push(s),c.push(r),l.push(r),c.push(n)),s=l.pop(),n=c.pop()}for(let t=0;t<a;t++)o[t]&&h.push(e[2*t],e[2*t+1]);return h}(i),!(i.length<8))return i}static resetItems(){this.items=[],this.cache={},ue.reset()}static addRenderItems(e,t){let i,r,a,o=class{static read(e){if(!e||"FeatureCollection"!==e.type)return[];const t=e.features,i=[];for(let e=0,r=t.length;e<r;e++){const r=t[e];if("Feature"!==r.type||!1===W(r))continue;const a=b(r.properties),o=w(r.geometry);for(let e=0,t=o.length;e<t;e++){const t=k(a);t.footprint=o[e].outer,t.isRotational&&(t.radius=Y(t.footprint)),o[e].inner&&(t.holes=o[e].inner),(r.id||r.properties.id)&&(t.id=r.id||r.properties.id),r.properties.relationId&&(t.relationId=r.properties.relationId),i.push(t)}}return i}}.read(e);for(let e=0,s=o.length;e<s;e++)i=o[e],a=i.id||[i.footprint[0],i.footprint[1],i.height,i.minHeight].join(","),this.cache[a]||(r=this.scaleItem(i))&&(r.scale=t?0:1,this.items.push(r),this.cache[a]=1);!function(){if(te)return;te=setInterval(e=>{let t=oe.items,i=!1;for(let e=0,r=t.length;e<r;e++)t[e].scale<1&&(t[e].scale+=.1,t[e].scale>1&&(t[e].scale=1),i=!0);ce.render(),i||(clearInterval(te),te=null)},33)}()}static scalePolygon(e,t){return e.map(e=>e*t)}static scale(e){oe.items=oe.items.map(t=>{if(t.height*=e,t.minHeight*=e,t.footprint=oe.scalePolygon(t.footprint,e),t.center.x*=e,t.center.y*=e,t.radius&&(t.radius*=e),t.holes)for(let i=0,r=t.holes.length;i<r;i++)t.holes[i]=oe.scalePolygon(t.holes[i],e);return t.roofHeight*=e,t})}static scaleItem(e){let t,i={},r=6/d(2,_-15);if(e.id&&(i.id=e.id),i.height=l(e.height/r,H),i.minHeight=isNaN(e.minHeight)?0:e.minHeight/r,!(i.minHeight>H)&&(i.footprint=this.getPixelFootprint(e.footprint),i.footprint)){if(i.center=function(e){let t=1/0,i=-1/0,r=1/0,a=-1/0;for(let o=0,s=e.length-3;o<s;o+=2)t=l(t,e[o]),i=c(i,e[o]),r=l(r,e[o+1]),a=c(a,e[o+1]);return{x:t+(i-t)/2<<0,y:r+(a-r)/2<<0}}(i.footprint),e.radius&&(i.radius=e.radius*$),e.shape&&(i.shape=e.shape),e.roofShape&&(i.roofShape=e.roofShape),"cone"!==i.roofShape&&"dome"!==i.roofShape||i.shape||!function(e){const t=e.length;if(t<16)return!1;let i=1/0,r=-1/0,a=1/0,o=-1/0;for(let s=0;s<t-1;s+=2)i=Math.min(i,e[s]),r=Math.max(r,e[s]),a=Math.min(a,e[s+1]),o=Math.max(o,e[s+1]);const s=r-i,n=o-a,l=s/n;if(l<.85||l>1.15)return!1;const c={x:i+s/2,y:a+n/2},h=(s+n)/4,f=h*h;for(let i=0;i<t-1;i+=2){const t=B({x:e[i],y:e[i+1]},c);if(t/f<.8||t/f>1.2)return!1}return!0}(i.footprint)||(i.shape="cylinder"),e.holes){let t;i.holes=[];for(let r=0,a=e.holes.length;r<a;r++)(t=this.getPixelFootprint(e.holes[r]))&&i.holes.push(t)}return e.wallColor&&(t=u.parse(e.wallColor))&&(i.altColor=""+t.lightness(.8),i.wallColor=""+t),e.roofColor&&(t=u.parse(e.roofColor))&&(i.roofColor=""+t),e.relationId&&(i.relationId=e.relationId),i.hitColor=ue.idToColor(e.relationId||e.id),i.roofHeight=isNaN(e.roofHeight)?0:e.roofHeight/r,i.height+i.roofHeight<=i.minHeight?void 0:i}}static set(e){this.resetItems(),this._staticData=e,this.addRenderItems(this._staticData,!0)}static load(e,t){this.src=e||"https://{s}.data.osmbuildings.org/0.2/{k}/tile/{z}/{x}/{y}.json".replace("{k}",t||"anonymous"),this.update()}static update(){if(this.resetItems(),!(_<15)&&(this._staticData&&this.addRenderItems(this._staticData),this.src)){let t,i,r=16,a=256,o=_>r?a<<_-r:a>>r-_,s=E/o<<0,n=D/o<<0,l=f((E+O)/o),c=f((D+A)/o),h=this;function e(e){h.addRenderItems(e)}for(i=n;i<=c;i++)for(t=s;t<=l;t++)this.loadTile(t,i,r,e)}}static loadTile(e,t,i,r){let a="abcd"[(e+t)%4],o=this.src.replace("{s}",a).replace("{x}",e).replace("{y}",t).replace("{z}",i);return class{static loadJSON(e,t){return function(e,t){if(ie[e])return void(t&&t(ie[e]));const i=new XMLHttpRequest;return i.onreadystatechange=function(){if(4===i.readyState&&!(!i.status||i.status<200||i.status>299)&&t&&i.responseText){const r=i.responseText;for(ie[e]=r,re.push({url:e,size:r.length}),ae+=r.length,t(r);ae>5242880;){let e=re.shift();ae-=e.size,delete ie[e.url]}}},i.open("GET",e),i.send(null),i}(e,e=>{let i;try{i=JSON.parse(e)}catch(e){}t(i)})}}.loadJSON(o,r)}}oe.cache={},oe.items=[];class se{static draw(e,t,i,r,a,o,s,n){let l=this._extrude(e,t,r,a,o,s),c=[];if(i)for(let t=0,n=i.length;t<n;t++)c[t]=this._extrude(e,i[t],r,a,o,s);if(e.fillStyle=n,e.beginPath(),this._ring(e,l),i)for(let t=0,i=c.length;t<i;t++)this._ring(e,c[t]);e.closePath(),e.fill()}static _extrude(e,t,i,r,a,o){let s,n,l=450/(450-i),c=450/(450-r),h={x:0,y:0},f={x:0,y:0},d=[];for(let i=0,u=t.length-3;i<u;i+=2)h.x=t[i]-E,h.y=t[i+1]-D,f.x=t[i+2]-E,f.y=t[i+3]-D,s=he.project(h,l),n=he.project(f,l),r&&(h=he.project(h,c),f=he.project(f,c)),(f.x-h.x)*(s.y-h.y)>(s.x-h.x)*(f.y-h.y)&&(h.x<f.x&&h.y<f.y||h.x>f.x&&h.y>f.y?e.fillStyle=o:e.fillStyle=a,e.beginPath(),this._ring(e,[f.x,f.y,h.x,h.y,s.x,s.y,n.x,n.y]),e.closePath(),e.fill()),d[i]=s.x,d[i+1]=s.y;return d}static _ring(e,t){e.moveTo(t[0],t[1]);for(let i=2,r=t.length-1;i<r;i+=2)e.lineTo(t[i],t[i+1])}static simplified(e,t,i){if(e.beginPath(),this._ringAbs(e,t),i)for(let t=0,r=i.length;t<r;t++)this._ringAbs(e,i[t]);e.closePath(),e.fill()}static _ringAbs(e,t){e.moveTo(t[0]-E,t[1]-D);for(let i=2,r=t.length-1;i<r;i+=2)e.lineTo(t[i]-E,t[i+1]-D)}static shadow(e,t,i,r,a){let o,s,n=null,l={x:0,y:0},c={x:0,y:0};for(let i=0,h=t.length-3;i<h;i+=2)l.x=t[i]-E,l.y=t[i+1]-D,c.x=t[i+2]-E,c.y=t[i+3]-D,o=de.project(l,r),s=de.project(c,r),a&&(l=de.project(l,a),c=de.project(c,a)),(c.x-l.x)*(o.y-l.y)>(o.x-l.x)*(c.y-l.y)?(1===n&&e.lineTo(l.x,l.y),n=0,i||e.moveTo(l.x,l.y),e.lineTo(c.x,c.y)):(0===n&&e.lineTo(o.x,o.y),n=1,i||e.moveTo(o.x,o.y),e.lineTo(s.x,s.y));if(i)for(let t=0,r=i.length;t<r;t++)this._ringAbs(e,i[t])}static hitArea(e,t,i,r,a,o){let s,n,l=null,c={x:0,y:0},h={x:0,y:0},f=450/(450-r),d=450/(450-a);e.fillStyle=o,e.beginPath();for(let i=0,r=t.length-3;i<r;i+=2)c.x=t[i]-E,c.y=t[i+1]-D,h.x=t[i+2]-E,h.y=t[i+3]-D,s=he.project(c,f),n=he.project(h,f),a&&(c=he.project(c,d),h=he.project(h,d)),(h.x-c.x)*(s.y-c.y)>(s.x-c.x)*(h.y-c.y)?(1===l&&e.lineTo(c.x,c.y),l=0,i||e.moveTo(c.x,c.y),e.lineTo(h.x,h.y)):(0===l&&e.lineTo(s.x,s.y),l=1,i||e.moveTo(s.x,s.y),e.lineTo(n.x,n.y));e.closePath(),e.fill()}}class ne{static draw(e,t,i,r,a,o,s,l,c){let h,f,d={x:t.x-E,y:t.y-D},u=450/(450-a),g=450/(450-o),p=he.project(d,u);r*=u,o&&(d=he.project(d,g),i*=g);let y=this._tangents(d,i,p,r);y?(h=n(y[0].y1-d.y,y[0].x1-d.x),f=n(y[1].y1-d.y,y[1].x1-d.x)):(h=1.5*T,f=1.5*T),e.fillStyle=s,e.beginPath(),e.arc(p.x,p.y,r,z,h,!0),e.arc(d.x,d.y,i,h,z),e.closePath(),e.fill(),e.fillStyle=l,e.beginPath(),e.arc(p.x,p.y,r,f,z,!0),e.arc(d.x,d.y,i,z,f),e.closePath(),e.fill(),e.fillStyle=c,this._circle(e,p,r)}static simplified(e,t,i){this._circle(e,{x:t.x-E,y:t.y-D},i)}static shadow(e,t,i,r,a,o){let s,l,c={x:t.x-E,y:t.y-D},h=de.project(c,a);o&&(c=de.project(c,o));let f=this._tangents(c,i,h,r);f?(s=n(f[0].y1-c.y,f[0].x1-c.x),l=n(f[1].y1-c.y,f[1].x1-c.x),e.moveTo(f[1].x2,f[1].y2),e.arc(h.x,h.y,r,l,s),e.arc(c.x,c.y,i,s,l)):(e.moveTo(c.x+i,c.y),e.arc(c.x,c.y,i,0,2*T))}static hitArea(e,t,i,r,a,o,s){let l,c,h={x:t.x-E,y:t.y-D},f=450/(450-a),d=450/(450-o),u=he.project(h,f);r*=f,o&&(h=he.project(h,d),i*=d);let g=this._tangents(h,i,u,r);e.fillStyle=s,e.beginPath(),g?(l=n(g[0].y1-h.y,g[0].x1-h.x),c=n(g[1].y1-h.y,g[1].x1-h.x),e.moveTo(g[1].x2,g[1].y2),e.arc(u.x,u.y,r,c,l),e.arc(h.x,h.y,i,l,c)):(e.moveTo(h.x+i,h.y),e.arc(h.x,h.y,i,0,2*T)),e.closePath(),e.fill()}static _circle(e,t,i){e.beginPath(),e.arc(t.x,t.y,i,0,2*T),e.fill()}static _tangents(e,t,i,r){let a=e.x-i.x,o=e.y-i.y,s=t-r,n=a*a+o*o;if(n<=s*s)return;let l,f,d,u=h(n),g=-a/u,p=-o/u,y=s/u,m=[];l=h(c(0,1-y*y));for(let a=1;a>=-1;a-=2)f=g*y-a*l*p,d=p*y+a*l*g,m.push({x1:e.x+t*f<<0,y1:e.y+t*d<<0,x2:i.x+r*f<<0,y2:i.y+r*d<<0});return m}}class le{static draw(e,t,i,r,a,o,s){let n={x:i.x-E,y:i.y-D},l=450/(450-r),c=450/(450-a),h=he.project(n,l),f={x:0,y:0},d={x:0,y:0};for(let i=0,r=t.length-3;i<r;i+=2)f.x=t[i]-E,f.y=t[i+1]-D,d.x=t[i+2]-E,d.y=t[i+3]-D,a&&(f=he.project(f,c),d=he.project(d,c)),(d.x-f.x)*(h.y-f.y)>(h.x-f.x)*(d.y-f.y)&&(f.x<d.x&&f.y<d.y||f.x>d.x&&f.y>d.y?e.fillStyle=s:e.fillStyle=o,e.beginPath(),this._triangle(e,f,d,h),e.closePath(),e.fill())}static _triangle(e,t,i,r){e.moveTo(t.x,t.y),e.lineTo(i.x,i.y),e.lineTo(r.x,r.y)}static _ring(e,t){e.moveTo(t[0]-E,t[1]-D);for(let i=2,r=t.length-1;i<r;i+=2)e.lineTo(t[i]-E,t[i+1]-D)}static shadow(e,t,i,r,a){let o={x:0,y:0},s={x:0,y:0},n={x:i.x-E,y:i.y-D},l=de.project(n,r);for(let i=0,r=t.length-3;i<r;i+=2)o.x=t[i]-E,o.y=t[i+1]-D,s.x=t[i+2]-E,s.y=t[i+3]-D,a&&(o=de.project(o,a),s=de.project(s,a)),(s.x-o.x)*(l.y-o.y)>(l.x-o.x)*(s.y-o.y)&&this._triangle(e,o,s,l)}static hitArea(e,t,i,r,a,o){let s={x:i.x-E,y:i.y-D},n=450/(450-r),l=450/(450-a),c=he.project(s,n),h={x:0,y:0},f={x:0,y:0};e.fillStyle=o,e.beginPath();for(let i=0,r=t.length-3;i<r;i+=2)h.x=t[i]-E,h.y=t[i+1]-D,f.x=t[i+2]-E,f.y=t[i+3]-D,a&&(h=he.project(h,l),f=he.project(f,l)),(f.x-h.x)*(c.y-h.y)>(c.x-h.x)*(f.y-h.y)&&this._triangle(e,h,f,c);e.closePath(),e.fill()}}class ce{static init(){ce.container.className="osmb-container",de.init(ce.createContext(ce.container)),fe.init(ce.createContext(ce.container)),he.init(ce.createContext(ce.container)),ue.init(ce.createContext())}static clear(){de.clear(),fe.clear(),he.clear(),ue.clear()}static setOpacity(e){de.setOpacity(e),fe.setOpacity(e),he.setOpacity(e),ue.setOpacity(e)}static render(e){_<15?ce.clear():M||requestAnimationFrame(t=>{e||(de.render(),fe.render()),he.render()})}static createContext(e){let t=document.createElement("CANVAS");t.className="osmb-layer";let i=t.getContext("2d");return i.lineCap="round",i.lineJoin="round",i.lineWidth=1,i.imageSmoothingEnabled=!1,ce.items.push(t),e&&e.appendChild(t),i}static appendTo(e){e.appendChild(ce.container)}static remove(){ce.container.parentNode.removeChild(ce.container)}static setSize(e,t){ce.items.forEach(i=>{i.width=e,i.height=t})}static setPosition(e,t){ce.container.style.left=e+"px",ce.container.style.top=t+"px"}}ce.container=document.createElement("DIV"),ce.items=[];class he{static init(e){this.context=e}static clear(){this.context.clearRect(0,0,O,A)}static setOpacity(e){this.context.canvas.style.opacity=e}static project(e,t){return{x:(e.x-C)*t+C<<0,y:(e.y-S)*t+S<<0}}static render(){this.clear();let e,t,i,r,a,o,s,n=this.context,l={x:C+E,y:S+D},c=oe.items;c.sort((e,t)=>e.minHeight-t.minHeight||B(t.center,l)-B(e.center,l)||t.height-e.height);for(let l=0,h=c.length;l<h;l++)if(e=c[l],!fe.isSimple(e)&&(r=e.footprint,ee(r))){switch(t=e.scale<1?e.height*e.scale:e.height,i=0,e.minHeight&&(i=e.scale<1?e.minHeight*e.scale:e.minHeight),a=e.wallColor||Z,o=e.altColor||V,s=e.roofColor||X,n.strokeStyle=o,e.shape){case"cylinder":ne.draw(n,e.center,e.radius,e.radius,t,i,a,o,s);break;case"cone":ne.draw(n,e.center,e.radius,0,t,i,a,o);break;case"dome":ne.draw(n,e.center,e.radius,e.radius/2,t,i,a,o);break;case"sphere":ne.draw(n,e.center,e.radius,e.radius,t,i,a,o,s);break;case"pyramid":le.draw(n,r,e.center,t,i,a,o);break;default:se.draw(n,r,e.holes,t,i,a,o,s)}switch(e.roofShape){case"cone":ne.draw(n,e.center,e.radius,0,t+e.roofHeight,t,s,""+u.parse(s).lightness(.9));break;case"dome":ne.draw(n,e.center,e.radius,e.radius/2,t+e.roofHeight,t,s,""+u.parse(s).lightness(.9));break;case"pyramid":le.draw(n,r,e.center,t+e.roofHeight,t,s,u.parse(s).lightness(.9))}}}}class fe{static init(e){this.context=e}static clear(){this.context.clearRect(0,0,O,A)}static setOpacity(e){this.context.canvas.style.opacity=e}static isSimple(e){return _<=fe.MAX_ZOOM&&e.height+e.roofHeight<fe.MAX_HEIGHT}static render(){this.clear();let e=this.context;if(_>fe.MAX_ZOOM)return;let t,i,r=oe.items;for(let a=0,o=r.length;a<o;a++)if(t=r[a],!(t.height>=fe.MAX_HEIGHT)&&(i=t.footprint,ee(i)))switch(e.strokeStyle=t.altColor||V,e.fillStyle=t.roofColor||X,t.shape){case"cylinder":case"cone":case"dome":case"sphere":ne.simplified(e,t.center,t.radius);break;default:se.simplified(e,i,t.holes)}}}fe.MAX_ZOOM=16,fe.MAX_HEIGHT=5;class de{static init(e){this.context=e}static clear(){this.context.clearRect(0,0,O,A)}static setOpacity(e){this.opacity=e}static project(e,t){return{x:e.x+this.direction.x*t,y:e.y+this.direction.y*t}}static render(){this.clear();let e,t,i,s,n=this.context;if(e=K(j+E,R+D),t=g(this.date,e.latitude,e.longitude),t.altitude<=0)return;i=1/o(t.altitude),s=i<5?.75:1/i*5,this.direction.x=a(t.azimuth)*i,this.direction.y=r(t.azimuth)*i;let l,c,h,f,d,u,p=oe.items;for(n.canvas.style.opacity=s/(2*this.opacity),n.shadowColor=this.blurColor,n.fillStyle=this.color,n.beginPath(),l=0,c=p.length;l<c;l++)if(h=p[l],u=h.footprint,ee(u)){switch(f=h.scale<1?h.height*h.scale:h.height,d=0,h.minHeight&&(d=h.scale<1?h.minHeight*h.scale:h.minHeight),h.shape){case"cylinder":ne.shadow(n,h.center,h.radius,h.radius,f,d);break;case"cone":ne.shadow(n,h.center,h.radius,0,f,d);break;case"dome":ne.shadow(n,h.center,h.radius,h.radius/2,f,d);break;case"sphere":ne.shadow(n,h.center,h.radius,h.radius,f,d);break;case"pyramid":le.shadow(n,u,h.center,f,d);break;default:se.shadow(n,u,h.holes,f,d)}switch(h.roofShape){case"cone":ne.shadow(n,h.center,h.radius,0,f+h.roofHeight,f);break;case"dome":ne.shadow(n,h.center,h.radius,h.radius/2,f+h.roofHeight,f);break;case"pyramid":le.shadow(n,u,h.center,f+h.roofHeight,f)}}n.closePath(),n.fill()}}de.color="#666666",de.blurColor="#000000",de.date=new Date,de.direction={x:0,y:0},de.opacity=1;class ue{static init(e){this.context=e}static setOpacity(e){}static clear(){}static reset(){this._idMapping=[null]}static render(){if(this._timer)return;let e=this;this._timer=setTimeout(t=>{e._timer=null,e._render()},500)}static _render(){this.clear();let e,t,i,r,a,o=this.context,s={x:C+E,y:S+D},n=oe.items;n.sort((e,t)=>e.minHeight-t.minHeight||B(t.center,s)-B(e.center,s)||t.height-e.height);for(let s=0,l=n.length;s<l;s++)if(e=n[s],(a=e.hitColor)&&(r=e.footprint,ee(r))){switch(t=e.height,i=0,e.minHeight&&(i=e.minHeight),e.shape){case"cylinder":ne.hitArea(o,e.center,e.radius,e.radius,t,i,a);break;case"cone":ne.hitArea(o,e.center,e.radius,0,t,i,a);break;case"dome":ne.hitArea(o,e.center,e.radius,e.radius/2,t,i,a);break;case"sphere":ne.hitArea(o,e.center,e.radius,e.radius,t,i,a);break;case"pyramid":le.hitArea(o,r,e.center,t,i,a);break;default:se.hitArea(o,r,e.holes,t,i,a)}switch(e.roofShape){case"cone":ne.hitArea(o,e.center,e.radius,0,t+e.roofHeight,t,a);break;case"dome":ne.hitArea(o,e.center,e.radius,e.radius/2,t+e.roofHeight,t,a);break;case"pyramid":le.hitArea(o,r,e.center,t+e.roofHeight,t,a)}}O&&A&&(this._imageData=this.context.getImageData(0,0,O,A).data)}static getIdFromXY(e,t){let i=this._imageData;if(!i)return;let r=4*((0|t)*O+(0|e)),a=i[r]|i[r+1]<<8|i[r+2]<<16;return this._idMapping[a]}static idToColor(e){let t=this._idMapping.indexOf(e);return-1===t&&(this._idMapping.push(e),t=this._idMapping.length-1),"rgb("+[255&t,t>>8&255,t>>16&255].join(",")+")"}}ue._idMapping=[null];function ge(e){E=e.x,D=e.y}function pe(e){C=j+e.x,S=A+e.y,ce.render(!0)}function ye(e){O=e.width,A=e.height,j=O/2<<0,R=A/2<<0,C=j,S=A,ce.setSize(O,A),H=400}function me(e){_=e,v=256<<_;const t=K(E+j,D+R),i=Q(t.latitude,0),r=Q(t.latitude,1);$=r.x-i.x,ce.setOpacity(Math.pow(.95,_-15)),Z=""+F,V=""+N,X=""+q}class xe extends L.Layer{constructor(e){super(e),this.offset={x:0,y:0},ce.init(),e&&e.addLayer(this)}addTo(e){return e.addLayer(this),this}onAdd(e){this.map=e,ce.appendTo(e._panes.overlayPane);let t=this.getOffset(),i=e.getPixelOrigin();ye({width:e._size.x,height:e._size.y}),ge({x:i.x-t.x,y:i.y-t.y}),me(e._zoom),ce.setPosition(-t.x,-t.y),e.on({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd,resize:this.onResize,viewreset:this.onViewReset,click:this.onClick},this),e.options.zoomAnimation&&e.on("zoomanim",this.onZoom,this),e.attributionControl&&e.attributionControl.addAttribution(P),oe.update()}onRemove(){let e=this.map;e.attributionControl&&e.attributionControl.removeAttribution(P),e.off({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd,resize:this.onResize,viewreset:this.onViewReset,click:this.onClick},this),e.options.zoomAnimation&&e.off("zoomanim",this.onZoom,this),ce.remove(),e=null}onMove(e){let t=this.getOffset();pe({x:this.offset.x-t.x,y:this.offset.y-t.y})}onMoveEnd(e){if(this.noMoveEnd)return void(this.noMoveEnd=!1);let t=this.map,i=this.getOffset(),r=t.getPixelOrigin();this.offset=i,ce.setPosition(-i.x,-i.y),pe({x:0,y:0}),ye({width:t._size.x,height:t._size.y}),ge({x:r.x-i.x,y:r.y-i.y}),ce.render(),oe.update()}onZoomStart(e){M=!0}onZoom(e){let t=this.map.latLngToContainerPoint(e.center),i=Math.pow(2,e.zoom-_),r=O/2-t.x,a=A/2-t.y,o=O/2,s=A/2;e.zoom>_?(o-=r*i,s-=a*i):(o+=r,s+=a),ce.container.classList.add("zoom-animation"),ce.container.style.transformOrigin=o+"px "+s+"px",ce.container.style.transform="translate3d(0, 0, 0) scale("+i+")"}onZoomEnd(e){ce.clear(),ce.container.classList.remove("zoom-animation"),ce.container.style.transform="translate3d(0, 0, 0) scale(1)";let t=this.map,i=this.getOffset(),r=t.getPixelOrigin();ge({x:r.x-i.x,y:r.y-i.y}),function(e){M=!1;const t=Math.pow(2,e.zoom-_);me(e.zoom),_<=15?ce.clear():(oe.scale(t),de.render(),fe.render(),he.render(),oe.update())}({zoom:t._zoom}),this.noMoveEnd=!0}onResize(){}onViewReset(){let e=this.getOffset();this.offset=e,ce.setPosition(-e.x,-e.y),pe({x:0,y:0})}onClick(e){let t=ue.getIdFromXY(e.containerPoint.x,e.containerPoint.y);t&&J({feature:t,lat:e.latlng.lat,lon:e.latlng.lng})}getOffset(){return L.DomUtil.getPosition(this.map._mapPane)}style(e){let t;return(t=(e=e||{}).color||e.wallColor)&&(F=u.parse(t),Z=""+F,N=F.lightness(.8),V=""+N,q=F.lightness(1.2),X=""+q),e.roofColor&&(q=u.parse(e.roofColor),X=""+q),ce.render(),this}date(e){return de.date=e,de.render(),this}load(e){return oe.load(e),this}set(e){return oe.set(e),this}each(e){return W=function(t){return e(t)},this}click(e){return J=function(t){return e(t)},this}}return xe.VERSION="0.3.2",xe.ATTRIBUTION=P,xe}();