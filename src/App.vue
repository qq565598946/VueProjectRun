<!--<script src="../../../my-vue-project/src/router/index.js"></script>-->
<template>
  <div id="app">
    <div class="pc-nav">
      <ul>
        <li v-for="(navarr,index) in nav"  @click="tabItemClick(index)"  :class="{'active': index == active}">
          <router-link :to='navarr.url'>{{navarr.name}}</router-link>
        </li>
      </ul>
    </div>
    <router-view ></router-view>



    <!--<el-container>-->
      <!--<el-container>-->
        <!--<el-header>-->
            <!--<router-view name="headercon"></router-view>-->
        <!--</el-header>-->

        <!--<el-main>-->
          <!--<router-view name="listaudit"/>-->
        <!--</el-main>-->

        <!--<el-footer>-->
          <!--<router-view name="footer"></router-view>-->
        <!--</el-footer>-->

      <!--</el-container>-->

    <!--</el-container>-->




  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      listdata:[],
      tabIndex: "-1",
      active:0,
      nav:[{
        name:"项目列表",
        url:'/projectlist',
      },{
        name:"项目审核",
        url:"/listaudit",
      },{
        name:"地图",
        url:"/map",
      },{
        name:"Echart",
        url:"/echart",
      }
      ]
    }
  },methods:{
    tabItemClick(index){
    this.active = index;

    },
    getList(){
        this.$http.get("https://test.ttq.so/site/index.html").then((res) =>{
            console.log(res.data.data.Company_News)

        },(error)=>{

      })
    },
    indexMethod(index) {
      return index * 2
    },handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  },
  watch: {
    $route: {
      handler: function(val, oldVal){
        console.log(val);
        if(val.path == '/projectlist'){
            console.log("项目列表")
        }

      },
      // 深度观察监听
      deep: true
    }
  }
  ,created:function () {
      // if(geturl=0){
      //     this.$router.push("components/projectlist.vue")
      // }else{
      //   this.$router.push("components/listaudit.vue")
      // }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {margin: 0;padding: 0;list-style: none;font-family: "Microsoft Yahei";-webkit-tap-highlight-color: rgba(0, 0, 0, 0);-webkit-touch-callout:none;-webkit-user-select:none;border: none;}
body,html{width: 100%;height: 100%;}
a{text-decoration: none;color: #000}
nav{cursor:pointer;}
span{display: block}
i,label{display: inline-block}
.pc-nav{position: fixed;top:0;left: 0;z-index: 99;background: #fff;width: 100%;box-shadow: 0 0 5px #888;}
#app{position: relative;right: 0;transition: all .2s linear;}
.hs-nav{padding: 20px 0;position: fixed;top: 0;left: 0;z-index: 9;width: 100%;background: #fff;box-shadow: 0 0 5px #888;}
.hs-menu{position: absolute;right: 30px; top:40px;}
.menu-i{background: #00b9cd;width: 50px;height: 3px;border-radius: 10px;display: block}
.onThis1{color: #00b9cd;border-bottom: #00b9cd 2px solid;height: 60px}
.app-ul{min-width: 800px;height: 90px;list-style: none;margin: 0 auto;position: relative;max-width: 1200px;}
.lis{position: absolute;right: 0;line-height: 90px}
.app-ul li{margin-left: 20px;float: left;}
.box61{text-align: left}
.boxEnd-1{width: 49%;display: inline-block;text-align: left}
.boxEnd-1 p{line-height: 30px;color: #333}
.boxEnd-2{width: 50%;display: inline-block;border-left: 1px solid #999;color: #00b9cd;vertical-align: bottom}
.wxb{position: relative;top:130px}
.box-ends{max-width: 1200px;min-width:800px;margin: 0 auto;padding: 20px 0;color: #333;font-size: 16px}
.box-ends label{margin: 0 200px 0 180px}
.slide-box{position: fixed;top:0;left:0;width: 100%;height: 100%;background: #000;z-index: 99;opacity: 0.5}
.slides{position: fixed;width:50%;background: #fff;height: 100%;top: 0;right:-50%;z-index: 99;transition: all .2s linear;}
.slideTitle{background: #08c0d4;height: 116px;width:100%;position: relative}
.slideTitle>*{vertical-align: middle;line-height: 100px}
.close{color: #fff;font-size: 60px;position:absolute;right: 10%;}
.DL{display: inline-block;}
.DL:hover{color: #00b9cd}
.pc-nav ul li {
  display: inline-block;
}
.pc-nav ul li a{
  display: inline-block;
  padding: 20px;

  margin:0px 10px;

}

.pc-nav ul li.active{

  background:#ececec;
  border-bottom: 2px solid #0e9aef;
}
/*.pc-nav ul li a:hover{*/
  /*background:#CCCCCC;*/
/*}*/

.el-header{
  /*background-color: #B3C0D1;*/
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-footer{
  color: #333;
  text-align: center;
  line-height: 60px;
  position: fixed;
  bottom:0px;
  box-shadow: -1px 0px 3px #CCCCCC;
  width: 100%;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  /*background-color: #E9EEF3;*/
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
