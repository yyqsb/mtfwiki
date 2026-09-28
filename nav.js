// nav.js —— 侧边栏导航配置
// 加文章时，只需要在对应的 items 数组里加一行

window.SITE_NAV = [

  // ── 主导航 ──
  {
    title: "主导航",
    items: [
      { text: "首页", link: "docs/home.md" }
    ]
  },

  // ── 医疗指南 ──
  {
    title: "文档",
    items: [
      { text: "概念", link: "docs/concepts.md" },
      { text: "HRT",     link: "docs/hrt.md" },
      { text: "雌二醇",     link: "docs/estrogen.md" },
      { text: "抗雄",     link: "docs/anti-androgens.md" },
      { text: "DIY 雌二醇凝胶",     link: "docs/diy1.md" },
      { text: "DIY 雌二醇贴片",     link: "docs/diy2.md" },
      { text: "古法测睾酮",     link: "docs/test.md" }
    ]
  },

 

  // ── 经验库 ──
  {
    title: "工具",
    items: [
      { text: "激素计算/曲线", link: "docs/tool.md" },
      { text: "罩杯计算", link: "docs/tool2.md" }
    ]
  },

  // ── 外链分组（示例，可删） ──
  {
    title: "外部资源",
    items: [
      { text: "MtF.wiki", link: "https://mtf.wiki", external: true },
      { text: "transfemscience.org", link: "https://transfemscience.org", external: true },
      { text: "2345.LGBT", link: "https://2345.lgbt", external: true },
      { text: "RLE.wiki", link: "https://rle.wiki", external: true }
      
    ]
  }

];