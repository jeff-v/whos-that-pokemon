(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{37:function(e,t,s){},38:function(e,t,s){},63:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(29),r=s.n(a),i=s(10),o=(s(37),s(8)),l=(s(38),s(2)),d=[{abilities:[],baseExperience:0,forms:[],game_indices:[],height:NaN,held_items:[],id:0,is_default:!1,location_area_encounters:"",moves:[],name:"",order:NaN,past_types:[],species:{name:"",url:""},sprites:{front_default:"",front_shiny:"",back_default:"",back_shiny:"",other:{dream_world:{front_default:"",front_female:""},"official-artwork":{front_default:""}},versions:{}},stats:[],types:[],weight:NaN}],j=s(19),b=s(30),m=s.n(b);function x(e){var t=e.setPokemon,s=e.setError,c=e.setPokedexState,n=Math.floor(898*Math.random()).toString();return m.a.get("https://pokeapi.co/api/v2/pokemon/".concat(n)).then((function(e){var s=e.data,a=s.sprites.front_default,r=s.name;t((function(e){return[].concat(Object(j.a)(e),[{sprite:a,name:r,number:n}])})),c((function(t){return 0===t[0].id?[e.data]:[].concat(Object(j.a)(t),[e.data])}))})).catch((function(e){console.error(e),s(!0)}))}var h=s.p+"static/media/pikapika.ac0cde3d.mp3",f=s(0);function u(e){var t=e.sprite,s=e.name,n=e.setSuccess,a=e.hardMode,r=Object(c.useState)(""),i=Object(o.a)(r,2),l=i[0],d=i[1],j=Object(c.useState)(""),b=Object(o.a)(j,2),m=b[0],x=b[1];function h(){l.toLowerCase()===s.toLowerCase()?(n(!0),d("")):(n(!1),x("animate-shake"),setTimeout((function(){return x("")}),1e3))}return Object(f.jsxs)("div",{className:"flex items-center h-auto mt-2",children:[Object(f.jsxs)("div",{className:"flex flex-col mr-2",children:[Object(f.jsx)("input",{className:"border-2 border-black rounded-md mt-5 text-center mb-5",value:l,onChange:function(e){return d(e.target.value)},onKeyDown:function(e){return"Enter"===e.key?h():void 0}}),Object(f.jsx)("button",{className:"font-bold rounded-md bg-gray-200 p-1",onClick:h,children:"Enter guess!"})]}),Object(f.jsx)("img",{className:"".concat(m," ").concat(a?"filter saturate-0 contrast-0":""),alt:"sprite",src:t})]})}var O=s(9),p=s(64),v=Object(c.memo)((function(e){var t=e.pokemon,s=t.map((function(e,t){return Object(f.jsx)("div",{className:"flex flex-col",children:Object(f.jsxs)(i.b,{to:"/pokedex/".concat(t),children:[Object(f.jsx)("img",{alt:"previous pokemon sprite ".concat(t+1),src:e.sprite}),Object(f.jsx)("div",{className:"font-extrabold",children:Object(p.a)(e.name)})]})},Object(O.a)())})).filter((function(e,s){return s!==t.length-1}));return 0===t.length?Object(f.jsx)(f.Fragment,{}):Object(f.jsx)(f.Fragment,{children:s})}));function N(e){var t,s=e.hardMode,n=Object(c.useContext)(k).setPokedexState,a=Object(c.useState)([]),r=Object(o.a)(a,2),i=r[0],l=r[1],d=Object(c.useState)(!1),j=Object(o.a)(d,2),b=j[0],m=j[1],O=Object(c.useState)(!1),p=Object(o.a)(O,2),N=p[0],g=p[1],w=Object(c.useState)(),y=Object(o.a)(w,2),S=y[0],_=y[1],P=Object(c.useMemo)((function(){return new Audio(h)}),[]),E=Object(c.useState)(""),C=Object(o.a)(E,2),M=C[0],F=C[1];return Object(c.useEffect)((function(){var e;console.log(null===(e=i[i.length-1])||void 0===e?void 0:e.name),_(i[i.length-1])}),[i]),Object(c.useEffect)((function(){b&&(F("text-green-600 animate-bounce absolute inset-0"),x({setPokemon:l,setError:g,setPokedexState:n}),P.play().catch((function(e){return console.error(e)})).finally((function(){return m(!1)})))}),[P,n,b]),N?Object(f.jsx)("div",{className:"font-bold",children:"Oh no, Team Rocket messed up our GET request!"}):Object(f.jsxs)(f.Fragment,{children:[b&&Object(f.jsx)("span",{className:"".concat(M),children:"You did it!"}),i.length>1&&Object(f.jsxs)("div",{className:"bg-gray-100 min-h-15 w-screen flex flex-wrap flex-row justify-center content-center items-center",children:[Object(f.jsx)("button",{className:"bg-blue-500 h-20 rounded-lg align-text-center w-40 p-2 text-white font-bold mr-5",onClick:function(){return l([])},children:"Clear Previous Guesses"}),Object(f.jsx)(v,{pokemon:i})]}),Object(f.jsxs)("div",{className:"h-full mt-8 w-full flex flex-col items-center",children:[Object(f.jsx)("button",{className:"rounded-md border-gray-500 cursor-auto bg-red-700 text-white p-4","data-testid":"get-new-pokemon",onClick:function(){return x({setPokemon:l,setError:g,setPokedexState:n})},children:"Get me a pokemon!"}),(null===(t=i[0])||void 0===t?void 0:t.sprite)&&Object(f.jsx)(u,{sprite:null===S||void 0===S?void 0:S.sprite,name:null===S||void 0===S?void 0:S.name,setSuccess:m,hardMode:s})]})]})}function g(){var e=Object(c.useContext)(k).pokedexState,t=Object(l.g)().positionInPreviousPokemon;if(0===e[0].id)return Object(f.jsx)(l.a,{to:"/whos-that-pokemon"});var s=e[parseInt(t,10)],n=s.sprites,a=s.name,r=s.abilities,i=s.baseExperience,o=s.height,d=s.id,j=s.forms,b=s.moves,m=s.order,x=s.past_types,h=s.stats,u=s.types,v=s.weight;return Object(f.jsxs)("div",{className:"flex items-start m-10",children:[Object(f.jsx)("img",{className:"w-1/4 flex-grow",alt:"sprite",src:n.front_default}),Object(f.jsxs)("div",{className:"pokemon-info flex flex-col items-start ml-5 flex-grow",children:[Object(f.jsx)("div",{className:"font-black text-xl",children:Object(p.a)(a)}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"font-extrabold",children:"ID:"})," ",d]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"font-extrabold",children:"Height:"})," ",o]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"font-extrabold",children:"Weight:"})," ",v]}),Object(f.jsxs)("div",{className:"flex",children:[Object(f.jsx)("span",{className:"font-extrabold",children:"Type:"}),u.map((function(e){return Object(f.jsx)("div",{className:"flex flex-col ml-1 mr-1",children:Object(p.a)(e.type.name)},Object(O.a)())}))]}),x.length>0&&Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"font-extrabold",children:"Past Types:"}),x.map((function(e){return e.types.map((function(e){return Object(f.jsx)("div",{children:Object(p.a)(e.type.name)},Object(O.a)())}))}))]}),Object(f.jsxs)("div",{className:"flex",children:[Object(f.jsx)("span",{className:"font-extrabold",children:"Forms:"}),j.map((function(e){return Object(f.jsx)("div",{className:"ml-1 mr-1",children:Object(p.a)(e.name)},Object(O.a)())}))]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"font-extrabold",children:"Order:"})," ",m]}),i&&Object(f.jsxs)("div",{children:["Base Experience: ",i]}),Object(f.jsxs)("div",{className:"flex items-start justify-evenly",children:[Object(f.jsx)("span",{className:"font-extrabold",children:"Stats:"}),h.map((function(e){return Object(f.jsxs)("div",{className:"flex flex-col flex-wrap mr-10 ml-1 items-start",children:[Object(f.jsxs)("div",{className:"whitespace-nowrap",children:[Object(f.jsx)("span",{className:"font-semibold",children:"Name:"})," ",Object(p.a)(e.stat.name)]}),Object(f.jsxs)("div",{className:"whitespace-nowrap",children:[Object(f.jsx)("span",{className:"font-semibold",children:"Base Stat:"}),Object(f.jsx)("span",{children:e.base_stat})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"font-semibold",children:"Effort:"})," ",e.effort]})]},Object(O.a)())}))]}),Object(f.jsxs)("div",{className:"flex items-start",children:[Object(f.jsx)("span",{className:"font-extrabold",children:"Abilities:"}),Object(f.jsx)("div",{className:"flex",children:r.map((function(e){return Object(f.jsxs)("div",{className:"flex flex-col ml-1 mr-1 items-start",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"font-semibold",children:"Name:"}),Object(p.a)(e.ability.name)]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"font-semibold",children:"Slot:"})," ",e.slot]}),e.is_hidden&&Object(f.jsx)("div",{className:"font-bold",children:"Hidden ability"})]},Object(O.a)())}))})]}),Object(f.jsxs)("div",{className:"flex flex-col items-start flex-wrap justify-between",children:[Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"font-extrabold",children:"Moves:"})}),Object(f.jsx)("ul",{className:"flex flex-col items-start",children:b.map((function(e){return Object(f.jsx)("li",{className:"ml-1 mr-1 flex flex-col",children:Object(p.a)(e.move.name)},Object(O.a)())}))})]})]})]})}var k=Object(c.createContext)({});function w(){var e=Object(c.useState)(d),t=Object(o.a)(e,2),s=t[0],n=t[1];return Object(f.jsxs)("div",{className:"App h-screen",children:[Object(f.jsxs)("div",{className:"nav flex w-screen justify-center items-center space-x-7 bg-blue-500 h-20 text-white text-2xl mb-30",children:[Object(f.jsx)(i.b,{to:"/whos-that-pokemon",children:"Easy mode"}),Object(f.jsx)(i.b,{to:"/whos-that-pokemon-hard-mode",children:"Hard mode"})]}),Object(f.jsx)("div",{className:"flex items-center flex-col h-full",children:Object(f.jsx)(k.Provider,{value:{pokedexState:s,setPokedexState:n},children:Object(f.jsxs)(l.d,{children:[Object(f.jsx)(l.b,{exact:!0,path:["/","/whos-that-pokemon"],children:Object(f.jsx)(N,{})}),Object(f.jsx)(l.b,{exact:!0,path:"/whos-that-pokemon-hard-mode",children:Object(f.jsx)(N,{hardMode:!0})}),Object(f.jsx)(l.b,{path:"/pokedex/:positionInPreviousPokemon",children:Object(f.jsx)(g,{})})]})})})]})}var y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,65)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),a(e),r(e)}))};r.a.render(Object(f.jsx)(i.a,{children:Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(w,{})})}),document.getElementById("root")),y()}},[[63,1,2]]]);
//# sourceMappingURL=main.9ea6099a.chunk.js.map