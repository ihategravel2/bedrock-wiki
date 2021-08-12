import{r as n,o as s,c as a,a as t,w as e,b as p,d as o}from"./404.md.0eff16ad.js";const r='{"title":"Spawning Items","description":"","frontmatter":{"title":"Spawning Items"},"headers":[{"level":2,"title":"Entity Deaths","slug":"entity-deaths"},{"level":2,"title":"Dummy Entity Deaths","slug":"dummy-entity-deaths"},{"level":2,"title":"Interactions","slug":"interactions"},{"level":2,"title":"All-Purpose Method","slug":"all-purpose-method"},{"level":3,"title":"behavior","slug":"behavior"},{"level":3,"title":"Animation Controller","slug":"animation-controller"}],"relativePath":"items/spawning-items.md","lastUpdated":1628753683001}',l={},i=p("Intermediate"),c=t("p",null,"It is fairly common to want to spawn an item in the world, as if dropped. This page will walk through how to accomplish this through various methods, including Entity Deaths, Interactions, and an all-purpose method.",-1),u=t("h2",{id:"entity-deaths"},[t("a",{class:"header-anchor",href:"#entity-deaths","aria-hidden":"true"},"#"),p(" Entity Deaths")],-1),m=t("p",null,[p("The simplest method of spawning items - and generally the most common one - is dropping items upon an entity's death. This is done by adding the "),t("code",null,"minecraft:loot"),p(" component to the entity and linking it to the respective loot table ("),t("code",null,"forium"),p(" in the following example) containing items you wish to be dropped.")],-1),b=o('',4),d=o('',4),k=o('',7),h=o('',4),q=o('',1);l.render=function(p,o,r,l,y,_){const f=n("Label"),g=n("CodeHeader");return s(),a("div",null,[t(f,{color:"yellow"},{default:e((()=>[i])),_:1}),c,u,m,t(g),b,t(g),d,t(g),k,t(g),h,t(g),q])};export default l;export{r as __pageData};