<template>
  <div class="pm-model pmsetdoc">
    <div class="pm-body">
      <div class="leftAnchor">
        <div class="pjprogress">
          <div class="pjprogress_txt">
            <p>已完成 <span>0%</span></p>
            <a href="#" class="preview" onclick="preview()">预览</a>
          </div>
          <div class="layui-progress">
            <div class="layui-progress-bar layui-bg-blue" lay-percent="0%"></div>
          </div>
        </div>
        <hr class="layui-bg-gray">
        <div class="anchorNav">
          <ul>
            <li>
              <a href="#pj-basic-info">
                <div class="nav-left">
                  <i class="iconfont icon-xiangmuxushu"></i>
                  <span>基本信息</span>
                </div>
                <p class="font-red"><i class="iconfont icon-bitian"></i><span>必填</span></p>
              </a>
            </li>
            <li>
              <a href="#pj-overview">
                <div class="nav-left">
                  <i class="iconfont icon-xiangmuxushu"></i>
                  <span>项目概述</span>
                </div>
                <p class="font-red"><i class="iconfont icon-bitian"></i><span>必填</span></p>
              </a>
            </li>
            <li>
              <a href="#pj-demandAnalysis">
                <div class="nav-left">
                  <i class="iconfont icon-xuqiufenxi"></i>
                  <span>需求分析</span>
                </div>
                <p class="font-red"><i class="iconfont icon-bitian"></i><span>必填</span></p>
              </a>
            </li>
            <li>
              <a href="#pj-design">
                <div class="nav-left">
                  <i class="iconfont icon-fangansheji"></i>
                  <span>架构设计</span>
                </div>
                <p class="font-red"><i class="iconfont icon-bitian"></i><span>必填</span></p>
              </a>

            </li>
            <li>
              <a href="#pj-normalize">
                <div class="nav-left">
                  <i class="iconfont icon-kaifaguifan"></i>
                  <span>开发规范</span>
                </div>
                <p class="font-red"><i class="iconfont icon-bitian"></i><span>必读</span></p>
              </a>
            </li>

            <li>
              <a  href="#pj-service">
                <div class="nav-left">
                  <i class="iconfont icon-weifuwusheji"></i>
                  <span>微服务设计</span>
                </div>
                <p class="font-red"><i class="iconfont icon-bitian"></i><span>必填</span></p>
              </a>
            </li>
            <li>
              <a href="#pj-application">
                <div class="nav-left">
                  <i class="iconfont icon-yingyongsheji"></i>
                  <span>应用设计</span>
                </div>
                <p class="font-red"><i class="iconfont icon-bitian"></i><span>必填</span></p>
              </a>
            </li>
            <!--<li>-->
            <!--<a href="#pj-deploy">-->
            <!--<div class="nav-left">-->
            <!--<i class="iconfont icon-fuwubushuyuyunhangziyuan"></i>-->
            <!--<span>服务部署与运行资源</span>-->
            <!--</div>-->
            <!--<p class="font-red"><i class="iconfont icon-bitian"></i><span>必填</span></p>-->
            <!--</a>-->
            <!--</li>-->
            <li>
              <a href="#pj-solution">
                <div class="nav-left">
                  <i class="iconfont icon-fengxianjiejuefangan"></i>
                  <span>风险解决方案</span>
                </div>
                <p class="font-red"><i class="iconfont icon-bitian"></i><span>必填</span></p>
              </a>
            </li>
            <li>
              <a href="#pj-staffvalue">
                <div class="nav-left">
                  <i class="iconfont icon-xiangmuxushu"></i>
                  <span>分配开发人员</span>
                </div>
                <p class="font-red"><i class="iconfont icon-bitian"></i><span>必填</span></p>
              </a>
            </li>
          </ul>
          <div class="save-btn">
            <!--<button class="layui-btn layui-btn-normal layui-btn-sm" id="">保存</button>-->
            <button class="layui-btn layui-btn-normal layui-btn-sm" id="sumbit-project" onclick="sumbitData(this)">提交申请</button>
          </div>
        </div>
      </div>
      <!-- 右边内容填写 -->
      <div class="rightContent">

        <div class="popUpbox" style="display:none;">
          <div class="editContent">
            <!--<p><span>选择</span></p>-->
            <div class="left-right-box">
              <div class="left-ft-box layui-form">
                <div class="layui-input-inline" style="width:100%">
                  <input type="text" name="project_Name" id="project_Responsible"  autocomplete="off" class="layui-input" >
                  <i class="layui-icon layui-icon-search right-box-search"></i>
                </div>
                <div class="ry-option" >
                  <span class="ry-label">选择:</span>
                  <div class="layui-form-item" pane="" id="Personnel">
                    <!--<div class="option-checkbox">-->
                    <!--<input type="checkbox" name="like1[write]" lay-skin="primary" title="张笑天"  value="张笑天" lay-filter="staffCheckbox">-->
                    <!--</div>-->
                    <!--<div class="option-checkbox">-->
                    <!--<input type="checkbox" name="like1[write]" lay-skin="primary" title="李思咦" value="李思咦" lay-filter="staffCheckbox">-->
                    <!--</div>-->
                    <!--<div class="option-checkbox">-->
                    <!--<input type="checkbox" name="like1[write]" lay-skin="primary" title="李思咦" value="李思咦" lay-filter="staffCheckbox">-->
                    <!--</div>-->
                    <!--<div class="option-checkbox">-->
                    <!--<input type="checkbox" name="like1[write]" lay-skin="primary" title="李思咦" value="李思咦" lay-filter="staffCheckbox">-->
                    <!--</div>-->

                  </div>
                  <div id="page-button"></div>
                </div>

              </div>
              <!--<div class="right-ft-box">-->
              <!--<div class="header-ft-box">-->
              <!--<span>已选</span><span>（0）</span><span>清空</span>-->
              <!--</div>-->
              <!--<div class="checkbox-box">-->
              <!--<ul>-->
              <!--</ul>-->
              <!--</div>-->
              <!--</div>-->
            </div>
            <div class="btn-group">
              <div class="layui-btn layui-btn-primary getDocData">保存</div>
              <div class="layui-btn layui-btn-primary cancelEditor">取消</div>
            </div>
          </div>
        </div>

        <div class="right-sp"> <span style="color:#c2c2c2;">项目列表 一 </span> <span style="color:#c2c2c2;">项目详情 一 </span><span style="font-weight:500">添加项目方案</span></div>
        基本信息
        <div class="pj-item" id="pj-basic-info">
          <!--<div class="right-sp"> <span style="color:#c2c2c2;">项目列表 一 </span> <span style="color:#c2c2c2;">项目详情 一 </span><span style="font-weight:500">添加项目方案</span></div>-->

          <div class="pj-item-header">
            <div class="pj-item-header-left">
              <p>基本信息</p>
              <!--<p>-->
              <!--<i class="iconfont icon-bangzhu"></i>-->
              <!--<span>帮助</span>-->
              <!--</p>-->
            </div>
            <div class="pj-item-header-right">
            </div>
          </div>
          <hr class="layui-bg-gray">
          <div class="pj-item-body">

            <div class="box-tip layui-form" style="display: none">
              <div class="info-box-center">
                <div class="layui-form-item">
                  <label class="layui-form-label">方案名称:</label>
                  <div class="layui-input-block">
                    <input type="text" name="title" lay-verify="project_Name" autocomplete="off" placeholder="请输入名称" class="layui-input" id="project_Name">
                  </div>
                </div>
                <div class="layui-form-item organ-box">
                  <div class="layui-inline">
                    <label class="layui-form-label">开发单位:</label>
                    <div class="layui-input-inline" style="width: 250px">
                      <input type="tel" name="phone" lay-verify="kfdevelopOrgan" autocomplete="off" class="layui-input" disabled id="kfdevelopOrgan">
                      <span class="box-right-renyuan" onclick="allocation(1)"><i class="iconfont icon-renyuanzengjia"></i></span>
                    </div>
                  </div>
                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 130px">编制单位:</label>
                    <div class="layui-input-inline" style="width: 250px">
                      <input type="text" name="username" lay-verify="makeUnit" placeholder="请输入单位" autocomplete="off" class="layui-input" id="makeUnit">
                    </div>
                  </div>

                </div>
                <div class="layui-form-item organ-box">
                  <div class="layui-inline">
                    <label class="layui-form-label">方案版本:</label>
                    <div class="layui-input-inline" style="width: 250px">
                      <input type="tel" name="phone" lay-verify="solutionVersion"  disabled autocomplete="off" class="layui-input" id="solutionVersion" >
                    </div>
                  </div>

                  <div class="layui-inline">
                    <label class="layui-form-label" style="width: 130px">开发单位负责人:</label>
                    <div class="layui-input-inline" style="width: 250px">
                      <select xm-select="staffselect" xm-select-search="" xm-select-max="2">

                      </select>
                    </div>
                  </div>
                  <div class="sumbit-button">
                    <a class="save-deploy btn-center"  lay-submit="" lay-filter="sumbit-info">保存</a>
                    <a class="close-deploy btn-center" onclick="closebasicinfo(this)" style="display: none">取消</a>
                  </div>
                </div>
              </div>
            </div>
            <!--新增完成-->
            <div class="info-box" style="display:none">

            </div>

          </div>
        </div>
         项目概述
        <div class="pj-item" id="pj-overview">
          <div class="pj-item-header">
            <div class="pj-item-header-left">
              <p>项目概述</p>
              <p>
                <i class="iconfont icon-bangzhu"></i>
                <span>帮助</span>
              </p>
            </div>
            <div class="pj-item-header-right">
              <div class="audit-box">
                <i class="iconfont icon-bitian"></i>
                <div class="show-audit-box">
                  <ul>
                    <li>意见:内容还需要完善</li>
                    <li>审核人:张学连</li>
                    <li>审核时间:2018-07-20</li>
                  </ul>
                </div>
              </div>
              <div class="editOprate">
                <a href="#pj-overview">
                  <div class="addItem-box" onclick="additemTemplate(1)">
                    <i class="iconfont icon-tianjia"></i>
                    <span>添加</span>
                  </div>
                </a>
              </div>

            </div>
          </div>
          <hr class="layui-bg-gray">
          <!--<div class="levelTips">-->
          <!--请完善项目概述信息-->
          <!--</div>-->
          <!--新增项目概述-->
          <div class="levelTips">
            请完善项目概述内容
          </div>
          <div class="pj-item-body line-red layui-form" id="project-overview-box" style="display: none">
            <div class="secLevel">
              <div class="pj-item-body-top">
                <p class="editTitle">项目背景</p>
                <div class="editOprate">

                </div>
              </div>
              <div class="pj-item-body-bottom" id="pj-background">
                <textarea class="layui-textarea verify-value" name="pj_background" lay-verify="pj_background" placeholder="请输入项目背景"></textarea>
              </div>
            </div>
            <div class="secLevel">
              <div class="pj-item-body-top">
                <p class="editTitle">系统现状</p>
                <div class="editOprate">
                </div>
              </div>
              <div class="pj-item-body-bottom" id="systemCurrent">
                <textarea  class="layui-textarea" lay-verify="systemCurrent" placeholder="请输入系统现状"></textarea>
              </div>
            </div>
            <div class="secLevel">
              <div class="pj-item-body-top">
                <p class="editTitle">建设目标</p>
                <div class="editOprate">

                </div>
              </div>
              <div class="pj-item-body-bottom" id="buildGoal">
                <textarea class="layui-textarea" lay-verify="buildGoal" placeholder="请输入建设目标"></textarea>
              </div>
            </div>
            <div class="secLevel">
              <div class="pj-item-body-top">
                <p class="editTitle">建设内容</p>

              </div>
              <div class="pj-item-body-bottom" id="buildContent">
                <textarea class="layui-textarea" lay-verify="buildContent" placeholder="请输入建设内容"></textarea>
              </div>
            </div>
            <div class="sumbit-button">
              <a class="btn-center" lay-submit="" lay-filter="save-sumbit">保存</a>
              <a class="btn-center cancelEditor">取消</a>
            </div>
          </div>
          <!--修改后项目概述-->
          <div class="pj-item-body layui-form" id="edit-box-overview">

          </div>
        </div>
         需求分析
        <div class="pj-item" id="pj-demandAnalysis" style="display: block">

          <div class="pj-item-header">
            <div class="pj-item-header-left">
              <p>需求分析</p>
              <p>
                <i class="iconfont icon-bangzhu"></i>
                <span>帮助</span>
              </p>
            </div>
            <div class="pj-item-header-right">
              <div class="audit-box">
                <i class="iconfont icon-bitian"></i>
                <div class="show-audit-box">
                  <ul>
                    <li>意见:内容还需要完善</li>
                    <li>审核人:张学连</li>
                    <li>审核时间:2018-07-20</li>
                  </ul>
                </div>
              </div>
              <div class="editOprate">
                <a href="#pj-demandAnalysis">
                  <div class="addItem-box" onclick="adddemandAnalysis(1)">
                    <i class="iconfont icon-tianjia"></i>
                    <span>添加</span>
                  </div>
                </a>
                <!--<div class="editCon-box-two" style="display:none" onclick="adddemandAnalysis(2)">-->
                <!--<i class="iconfont icon-bianji"></i>-->
                <!--<span>编辑</span>-->
                <!--</div>-->
              </div>
            </div>
          </div>
          <hr class="layui-bg-gray">
          <div class="levelTips">
            请完善需求分析内容
          </div>
          <!--新增需求分析-->
          <div class="pj-item-body line-red layui-form" id="demandAnalysis-content-box" style="display: none">
            <div class="secLevel">
              <div class="pj-item-body-top">
                <p class="editTitle">功能角色分析</p>

              </div>
              <div class="pj-item-body-bottom" id="functionalRoleAnalysis">
                <textarea class="layui-textarea" lay-verify="RoleAnalysis" placeholder="请输入功能角色分析"></textarea>
              </div>
            </div>
            <div class="secLevel">
              <div class="pj-item-body-top">
                <p class="editTitle">业务需求</p>
              </div>
              <div class="pj-item-body-bottom" id="businessRequirements">
                <textarea class="layui-textarea" lay-verify="Requirements" placeholder="请输入业务需求"></textarea>
              </div>
            </div>
            <div class="secLevel">
              <div class="pj-item-body-top">
                <p class="editTitle">数据资源整合</p>

              </div>

              <div class="pj-item-body-bottom" id="dataIntegration">
                <textarea class="layui-textarea" lay-verify="dataIntegration" placeholder="请输入数据资源整合"></textarea>
              </div>
            </div>
            <div class="sumbit-button">
              <a class="btn-center" lay-submit="" lay-filter="sumbit-deman">保存</a>
              <a class="btn-center close-deman-btn">取消</a>
            </div>

          </div>
          <!--新增后需求分析-->
          <div id="edit-box-deman">

          </div>
        </div>
         架构设计
        <div class="pj-item" id="pj-design">
          <div class="pj-item-header">
            <div class="pj-item-header-left">
              <p>架构设计</p>
              <p>
                <i class="iconfont icon-bangzhu"></i>
                <span>帮助</span>
              </p>
            </div>
            <div class="pj-item-header-right">
              <div class="audit-box">
                <i class="iconfont icon-bitian"></i>
                <div class="show-audit-box">
                  <ul>
                    <li>意见:内容还需要完善</li>
                    <li>审核人:张学连</li>
                    <li>审核时间:2018-07-20</li>
                  </ul>
                </div>
              </div>
              <div class="editOprate">
                <a href="#pj-design">
                  <div class="addItem-box" onclick="pjdesign(1)">
                    <i class="iconfont icon-tianjia"></i>
                    <span>添加</span>
                  </div>
                </a>
                <!--<div class="editCon-box-three" style="display: none" onclick="pjdesign(2)">-->
                <!--<i class="iconfont icon-bianji"></i>-->
                <!--<span>编辑</span>-->
                <!--</div>-->
              </div>
            </div>
          </div>
          <hr class="layui-bg-gray">
          <div class="levelTips">
            请完善架构设计内容
          </div>
          <!--新增架构设计-->
          <div class="pj-item-body line-red layui-form" id="new-add-design" style="display: none" >
            <div class="secLevel">
              <div class="pj-item-body-top">
                <p class="editTitle">总体架构</p>
              </div>
              <div class="pj-item-body-bottom" id="frameworkdesign">
                <textarea class="layui-textarea" lay-verify="frameworkdesign" placeholder="请输入总体架构"></textarea>
              </div>
            </div>
            <div class="secLevel">
              <div class="pj-item-body-top" >
                <p class="editTitle">网络拓扑图</p>
                <div class="editOprate">
                  <i class="iconfont icon-tianjia"></i>
                  <lable for="project_Enclosure" id="uploadIMG">上传拓朴图</lable>
                  <input type="file"  class="enclosure verify-value" name="file" id="project_Enclosure" style="display: none;">
                </div>
              </div>
              <div class="pj-item-body-bottom" style="border: 1px solid #e2e0e0">
                <p class="img-url" style="display: none" id="topologicalpic"></p>
                <div class="layui-upload-list">
                  <img class="layui-upload-img" id="demo1">
                  <p id="demoText"></p>
                </div>
              </div>
            </div>
            <div class="secLevel">
              <div class="pj-item-body-top">
                <p class="editTitle">系统建设原则及路线</p>
              </div>
              <div class="pj-item-body-bottom" id="principlesroutes">
                <textarea class="layui-textarea" lay-verify="principlesroutes" placeholder="请输入系统建设原则及路线"></textarea>
              </div>
            </div>
            <div class="sumbit-button">
              <a class="btn-center" lay-submit="" lay-filter="save-design">保存</a>
              <a class="btn-center cancelEditor">取消</a>
            </div>


          </div>
          <!--新增后的架构设计-->
          <div class="" id="new-add-back">

          </div>

        </div>
         开发规范
        <div class="pj-item" id="pj-normalize">
          <div class="pj-item-header">
            <div class="pj-item-header-left">
              <p>开发规范</p>
            </div>
            <div class="pj-item-header-right">
              <div class="notread">
                <span>未阅读</span>
              </div>
            </div>
          </div>
          <hr class="layui-bg-gray">
          <div class="pj-item-body">
            <div class="secLevel">
              <div class="pj-item-body-bottom norm" style="border:0px">
                <p>
                <div class="norm-content">
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

                </div>
                <a class="Read_specification" href="javascript:void(0)" onclick="normalize(this)">阅读规范</a>
                </p>

              </div>
            </div>
          </div>
        </div>
         微服务设计
        <div class="pj-item layui-form" id="pj-service">
          <div class="pj-item-header">
            <div class="pj-item-header-left">
              <p>微服务设计</p>
              <p>
                <i class="iconfont icon-bangzhu"></i>
                <span>帮助</span>
              </p>
            </div>
            <div class="pj-item-header-right">
              <div class="audit-box">
                <i class="iconfont icon-bitian"></i>
                <div class="show-audit-box">
                  <ul>
                    <li>意见:内容还需要完善</li>
                    <li>审核人:张学连</li>
                    <li>审核时间:2018-07-20</li>
                  </ul>
                </div>
              </div>
              <div class="editOprate">
                <a  href="#pj-service">
                  <div class="addItem-box" onclick="pjservice(1)">
                    <i class="iconfont icon-tianjia"></i>
                    <span>添加</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <hr class="layui-bg-gray">
          <div class="levelTips">
            请完善微服务设计内容
          </div>
          <!--新增微服务设计-->
          <div class="service-add-box line-red" style="display:none">
            <div class="secLevel">
              <div class="deploy">
                <p class="editTitle">服务名称</p>
                <div class="layui-input-inline" style="width: 300px;margin-left: 7px;">
                  <input type="tel" name="phone" lay-verify="serviceName" autocomplete="off" class="layui-input" id="serviceName">
                </div>
              </div>
            </div>
            <div class="secLevel">
              <div class="pj-item-body-top ">
                <div class="deploy">
                  <p class="editTitle">服务类型</p>
                  <div class="layui-input-inline option-left" style="width: 300px">
                    <select name="quiz" id="service-option" class="serviceType" lay-verify="serviceType">
                      <option value="3">应用服务</option>
                      <option value="1">基础技术服务</option>
                      <option value="2">通用业务服务</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="secLevel">
              <div class="pj-item-body-top">
                <p class="editTitle">服务设计</p>
              </div>
              <div class="pj-item-body-bottom" id="serviceDesign">
                <textarea class="layui-textarea serviceDesign" lay-verify="serviceDesign" placeholder="请输入服务设计"></textarea>
              </div>
            </div>
            <div class="secLevel">
              <div class="pj-item-body-top">
                <p class="editTitle">依赖的服务</p>

                <div class="editOprate">
                  <div class="editCon">
                    <!--<i class="iconfont icon-bianji"></i>-->
                    <!--<span>编辑</span>-->
                  </div>
                </div>
              </div>

              <div class="pj-item-body">
                <div class="common">通用业务服务(多选)</div>
                <div class="box-select-business layui-input-inline" style="margin:20px 0px; width: 100%">
                  <select xm-select="business_select">

                  </select>
                </div>

                <!--<div class="common_service business">-->
                <!--<ul>-->
                <!--</ul>-->
                <!--<div class="addservice" onclick="addservice(2)">-->
                <!--<i class="iconfont icon-tianjia"></i>-->
                <!--</div>-->
                <!--</div>-->
                <div class="common">基础技术服务(多选)</div>
                <div class="box-select-technical layui-input-inline" style="margin:20px 0px;width: 100%">
                  <select xm-select="technical_select">

                  </select>
                </div>
                <!--<div class="common_service technical">-->
                <!---->
                <!--<ul>-->

                <!--</ul>-->
                <!--<div class="addservice" onclick="addservice(3)">-->
                <!--<i class="iconfont icon-tianjia"></i>-->
                <!--</div>-->
                <!--</div>-->
              </div>

            </div>
            <!--部署环境和运行资源-->
            <div class="secLevel">
              <div class="pj-item-body-top">
                <p class="editTitle">部署环境和运行资源</p>
              </div>
              <div class="deploy-edit">
                <div class="deploy-box-tip1">
                  <div class="deploy">
                    <p class="common">部署环境</p>
                    <div class="option-box">
                      <select name="quiz" id="service" class="deploymentEnvironment" lay-verify="deploymentEnvironment">
                        <option value=""></option>
                        <option value="移动信息网">移动信息网</option>
                        <option value="公安信息网">公安信息网</option>
                      </select>
                    </div>
                  </div>
                  <div class="deploy">
                    <p class="common">运行资源</p>
                    <div class="option-box">
                      <select name="quiz" id="service1" class="runResource" lay-verify="runResource">
                        <option value=""></option>
                        <option value="4G/6核">4G/6核</option>
                      </select>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div class="sumbit-button">
              <a class="btn-center" lay-submit="" lay-filter="save-sumbit-serivce">保存</a>
              <a class="btn-center service-close-btn" onclick="cancelselect()">取消</a>
            </div>
          </div>
          <!--新增之后微服务设计-->
          <div class="service-box">

          </div>


        </div>
        <!-- 应用设计 -->
        <div class="pj-item" id="pj-application">
          <div class="pj-item-header">
            <div class="pj-item-header-left">
              <p>应用设计</p>
              <p>
                <i class="iconfont icon-bangzhu"></i>
                <span>帮助</span>
              </p>
            </div>
            <div class="pj-item-header-right">
              <div class="audit-box">
                <i class="iconfont icon-bitian"></i>
                <div class="show-audit-box">
                  <ul>
                    <li>意见:内容还需要完善</li>
                    <li>审核人:张学连</li>
                    <li>审核时间:2018-07-20</li>
                  </ul>
                </div>
              </div>
              <div class="editOprate">
                <a href="#pj-application">
                  <div class="addItem-box"  onclick="pjapplication(1)">
                    <i class="iconfont icon-tianjia"></i>
                    <span>添加</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <hr class="layui-bg-gray">
          <div class="levelTips">
            请完善应用设计内容
          </div>
          <!--新增应用设计-->
          <div class="add-application-box line-red layui-form" style="display: none">
            <div class="secLevel">
              <div class="deploy">
                <p class="editTitle">应用名称</p>
                <div class="layui-input-inline" style="width: 500px;margin-left: 7px;">
                  <input type="tel" name="phone" lay-verify="applicationName" autocomplete="off" class="layui-input" id="applicationName">
                </div>
              </div>
            </div>
            <div class="secLevel">
              <div class="pj-item-body-top">
                <p class="editTitle">应用概述</p>
              </div>
              <div class="pj-item-body-bottom" id="applicationOverview">
                <textarea class="layui-textarea" lay-verify="applicationOverview" placeholder="请输入应用概述"></textarea>
              </div>
            </div>
            <div class="secLevel">
              <div class="pj-item-body-top">
                <p class="editTitle">应用UI/UE规划</p>
              </div>
              <div class="pj-item-body-bottom" id="applicationPlanning">
                <div id="editor">

                </div>
                <!--<textarea class="layui-textarea" lay-verify="applicationPlanning" placeholder="请输入应用UI/UE规划"></textarea>-->
              </div>
            </div>
            <div class="secLevel">
              <div class="pj-item-body-top">
                <p class="editTitle">应用功能逻辑</p>
              </div>
              <div class="pj-item-body-bottom" id="applyLogicdiagram">
                <textarea class="layui-textarea" lay-verify="applyLogicdiagram" placeholder="请输入应用功能逻辑"></textarea>
              </div>
            </div>
            <!--<div class="secLevel">-->
              <!--<div class="pj-item-body-top">-->
                <!--<div class="deploy">-->
                  <!--<p class="editTitle">前端服务化能力集成</p>-->
                  <!--<div class="layui-input-inline option-left" style="z-index: 999999">-->
                    <!--<div class="layui-input-inline option-left" style="width:180px" >-->
                      <!--<div class="" style="width: 600px;margin: 20px";>-->
                        <!--<select xm-select="select-id" xm-select-search="">-->
                          <!--<option value="1">人脸识别服务</option>-->
                          <!--<option value="2">车牌识别服务</option>-->
                          <!--<option value="3">证件识别服务</option>-->
                          <!--<option value="4">扫一扫服务</option>-->
                          <!--<option value="5">证件识别服务</option>-->
                          <!--<option value="6">选择文件</option>-->
                          <!--<option value="7">电子签名</option>-->
                          <!--<option value="8">获取定位</option>-->
                          <!--<option value="9">获取手机状态（NFC、蓝牙、GPS、WIFI等）</option>-->
                          <!--<option value="10">设置手机状态（NFC、蓝牙、GPS、WIFI等）</option>-->
                          <!--<option value="11">获取海拔</option>-->
                          <!--<option value="12">图片压缩</option>-->
                        <!--</select>-->
                      <!--</div>-->

                    <!--</div>-->

                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <div class="sumbit-button">
              <a class="btn-center" lay-submit="" lay-filter="save-sumbit-application">保存</a>
              <a class="btn-center close-application-box" onclick="closeapplicationbox()">取消</a>
            </div>
          </div>
          <!--新增之后应用设计-->
          <div class="application-box">

          </div>


        </div>
        <!-- 风险解决方案 -->
        <div class="pj-item" id="pj-solution">
          <div class="pj-item-header">
            <div class="pj-item-header-left">
              <p>风险解决方案</p>
              <p>
                <i class="iconfont icon-bangzhu"></i>
                <span>帮助</span>
              </p>
            </div>
            <div class="pj-item-header-right">
              <div class="audit-box">
                <i class="iconfont icon-bitian"></i>
                <div class="show-audit-box">
                  <ul>
                    <li>意见:内容还需要完善</li>
                    <li>审核人:张学连</li>
                    <li>审核时间:2018-07-20</li>
                  </ul>
                </div>
              </div>
              <div class="editOprate">
                <a href="#pj-solution">
                  <div class="addItem-box">
                    <i class="iconfont icon-tianjia"></i>
                    <span>添加</span>
                  </div>
                </a>
                <!--<div class="editCon-btn" onclick="saveRisksolution(2)" style="display:none">-->
                <!--<i class="iconfont icon-bianji"></i>-->
                <!--<span>编辑</span>-->
                <!--</div>-->
              </div>
            </div>
          </div>
          <hr class="layui-bg-gray">
          <div class="levelTips">
            请完善风险解决方案内容
          </div>
          <div class="pj-item-body">
            <!--新增完成风险解决方案盒子-->
            <div class="edit-solution-box">

            </div>
            <!--新增风险解决方案盒子-->
            <div class="add-solution-box" style="display: none">
              <div class="add-box-tip">
                <div class="secLevel">
                  <div class="pj-item-body-top">
                    <p class="editTitle">风险解决方案</p>

                    <div class="editOprate">
                    </div>
                    <div class="pj-item-header-right">
                      <div class="editOprate">
                        <div class="editCon-btn" onclick="editsolution(this)" style="display: none">
                          <i class="iconfont icon-bianji"></i>
                          <!--<span>编辑</span>-->
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pj-item-body-bottom">
                    <textarea class="layui-textarea verify-value" name="pj_background "  id="riskSolution" placeholder="请输入风险解决方案"></textarea>
                  </div>
                </div>
                <div class="sumbit-button-box">
                  <a class="btn-center" onclick="saveRisksolution()">保存</a>
                  <a class="btn-center close-solution-box">取消</a>
                </div>
              </div>

            </div>

          </div>
        </div>
        <!--分配人员-->
        <div class="pj-item" id="pj-staffvalue">
          <div class="pj-item-header">
            <div class="pj-item-header-left">
              <p>分配开发人员</p>
              <!--<p>-->
              <!--<i class="iconfont icon-bangzhu"></i>-->
              <!--<span>帮助</span>-->
              <!--</p>-->
            </div>
            <div class="pj-item-header-right">
              <div class="audit-box">
                <i class="iconfont icon-bitian"></i>
                <div class="show-audit-box">
                  <ul>
                    <li>意见:内容还需要完善</li>
                    <li>审核人:张学连</li>
                    <li>审核时间:2018-07-20</li>
                  </ul>
                </div>
              </div>
              <div class="editOprate">
                <a href="#pj-staffvalue">
                  <div class="addItem-box">
                    <i class="iconfont icon-tianjia"></i>
                    <span>添加</span>
                  </div>
                </a>
                <!--<div class="editCon-btn" onclick="saveRisksolution(2)" style="display:none">-->
                <!--<i class="iconfont icon-bianji"></i>-->
                <!--<span>编辑</span>-->
                <!--</div>-->
              </div>
            </div>
          </div>
          <hr class="layui-bg-gray">
          <div class="levelTips">
            请完善分配开发人员内容
          </div>
          <div class="pj-item-body">
            <!--新增完成盒子-->
            <div class="staff-box-edit-done">

            </div>
            <!--新增盒子-->
            <div class="add-staff-box" style="display: none;">
              <div class="staff-center-box">
                <div class="layui-inline">
                  <label class="layui-form-label">开发人员:</label>
                  <div class="layui-input-inline" style="width:600px">
                    <select xm-select="developerName_select" xm-select-search="">

                    </select>
                  </div>
                  <!--<div class="layui-input-inline" style="width:300px">-->
                  <!--<input type="tel" name="phone"    autocomplete="off" class="layui-input verify-value" id="staffvalue_two" >-->
                  <!--<span class="box-right-renyuan" onclick="affecterPersonne()"><i class="iconfont icon-renyuanzengjia"></i></span>-->
                  <!--</div>-->

                </div>
                <div class="sumbit-button-box">
                  <a class="btn-center" onclick="savestaff()">保存</a>
                  <a class="btn-center close-solution-box" onclick="closebox()">取消</a>
                </div>
              </div>

            </div>

          </div>
          <div class="popUpbox-tip affecter-box" style="display: none;">
            <div class="editContent1">
              <p><span>分配开发人员</span></p>
              <div class="left-right-box">
                <div class="left-ft-box layui-form">
                  <div class="layui-input-inline" style="width:100%">
                    <input type="text" name="project_Name"  autocomplete="off" class="layui-input" >
                    <i class="layui-icon layui-icon-search right-box-search"></i>
                  </div>
                  <div class="ry-option" >
                    <span class="ry-label">选择:</span>
                    <div class="layui-form-item Personnel" pane="" id="affecterPersonne">

                    </div>
                    <!--分页按钮-->
                    <!--<div id="page-button"></div>-->
                  </div>

                </div>
                <div class="right-ft-box">
                  <div class="header-ft-box">
                    <span>已选</span><span>（0）</span><span>清空</span>
                  </div>
                  <div class="checkbox-box">
                    <ul>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="btn-group service-sumbit">
                <div class="layui-btn layui-btn-primary getDocData" onclick="savecheckbox(this)">保存</div>
                <div class="layui-btn layui-btn-primary cancelEditor">取消</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--<div class="returnTop" style="display: none;">-->
      <!--&lt;!&ndash;<img src="./img/1400503722_164344.png" alt="">&ndash;&gt;-->
    <!--</div>-->
  </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
  /*@import "../../static/css/style.css";*/
  @import "../../static/css/pm_setDoc.css";

</style>
