// 配置
window.Config = {

  // 站点名
  SiteName: 'XMQA\u8fd0\u884c\u76d1\u89c6',

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
    'm788751474-240bfd55175ea668209e2629',
    'm788751229-6443b83473471c1e1e9ea0ac',
    'm788751227-05c94800e204d0af59c10e8f',
    'm788776745-a6a27560a6d194a302c186dc',
    'm788776752-07c8da42d851697ef7cdf3bc',
    'm788776873-0df9afcef5a599cb3736baef',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Blog',
      url: 'https://huahuo-cn.tk/'
    }
  ]
};
