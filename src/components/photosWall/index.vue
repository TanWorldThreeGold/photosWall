<template>
  <div class="wrapper">
    <div class="carousel">
      <!-- <h1>轮播图</h1> -->
      <el-carousel :interval="4000000" height="700px" indicator-position="none">
        <el-carousel-item v-for="(url, index) in urls1" :key="url + index">
          <el-image style="width: 100%;height: 100%;border-radius: 10px;" :src="url" fit="contain">
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div>
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <hr>
    <div class="list">
      <div v-for="(url, index) in urls" :key="url + index" class="imgDiv">
        <el-image class="container" :src="`${url}?imageView2/2/w/300/h/200`" lazy @click="jumpDetail(index)">
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
        <el-tag style="display: block;width: 100px;margin: 0 auto;">2019年10月</el-tag>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'photosWall',
  data() {
    return {
      arr: ['abcde', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
      urls1: [
        'http://pydzw9zee.bkt.clouddn.com/4.JPG',
        'http://pydzw9zee.bkt.clouddn.com/5.jpg',
        'http://pydzw9zee.bkt.clouddn.com/7.jpg',
        'http://pydzw9zee.bkt.clouddn.com/13.jpg',
        'http://pydzw9zee.bkt.clouddn.com/15.jpg'
      ],
      urls: [
        'http://pydzw9zee.bkt.clouddn.com/1.JPG',
        'http://pydzw9zee.bkt.clouddn.com/2.JPG',
        'http://pydzw9zee.bkt.clouddn.com/3.jpg',
        'http://pydzw9zee.bkt.clouddn.com/4.JPG',
        'http://pydzw9zee.bkt.clouddn.com/5.jpg',
        'http://pydzw9zee.bkt.clouddn.com/6.jpg',
        'http://pydzw9zee.bkt.clouddn.com/7.jpg',
        'http://pydzw9zee.bkt.clouddn.com/8.jpg',
        'http://pydzw9zee.bkt.clouddn.com/9.jpg',
        'http://pydzw9zee.bkt.clouddn.com/10.jpg',
        'http://pydzw9zee.bkt.clouddn.com/11.jpg',
        'http://pydzw9zee.bkt.clouddn.com/12.jpg',
        'http://pydzw9zee.bkt.clouddn.com/13.jpg',
        'http://pydzw9zee.bkt.clouddn.com/14.jpg',
        'http://pydzw9zee.bkt.clouddn.com/15.jpg',
        'http://pydzw9zee.bkt.clouddn.com/16.jpg',
        'http://pydzw9zee.bkt.clouddn.com/17.jpg'
      ]
    }
  },
  components: {},
  methods: {
    jumpDetail() {
      this.$router.push({ path: 'detail'})
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 1000px;
  padding: 0 16px;
  margin: 10px auto;
}
.carousel {
  width: 930px;
  flex-shrink: 0;
  margin: 0 auto;
  box-shadow: 0 2px 3px rgba(26,26,26,.1);
}
/* .el-carousel__item:nth-child(2n) {
  background-color: rgba(153, 159, 191, 0.2);
}
.el-carousel__item:nth-child(2n+1) {
  background-color: rgba(211, 220, 230, 0.2);
} */
.list {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  width: 1000px;
  height: 200px;
  padding: 0 16px;
  margin: 20px auto;
}
.imgDiv {
  width: 320px;
  height: 260px;
}
.container {
  border: 1px solid white;
  padding: 1px;
  box-shadow: 0 1px 3px rgba(26,26,26,.3);
  cursor: pointer;
  border-radius: 5px;
  margin: 10px;
}
</style>
<style>
.el-image__inner {
  width: auto;
}
</style>