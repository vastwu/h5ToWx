// alert('hello world')

(function(){
    function onReady(fn) {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            fn()
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    const vConsole = new window.VConsole();

    var ua = navigator.userAgent.toLowerCase()
    var isWXWork = ua.match(/wxwork/i) == 'wxwork'
    var isWeixin = !isWXWork && ua.match(/micromessenger/i) == 'micromessenger'
    var isMobile = false
    var isDesktop = false
    if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|IEMobile)/i)) {
      isMobile = true
    } else {
      isDesktop = true
    }

    onReady(function() {
        if (isWeixin) {
            document.getElementById('open-tag').style.display = '';

            var btn = document.getElementById('launch-btn');
            btn.addEventListener('launch', function (e) {
              console.log('success');
            });
            btn.addEventListener('error', function (e) {
              console.log('fail', e.detail);
            });
            wx.ready(function(){
                console.log('on wx ready')
            });
            wx.error(function(error){
                console.log('on wx error:', error)
            });
            // AppID: wxfa56e9652b22d520
            // 环境名称：prod-8g1h6vkz66be54ca
            wx.config({
                debug: true, // 调试时可开启
                appId: 'wxfa56e9652b22d520',
                timestamp: 0, // 必填，填任意数字即可
                nonceStr: 'nonceStr', // 必填，填任意非空字符串即可
                signature: 'signature', // 必填，填任意非空字符串即可
                jsApiList: ['chooseImage'], // 必填，随意一个接口即可
                openTagList:['wx-open-launch-weapp'], // 填入打开小程序的开放标签名
            })
        }
    });

})();
