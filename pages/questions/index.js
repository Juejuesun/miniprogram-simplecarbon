// pages/questions/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ifBegin: false,
    currented: 0,
    qlist: [
      {coin: '第一个答案'},
      {coin: '第二个答案'},
      {coin: '第三个答案'},
      {coin: '第四个答案'}
    ],
    answerList: [[],[],[],[],[]]
  },
  getCurrentTextAction:function(e){
    let item = e.detail
    // console.log(item)
    let currList = this.data.answerList
    currList[item.index] = item.selectedList
    this.setData({
      answerList: currList
    })
    console.log(this.data.answerList)
  },
  getQuestion() {
    this.setData({
      ifBegin: true
    })
  },
  refelsh(e) {
    // console.log(e.detail)
    this.setData({
      currented: e.detail.current
    })
  },
  preQue() {
    let a = this.data.currented - 1
    this.setData({
      currented: a
    })
  },
  nextQue() {
    let a = this.data.currented + 1
    this.setData({
      currented: a
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})