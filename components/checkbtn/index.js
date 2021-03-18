// components/checkbtn/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    btnType: {
      type: Boolean,
      value: false
    },
    btnText: {
      type: Array,
      value: []
    },
    btnIndex: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    id: null,
    selectIndex: [
      { sureid: false },
      { sureid: false },
      { sureid: false },
      { sureid: false },
      { sureid: false },
      { sureid: false }
    ],
    qindex: ['A', 'B', 'C', 'D', 'E', 'F'],
    selectedList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectRep:function(e){
      if(this.properties.btnType) {
        let index = e.currentTarget.dataset.selectindex;  //当前点击元素的自定义数据，这个很关键
        let selectIndex = this.data.selectIndex;    //取到data里的selectIndex
        selectIndex[index].sureid = !selectIndex[index].sureid;   //点击就赋相反的值
        this.setData({
          selectIndex: selectIndex,   //将已改变属性的json数组更新
          selectedList: []
        })
        for (let [key, item] of this.data.selectIndex.entries()) {
          if(item.sureid) {
            this.data.selectedList.push(key)
          }
        }
        var nowDate = {
          index: this.properties.btnIndex,
          selectedList: this.data.selectedList
        }
        // 这里的 getNowData 要和外部的 bind:getNowData ，名称一定要对应
        this.triggerEvent('getNowData', nowDate);
      }else {
        let index = e.currentTarget.dataset.selectindex;  //当前点击元素的自定义数据，这个很关键
        let selectIndex = [
          { sureid: false },
          { sureid: false },
          { sureid: false },
          { sureid: false },
          { sureid: false },
          { sureid: false }
        ];
        selectIndex[index].sureid = !selectIndex[index].sureid;   //点击就赋相反的值
        this.setData({
          selectIndex: selectIndex,   //将已改变属性的json数组更新
          selectedList: []
        })
        for (let [key, item] of this.data.selectIndex.entries()) {
          if(item.sureid) {
            this.data.selectedList.push(key)
          }
        }
        var nowDate = {
          index: this.properties.btnIndex,
          selectedList: this.data.selectedList
        }
        // 这里的 getNowData 要和外部的 bind:getNowData ，名称一定要对应
        this.triggerEvent('getNowData', nowDate);
      }
    }
  }
})
