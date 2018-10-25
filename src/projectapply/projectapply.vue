<template>
  <div class="projectapply">
    <div class="projectApply">
      <!--<div class="loading-box" style="display: none"><img src="../../img/loading.gif" alt="加载中..."></div>-->
      <div class="public_title">
        <!--<div>项目管理 </div>-->
      </div>
      <div class="layui-container" style="padding: 0px">
        <form class="layui-form">
          <div class="layui-row projectProgramme_box projectApply_box">
            <!--分配人员-->
            <div class="layui-col-md2" style="margin-left:0px">
              <div class="popUpbox" style="display: none;">

              </div>
              <p class="itemDes"> 项目立项申请<br/><span>（添加项目）</span></p>

              <ul class="ProgrammeList">
                <li class="layui-this">
                  <span><i class="iconfont icon-xiangmuguanli"></i>  项目名称 </span>
                  <div class="box-veirfy"></div>
                  <!--<span class="correct"><i class="layui-icon-ok layui-icon" style="margin:-5px;font-size: 18px">&#xe605;</i></span>-->
                </li>

                <li>
                  <span><i class="iconfont icon-xiangmufanwei"></i> 项目编码</span>
                  <div class="box-veirfy"></div>
                  <!--<span class="font-red"><i class="iconfont icon-bitian" style="margin:-5px"></i><span>必填</span></span>-->
                </li>
                <li>
                  <span><i class="iconfont icon-quxian"></i> 项目背景</span>
                  <div class="box-veirfy"></div>
                  <!--<span class="font-red"><i class="iconfont icon-bitian" style="margin:-5px"></i><span>必填</span></span>-->
                </li>
                <li>
                  <span><i class="iconfont icon-guanlianfujian"></i> 相关附件</span>
                  <div class="box-veirfy"></div>
                  <!--<span class="font-red"><i class="iconfont icon-bitian" style="margin:-5px"></i><span>必填</span></span>-->
                </li>
                <li>
                  <span><i class="iconfont icon-fuzerenicon"></i> 建设单位</span>
                  <div class="box-veirfy"></div>
                  <!--<span class="font-red"><i class="iconfont icon-bitian" style="margin:-5px"></i><span>必填</span></span>-->
                </li>
                <li>
                  <span><i class="iconfont icon-fuzerenicon"></i> 项目负责人</span>
                  <div class="box-veirfy"></div>
                  <!--<span class="font-red"><i class="iconfont icon-bitian" style="margin:-5px"></i><span>必填</span></span>-->
                </li>
              </ul>
              <div id="submit-box" v-if="this.$route.query.flag==1">
                <div class="submitbutton" id="submit" @click="sumbitapply(1)">提交申请</div>
                <div class="submitbutton" id="save" @click="sumbitapply(2)">保存</div>
              </div>
              <div   v-else="this.$route.query.flag==0">
                <div class="submitbutton" @click="sumbitapply(1)">提交申请</div>
                <div class="submitbutton"  @click="sumbitapply(2)">保存</div>
              </div>
            </div>
            <div class="layui-col-md10">
              <span class="right-sp"><span style="color:#c2c2c2;">项目列表 一 </span> <span
                style="font-weight:500">添加项目</span></span>

              <div class="layui-form-item">
                <label class="layui-form-label">
                  <div class="title-background">项目名称:</div>
                </label>
                <div style="clear:both;">
                  <div class="layui-input-inline" style="width:100%">
                    <input type="text" name="project_Name" ref="projectName" id="project_Name" lay-verify="required"
                           autocomplete="off" class="layui-input verify-value">
                  </div>
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label">
                  <div class="title-background">项目编码:</div>
                </label>
                <div style="clear:both;">
                  <div class="layui-input-inline" style="width:100%">
                    <input type="text" name="project_Name" id="project_code" ref="projectcode" lay-verify="required"
                           autocomplete="off" class="layui-input verify-value">
                  </div>
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label">
                  <div class="title-background">项目背景:</div>
                </label>
                <textarea placeholder="请输入背景" class="layui-textarea verify-value" ref="project_Background"
                           id="project_Background" lay-verify="required"></textarea>
              </div>
              <!--<div class="layui-form-item">-->
              <!--<label class="layui-form-label">-->
              <!--<div class="title-background">项目范围:</div>-->
              <!--</label>-->
              <!--<textarea placeholder="请输入范围" class="layui-textarea verify-value" id="project_Range"></textarea>-->
              <!--</div>-->
              <div class="layui-form-item">
                <label class="layui-form-label">
                  <div class="title-background">项目附件:</div>
                </label>
                  <!--<div v-if="fileArr!=null">{{fileArr}}</div>-->
                  <!--<div v-else="fileArr==null">{{listarr.projectFile}}</div>-->
                <div style="clear:both" class="file-box">

                  <!--<input type="text" disabled v-model="listarr.projectFile">-->
                  <!--<img :src="listarr.projectFile" alt="" style="width: 100px;height: 100px">-->
                  <div class="layui-upload">
                    <el-upload
                      class="avatar-uploader"
                      action="http://172.29.3.76:9238/szga/xinghuo-apaas-fileservice/breakMultiUploads"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="imageUrl" :src="imageUrl" class="avatar" ref="projectFile">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                  </div>

                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label">
                  <div class="title-background">建设单位:</div>
                </label>
                <div style="clear:both;">
                  <div class="layui-input-inline" style="width:100%">
                    <input type="text"  ref="buildUnitName" disabled lay-verify="required"
                           id="buildUnitName" autocomplete="off" class="layui-input verify-value">
                  </div>
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label">
                  <div class="title-background">项目负责人:</div>
                </label>
                <div style="clear:both;">
                  <div class="layui-input-inline" style="width:100%">
                    <input type="text" name="project_Name" ref="buildUnitLeaderName" disabled lay-verify="required"
                         id="buildUnitLeaderName"  autocomplete="off" class="layui-input verify-value">
                  </div>
                </div>
              </div>

            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "projectapply",
    data() {
      return {
        msg: "详情页面",
        name: null,
        isShow: false,
        successid: null, // 提交保存并申请项目ID
        tableData: [],
        staffvalue: [],  // 开发单位和建设单位
        listarr: [],
        btnhtml: [],     // 提交按钮
        imageUrl: '',    // 文件地址
        fileArr: null     // 文件流
      }
    }, methods: {
      InitbuildUnit() {  // 进入新增页面自动 获取开发单位和建设单位
        var _this = this;
        this.$http.post(this.$route.query.GetaWay_url + this.$route.query.solution + "/projectinfo/getBuildUnitLeader",
          JSON.stringify({
            "accessToken": this.$route.query.accessToken,
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
            _this.staffvalue = response.data.data;
            _this.$refs.buildUnitName.value = _this.staffvalue.deptName;
            _this.$refs.buildUnitLeaderName.value = _this.staffvalue.userName
          }
        }).catch(function (error) {
          _this.$message.error('网络错误')
        });
      },
      projectID(id) {
        var _this = this;
        this.$http.post(this.$route.query.GetaWay_url + this.$route.query.solution + "/projectinfo/apply",
          JSON.stringify({
            "accessToken": this.$route.query.accessToken,
            'id': id,
            'applyBy': this.$refs.buildUnitLeaderName.value,
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
            _this.$notify({title: '成功', message: "提交申请成功", type: 'success'});
            _this.$router.push({path: '/projectlist'})
          }

        }).catch(function (error) {
          console.log(error)
        });
      },
      sumbitapply(flag) {

        if (flag == 1) {
          if (this.$refs.projectName.value.length < 1) {
            this.$message.error('请输入项目名称');
            // this.$notify({title: '提示', message: "请输入项目名称", type: 'error'});
            return;
          } else if (this.$refs.projectcode.value.length < 1) {
            this.$message.error('请输入项目编码');
            // this.$notify({title: '提示', message: "请输入项目编码", type: 'error'});
            return;
          } else if (this.$refs.buildUnitName.value.length < 1) {
            this.$message.error('请输入建设单位');
            // this.$notify({title: '提示', message: "请输入建设单位", type: 'error'});
            return;
          } else if (this.$refs.buildUnitLeaderName.value.length < 1) {
            this.$message.error('请输入项目负责人');
            // this.$notify({title: '提示', message: "请输入项目负责人", type: 'error'});
            return;
          }
        } else {
          if (this.$refs.projectName.value.length < 1) {
            this.$message.error('请输入项目名称');
            // this.$notify({title: '提示', message: "请输入项目名称", type: 'error'});
            return;
          }
        }
        var _this = this;
        // alert(_this.solution)
        this.$http.post(this.$route.query.GetaWay_url + this.$route.query.solution + "/projectinfo/save",
          JSON.stringify({
            "accessToken": this.$route.query.accessToken,
            'id': this.$route.query.id,
            'applyBy': this.$refs.buildUnitLeaderName.value,
            "projectName": this.$refs.projectName.value,
            "projectCode": this.$refs.projectcode.value,
            "buildUnitName": this.$refs.buildUnitName.value,
            "buildUnitLeaderName": this.$refs.buildUnitLeaderName.value,
            "projectDesc": this.$refs.project_Background.value,
            "projectFile": this.fileArr,
            "createBy": this.$refs.buildUnitLeaderName.value,
            "updateBy": this.$refs.buildUnitLeaderName.value,
            "buildUnitLeader": null,
            "buildUnit": null,
            "remark": "备注",
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
            _this.successid = response.data.data;
            if (flag == 1) {  // 提交申请
              _this.projectID(_this.successid);
            } else {        // 保存草稿
              _this.$notify({title: '成功', message: "保存草稿", type: 'success'});
              _this.$router.push({path: '/projectlist'})
            }

          }

        }).catch(function (error) {
          console.log(error)
        });

      },
      edit_add() {   // 判断是1: 新增页面 还是 2:编辑页面
        if (this.$route.query.flag == 1) {
          this.InitbuildUnit();
          // this.btnhtml = `<el-button type="primary"  @click="sumbitapply()">提交申请</el-button><el-button type="primary">保存</el-button>`;
          // this.$notify({title: '成功', message: "新增页面", type: 'success'});
        } else if(this.$route.query.flag == 0) {

          this.getDesdata();
          // this.$notify({title: '成功', message: "编辑页面", type: 'success'});
        }
      },
      getDesdata() {
        var _this = this;
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
            _this.listarr = response.data.data;
            _this.$refs.projectName.value = response.data.data.projectName;
            _this.$refs.projectcode.value = response.data.data.projectCode;
            _this.$refs.project_Background.value = response.data.data.projectDesc;
            // _this.$refs.projectFile = _this.listarr.projectFile;
            _this.$refs.buildUnitName.value = response.data.data.buildUnitName;
            _this.$refs.buildUnitLeaderName.value = response.data.data.buildUnitLeaderName;
            // document.getElementById("buildUnitName").value = response.data.data.buildUnitName
          }
        }).catch(function (error) {
            console.log(error)
        });
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);

      },
      beforeAvatarUpload(file) {  // 文件上传
        let _this = this;
        let formData = new FormData();
        formData.append("file", file);
        formData.append("serviceID", "f3295b7e695145509ce6f55de679f1e1");
        this.$http.post(this.$route.query.GetaWay_url + 'xinghuo-apaas-fileservice/breakMultiUploads', formData, {
          headers: {
            'mimeType': 'multipart/form-data',
            'accessToken': this.$route.query.accessToken,
            'applyID': this.$route.query.appID,
            'requestType': "app",
            'secretKey': this.$route.query.appSecretKey,
            'userInfo': null
          }
        }).then(function (response) {
          if (response.data.code == 200) {
            _this.fileArr = response.data.result[0].data.fileUrl
            // console.log(response);

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
      // this.openFullScreen2();
      this.edit_add();
      // if(this.$route.query.flag==0){
      //   this.getDesdata();
      // }

    }

  }


</script>

<style scoped>
  .popUpbox, .addModuleTwo, .editConbox, .addModuleOne {
    width: 100%;
    height: 100%;
    /*background-color: rgba(0, 0, 0, .5);*/
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .editContent {
    width: 440px;
    height: 400px;
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

  .editContent .modelline {
    width: 100%;
    height: 40px;
    background-color: #295496;
    line-height: 40px;
    padding-left: 15px;
    font-size: 15px;
    font-family: "΢���ź�";
    margin-bottom: 20px;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
  }

  .editContent #editbox {
    width: 100%;
    height: 328px;
  }

  .btn-group {
    float: right;
    margin-top: 10px;
    margin-right: 20px;
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
    height: 270px;
    margin-top: 9px;
  }

  .layui-btn-primary:hover {
    border-color: #009688;
    color: #333;
    background: #136cf3;
    color: #fff;
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

  .checkbox-box ul li:hover {
    background: #e6e6e6;
  }

  .layui-form-checked[lay-skin=primary] i {
    border-color: #295596;
    background-color: #295596;
    color: #fff;
  }

  .iconfont.icon-icon.del-i {
    float: right;
    margin-right: 18px;
    cursor: pointer;
  }

  .box-right-renyuan {
    position: absolute;
    right: 12px;
    top: 4px;
    cursor: pointer;
  }

  .submit-box div {
    display: inline-block;
    text-align: center;
  }

  .submit-box {
    text-align: center;
  }

  .submitbutton {
    width: 100px;
    height: 30px;
    line-height: 30px;
    background: #295596;
    color: #fff;
    display: inline-block;
    cursor: pointer;
  }

  .savebutton {
    color: #295596;
    margin-left: 19px;
    cursor: pointer;
  }

  #submit {
    width: 100px;
    height: 30px;
    line-height: 30px;
    background: #295596;
    color: #fff;
    cursor: pointer;
  }

  .updata-box {
    text-align: right
  }

  button#testListAction {
    background: #295596;
  }

  i.layui-icon.layui-icon-search.right-box-search {
    position: absolute;
    right: 8px;
    font-size: 27px;
    color: #8c8585;
    top: 7px;
    cursor: pointer;
  }

  .layui-form-radio > i:hover, .layui-form-radioed > i {
    color: #295596;
  }

  .layui-upload {
    overflow: hidden;
    width: 827px;
  }

  .file-name {
    overflow: hidden;
  }

  @media screen and (min-width: 1200px) {
    .layui-container {
      width: 100%;
    }
  }

  /*文件上传*/
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 53px;
    height: 43px;
    border: 1px solid;
    line-height: 43px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>
