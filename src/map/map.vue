

<template>
  <div class="mapbox">
  <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height: 800px" @click="getClickInfo">
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
    <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
  </baidu-map>
    <!--<div class="searchbox">-->
      <!--<div class="contentbox">-->
        <!--<el-input v-model="input" placeholder="请输入内容"></el-input>-->
      <!--</div>  <div class="contentbox">-->
      <!--<el-input v-model="input" placeholder="请输入内容"></el-input>-->
    <!--</div>-->

    <!--</div>-->
  </div>

</template>
<script>
export default {
  name:'mapbox',
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 13,
      input:null
    }
  },
  mounted:function () {
    // this.enableScrollWheelZoom(true);
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 113.822348
      this.center.lat = 22.635538
      this.zoom = this.zoom
    },
    getClickInfo (e) {
      console.log(e.point.lng)
      console.log(e.point.lat)
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
    }
  }
}
</script>
<style scoped lang="less" type="text/less">
  @baseWidth:300px;
  @baseheigth:300px;
  .bm-view {
    width: 100%;
    height: @baseheigth

  }
  .searchbox{
      display:none;
      width: @baseWidth;
      height: @baseheigth;
      position:absolute;
      top:30px;
      .contentbox{
        color: #000;
      }

  }
</style>
