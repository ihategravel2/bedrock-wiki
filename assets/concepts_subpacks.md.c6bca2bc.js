import{_ as c,c as r,a,w as u,e as o,b as s,d as n,r as t,o as l}from"./404.md.7f2bd61e.js";const S='{"title":"Subpacks","description":"","frontmatter":{"title":"Subpacks"},"headers":[{"level":2,"title":"What are Subpacks?","slug":"what-are-subpacks"},{"level":2,"title":"How do Subpacks work?","slug":"how-do-subpacks-work"},{"level":2,"title":"Creating Subpacks","slug":"creating-subpacks"},{"level":2,"title":"Manifest Part","slug":"manifest-part"},{"level":2,"title":"Known Things","slug":"known-things"}],"relativePath":"concepts/subpacks.md"}',i={},k=o('<h2 id="what-are-subpacks" tabindex="-1">What are Subpacks? <a class="header-anchor" href="#what-are-subpacks" aria-hidden="true">#</a></h2><p>Subpacks allow you to select between different addon &#39;configurations&#39;.</p><p>They are intended for texture resolutions to load on different memory capacities, but can also be used to create file variations in behavior and resource packs. These variations can be selected by clicking the gear icon and adjusting the slider.</p><h2 id="how-do-subpacks-work" tabindex="-1">How do Subpacks work? <a class="header-anchor" href="#how-do-subpacks-work" aria-hidden="true">#</a></h2><p>Files placed in you subpack folder will override files placed in your main addon folder, if the subpack is selected. For example, if your addon contains both <code>RP/textures/entities/ghost.png</code> and <code>RP/subpacks/pack_1/textures/ghost.png</code>, the second image file will replace the first, if subpack <code>pack_1</code> is selected.</p><p>For more information about how files override each other, please see our page on <a href="/concepts/overwriting-assets.html">overriding vanilla assets</a>.</p><h2 id="creating-subpacks" tabindex="-1">Creating Subpacks <a class="header-anchor" href="#creating-subpacks" aria-hidden="true">#</a></h2><ul><li>To start adding a subpack you need to create a <code>subpacks</code> folder inside the root of your <code>BP</code>/<code>RP</code>.</li><li>Then inside the <code>subpacks</code> folder add a folder for each subpack you want to have e.g.</li></ul>',8),d=s("ul",null,[s("li",null,"Inside each of these folders you can add the content of each subpack. This can be anything that normally goes in your behavior or resource pack. e.g.")],-1),b=s("h2",{id:"manifest-part",tabindex:"-1"},[n("Manifest Part "),s("a",{class:"header-anchor",href:"#manifest-part","aria-hidden":"true"},"#")],-1),h=s("p",null,[n("To register the subpacks in the manifest you need to add "),s("code",null,"subpacks"),n(" and this contains an array of subpacks.")],-1),m=s("p",null,"Example:",-1),_=n("RP/manifest.json"),f=o(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
	<span class="token property">&quot;header&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Pack Name&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Pack Description&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2fc2dd6f-86cb-4370-af70-21490a1ae471&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;min_engine_version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;resources&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;f6821b4a-1854-44fc-a8a4-0c2847ffda46&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">&quot;subpacks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;folder_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;subpack_1&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;First Subpack&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;memory_tier&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;folder_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;subpack_2&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Second Subpack&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;memory_tier&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><ul><li><p><code>name</code> - name that will show when selecting subpacks.</p></li><li><p><code>memory_tier</code>- amount of RAM that device must have to enable this subpack. 1 memory tier = 0.25 GB.</p></li><li><p><code>folder_name</code> - name of the folder to be used for this subpack, for example in the examples above this would be <code>subpack_1</code> or <code>subpack_2</code>.</p></li></ul><h2 id="known-things" tabindex="-1">Known Things <a class="header-anchor" href="#known-things" aria-hidden="true">#</a></h2><p>If you add only one subpack, there will be 2 options at the subpacks selection section, however second resolution (no subpack actually) does <strong>not</strong> make content in the root folder override subpacks.</p>`,4);function q(g,y,w,v,x,T){const e=t("FolderView"),p=t("CodeHeader");return l(),r("div",null,[k,a(e,{paths:["RP/subpacks/subpack_1","RP/subpacks/subpack_2"]}),d,a(e,{paths:["RP/subpacks/subpack_1/textures/blocks/dirt.png","RP/subpacks/subpack_1/textures/items/example_item.png","RP/subpacks/subpack_2/textures/blocks/dirt.png","RP/subpacks/subpack_2/textures/items/example_item.png"]},null,8,["paths"]),b,h,m,a(p,null,{default:u(()=>[_]),_:1}),f])}var R=c(i,[["render",q]]);export{S as __pageData,R as default};