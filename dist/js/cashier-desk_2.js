'use strict';

$(function () {
  // 支付金额
  var $number = $('#number');
  // 支付人
  var $payer = $('#payer');
  // 读
  var sumValue = localStorage.getItem('sum');
  var payerName = localStorage.getItem('payer');
  // 赋值
  $number.val(sumValue);
  $payer.val(payerName);
});