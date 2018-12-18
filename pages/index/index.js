//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    list:[
      {
        todo:"fjslsfs",
        complete:false
      },
      {
        todo: "fjslsdfsfsffs",
        complete: false
      },
      {
        todo: "fjslssdsdfs",
        complete: false
      }
    ],
    newdata:""
  },
  add(e){
    if(e.detail.value){
      this.data.newdata = e.detail.value;
      this.data.list.push({ todo: this.data.newdata, complete: false });
      var newlist = this.data.list;
      this.setData({
        list: newlist,
        newdata:""
      })
    }
  },
  change(e){
    var index=e.currentTarget.dataset.index;
    this.data.list[index].complete=!this.data.list[index].complete;
    var newlist=this.data.list;
    this.setData({
      list:newlist
    })
  }
})
