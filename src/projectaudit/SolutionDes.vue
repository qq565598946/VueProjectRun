<template>
  <div class="SolutionDes">
    <div class="projectApply">
      <!--<div class="public_title">-->
      <!--<div>项目管理</div>-->

      <!--</div>-->
      <input type="hidden" class="applyBy">
      <input type="hidden" class="applyName">
      <div class="layui-container" style="width: 100%;padding: 0px">
        <div class="layui-row projectProgramme_box projectApply_box" style="background: #F1F1F1">
          <div class="layui-col-md2">
            <p class="itemDes desname">项目审核详情</p>
            <ul class="ProgrammeList">
              <li class="layui-this"><span><i class="iconfont icon-xiangmuguanli"></i>项目实施方案审核</span></li>
              <div class="box-audit" v-show="auditBtn">
                <button class="layui-btn layui-btn-danger layui-btn-sm" style="width:100px" id="disagree" @click="solutionSumbit(1)" >不同意</button>
                <button class="layui-btn layui-btn-sm" id="agressd" style="width:100px;background-color:#295596;" @click="solutionSumbit(2)">同意</button>
              </div>
            </ul>
            <!--所有审核意见-->
            <div class="opinion-box">
              <ul>
                <li>项目概述意见:<span></span><i class="iconfont icon-icon del-i"></i></li>
                <li>需求分析意见:<span></span><i class="iconfont icon-icon del-i"></i></li>
                <li>架构设计意见:<span></span><i class="iconfont icon-icon del-i"></i></li>
                <li>开发规范意见:<span></span><i class="iconfont icon-icon del-i"></i></li>
                <li>应用设计意见:<span></span><i class="iconfont icon-icon del-i"></i></li>
                <li>微服务设计意见:<span></span><i class="iconfont icon-icon del-i"></i></li>
                <li>服务部署与运行资源意见:<span></span><i class="iconfont icon-icon del-i"></i></li>
                <li>风险解决方案意见:<span></span><i class="iconfont icon-icon del-i"></i></li>
                <li>已分配开发人员意见:<span></span><i class="iconfont icon-icon del-i"></i></li>
              </ul>
            </div>
          </div>
          <div class="layui-col-md10">
            <!--模块审批意见-->
            <div class="popUpbox" style="display:none;">

            </div>
            <!--总体审核意见-->
            <div class="audit-box-tip" style="display:none;" >
              <div class="editContent">
                <p><span>审批处理</span></p>
                <div class="box-content-audit layui-form">

                  <div class="layui-form-item layui-form-text">
                    <label class="layui-form-label">意见说明 :</label>
                    <div class="layui-input-block">
                      <textarea placeholder="请输入内容" class="layui-textarea opinion" id="opinion-val"></textarea>
                    </div>
                  </div>
                </div>
                <div class="btn-group">
                  <button class="layui-btn layui-btn-primary cancelEditor">取消</button>
                  <button class="layui-btn layui-btn-primary getDocData">确定</button>
                </div>
              </div>
            </div>
            <span class="right-sp"><span style="color:#c2c2c2;">我的审批 一 </span> <span style="font-weight:500">详情</span></span>
            <div class="table-box" id="table_box">
              <h3>基本信息</h3>
              <div class="basic-info">
                <div class="center-box">
                  <div class="layui-form-item">
                    <div class="layui-inline">
                      <label class="layui-form-label">方案名称:</label>

                      <div class="layui-input-inline">

                        <input type="tel" name="phone" lay-verify="required" disabled  autocomplete="off" class="layui-input project_Name info-val" value="" >
                      </div>
                    </div>
                    <div class="layui-inline">
                      <label class="layui-form-label">编制单位:</label>
                      <div class="layui-input-inline">
                        <input type="tel" name="phone" lay-verify="required" disabled autocomplete="off" class="layui-input developOrgan info-val"  value="" >

                      </div>
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <div class="layui-inline">
                      <label class="layui-form-label">方案版本:</label>
                      <div class="layui-input-inline">
                        <input type="tel" name="phone" lay-verify="required"  disabled autocomplete="off" class="layui-input solutionVersion info-val"  >

                      </div>
                    </div>
                    <div class="layui-inline">
                      <label class="layui-form-label">开发单位:</label>
                      <div class="layui-input-inline">
                        <input type="tel" name="phone"  autocomplete="off"  disabled class="layui-input kfdevelopOrgan info-val" id="kfdevelopOrgan">
                      </div>
                    </div>
                    <div class="layui-inline">
                      <label class="layui-form-label">开发单位负责人:</label>
                      <div class="layui-input-inline">
                        <input type="tel" name="phone" lay-verify="required" disabled autocomplete="off" class="layui-input staffvalue info-val">

                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <!--项目概述-->
              <div id="overview">
                <h3>
                  <span class="overview">项目概述</span>
                  <span class="audit-cont"></span>
                  <!--<i class="iconfont icon-bitian audit-i-box"></i>-->
                  <!--<i class="iconfont icon-bianji box-right-edit" ></i>-->

                </h3>
                <div class="item-box">
                  <div class="item-destail" id="pj-background">
                    <span>项目背景</span>
                    <p>{{solutionarr.overviewList[0].projectBackground}}</p>
                  </div>
                </div>
                <div class="item-box">
                  <div class="item-destail" id="systemCurrent">
                    <span>系统现状</span>
                    <p>{{solutionarr.overviewList[0].systemCurrent}}</p>
                  </div>
                </div>
                <div class="item-box">
                  <div class="item-destail" id="buildGoal">
                    <span>建设目标</span>
                    <p>{{solutionarr.overviewList[0].buildGoal}}</p>
                  </div>
                </div>
                <div class="item-box">
                  <div class="item-destail" id="buildContent">
                    <span>建设内容</span>
                    <p>{{solutionarr.overviewList[0].buildContent}}</p>
                  </div>
                </div>
              </div>
              <!--需求分析-->
              <div id="pj-demandAnalysis">
                <h3><span class="demanalysisList">需求分析</span>
                  <span class="audit-cont"></span>
                  <i class="iconfont icon-bitian audit-i-box"></i>
                  <i class="iconfont icon-bianji box-right-edit" ></i>
                </h3>
                <div class="item-box">
                  <div class="item-destail" id="functionalRoleAnalysis">
                    <span>功能角色分析</span>
                    <p>{{solutionarr.demanalysisList[0].functionalRoleanalysis}}</p>
                    <!--<div class="role-box">-->
                    <!--<p><span>姓名：</span>张三</p>-->
                    <!--<p><span>职责：</span>治安</p>-->
                    <!--</div>-->
                  </div>
                </div>
                <div class="item-box">
                  <div class="item-destail" id="businessRequirements">
                    <span>业务需求</span>
                    <p>{{solutionarr.demanalysisList[0].businessRequirements}}</p>
                  </div>
                </div>
                <div class="item-box">
                  <div class="item-destail" id="dataIntegration">
                    <span>数据资源整合</span>
                    <p>{{solutionarr.demanalysisList[0].dataIntegration}}</p>
                  </div>
                </div>
              </div>
              <!--架构设计-->
              <div id="pj-design">
                <h3><span class="saveArchidesign">架构设计</span>
                  <span class="audit-cont"></span>
                  <i class="iconfont icon-bitian audit-i-box"></i>
                  <i class="iconfont icon-bianji box-right-edit" ></i>
                </h3>
                <div class="design-box">
                  <div class="item-box">
                    <div class="item-destail">
                      <span>总体架构</span>
                      <p> {{solutionarr.archidesignList[0].frameworkDesign}}</p>
                    </div>
                  </div>

                  <div class="item-box">
                    <div class="item-destail">
                      <span>网络拓扑图</span>
                      <img :src="solutionarr.archidesignList[0].topologicalPic" alt="">
                    </div>
                  </div>

                  <div class="item-box">
                    <div class="item-destail">
                      <span>系统建设原则及路线</span>
                      <p>{{solutionarr.archidesignList[0].principlesRoutes}}</p>
                    </div>
                  </div>

                </div>
              </div>
              <!--开发规范-->
              <div id="pj-normalize">
                <h3>开发规范<span class="audit-cont"></span></h3>
                <div class="item-box">
                  <div class="item-destail">
                    <p>
                      市局aPaaS规范包含以下文件：
                      1、微服务与应用开发规范
                      2、微服务与应用上云实施规范
                      3、统一身份认证对接规范
                      4、统一门户对接规范
                      5、公安部数据对标规范（通过数据对标服务提供）
                      1、《微服务与应用开发规范》
                      提供应用与微服务粒度划分原则性指导以及开发规范。
                      2、《微服务与应用上云实施规范》
                      提供各个aPaaS服务、SaaS应用、数据库以及文件存储的开发、部署与运维的标准性指导。
                      3、《统一身份认证对接规范》
                      提供统一支撑平台统一用户服务对接规范。
                      4、《统一门户对接规范》
                      提供单点登录、待办任务、消息服务、S3文件存储服务、日志组件、仪表盘服务、任务推送组件、订阅服务、统一配置中心服务sdk的使用方法。
                      <!--<div class="box-norm"><i class="iconfont icon-guanlianfujian">我的附件</i><span class="box-download"><i class="iconfont icon-xiazai"></i></span></div>-->
                    </p>
                  </div>
                </div>
              </div>
              <!--应用设计-->
              <div id="pj-application">
                <h3><span class="applicationdesignList">应用设计</span></h3>
                <div class="box-app">

                </div>
              </div>
              <!--微服务设计-->
              <div id="pj-service">
                <h3><span class="microserviceList">微服务设计</span></h3>
                <div class="service-box" v-for="servicearr in solutionarr.microserviceList">
                  <div class="app-list layui-form">
                    <div class="item-box">
                      <div class="item-destail">
                        <span>服务名称</span>
                        <span class="audit-cont"></span>
                        <i class="iconfont icon-bitian audit-i-box"></i>
                        <i class="iconfont icon-bianji box-right-edit" data-isadd="true"></i>
                        <p>{{servicearr.serviceName}}</p>
                      </div>
                    </div>
                    <div class="item-box">
                      <div class="item-destail">
                        <span>服务类型</span>
                        <div style="width: 160px;margin: 10px 0px;">
                          <el-select v-model="valueselect=''+servicearr.serviceType+''"  disabled >
                            <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </div>

                      </div>
                    </div>
                    <div class="item-box">
                      <div class="item-destail">
                        <span>服务设计</span>
                        <p>{{servicearr.serviceDesign}}</p>
                      </div>
                    </div>
                    <div class="item-box">
                      <div class="item-destail">
                        <span>通用业务服务</span>
                        <!--<p>` + microserviceList[i].generalService + `</p>-->
                        <div class="box-select-business layui-input-inline" style="margin:20px 0px; width: 100%">
                          {{servicearr.generalService}}
                          <!--<select xm-select="business_des`+i+`" disabled>-->

                          <!--</select>-->
                        </div>
                      </div>
                    </div>
                    <div class="item-box">
                      <div class="item-destail">
                        <span>基础技术服务</span>
                        <!--<p>` + microserviceList[i].basicService + `</p>-->
                        <div class="box-select-technical layui-input-inline" style="margin:20px 0px;width: 100%">
                          {{servicearr.basicService}}
                          <!--<select xm-select="technical_des`+i+`" disabled>-->

                          <!--</select>-->
                        </div>
                      </div>
                    </div>
                    <div class="item-box">
                      <div class="item-destail"><span>部署环境和运行资源</span>
                        <div class="hj-box"><strong>部署环境:</strong><strong>{{servicearr.deploymentEnvironment}}</strong></div>
                        <div class="hj-box"><strong>运行资源:</strong><strong>{{servicearr.runResource}}</strong></div>
                      </div>


                    </div>
                  </div>

                </div>
              </div>
              <!--服务部署与运行资源-->
              <!--<div id="pj-deploy">
                  <h3><span class="deployrunList">服务部署与运行资源</span></h3>
                  <div class="deploy-box">

                  </div>
              </div>-->
              <!--风险解决方案-->
              <div id="pj-solution">
                <h3><span class="risksolutionList">风险解决方案</span>
                  <span class="audit-cont"></span>
                  <i class="iconfont icon-bitian audit-i-box"></i>
                  <i class="iconfont icon-bianji box-right-edit" ></i>
                </h3>
                <div class="solution-box">
                  {{solutionarr.risksolutionList[0].riskSolution}}
                </div>
              </div>
              <!--已分配开发人员-->
              <div id="pj-staffvalue">
                <h3><span class="staffvalue">已分配开发人员</span><span class="audit-cont"></span><!--<i class="iconfont icon-bianji box-right-edit"      onclick="edit(9)"></i>--></h3>
                <div class="staffvalue-box">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <!--<h1>{{msg}}</h1>-->
  </div>
</template>

<script>
    export default {
        name: "SolutionDes",
      data(){
            return{
                msg:"实施方案详情",
                solutionarr:[],   //  实施方案详情
              options: [{
                value: '1',
                label: '基础技术服务'
              }, {
                value: '2',
                label: '通用业务服务设计'
              }, {
                value: '3',
                label: '应用服务设计'
              }],
              valueselect:null, // 勾选
              auditBtn:true,
              textarea: '22222'
            }
      },mounted:function () {
        this.getsolution();
          switch (this.$route.query.auditStatus){  // 根据状态判断 是否显示审核按钮 （状态1：待审核显示,状态2:审核通过不显示,状态3:驳回不显示）
            case "1":
              this.auditBtn  = true;
            break;
            case "2":
              this.auditBtn  = true;
            break;
            case "3":
              this.auditBtn  = false;
            break;
            default:this.$message.error('错误状态')
          }
      }
      ,methods:{
        getsolution() {
          var _this = this;
          this.$http.post(this.$route.query.GetaWay_url + this.$route.query.solution + '/projectManagement/list',
            JSON.stringify({
              "accessToken": this.$route.query.accessToken,
                "solutionId": this.$route.query.solutionId
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
              _this.solutionarr = response.data.data;
             // _this.valueselect =  JSON.stringify(_this.solutionarr.microserviceList[0].serviceType)
              // _this.pagesizes = response.data.data.pages;
            }
          }).catch(function (error) {
            _this.$notify({title: '失败', message: '网络错误', type: 'error'});
          });
        },solutionSumbit(flag){
          this.$confirm('确定审核?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
          }).then(() => {


            this.$message({
              type: 'success',
              message: '审核成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            });
          });
        }
      }
    }
</script>

<style scoped>
  .layui-form-item {
    margin-bottom: 15px;
    clear: both;
    float: left;
  }
  span{display: inline-block}
  h3, h4, h5 {
    margin-top: 5px;
    font-weight: 600;
    text-align: left;
  }
  .item-destail {
    padding: 8px;
    text-align: left;
  }
  .box-norm {
    height: 40px;
    border: 1px solid #f3f3f3;
    background: #fbfbfb;
    line-height: 40px;
    text-indent: 13px;
    font-size: 16px;
    color: #797979;
  }

  .box-download {
    float: right;
    margin-right: 30px;
    cursor: pointer;
  }

  .projectProgramme_box .layui-col-md2>ul>li span i {
    font-size: 12px;
    margin-right: 8px;
  }
  .desname{
    height: 63px;
    line-height: 63px;
    font-size: 18px;
    color: #295596
  }
  .popUpbox,.audit-box-tip{
    width: 100%;
    height: 100%;
    /*background-color: rgba(0, 0, 0, .5);*/
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .editContent {
    width: 700px;
    height: 350px;
    background-color: #fff;
    padding: 20px 30px;
    position: absolute;
    top: 50%;
    left: 53%;
    margin-left: -300px;
    margin-top: -200px;
    box-shadow: -3px 3px 40px 5px #ccc;
  }
  .editContent p {
    border-bottom: 1px solid #CCCCCC;
    height: 55px;
  }

  .btn-group {
    text-align: right;
  }
  .box-content-audit{
    margin-top: 20px;
  }

  .getDocData {
    border:0;
    width: 118px;
    background: #437fd8;
    color: #fff;
  }
  .cancelEditor{border: 0}

  .cancelEditor:hover{
    color: #437fd8;
  }
  .layui-form-radio>i:hover, .layui-form-radioed>i {
    color: #437fd8;
  }
  .center-box{
    height: 100px;
    margin-top: 15px;
    margin-left: 8px;
  }
  .info-val{
    border:0px;
  }

  .layui-form-label {
    float: left;
    display: block;
    /*padding: 9px 15px;*/
    /*width: 80px;*/
    font-weight: 400;
    line-height: 38px;
    text-align: right;
  }

  .audit-cont {
    color: red;
    margin-left: 60px;
    font-size: 14px;
    display: none;
  }

  .opinion-box ul li .del-i{cursor: pointer}
  .opinion-box ul li {
    width: 219px;
    line-height: 30px;
    position: relative;
    background: #fff;
    text-indent: 5px;
    box-shadow: 0px 0px 9px 1px #ccc;
    margin: 6px auto;
    display: none;
  }
  .opinion-box ul li .del-i {
    cursor: pointer;
    position: absolute;
    right: 12px;

  }

  .audit-box-tip .btn-group{
    margin-top: 80px;
  }
  .app-list{
    border-bottom: 1px dashed #C1C1C1;
  }
  #pj-deploy .item-box{display: flex;
    flex-direction: column;
  }
  #table_box>div,.app-list{
    position: relative;
  }
  .audit_opinion{
    display: none;
    position: absolute;
    right: 0;
    top: 40px;
    padding: 10px 20px;
    border: 1px dashed #064B9F;
    background: #F2F2F2;
    text-align: center;
    width: 150px;
    z-index: 80;
  }
  .OpinionList>li{
    line-height: 25px;
  }

  .OpinionList div {
    text-align: left;
    line-height: 20px;
  }
  .OpinionList li {
    text-align: left;
  }

  .layui-form-item .layui-inline {
    margin-bottom: 5px;
    margin-right: -18px;
  }

  .icon-bitian:before{
    color: red;
    cursor: pointer;
    position: absolute;
    right: 70px;
    font-size: 19px;
    font-weight: 100;

  }

  .audit-i-box{
    display: none;
  }


  .hj-box {
    margin-top: 16px;
    color: #696868;
  }

  .loading-box1{
    width: 39px;
    height: 39px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -19px;
    margin-top: -19px;
    z-index: 999;
  }

  #pj-staffvalue {
    margin-bottom: 300px;
  }

  .staffvalue-box {
    margin-left: 9px;
    margin-top: 15px;
  }
</style>
