<template>

  <div class="projectlist">
    <!--<p v-if="errortxt.length>1">{{errortxt}}</p>-->
    <el-row style="position: relative">
    <div class="addbox"><el-button type="primary" @click="apply()">添加</el-button></div>
    <el-col :span="8" v-for="listcon in listarr" class="listclass">
      <el-button @click="handleEdit(listcon.id,listcon.auditStatus)">
      <el-card :body-style="{ padding: '30px'}" shadow="hover">
        <img src="../../static/img/resource.a72b8f8.png" class="image">
        <div style="padding: 0px;margin-top: 10px">
          <span class="itemName">{{listcon.projectName}}</span>
          <span style="display: none" class="listid">{{listcon.id}}</span>
          <div class="bottom clearfix status">
            <span v-if="listcon.auditStatus==1"style="color: #ffcb48">审核中</span>
            <span v-else-if="listcon.auditStatus==2"style="color: #23962e" >通过</span>
            <span v-else-if="listcon.auditStatus==3"style="color: #CCCCCC" >驳回</span>
            <span v-else="listcon.auditStatus==0"style="color: #CCCCCC" >草稿</span>
            <time class="time">{{ listcon.createName }}</time>
            <!--<el-button type="text" class="button">修改</el-button>-->
          </div>
        </div>
      </el-card>
      </el-button>
    </el-col>
    </el-row>

    <div class="pagebtn">

      <!--<div class="class" v-if="pagesize ? '11':'10' "></div>-->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10,30,40]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
    <!--<el-table :data="listarr" style="width: 100%">-->
      <!--<el-table-column prop="id" label="id"></el-table-column>-->
      <!--<el-table-column prop="projectCode" label="编号"></el-table-column>-->
      <!--<el-table-column prop="projectName" label="名称"></el-table-column>-->
      <!--<el-table-column prop="auditStatus" label="版本">1.0</el-table-column>-->
      <!--<el-table-column prop="buildUnitName" label="建设单位"></el-table-column>-->
      <!--<el-table-column prop="buildUnitLeaderName" label="项目负责人"></el-table-column>-->
      <!--<el-table-column prop="auditStatus" label="进度"></el-table-column>-->
      <!--<el-table-column label="操作">-->
        <!--<template slot-scope="scope">-->
          <!--<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">详情</el-button>-->
          <!--<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
        <!--</template>-->
      <!--</el-table-column>-->
    <!--</el-table>-->

  </div>

</template>
<script>
  export default {
    name: 'projectlist',
    data() {
      return {
        currentDate: new Date(),
        pagesize:12,
        pagesizes:null,
        currentPage:1,
        newarr: [],
        msg: "项目列表",
        solution: "xinghuo-apaas-pms-solution/pms/solution/v1",  //solution = "xinghuo-apaas-pms-solution-dev/pms/solution/v1"
        appID: "ed2c076f86834ee0bc3dfa54d0f2daf7",
        appSecretKey: "D82AAE335BDFB4FDDB80BDDA20B064C6",
        GetaWay_url: "http://172.29.3.76:9238/szga/",
        accessToken: null,
        listarr:[],
        total: null,
        pagecur: null,
      }
    }, mounted: function () {
      sessionStorage.setItem("access_token","fec8042f42dc48b49b01ed4de762aca3");
      this.accessToken = sessionStorage.getItem("access_token");
      this.getlistnew(1, 12);
    }, methods: {
      open4() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },
      getlistnew(current, size) {
        var _this = this;
        this.$http.post(this.GetaWay_url + this.solution + "/projectinfo/list",
          JSON.stringify({
            "accessToken": this.accessToken,
            "query": {
              "projectName_LIKE": ""
            },
            "page": {
              "current": current,
              "size": size
            }
          }), {
            headers: {
              'content-type': 'application/json',
              'accessToken': this.accessToken,
              'applyID': this.appID,
              'requestType': "app",
              'secretKey': this.appSecretKey,
              'userInfo': null
            }
          }).then(function (response) {
            if (response.data.code == 200) {
              _this.listarr = response.data.data.records;
              _this.total = response.data.data.total;
              // _this.pagesizes = response.data.data.pages;
            }
          }).catch(function (error) {
            _this.$notify({title: '失败', message: '网络错误', type: 'error'});
        });
      },
      handleEdit(id,auditStatus) {
        // this.$router.push(encodeURI("/projectdes?zip="+row.zip))
        if(auditStatus==0){
          this.$router.push({
            path:'/projectapply',
            query:{
              id:id,
              auditStatus:auditStatus,
              flag:0,
              accessToken:this.accessToken,
              solution: this.solution,
              appID: this.appID,
              appSecretKey: this.appSecretKey,
              GetaWay_url:this.GetaWay_url
            }
          })
        }else{
          this.$router.push({
            path:'/projectProgramme',
            query:{
              id:id,
              auditStatus:auditStatus,
              flag:2,
              accessToken:this.accessToken,
              solution: this.solution,
              appID: this.appID,
              appSecretKey: this.appSecretKey,
              GetaWay_url:this.GetaWay_url
            }
          })
        }

      },apply(){
          this.$router.push({
              path:'/projectapply',
              query:{
                flag:1,
                accessToken:this.accessToken,
                solution: this.solution,
                appID: this.appID,
                appSecretKey: this.appSecretKey,
                GetaWay_url:this.GetaWay_url
              }
          })
      },
      handleDelete(index, row) {
        console.log(index, row)
      },
      handleChange(val) {
        console.log(val);
      },
      handleSizeChange(size){
        this.pagesize = size;
         this.getlistnew(this.currentPage,this.pagesize)
      },
      handleCurrentChange(curr){
        this.currentPage = curr;
        this.getlistnew(this.currentPage,this.pagesize)
      },

    }, updated: function () {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .itemName{
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    display: inline-block;
  }
  .projectlist {
    height: 800px;
    /*position: relative;*/
  }

  .pagebtn {
    width: 500px;
    height: 50px;
    margin: 0 auto;

  }
  .auditcolor{
    color: #ffcb48;
  }
  .passcolor{
    color:#23962e
  }
  .rejectcolor{
    color: #cccccc;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .listnew {
    margin-top: 50px
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .listclass{
    width:300px;
    margin: 6px;
  }
  .listclass:hover{
    box-shadow: 0px 0px 5px #5fb7e9;
    cursor: pointer;
  }
  .addbox {
    position: relative;
    height: 50px;
  }
  .addbox button {
    position: absolute;
    right: 40px;
    top: 5px;
  }
  .status span{margin:15px 0px}

</style>
