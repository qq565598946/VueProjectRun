<template>
  <div class="listaudit">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" :index="indexMethod"></el-table-column>
      <el-table-column prop="date" label="编号" ></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="address" label="版本"></el-table-column>
      <el-table-column prop="address" label="建设单位"></el-table-column>
      <el-table-column prop="address" label="项目负责人"></el-table-column>
      <el-table-column prop="address" label="进度"></el-table-column>
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

  </div>

</template>

<script>

    export default {
        name: "listaudit",
        data(){
          return{
              msg:"项目列表",
            tableData: [{
              date: '2016-05-03',
              name: '丽莎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 20111,
              tag: '家'
            }, {
              date: '2016-05-02',
              name: '张莉莎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 20222,
              tag: '公司'
            }, {
              date: '2016-05-04',
              name: '王豪',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 20333,
              tag: '家'
            }, {
              date: '2016-05-01',
              name: '里斯',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 20444,
              tag: '公司'
            }],
          }
        },methods:{
        getList(){
          this.$http.get("https://test.ttq.so/site/index.html").then((res) =>{
            console.log(res.data.data.Company_News)

          },(error)=>{

          })
        },
        indexMethod(index) {
          return index * 2
        },handleEdit(index, row) {
          console.log(index,row)
            // this.$router.push(encodeURI("/projectdes?zip="+row.zip))
          this.$router.push({
                path:'/projectdes',
            query:{
              name:row.name,
              address:row.address,
              zip:row.zip,
              city:row.city
            }

          })
        },
        handleDelete(index, row) {
          console.log(index, row)
        }
      },created:function () {

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
