import{u as e}from"./chunks/copname.ba2596e6.js";import{q as a,o as s,c as n,V as l}from"./chunks/framework.9cd9f48f.js";const o=l(`<h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uvSignature</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@submit</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">submitImg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="修改画笔宽度和颜色" tabindex="-1">修改画笔宽度和颜色 <a class="header-anchor" href="#修改画笔宽度和颜色" aria-label="Permalink to &quot;修改画笔宽度和颜色&quot;">​</a></h2><p>通过 <code>lineWidth</code> 设置画笔宽度,通过 <code>pen-color</code> 设置画笔颜色</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uvSignature</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">pen-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#bfa</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:line-width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><p>通过<code>footer</code>名称插槽可以替换操作按钮</p><h2 id="ref" tabindex="-1">ref <a class="header-anchor" href="#ref" aria-label="Permalink to &quot;ref&quot;">​</a></h2><p>通过ref可以拿到这两个方法 <code>clear</code> 、<code>submit</code></p><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><table><thead><tr><th>属性</th><th style="text-align:center;">含义</th><th style="text-align:center;">类型</th><th style="text-align:right;">默认值</th></tr></thead><tbody><tr><td>width</td><td style="text-align:center;">宽度</td><td style="text-align:center;">String</td><td style="text-align:right;">&#39;100%&#39;</td></tr><tr><td>height</td><td style="text-align:center;">高度</td><td style="text-align:center;">String</td><td style="text-align:right;">&#39;200px&#39;</td></tr><tr><td>lineWidth</td><td style="text-align:center;">画笔的宽度</td><td style="text-align:center;">Number</td><td style="text-align:right;">3</td></tr><tr><td>penColor</td><td style="text-align:center;">画笔的颜色</td><td style="text-align:center;">String</td><td style="text-align:right;">&#39;#000&#39;</td></tr><tr><td>exportImgType</td><td style="text-align:center;">导出图片的类型</td><td style="text-align:center;">String</td><td style="text-align:right;">&#39;png&#39;</td></tr><tr><td>clearButtonText</td><td style="text-align:center;">清空的名字</td><td style="text-align:center;">String</td><td style="text-align:right;">&#39;清空&#39;</td></tr><tr><td>confirmButtonText</td><td style="text-align:center;">确定的名字</td><td style="text-align:center;">String</td><td style="text-align:right;">&#39;确认&#39;</td></tr></tbody></table><h2 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th style="text-align:center;">含义</th><th style="text-align:right;">参数</th></tr></thead><tbody><tr><td>start</td><td style="text-align:center;">开始签名时触发</td><td style="text-align:right;">-</td></tr><tr><td>end</td><td style="text-align:center;">结束签名时触发</td><td style="text-align:right;">-</td></tr><tr><td>signing</td><td style="text-align:center;">签名过程中触发</td><td style="text-align:right;">event: TouchEvent</td></tr><tr><td>submit</td><td style="text-align:center;">点击确定按钮时触发</td><td style="text-align:right;">&#39;data: { image: string; canvas: HTMLCanvasElement }&#39;</td></tr><tr><td>clear</td><td style="text-align:center;">点击取消按钮时触发</td><td style="text-align:right;">-</td></tr></tbody></table><h2 id="css变量" tabindex="-1">css变量 <a class="header-anchor" href="#css变量" aria-label="Permalink to &quot;css变量&quot;">​</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--uv-signature-default-gap: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-signature-content-border: 1px dotted </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">dadada;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-signature-content-border-radius: 8px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-signature-content-bg-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ffffff;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-signature-footer-button-text-padding: 8px 16px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-signature-footer-button-text-size: 12px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-signature-footer-button-border-radius: 4px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-signature-footer-clear-button-border: 1px solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">dcdee0;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-signature-footer-clear-button-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">323233;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-signature-footer-clear-button-bg-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ffffff;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-signature-footer-confim-button-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ffffff;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-signature-footer-confim-button-bg-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">1989fa;</span></span></code></pre></div>`,15),r=[o],h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/signature.md","filePath":"component/signature.md","lastUpdated":1683795268000}'),p={name:"component/signature.md"},u=Object.assign(p,{setup(c){const t=e();return a(()=>{t.updateName("signature")}),(d,i)=>(s(),n("div",null,r))}});export{h as __pageData,u as default};