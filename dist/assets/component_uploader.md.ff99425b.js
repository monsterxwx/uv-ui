import{u as a}from"./chunks/copname.ba2596e6.js";import{q as t,o as l,c as n,V as e}from"./chunks/framework.9cd9f48f.js";const o=e(`<h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uvUploader</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="文件预览" tabindex="-1">文件预览 <a class="header-anchor" href="#文件预览" aria-label="Permalink to &quot;文件预览&quot;">​</a></h2><p>通过 <code>v-model</code>绑定预览数组</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uvUploader</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">picList</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="限制上传数量" tabindex="-1">限制上传数量 <a class="header-anchor" href="#限制上传数量" aria-label="Permalink to &quot;限制上传数量&quot;">​</a></h2><p>通过 <code>max-count</code>限制上传数量</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uvUploader</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">picList2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:max-count</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="限制上传大小" tabindex="-1">限制上传大小 <a class="header-anchor" href="#限制上传大小" aria-label="Permalink to &quot;限制上传大小&quot;">​</a></h2><p>通过 <code>max-size</code>限制上传大小，可传入数字、字符串、函数（返回值为布尔值）</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uvUploader</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">picList3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:max-size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">500 * 1024</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@oversize</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">onOversize</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="上传状态" tabindex="-1">上传状态 <a class="header-anchor" href="#上传状态" aria-label="Permalink to &quot;上传状态&quot;">​</a></h2><p>通过 <code>status</code> 设置 <code>uploading</code>表示上传中，设置 <code>failed</code>表示失败，传入 <code>message</code> 可自定义文字，一般通过 <code>after-read</code> 读取文件后调用上传接口来对状态进行处理</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uvUploader</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">picList1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> picList1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">status</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">uploading</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">上传中...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">status</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">failed</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">上传失败</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="上传前置处理" tabindex="-1">上传前置处理 <a class="header-anchor" href="#上传前置处理" aria-label="Permalink to &quot;上传前置处理&quot;">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uvUploader</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">before-read</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">beforeRead</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> beforeRead </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">file</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">type</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">image/jpeg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">Toast</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">请上传 jpg 格式图片</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="禁用文件上传" tabindex="-1">禁用文件上传 <a class="header-anchor" href="#禁用文件上传" aria-label="Permalink to &quot;禁用文件上传&quot;">​</a></h2><p>设置 <code>disabled</code> 为 <code>true</code> 禁用文件上传</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uvUploader</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="自定义上传样式" tabindex="-1">自定义上传样式 <a class="header-anchor" href="#自定义上传样式" aria-label="Permalink to &quot;自定义上传样式&quot;">​</a></h2><p>通过默认插槽设置自定义样式</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uvUploader</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">diy-uploader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">picList4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://cdn.uviewui.com/uview/demo/upload/positive.png</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">mode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">widthFix</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width: 250px;height: 150px;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">uvUploader</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="自定义预览样式" tabindex="-1">自定义预览样式 <a class="header-anchor" href="#自定义预览样式" aria-label="Permalink to &quot;自定义预览样式&quot;">​</a></h2><p>通过 <code>preview-cover</code> 插槽自定义预览样式，作用域插槽解构返回 <code>file</code> 和 <code>item</code> ，item为子项，file为文件对象</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uvUploader</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">picList5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">#preview-cover</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{file,item}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">diy-cover</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {{ item?.name ||file?.name }}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">uvUploader</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><table><thead><tr><th>属性</th><th style="text-align:center;">含义</th><th style="text-align:center;">类型</th><th style="text-align:right;">默认值</th></tr></thead><tbody><tr><td>v-model</td><td style="text-align:center;">已上传的文件列表</td><td style="text-align:center;">Array</td><td style="text-align:right;">[]</td></tr><tr><td>disabled</td><td style="text-align:center;">是否禁用文件上传</td><td style="text-align:center;">Boolean</td><td style="text-align:right;">false</td></tr><tr><td>deletable</td><td style="text-align:center;">是否展示删除按钮</td><td style="text-align:center;">Boolean</td><td style="text-align:right;">true</td></tr><tr><td>maxCount</td><td style="text-align:center;">文件上传数量限制</td><td style="text-align:center;">[Number, String, Function]</td><td style="text-align:right;">Infinity</td></tr><tr><td>maxSize</td><td style="text-align:center;">文件大小限制，单位为 byte</td><td style="text-align:center;">Number</td><td style="text-align:right;">Infinity</td></tr><tr><td>beforeRead</td><td style="text-align:center;">文件读取前的回调函数，返回 false 可终止文件读取，支持返回 Promise</td><td style="text-align:center;">Function</td><td style="text-align:right;">-</td></tr><tr><td>afterRead</td><td style="text-align:center;">文件读取完成后的回调函数</td><td style="text-align:center;">Function</td><td style="text-align:right;">-</td></tr><tr><td>resultType</td><td style="text-align:center;">文件读取结果类型，可选值为 file text</td><td style="text-align:center;">String</td><td style="text-align:right;">&#39;dataUrl&#39;</td></tr><tr><td>previewImage</td><td style="text-align:center;">是否在上传完成后展示预览图</td><td style="text-align:center;">Boolean</td><td style="text-align:right;">true</td></tr></tbody></table><h2 id="回调参数" tabindex="-1">回调参数 <a class="header-anchor" href="#回调参数" aria-label="Permalink to &quot;回调参数&quot;">​</a></h2><p>before-read、after-read、before-delete 执行时会传递以下回调参数：</p><table><thead><tr><th>参数名</th><th style="text-align:center;">说明</th><th style="text-align:right;">类型</th></tr></thead><tbody><tr><td>file</td><td style="text-align:center;">file 对象</td><td style="text-align:right;">Object</td></tr><tr><td>detail</td><td style="text-align:center;">额外信息，包含 name 和 index 字段</td><td style="text-align:right;">Object</td></tr></tbody></table><h2 id="resulttype-可选值" tabindex="-1">ResultType 可选值 <a class="header-anchor" href="#resulttype-可选值" aria-label="Permalink to &quot;ResultType 可选值&quot;">​</a></h2><p><code>result-type</code> 字段表示文件读取结果的类型，上传大文件时，建议使用 file 类型，避免卡顿。</p><table><thead><tr><th>值</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td>file</td><td style="text-align:center;">结果仅包含 File 对象</td></tr><tr><td>text</td><td style="text-align:center;">结果包含 File 对象，以及文件的文本内容</td></tr><tr><td>dataUrl</td><td style="text-align:center;">结果包含 File 对象，以及文件对应的 base64 编码</td></tr></tbody></table><h2 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th style="text-align:center;">含义</th><th style="text-align:right;">参数</th></tr></thead><tbody><tr><td>oversize</td><td style="text-align:center;">文件大小超过限制时触发</td><td style="text-align:right;">同 after-read</td></tr><tr><td>delete</td><td style="text-align:center;">点击预览图时触发</td><td style="text-align:right;">同 after-read</td></tr><tr><td>click-upload</td><td style="text-align:center;">点击上传区域时触发</td><td style="text-align:right;">event</td></tr><tr><td>click-preview</td><td style="text-align:center;">点击预览图时触发</td><td style="text-align:right;">item</td></tr></tbody></table><h2 id="slots" tabindex="-1">slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;slots&quot;">​</a></h2><table><thead><tr><th>名称</th><th style="text-align:center;">含义</th><th style="text-align:right;">参数</th></tr></thead><tbody><tr><td>default</td><td style="text-align:center;">自定义上传区域</td><td style="text-align:right;">-</td></tr><tr><td>preview-delete</td><td style="text-align:center;">自定义删除按钮</td><td style="text-align:right;">-</td></tr><tr><td>preview-cover</td><td style="text-align:center;">自定义覆盖在预览区域上方的内容</td><td style="text-align:right;">item,file</td></tr></tbody></table><h2 id="css变量" tabindex="-1">css变量 <a class="header-anchor" href="#css变量" aria-label="Permalink to &quot;css变量&quot;">​</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--uv-uploader-upload-size-width: 80px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-uploader-upload-size-height: 80px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-uploader-upload-gap: 8px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-uploader-delete-shadow-size: 14px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-uploader-delete-shadow-border-radius: 0 0 0 12px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-uploader-delete-shadow-background: rgb(0 0 0 / 70%);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-uploader-delete-icon-transform: scale(0</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">6</span><span style="color:#A6ACCD;">) translate(20%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> -30%);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-uploader-img-object-fit: cover;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-uploader-upload-wrapper-bg-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f7f8fa;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-uploader-mask-background: rgb(50 50 51 / 88%);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-uploader-mask-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ffffff;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-uploader-uploading-wrapper-gap: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-uploader-uploading-wrapper-font-size: 12px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-uploader-uploading-size: 15px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --uv-uploader-uploading-margin-right: 5px;</span></span></code></pre></div>`,39),p=[o],F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/uploader.md","filePath":"component/uploader.md","lastUpdated":1684984155000}'),r={name:"component/uploader.md"},h=Object.assign(r,{setup(c){const s=a();return t(()=>{s.updateName("uploader")}),(y,i)=>(l(),n("div",null,p))}});export{F as __pageData,h as default};