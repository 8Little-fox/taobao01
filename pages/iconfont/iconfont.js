Component({
  properties: {
    // sangeren | jia | sousuo | xiaojiahao | jia1 | xinxi | xiangji | scan | jian | tianmaochaoshi | you | contact | xj-pingjia | yaoqingjiangli | sangedian | icon-test | dianpu | tuikuan | jinribaokuan | iconzhengli- | dizhi | daifukuan | eliaomoshangjiaban | xinaixin | weibiaoti-- | qingchu | shezhi-copy | sangedian1 | taobaoqinqinghao | fenxiang | dianpu-copy-copy-copy-copy-copy | icon- | qianbao | tm | daishouhuo | taojinbi | temai | chongzhizhongxin | shoucang1 | shezhi1
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function(color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size,
        });
      },
    },
  },
  data: {
    colors: '',
    svgSize: 30,
    quot: '"',
    isStr: true,
  },
  methods: {
    fixColor: function() {
      var color = this.data.color;
      var hex2rgb = this.hex2rgb;

      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color;
      }

      return color.map(function (item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item;
      });
    },
    hex2rgb: function(hex) {
      var rgb = [];

      hex = hex.substr(1);

      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
      }

      hex.replace(/../g, function(color) {
        rgb.push(parseInt(color, 0x10));
        return color;
      });

      return 'rgb(' + rgb.join(',') + ')';
    }
  }
});
