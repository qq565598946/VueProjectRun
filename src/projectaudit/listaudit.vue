<template>
  <div class="listaudit">
    <el-table :data="tableData" style="width: 100%">
      <!--<el-table-column type="index" :index="indexMethod"></el-table-column>-->
      <el-table-column prop="projectCode" label="编号"  align='center'></el-table-column>
      <el-table-column  label="类型"  align='center'>
        <template slot-scope="scope">
        <span v-html="getinfo(typestatus['_'+scope.row.type],scope.row.type,true)"></span>
        </template>
      </el-table-column>
      <el-table-column prop="projectName" label="名称"  align='center' show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="version" label="版本"      align='center'></el-table-column>
      <el-table-column label="审核状态"  align='center'>
        <template slot-scope="scope">
          <span v-html="getinfo(status['_'+scope.row.auditStatus],scope.row.auditStatus,true)"></span>
        </template>
      </el-table-column>
      <el-table-column prop="applyName" label="提交人"  align='center' ></el-table-column>
      <el-table-column prop="auditName" label="审核人"  align='center'></el-table-column>
      <el-table-column prop="applyTime" label="时间"  align='center'></el-table-column>
      <el-table-column prop="projectId" label="立项ID"  v-if="showid"  align='center'></el-table-column>
      <el-table-column prop="solutionId" label="实施ID"  v-if="showid" align='center'></el-table-column>
      <el-table-column prop="auditStatus" label="状态"  v-if="showid" align='center'></el-table-column>
      <el-table-column label="操作"  align='center'>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagebtn">
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
  </div>

</template>

<script>
    export default {
        name: "listaudit",
        data(){
          return{
            msg:"审核列表",
            currentDate: new Date(),
            pagesize:10,
            pagesizes:null,
            currentPage:1,
            newarr: [],
            msg: "审核列表",
            solution: this.COMMON.solution,  //solution = "xinghuo-apaas-pms-solution-dev/pms/solution/v1"
            appID: this.COMMON.appID,
            appSecretKey: this.COMMON.appSecretKey,
            GetaWay_url: this.COMMON.GetaWay_url,
            accessToken:this.COMMON.accessToken,
            listarr:[],
            total: null,
            pagecur: null,
            tableData:[],
            showid:false,
            status:{      // 审核状态信息
              _1:{title:'待审核',color:'rgb(255,215,0)'},
              _2:{title:'已审核',color:'rgb(50,205,50)'},
              _3:{title:'驳回',color:'rgb(220,220,220)'},
              _4:{title:'下线',color:'rgb(255,0,0)'},
              _5:{title:'删除',color:'rgb(0,0,0)'}
            },
            typestatus:{      // 项目类型
              _1:{title:'项目立项',color:'rgb(0,191,255)'},
              _2:{title:'项目方案',color:'rgb(218,165,32)'}
            }
          }
        },methods:{
        getList(current,size){
          var _this = this;
          this.$http.post(this.GetaWay_url + this.solution + "/xhWorkOrder/list",
            JSON.stringify({
              "accessToken": this.accessToken,
              "query": {
                "auditStatus": ""
              },
              "page": {
                "current": current,
                "size": size
              }
            }), {
              headers:this.COMMON.headerJson
            }).then(function (response) {
            if (response.data.code == 200) {
              _this.tableData = response.data.data.records;
              _this.total = response.data.data.total;
              // _this.pagesizes = response.data.data.pages;
            }
          }).catch(function (error) {
               console.log(error)
          });
        },
        indexMethod(index) {
          return index * 2
        },handleEdit(index, row) {
          console.log(index,row)
          let projectType = row.type;
          if(projectType==1){
            // this.$router.push(encodeURI("/projectdes?zip="+row.zip))
            this.$router.push({
              path:'/projectProgramme',
              query:{
                id:row.projectId,
                auditStatus:row.auditStatus,
                type:row.type,
                accessToken:this.accessToken,
                solution: this.solution,
                appID: this.appID,
                appSecretKey: this.appSecretKey,
                GetaWay_url:this.GetaWay_url
              }
            })
          }else {
            this.$router.push({
              path:'/SolutionDes',
              query:{
                solutionId:row.solutionId,
                auditStatus:row.auditStatus,
                type:row.type,
                accessToken:this.accessToken,
                solution: this.solution,
                appID: this.appID,
                appSecretKey: this.appSecretKey,
                GetaWay_url:this.GetaWay_url
              }
            })
          }

        },
        getinfo(item,key,isalert){   // 审核状态 和 项目类型
            if(item){
                if(isalert){
                   return `<span style="color:${item.color}" key="${key}">${item.title}</span>`
                }
                   return `<span style="color:${item.color}" key="${key}">${item.title}</span>`
            }else{
              return ''
            }
        },
        formatterType(row,column){    // 项目类型
            switch(row.type){
                  case 1: return '项目立项';
                  break;
                  case 2: return '项目实施';
                  break;
                  default:return '暂无其他类型'
            }
        },
        formatterStatus(row,column){        // 审核状态

          switch(row.auditStatus){
            case "0":
             return '已过期';
              break;
            case "1":
              return '待审核';
              break;
            case "2":
              return '已审核';
              break;
            case "3":
             return '驳回';
              break;
            case "4":
              return '下线';
              break;
            case "5":
             return  '删除';
              break;
            default:
              return '-';
          }
        },
        handleDelete(index, row) {
          console.log(index, row)
        }
        ,
        handleSizeChange(size){
          this.pagesize = size;
          this.getList(this.currentPage,this.pagesize)
        },
        handleCurrentChange(curr){
          this.currentPage = curr;
          this.getList(this.currentPage,this.pagesize)
        },
      },created:function () {
      this.getList(1,10)
        // if(geturl=0){
        //     this.$router.push("components/projectlist.vue")
        // }else{
        //   this.$router.push("components/listaudit.vue")
        // }
      }

    }
</script>

<style scoped>
    h1{
        border: 1px solid #CCCCCC;
        padding: 20px;
    }
</style>
