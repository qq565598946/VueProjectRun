<script>
// 请求地址和参数
const solution = "xinghuo-apaas-pms-solution/pms/solution/v1";
const appID =  "ed2c076f86834ee0bc3dfa54d0f2daf7";
const appSecretKey =  "D82AAE335BDFB4FDDB80BDDA20B064C6";
const GetaWay_url =  "http://172.29.3.76:9238/szga/";
const accessToken = "5a2f4c8f07ad45d3bd34078be633b589"
// 头部参数
const headerJson = {
  'content-type': 'application/json',
  'accessToken': accessToken,
  'applyID': appID,
  'requestType': "app",
  'secretKey':appSecretKey,
  'userInfo': null
}
// 暴露对外接口变量
export default {
  solution,
  appID,
  appSecretKey,
  GetaWay_url,
  accessToken,
  headerJson
}
</script>
