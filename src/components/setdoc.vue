<template>
  <div class="setdoc">
    <el-progress :percentage="total"></el-progress>
    <el-container>
      <el-aside width="200px">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>实施方案</template>

              <el-menu-item-group v-for="nav in navarr">
                <a :href="nav.url"> <el-menu-item index="" >{{nav.name}}</el-menu-item></a>
              </el-menu-item-group>

            </el-submenu>
          </el-menu>
        </el-aside>

      </el-aside>

      <el-main >
        <el-card class="box-card" :id="content.id" v-for="(content,index) in navarr" :data-index="index+1" >

          <div slot="header" class="clearfix">
            <span>{{content.name}}</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="addbox(index+1)">添加</el-button>
          </div>

          <div class="text item showboxdiv">
            <el-form ref="form" :model="form" label-width="80px" :label-position="labelPosition">
              <el-form-item label="活动名称">
                <el-input v-model="form.name">111</el-input>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit(index+1)" :data-index="index+1">立即创建</el-button>
                <el-button @click="addbox(index+1,index+1)">取消</el-button>
              </el-form-item>
            </el-form>
          </div>

        </el-card>
      </el-main>

    </el-container>
  </div>
</template>

<script>

  export default {
    name: "setdoc",
    data() {
      return {
        msg: "实施方案",
        currentDate: new Date(),
        total:0,
        labelPosition: 'left',
        showbox:false,
        navarr:[
          {name:"基本信息","url":"#one",id:"one"},
          {name:"项目概述","url":"#two",id:"two"},
          {name:"需求分析","url":"#three",id:"three"},
          {name:"架构设计","url":"#four",id:"four"},
          {name:"开发规范","url":"#five",id:"five"},
          {name:"微服务设计","url":"#sex",id:"sex"},
          {name:"应用设计","url":"#seven",id:"seven"},
          {name:"风险解决方案","url":"#eight",id:"eight"},
          {name:"分配开发人员","url":"#nine",id:"nine"}
          ],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      }
    },methods: {
      addbox(indexnum,closenum){
        switch (indexnum) {
          case 1:
            if(closenum==1){
              $(""+this.navarr[0].url+" .showboxdiv").css("display","none");
            }else{
              $(""+this.navarr[0].url+" .showboxdiv").css("display","block");
            }
            break;
          case 2:
            if(closenum==2){
              $(""+this.navarr[1].url+" .showboxdiv").css("display","none");
            }else{
              $(""+this.navarr[1].url+" .showboxdiv").css("display","block");
            }
            break;
          case 3:
            if(closenum==3){
              $(""+this.navarr[2].url+" .showboxdiv").css("display","none");
            }else{
              $(""+this.navarr[2].url+" .showboxdiv").css("display","block");
            }
            break;
          case 4:
            if(closenum==4){
              $(""+this.navarr[3].url+" .showboxdiv").css("display","none");
            }else{
              $(""+this.navarr[3].url+" .showboxdiv").css("display","block");
            }
            break;
          default: this.$message('暂无');
        }
      },
      onSubmit(num) {
        switch (num) {
          case 1:
            this.$notify({title: '成功', message:this.navarr[0].name, type: 'success'});
            this.total =10;
            break;
          case 2:
            this.$notify({title: '成功', message: this.navarr[1].name, type: 'success'});
            this.total =20;
            break;
          case 3:
            this.$notify({title: '成功', message: this.navarr[2].name, type: 'success'});
            this.total =30;
            break;
          case 4:
            this.$notify({title: '成功', message: this.navarr[3].name, type: 'success'});
            this.total =40;
            break;
          default: this.$message('暂无');
        }
      },
      handleClick: function (tab, event) {
        switch (tab.index) {
          case "0":
            this.$notify({title: '成功', message: '用户管理', type: 'success'});
            break;
          case "1":
            this.$notify({title: '成功', message: '配置管理', type: 'success'});
            break;
          case "2":
            this.$notify({title: '成功', message: '角色管理', type: 'success'});
            break;
          case "3":
            this.$notify({title: '成功', message: '定时任务补偿', type: 'success'});
            break;
          default: this.$message('暂无');
        }
      }
    },mounted:function () {
        $(".el-main").find(".box-card").each(function (i,n) {
             var  _this = $(this).index();
            var con = n;
                  if(i==0){}
        })
    }
  }
</script>

<style scoped>

  .showboxdiv{
   display: none;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    margin: 0 auto;
  }
</style>

