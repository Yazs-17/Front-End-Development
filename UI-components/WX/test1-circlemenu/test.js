// pages/test1/test.js
Page({
  data: {
    show_menu:false,//菜单是否激活
    //菜单列表
    menu:[
      {
        icon:'icon-fujin',
        name:'斌儿0'
      },
      {
        icon:'icon-qiye',
        name:'斌儿1'
      },
      {
        icon:'icon-qiye',
        name:'斌儿2'
      },
      {
        icon:'icon-qiye',
        name:'斌儿3'
      },
      {
        icon:'icon-cetizhong',
        name:'斌儿4'
      },
      {
        icon:'icon-cetizhong',
        name:'斌儿5'
      },
      {
        icon:'icon-fankui',
        name:'斌儿6'
      },
      {
        icon:'icon-fankui',
        name:'斌儿7'
      },
    ],
    currIndex:'',//当前选中菜单索引,默认为空，无选中
    menu_icon_:"icon-cetizhong"
  },
  //菜单点击事件
  clickActive(e){
    // console.log(e.currentTarget.dataset)
    let { index } = e.currentTarget.dataset;//解构对象中的index值并赋值给index
    if (this.data.currIndex == index || index == undefined ) return;
    this.setData({
      currIndex:index
    })
    console.log(this.data.currIndex)
  },
  //点击按钮事件
  showMenu(){
    // let { show_menu }=!this.data.show_menu
    this.setData({
      show_menu:!this.data.show_menu,
      currIndex:''
    })
  }
})