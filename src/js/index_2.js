
$(function () {
  // 确认付款按钮
  var $confirmPay = $('#confirmPay');
  // 金额
  var $sum = $('#sum');
  // 付款人
  var $payer = $('#payer');
  $confirmPay.click(function () {
    var sum = $sum.val();
    var payer = $payer.val();
    // 存
    localStorage.setItem('sum', sum);
    localStorage.setItem('payer', payer);
  })
})