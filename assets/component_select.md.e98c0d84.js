import{u as a}from"./chunks/copname.ba2596e6.js";import{q as n,o as l,c as t,V as e}from"./chunks/framework.9cd9f48f.js";const p=e(`<h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p>通过 <code>v-model</code> 绑定选中的值，通过 <code>list</code> 绑定渲染列表，通过 <code>keyName</code> 绑定显示的字段</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-select</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:list</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">key-name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请选择</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="是否可搜索" tabindex="-1">是否可搜索 <a class="header-anchor" href="#是否可搜索" aria-label="Permalink to &quot;是否可搜索&quot;">​</a></h2><p>通过 <code>filterable</code> 开启</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-select</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请选择</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">item-bg-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#f5f7fa</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:list</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key-name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">filterable</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="空数据" tabindex="-1">空数据 <a class="header-anchor" href="#空数据" aria-label="Permalink to &quot;空数据&quot;">​</a></h2><p>可以使用插槽自定义内容,通过 <code>empty</code> 名称插槽自定义</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-select</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请选择</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">#empty</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">padding: 10px;font-size: 14px;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     测试空数据</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">uv-select</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="开启多选" tabindex="-1">开启多选 <a class="header-anchor" href="#开启多选" aria-label="Permalink to &quot;开启多选&quot;">​</a></h2><p>通过 <code>multiple</code> 开启</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-select</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:list</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key-name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">multiple</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请选择</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><table><thead><tr><th>属性</th><th style="text-align:center;">含义</th><th style="text-align:center;">类型</th><th style="text-align:right;">默认值</th></tr></thead><tbody><tr><td>modelValue</td><td style="text-align:center;">双向绑定的值</td><td style="text-align:center;">[String, Array, Number]</td><td style="text-align:right;">1</td></tr><tr><td>placeholder</td><td style="text-align:center;">默认显示的值</td><td style="text-align:center;">String</td><td style="text-align:right;">-</td></tr><tr><td>filterable</td><td style="text-align:center;">可筛选</td><td style="text-align:center;">Boolean</td><td style="text-align:right;">false</td></tr><tr><td>multiple</td><td style="text-align:center;">可多选</td><td style="text-align:center;">Boolean</td><td style="text-align:right;">false</td></tr><tr><td>list</td><td style="text-align:center;">渲染的列表</td><td style="text-align:center;">Array</td><td style="text-align:right;">-</td></tr><tr><td>keyName</td><td style="text-align:center;">子项显示的字段</td><td style="text-align:center;">String</td><td style="text-align:right;">-</td></tr><tr><td>itemBgColor</td><td style="text-align:center;">子项背景颜色</td><td style="text-align:center;">String</td><td style="text-align:right;">-</td></tr></tbody></table><h2 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th style="text-align:center;">含义</th><th style="text-align:right;">参数</th></tr></thead><tbody><tr><td>change</td><td style="text-align:center;">选项改变时</td><td style="text-align:right;">-</td></tr></tbody></table><h2 id="css变量" tabindex="-1">css变量 <a class="header-anchor" href="#css变量" aria-label="Permalink to &quot;css变量&quot;">​</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--uv-select-height: 36px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-width: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-border: 1px solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">dcdfe6;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-bg-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ffffff;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-border-radius: 4px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-padding: 0 10px 0 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-active-border: 1px solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">409eff;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-placeholder-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">d3c9d6;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-placeholder-font-size: 14px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-multiple-item-bg-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f0f2f5;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-multiple-item-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">909399;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-input-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">606266;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-input-font-size: 14px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-box-box-shadow: 0 0 12px rgb(0 0 0 / 12%);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-box-bg-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ffffff;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-box-border-radius: 4px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-box-height: 150px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-box-z-index: 999;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-box-content-padding-top: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-box-item-margin-bottom: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-box-item-padding: 10px 20px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-box-item-font-size: 14px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-box-item-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">606266;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-box-item-select-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">409eff;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-box-item-select-font-weight: 700;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-box-content-empty-default-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">606266;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-select-box-content-empty-default-font-size: 14px;</span></span></code></pre></div>`,18),o=[p],d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/select.md","filePath":"component/select.md","lastUpdated":1672126076000}'),c={name:"component/select.md"},C=Object.assign(c,{setup(r){const s=a();return n(()=>{s.updateName("select")}),(D,y)=>(l(),t("div",null,o))}});export{d as __pageData,C as default};