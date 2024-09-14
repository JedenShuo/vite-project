import { defineStore } from "pinia";

 export const useMenuStore = defineStore('menu',{
  //真正存储数据的地方:state
  state(){
    return{
      isCollapse:false,
      selectMenu:[]
    }
  },
  //actions放置方法,用于响应动作
  actions:{
    collapseMenu(){
    this.isCollapse=!this.isCollapse
  },

   addMenu(payload:string){
    this.selectMenu.findIndex(item =>item.path===payload.path)===-1 ? this.selectMenu.push(payload) :1
  // console.log(payload);
  
  },
   deleteMenu(payload:string){
    const index = this.selectMenu.findIndex(val => val.name ===payload.name)
    this.selectMenu.splice(index,1)
    // console.log(payload);
  }},
  //getters...
}
)
