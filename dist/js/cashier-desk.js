"use strict";

$(function () {
  new ClipboardJS('.copy'); // 文本的复制
  var $countDownTimer = $("#countDownTimer"); // 倒计时的时间
  var $payCountdown = $("#payCountdown"); // 支付倒计时
  var $overTime = $("#overTime"); // 支付超时
  var alreadyGathering = $("#alreadyGathering"); // 已提醒收款
  var howLong = 15 * 60;
  var min, sec;
  //读取cookie
  if ($.cookie("countDownEndTime") !== undefined && !isNaN($.cookie("countDownEndTime"))) {
    //读取到了cookie值
    var countDownEndTime = $.cookie("countDownEndTime");
    var now = new Date().getTime(); //当前时间戳
    var howLong = parseInt((countDownEndTime - now) / 1000);
    if (howLong <= 0) {
      $.cookie("countDownEndTime", null);
    }
  }
  // 日期格式化
  function timeFormat(s) {
    if (s > -1) {
      min = Math.floor(s / 60) % 60;
      sec = s % 60;
    }
    return min + ":" + sec;
  }
  // 支付倒计时
  //1.获取当前系统时间
  //2.获取 howLong 后的系统时间
  //3.用cookie保存到期时间
  //4.每次加载后获取cookie中保存的时间
  //5.用到期时间减去当前时间获取倒计时
  var countDownEndTime = $.cookie("countDownEndTime");
  if (countDownEndTime === null || countDownEndTime === undefined || countDownEndTime === 'undefined' || countDownEndTime === 'null') {
    var now = new Date().getTime(); //当前时间戳
    var endTime = howLong * 1000 + now; //结束时间戳
    $.cookie("countDownEndTime", endTime); //将结束时间保存到cookie
  }
  var $hintBtns = $(".hint-btn > input");
  /*var timer = setInterval(function () {
    howLong--
    $countDownTimer.text(timeFormat(howLong))
    if (howLong <= 0) {
      //倒计时结束清除cookie值
      $.cookie("countDownEndTime", null)
      clearInterval(timer)
      if ($countDownTimer.text() === '0:0') {
        // 支付超时
        $payCountdown[0].style.display = 'none'
        $overTime[0].style.display = 'block';
          $hintBtns.each(function (index, e) {
          $(e).attr("disabled","disabled");
        })
      } else {
        // 已提醒收款
        $payCountdown[0].style.display = 'none'
        alreadyGathering[0].style.display = 'block';
        $hintBtns.each(function (index, e) {
          $(e).removeAttr("disabled");
        })
      }
    }
  }, 1000);*/

  // 支付方法tab切换
  var current = localStorage.getItem("payCurrentIndex");
  var $tabItem = $(".tab-item");
  var $tabContent = $(".tab-content");

  // 初始化
  if (current === null) {
    $($tabItem[0]).addClass("tab-active");
    $($tabContent[0]).addClass("active");
  }
  // 读取localStorage
  $($tabItem[current]).addClass("tab-active");
  $($tabContent[current]).addClass("active");
  // 遍历
  $tabItem.each(function (index, e) {
    $(e).click(function () {
      for (var i = 0, len = $($tabItem).length; i < len; i++) {
        $($tabItem[i]).removeClass("tab-active");
        $($tabContent[i]).removeClass("active");
      }
      // 更改下标
      localStorage.setItem("payCurrentIndex", index);
      $(this).addClass("tab-active");
      $($tabContent[index]).addClass("active");
    });
  });
});