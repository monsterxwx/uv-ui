import{u as a}from"./chunks/copname.ba2596e6.js";import{q as n,o as l,c as t,V as e}from"./chunks/framework.9cd9f48f.js";const o=e(`<h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p>通过 <code>v-model</code> 进行双向绑定,通过 <code>label</code> 指定显示内容，也可以通过默认插槽进行自定义</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">数据1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="自定义形状" tabindex="-1">自定义形状 <a class="header-anchor" href="#自定义形状" aria-label="Permalink to &quot;自定义形状&quot;">​</a></h2><p>通过 <code>shape</code> 设置，可选值为 <code>square</code> 、 <code>round</code></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-checkbox</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">shape</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">square</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="禁用状态" tabindex="-1">禁用状态 <a class="header-anchor" href="#禁用状态" aria-label="Permalink to &quot;禁用状态&quot;">​</a></h2><p>通过 <code>disabled</code> 设置</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-checkbox</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">单选框</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="自定义选中背景色" tabindex="-1">自定义选中背景色 <a class="header-anchor" href="#自定义选中背景色" aria-label="Permalink to &quot;自定义选中背景色&quot;">​</a></h2><p>通过 <code>checkedColor</code> 设置</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-checkbox</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">checked-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> 单选框</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">uv-checkbox</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="文本位置" tabindex="-1">文本位置 <a class="header-anchor" href="#文本位置" aria-label="Permalink to &quot;文本位置&quot;">​</a></h2><p>通过 <code>labelPosition</code> 设置，可选值为 <code>left</code> 、 <code>right</code>，默认 <code>right</code></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-checkbox</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">单选框</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">shape</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">square</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label-position</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">left</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="是否两边排布" tabindex="-1">是否两边排布 <a class="header-anchor" href="#是否两边排布" aria-label="Permalink to &quot;是否两边排布&quot;">​</a></h2><p>通过 <code>spaceBetween</code> 开启</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-checkbox</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">单选框</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">space-between</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label-position</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">left</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="多选组" tabindex="-1">多选组 <a class="header-anchor" href="#多选组" aria-label="Permalink to &quot;多选组&quot;">​</a></h2><p>通过 <code>uv-checkbox-group</code> 组件包裹,通过 <code>v-model</code> 绑定数组类型数据</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-checkbox-group</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">checkArr</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-checkbox</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-checkbox</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-checkbox</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-checkbox</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test4</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-checkbox</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test41</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-checkbox</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test42</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-checkbox</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test43</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">uv-checkbox-group</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="限制最大选择数量" tabindex="-1">限制最大选择数量 <a class="header-anchor" href="#限制最大选择数量" aria-label="Permalink to &quot;限制最大选择数量&quot;">​</a></h2><p>通过 <code>max</code> 属性设置</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-checkbox-group</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">checkArr1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:max</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-checkbox</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-checkbox</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-checkbox</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uv-checkbox</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test4</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">uv-checkbox-group</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="checkbox-props" tabindex="-1">checkbox props <a class="header-anchor" href="#checkbox-props" aria-label="Permalink to &quot;checkbox props&quot;">​</a></h2><table><thead><tr><th>属性</th><th style="text-align:center;">含义</th><th style="text-align:center;">类型</th><th style="text-align:right;">默认值</th></tr></thead><tbody><tr><td>modelValue</td><td style="text-align:center;">双向绑定的值</td><td style="text-align:center;">Boolean</td><td style="text-align:right;">false</td></tr><tr><td>shape</td><td style="text-align:center;">选项形状，可选&#39;round&#39;,&#39;square&#39;</td><td style="text-align:center;">String</td><td style="text-align:right;">&#39;round&#39;</td></tr><tr><td>label</td><td style="text-align:center;">标签名</td><td style="text-align:center;">String</td><td style="text-align:right;">-</td></tr><tr><td>disabled</td><td style="text-align:center;">是否禁用</td><td style="text-align:center;">Boolean</td><td style="text-align:right;">false</td></tr><tr><td>checkedColor</td><td style="text-align:center;">选择的颜色</td><td style="text-align:center;">String</td><td style="text-align:right;">-</td></tr><tr><td>labelPosition</td><td style="text-align:center;">标签名位置，可选&#39;left&#39;,&#39;right&#39;</td><td style="text-align:center;">String</td><td style="text-align:right;">&#39;right&#39;</td></tr><tr><td>spaceBetween</td><td style="text-align:center;">是否两边排布</td><td style="text-align:center;">Boolean</td><td style="text-align:right;">false</td></tr></tbody></table><h2 id="checkbox-group-props" tabindex="-1">checkbox-group props <a class="header-anchor" href="#checkbox-group-props" aria-label="Permalink to &quot;checkbox-group props&quot;">​</a></h2><table><thead><tr><th>属性</th><th style="text-align:center;">含义</th><th style="text-align:center;">类型</th><th style="text-align:right;">默认值</th></tr></thead><tbody><tr><td>modelValue</td><td style="text-align:center;">双向绑定的值</td><td style="text-align:center;">Array</td><td style="text-align:right;">[]</td></tr><tr><td>max</td><td style="text-align:center;">最大选中个数</td><td style="text-align:center;">Number</td><td style="text-align:right;">-</td></tr><tr><td>direction</td><td style="text-align:center;">排布规则，可选&#39;column&#39;纵向,&#39;row&#39;横向</td><td style="text-align:center;">String</td><td style="text-align:right;">&#39;row&#39;</td></tr><tr><td>iconSize</td><td style="text-align:center;">图标大小</td><td style="text-align:center;">[Number, String]</td><td style="text-align:right;">18</td></tr><tr><td>checkedColor</td><td style="text-align:center;">选中的背景颜色</td><td style="text-align:center;">String</td><td style="text-align:right;">&#39;#1989fa&#39;</td></tr><tr><td>shape</td><td style="text-align:center;">选项形状，可选&#39;round&#39;,&#39;square&#39;</td><td style="text-align:center;">String</td><td style="text-align:right;">&#39;round&#39;</td></tr></tbody></table><h2 id="checkbox-events" tabindex="-1">checkbox events <a class="header-anchor" href="#checkbox-events" aria-label="Permalink to &quot;checkbox events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th style="text-align:center;">含义</th><th style="text-align:right;">参数</th></tr></thead><tbody><tr><td>change</td><td style="text-align:center;">选项改变时</td><td style="text-align:right;">当前的值</td></tr></tbody></table><h2 id="checkbox-group-events" tabindex="-1">checkbox-group events <a class="header-anchor" href="#checkbox-group-events" aria-label="Permalink to &quot;checkbox-group events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th style="text-align:center;">含义</th><th style="text-align:right;">参数</th></tr></thead><tbody><tr><td>change</td><td style="text-align:center;">选项改变时</td><td style="text-align:right;">当前选择的数组</td></tr></tbody></table><h2 id="checkbox-css变量" tabindex="-1">checkbox css变量 <a class="header-anchor" href="#checkbox-css变量" aria-label="Permalink to &quot;checkbox css变量&quot;">​</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--uv-check-box-icon-border: 1px solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">c8c9cc;</span></span>
<span class="line"><span style="color:#A6ACCD;">    --uv-check-box-icon-active-border: 1px solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">1989fa;</span></span>
<span class="line"><span style="color:#A6ACCD;">    --uv-check-box-icon-active-bg-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">1989fa;</span></span>
<span class="line"><span style="color:#A6ACCD;">    --uv-check-box-icon-disabled-border: 1px solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">c8c9cc;</span></span>
<span class="line"><span style="color:#A6ACCD;">    --uv-check-box-icon-disabled-bg-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ebedf0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    --uv-check-box-text-margin: 8px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    --uv-check-box-text-size: 14px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    --uv-check-box-space-between-padding: 0 10px;</span></span></code></pre></div><h2 id="checkbox-group-css变量" tabindex="-1">checkbox-group css变量 <a class="header-anchor" href="#checkbox-group-css变量" aria-label="Permalink to &quot;checkbox-group css变量&quot;">​</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--uv-checkbox-group-gap: 10px;</span></span></code></pre></div>`,36),p=[o],d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/checkbox.md","filePath":"component/checkbox.md","lastUpdated":1672216234000}'),c={name:"component/checkbox.md"},h=Object.assign(c,{setup(r){const s=a();return n(()=>{s.updateName("checkbox")}),(D,F)=>(l(),t("div",null,p))}});export{d as __pageData,h as default};