<template>
  <div class="projectProgramme">
    <!--<div class="loading-box1" style="display: none"><img src="../../img/loading.gif" alt="加载中..."></div>-->
    <div class="public_title">
      <!--<div>项目管理 </div>-->
    </div>
    <div class="layui-container">

      <div class="layui-row layui-col-space10 projectProgramme_box">

        <div class="layui-col-md2">

          <p class="itemDes"> 项目<br /><span>（项目详情）</span></p>
          <ul class="ProgrammeList">
            <li class="layui-this now_Programme"> <span><i class="iconfont icon-xiangmuguanli"></i>  正在进行的项目方案 </span></li>
          </ul>
        </div>

        <div class="layui-col-md10">
          <div class="right-box"><span style="color:#c2c2c2;">项目列表 一 </span> <span style="font-weight:500">项目详情</span></div>
          <div class="box">
            <p><b>编码:</b>{{desarr.projectCode}}</p>
            <p class="projectcode"></p>
          </div>
          <div class="box">
           <p> <span><b>项目名称:</b></span> <span class="projectName">{{desarr.projectName}}</span></p>
          </div>
          <div class="box">
            <p><b>项目背景:</b>
            <span class="projectBackground">
            {{desarr.projectDesc}}
            </span>
            </p>
          </div>
          <div class="box">
            <p>
            <span><b>项目附件:  </b></span>
            <div class="project_file">
              <i class="iconfont icon-guanlianfujian"></i>
              <span class="item_name"></span>
            <a class="download-file" target="_blank" :href="desarr.projectFile"><span class="file_box_name">{{desarr.projectFile}}<i class="iconfont icon-xiazai"></i></span></a>
            </div>
            </p>
            <!--<span class="projectEnclosure"></span>-->
          </div>
          <div class="box">
            <p>
            <span><b>建设单位:</b></span>
            <span class="buildUnit">{{desarr.buildUnitName}}</span>
            </p>
          </div>
          <div class="box">
            <p>
            <span><b>项目负责人:</b></span>
            <span class="projectResponsible">{{desarr.buildUnitLeaderName}}</span>
            </p>
          </div>
          <div class="nowProgramme" v-if="type==null">
            <div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
              <ul class="layui-tab-title">
                <li class="layui-this">正在进行项目方案</li>
                <!--<li>历史项目方案</li>-->
              </ul>
              <div class="layui-tab-content">
                <!--正在进行项目方案-->
                <div class="layui-tab-item layui-show">

                  <div id="addsolutionBtn" v-if="status==2"><el-button type="primary" @click="addsolution()">添加</el-button></div>
                  <div class="nowProgramme_describe">


                    <el-table :data="tableData" style="width: 100%" >
                      <!--<el-table-column type="index" :index="indexMethod"></el-table-column>-->
                      <el-table-column prop="projectName" label="编号"></el-table-column>
                      <el-table-column prop="solutionName" label="名称"></el-table-column>
                      <el-table-column prop="solutionVersion" label="版本"></el-table-column>
                      <el-table-column prop="buildUnitName" label="进度"></el-table-column>
                      <el-table-column prop="developOrgan" label="实施单位"></el-table-column>
                      <el-table-column prop="auditStatus" label="审核阶段"></el-table-column>
                      <el-table-column label="操作">
                        <template slot-scope="scope">
                          <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                          <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                      </el-table-column>
                    </el-table>

                    <div id="loading-button"></div>
                  </div>
                </div>
                <!--历史项目方案-->
                <div class="layui-tab-item">

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "projectProgramme",
      data(){
        return{
            msg:"",
            desarr:[],    // 项目详情
            tableData:[], // 正在进行的项目方案
          status:null,  // 项目审核状态
            solutionID:null, // 新增实施方案ID
            type:null,
        }
      },methods:{
        getDesdata() {  // 项目详情
          var _this = this;
          // alert(_this.solution)
          this.$http.post(this.$route.query.GetaWay_url + this.$route.query.solution + "/projectinfo/find",
            JSON.stringify({
              "accessToken": this.$route.query.accessToken,
              "query": {
                "id": this.$route.query.id
              }
            }), {
              headers: {
                'content-type': 'application/json',
                'accessToken': this.$route.query.accessToken,
                'applyID': this.$route.query.appID,
                'requestType': "app",
                'secretKey': this.$route.query.appSecretKey,
                'userInfo': null
              }
            }).then(function (response) {
            if (response.data.code == 200) {
              console.log(response);
              _this.desarr = response.data.data;
              console.log(_this.desarr)
            }
          }).catch(function (error) {
            console.log(error)
          });
        },
        loadingProject(current,size){
          var _this = this;
          this.$http.post(this.$route.query.GetaWay_url + this.$route.query.solution + "/solutioninfo/list",
            JSON.stringify({
              "accessToken": this.$route.query.accessToken,
              "query": {
                "projectId":this.$route.query.id
              },
              "page": {
                "current": current,
                "size": size
              }
            }), {
              headers: {
                'content-type': 'application/json',
                'accessToken': this.$route.query.accessToken,
                'applyID': this.$route.query.appID,
                'requestType': "app",
                'secretKey': this.$route.query.appSecretKey,
                'userInfo': null
              }
            }).then(function (response) {
            if (response.data.code == 200) {
              _this.tableData = response.data.data.records;
              _this.total = response.data.data.total;
              // _this.pagesizes = response.data.data.pages;
            }
          }).catch(function (error) {
            console.log(error)
          });
        },addsolution(){
          var _this = this;
          // alert(_this.solution)
          this.$http.post(this.$route.query.GetaWay_url + this.$route.query.solution + "/solutioninfo/getDevelopLeader",
            JSON.stringify({
              "accessToken": this.$route.query.accessToken,
              "projectId":this.$route.query.id
            }), {
              headers: {
                'content-type': 'application/json',
                'accessToken': this.$route.query.accessToken,
                'applyID': this.$route.query.appID,
                'requestType': "app",
                'secretKey': this.$route.query.appSecretKey,
                'userInfo': null
              }
            }).then(function (response) {
            if (response.data.code == 200) {
              _this.solutionID = response.data.data.id;
              _this.Newsolution()
            }
          }).catch(function (error) {
            console.log(error)
          });
        },
        Newsolution(){
          this.$router.push({
            path:'/setdoc',
            query:{
              flag:1,
              accessToken:this.$route.query.accessToken,
              solution: this.$route.query.solution,
              appID:this.$route.query.appID,
              appSecretKey: this.$route.query.appSecretKey,
              GetaWay_url:this.$route.query.GetaWay_url
            }
          })
        }
      },created:function () {
        this.status = this.$route.query.auditStatus;   // 项目审核状态
        this.type = this.$route.query.type;           // 项目类型
        this.getDesdata();
        this.loadingProject(1,10);
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

span{display: inline-block}
  .box p{
      float: left;
     }
  .box {
    height: 25px;
    line-height: 25px;
  }
</style>
