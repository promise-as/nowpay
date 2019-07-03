var app = new Vue({
  el: '#app',
  data: {
    goldenSum: '',
    payerName: '',
    operatorName: '车国秀',
    ServiceTimes: '1000',
    AverageTotalAffirmTime: '00:05:00',
    clientInfo: '7100011',
    paymentOrder: 'TW121024002214423233415315',
    isDialog: false,
    alertText: '',
    payCountdownTime: '15:00',
    payment: ['银行转账', '支付宝扫码', '微信扫码'],
    username: '李四',
    bankInfo: '招商银行深圳车公庙支行',
    bankAccount: '6222 0000 0000 0000 000',
    TransferNoteCode: '897524',
    bankTypes: ['ICBC', 'CCB', 'BOC', 'CMB', 'ABC', 'Bocom'],

    isRemind: false,
    haveTransfer: false, // 已转账
    notTransfer: false,  // 未转账
    whetherToRemind: false, // 是否提醒
    selectedBankIndex: 0  // 选中银行的下标
  },

  methods: {
    // 提示
    isHasPayer: function () {
      if (!this.goldenSum && !this.payerName) {
        dialog(this, '请输入支付的金额或者付款人姓名')
      }
    },
    // 已转账
    haveTransferHandle: function () {
      this.isRemind = true
      this.haveTransfer = true
    },
    // 未转账
    notTransferHandle: function () {
      this.isRemind = true
      this.notTransfer = true
    },
    // 关闭提醒
    closeRemind: function () {
      this.isRemind = false
    },
    // 选中的银行
    selectedBank: function (index) {
      // console.log(index, bank)
      this.selectedBankIndex = index
    }
  }
});