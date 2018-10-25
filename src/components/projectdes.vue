<template>
  <div class="projectdes" v-show="isShow">

    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/projectlist' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/projectlist">项目列表</a></el-breadcrumb-item>
      <el-breadcrumb-item>{{msg}}</el-breadcrumb-item>
      <el-breadcrumb-item></el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="danger" @click="back()" style="right:100px;position: absolute">返回</el-button>
    <h1>{{name}}</h1>


    <div class="layui-col-md10" >
      <div class="box">
        <span><b>编码:</b></span>
        <span class="projectcode">{{listarr.projectCode}}</span>
      </div>
      <div>
        <span><b>项目名称:</b></span>
        <span class="projectName">{{listarr.projectName}}</span>

      </div>
      <div>
        <div><b>项目背景:</b></div>
        <div class="projectBackground">
          {{listarr.projectDesc}}
        </div>
      </div>
      <!--<div>-->
        <!--<span><b>项目附件:</b></span>-->
        <!--<div class="project_file">-->
          <!--<i class="iconfont icon-guanlianfujian"></i>-->
          <!--<span class="item_name">{{listarr.projectFile}}</span>-->
          <!--<span class="file_box_name"><a class="download-file" target="_blank"><i class="iconfont icon-xiazai"></i></a></span>-->
        <!--</div>-->
        <!--&lt;!&ndash;<span class="projectEnclosure"></span>&ndash;&gt;-->
      <!--</div>-->
      <div>
        <span><b>建设单位:</b></span>
        <span class="buildUnit">{{listarr.buildUnitName}}</span>
      </div>
      <div>
        <span><b>项目负责人:</b></span>
        <span class="projectResponsible">{{listarr.buildUnitLeaderName}}</span>
      </div>
    </div>

  </div>
</template>

<script>
  // import layercss from '../static/css/layui.css'

  export default {
    name: "projectdes",
    data() {
      return {
        msg: "详情页面",
        name: null,
        isShow: false,
        tableData: [],
        listarr:[],
      }
    }, methods: {
      getDesdata(){
        var _this = this;
        // alert(_this.solution)
        this.$http.post(this.$route.query.GetaWay_url + this.$route.query.solution + "/projectinfo/find",
          JSON.stringify({
            "accessToken": this.$route.query.accessToken,
            "query": {
             "id":this.$route.query.id
            }
          }), {
            headers: {
              'content-type': 'application/json',
              'accessToken':this.$route.query.accessToken,
              'applyID': this.$route.query.appID,
              'requestType': "app",
              'secretKey': this.$route.query.appSecretKey,
              'userInfo': null
            }
          }).then(function (response) {
          if (response.data.code == 200) {
            console.log(response);
            _this.listarr = response.data.data
            console.log(_this.listarr)
          }
        }).catch(function (error) {
          console.log(error)
        });
      },
      back() {
        if (window.history.length <= 1) {
          this.$router.push({path: '/projectlist'});
          return false
        } else {
          this.$router.go(-1)
        }
        //上面都没执行就说明卡在当前页不是最后一条， histroy记录数量大于1，又没有回退记录，只能返回首页，
        //如果上面都执行了 页面都跳走了，这个也就不用管了
        setTimeout(() => {
          this.$router.push({path: '/projectlist'})
        }, 500)
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
          // this.name = this.$route.query.name
          this.isShow = true
        }, 1000);
      }
    }, created: function () {
      this.openFullScreen2();
      this.getDesdata();
    }
  }
</script>

<style scoped>

  body{
    background: #295596;
  }
  .box-right-renyuan {
    position: absolute;
    right: 12px;
    top: 4px;
    cursor: pointer;
  }

  .right-box {
    text-align: right;
  }

  .popUpbox, .addModuleTwo, .editConbox, .addModuleOne,.audit-box-tip {
    width: 100%;
    height: 100%;
    /*background-color: rgba(0, 0, 0, .5);*/
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .editContent {
    width: 660px;
    height: 427px;
    background-color: #fff;
    padding: 20px 30px;
    position: absolute;
    top: 50%;
    left: 56%;
    margin-left: -300px;
    margin-top: -200px;
    box-shadow: -3px 3px 40px 5px #ccc;
    -mox-box-shadow: -3px 3px 40px 5px #ccc;
    -webkit-box-shadow: -3px 3px 40px 5px #ccc;
    -moz-box-shadow: -3px 3px 40px 5px #ccc;
  }


  .editContent #editbox {
    width: 100%;
    height: 328px;
  }

  .btn-group {
    float: right;
    margin-top: 10px;
  }

  .left-right-box {
    display: flex;
    justify-content: space-between;
    margin-top: 45px;
  }

  .left-ft-box {
    flex: 1;
    width: 260px;
    height: 250px

  }

  .right-ft-box {
    flex: 1;
    width: 260px;
    height: 279px;
    border: 1px solid #e6e6e6;
    margin-left: 11px;
  }

  .ry-option {
    border: 1px solid #e6e6e6;
    width: 100%;
    height: 232px;
    margin-top: 9px;
  }

  .layui-btn-primary:hover {
    border-color: #009688;
    color: #333;
    background: #136cf3;
    /*color: #fff;*/
  }

  .option-checkbox {
    margin-left: 42px;
  }

  .ry-label {
    float: left;
    margin-top: 8px;
    margin-left: 13px;
    margin-right: 13px;
  }

  .header-ft-box {
    height: 38px;
    background: #e6e6e6;
    line-height: 38px;
  }

  .header-ft-box span:first-child {
    margin-left: 10px;
  }

  .header-ft-box span:last-child {
    float: right;
    margin-right: 10px;
    cursor: pointer;
  }
  .checkbox-box {
    padding-top: 15px;
  }
  .checkbox-box ul li {
    line-height: 27px;
    padding-left: 10px;
  }
  .checkbox-box ul li:hover{
    background: #e6e6e6;
  }
  .layui-form-checked[lay-skin=primary] i {
    border-color: #295596;
    background-color: #295596;
    color: #fff;
  }
  .layui-laypage .layui-laypage-curr .layui-laypage-em {
    position: absolute;
    left: -1px;
    top: -1px;
    padding: 1px;
    width: 100%;
    height: 100%;
    background-color: #4f80ca;
  }
  .iconfont.icon-icon.del-i {
    float: right;
    margin-right: 18px;
    cursor: pointer;
  }

  .project_file{
    height: 35px;
    background: #f2f2f2;
    line-height: 35px;
    color: #676565;
    text-indent: 8px;
    position: relative;
    overflow:hidden;
  }

  i.layui-icon.layui-icon-search.right-box-search {
    position: absolute;
    right: 8px;
    font-size: 27px;
    color: #8c8585;
    top: 7px;
    cursor: pointer;
  }
  #add-item{
    margin-bottom: 10px;
  }
  .edit-box {
    display: inline-block;
  }
  .edit-box a {
    color: #2f75dc;
    margin-right: 10px;
  }

  .layui-tab-brief>.layui-tab-more li.layui-this:after, .layui-tab-brief>.layui-tab-title .layui-this:after {
    border: none;
    border-radius: 0;
    border-bottom: 2px solid #295596;
  }
  .layui-tab-brief>.layui-tab-title .layui-this {
    color: #3871ca;
  }

  /*.plan-box{*/
  /*cursor: pointer;*/
  /*}*/


  /*改版样式*/
  .layui-table[lay-even] tr:nth-child(even):hover{
    background: #4f80ca;
  }
  .layui-table tbody tr:hover{
    background: #4f80ca;
  }
  .loading-project-box tr {
    border-bottom: 1px solid #828282;
    height: 50px;
  }
  .file_box_name{
    margin-right: 30px;
    cursor: pointer;
    position: absolute;
    right: 0px;
    top: 0px;
  }

  @media screen and (min-width: 992px) {
    .layui-col-md10 {
      width: 100%;
    }

  }


</style>
