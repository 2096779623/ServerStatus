// 配置
window.Config = {

  // 站点名
  SiteName: '运行监测 | 2096779623',

  // 站点链接
  SiteUrl: './',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'api.uptimerobot.com',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm789786831-8e83e7439a12d71d634f89f7',
    'm790035296-a77af8b243b6ad5913754502',
    'm790035300-98638bc8df03d24502b50082',
    'm790035303-0928615dd1c1a0a24f37f146',
    'm790035304-632ab6ae178d84274c63e813',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 45,

  // 导航栏菜单
  Navi: [
    {
      text: '博客',
      url: 'https://blog.utermux.eu.org/'
    }
  ]
};
