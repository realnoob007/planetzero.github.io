module.exports = {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
      title: "PlanetZero",
      description: "全能AI助手",
    },
  },
  themeConfig: {
    logo: "/assets/img/logo.png",
    sidebar: "auto",
    nav: [
      { text: "首页", link: "/" },
      { text: "使用入口", link: "/ai/" },
      { text: "星球地图", link: "/xq/" },
      // { text: "使用教程", link: "/tutorial/" },
      { text: "网页版", link: "/web/" },
      // { text: "客户端下载", link: "/download/" },
      { text: "服务体系", link: "/plus/" },
      // { text: "开发者中心", link: "/developer/" },
      //{ text: "专享接入点", link: "/access/" },
      { text: "联系客服", link: "/about/" },
    ],
  },
};
