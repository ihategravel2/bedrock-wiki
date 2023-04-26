import{_ as u,c as d,a as n,w as a,e as t,b as s,d as e,r as l,o as D}from"./404.md.7bfc4a1e.js";const m="/assets/images/guide/custom_item/ectoplasm_view.png",G=JSON.parse('{"title":"Create a custom Item","description":"","frontmatter":{"title":"Create a custom Item","category":"Guide","nav_order":5,"prefix":"5. "},"headers":[{"level":2,"title":"Item Behavior","slug":"item-behavior","link":"#item-behavior","children":[{"level":3,"title":"Components","slug":"components","link":"#components","children":[]},{"level":3,"title":"Identifier","slug":"identifier","link":"#identifier","children":[]},{"level":3,"title":"Item File","slug":"item-file","link":"#item-file","children":[]}]},{"level":2,"title":"Item Visuals","slug":"item-visuals","link":"#item-visuals","children":[{"level":3,"title":"Texture","slug":"texture","link":"#texture","children":[]},{"level":3,"title":"Shortname","slug":"shortname","link":"#shortname","children":[]},{"level":3,"title":"Icon","slug":"icon","link":"#icon","children":[]},{"level":3,"title":"Item Name","slug":"item-name","link":"#item-name","children":[]}]},{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"Your progress so far","slug":"your-progress-so-far","link":"#your-progress-so-far","children":[]}],"relativePath":"guide/custom-item.md"}'),y={name:"guide/custom-item.md"},F=t("",15),h=t("",12),C=t("",4),_=t("",3),b=t("",2),f=t("",9),A=t("",2),w=s("h3",{id:"shortname",tabindex:"-1"},[e("Shortname "),s("a",{class:"header-anchor",href:"#shortname","aria-hidden":"true"},"#")],-1),g=s("p",null,"A shortname is essentially a name that is assigned to the folder path of the texture, so whenever we want to use a texture somewhere, we will use its shortname instead of its folder path.",-1),v=s("p",null,[e("All item shortnames are stored in one file called "),s("code",null,"item_texture.json"),e(" which is in "),s("code",null,"RP/textures"),e(". This contains a list of shortnames and its assigned textures.")],-1),x=t("",3),T=t("",5),k=t("",5),q=t("",5),I=s("div",{class:"language-json line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"json"),s("pre",{class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}},"format_version"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"1.16.100"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}},"minecraft:item"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"description"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"identifier"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"wiki:ectoplasm"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"category"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"Items"),s("span",{style:{color:"#89DDFF"}},'"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"},")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"components"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"minecraft:max_stack_size"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"16"),s("span",{style:{color:"#89DDFF"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"minecraft:icon"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},"texture"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"wiki.ectoplasm"),s("span",{style:{color:"#89DDFF"}},'"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br")])],-1),E=s("div",{class:"language-json line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"json"),s("pre",{class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}},"resource_pack_name"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"Ghostly Guide"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}},"texture_name"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"atlas.items"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}},"texture_data"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"wiki.ectoplasm"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"textures"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"textures/items/ectoplasm"),s("span",{style:{color:"#89DDFF"}},'"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br")])],-1),P=s("p",null,[e("If you're having some trouble, check the "),s("a",{href:"/items/troubleshooting-items.html"},"Troubleshooting page"),e(". If that doesn't help, compare your results with the "),s("a",{href:"https://github.com/Bedrock-OSS/wiki-addon/tree/main/guide",target:"_blank",rel:"noreferrer"},"example files"),e(".")],-1),S=s("h2",{id:"your-progress-so-far",tabindex:"-1"},[e("Your progress so far "),s("a",{class:"header-anchor",href:"#your-progress-so-far","aria-hidden":"true"},"#")],-1),j=s("ul",null,[s("li",null,"[x] Setup your pack"),s("li",null,"[x] Create a custom item"),s("li",null,"[x] How to format the behavior and resource files for an item"),s("li",null,"[x] What components are and how to use them"),s("li",null,"[x] How to set an items texture"),s("li",null,"[ ] Create a custom entity"),s("li",null,"[ ] Create the entity's loot, spawn rules, and a custom recipe")],-1);function B(N,V,R,W,z,H){const o=l("CodeHeader"),p=l("Spoiler"),i=l("BButton"),r=l("FolderView"),c=l("Checklist");return D(),d("div",null,[F,n(p,{title:"Example Components"},{default:a(()=>[n(o,null,{default:a(()=>[e('components/ ```json "minecraft:food": "minecraft:foil": true, "minecraft:max_stack_size": 16 ``` ')]),_:1})]),_:1}),h,n(o,null,{default:a(()=>[e("BP/items/ectoplasm.json")]),_:1}),C,n(o,null,{default:a(()=>[e("ectoplasm.json/minecraft:item/")]),_:1}),_,n(o,null,{default:a(()=>[e("ectoplasm.json/minecraft:item/")]),_:1}),b,n(o,null,{default:a(()=>[e("BP/items/ectoplasm.json")]),_:1}),f,n(i,{link:"https://raw.githubusercontent.com/Bedrock-OSS/wiki-addon/86b0380310d3d5748a43a4be1f93d4c59668e4bf/guide/guide_RP/textures/items/ectoplasm.png"},{default:a(()=>[e("Download texture here")]),_:1}),A,n(r,{paths:["RP/textures/items/ectoplasm.png"]},null,8,["paths"]),w,g,v,n(o,null,{default:a(()=>[e("RP/textures/item_texture.json")]),_:1}),x,n(o,null,{default:a(()=>[e("RP/textures/item_texture.json/texture_data")]),_:1}),T,n(o,null,{default:a(()=>[e("ectoplasm.json/minecraft:item/")]),_:1}),k,n(o,null,{default:a(()=>[e("RP/texts/en_US.lang")]),_:1}),q,n(r,{paths:["RP/textures/item_texture.json","RP/textures/items/ectoplasm.png","RP/texts/en_US.lang","RP/texts/languages.json","RP/manifest.json","RP/pack_icon.png","BP/items/ectoplasm.json","BP/texts/en_US.lang","BP/texts/languages.json","BP/manifest.json","BP/pack_icon.png"]},null,8,["paths"]),n(p,{title:"Full ectoplasm.json"},{default:a(()=>[n(o,null,{default:a(()=>[e("BP/items/ectoplasm.json")]),_:1}),I]),_:1}),n(p,{title:"Full item_texture.json"},{default:a(()=>[n(o,null,{default:a(()=>[e("RP/textures/item_texture.json")]),_:1}),E]),_:1}),P,S,n(c,null,{default:a(()=>[j]),_:1})])}const O=u(y,[["render",B]]);export{G as __pageData,O as default};