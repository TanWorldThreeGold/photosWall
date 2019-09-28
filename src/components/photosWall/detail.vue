<template>
  <div class="wrapper">
    <div class="list">
      <div v-for="(url, index) in urls" :key="url + index">
        <el-image class="container" style="height: 200px" :src="url" lazy>
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urls: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg'
      ]
    }
  },
  components: {}
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
.list {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  width: 1000px;
  height: 200px;
  padding: 0 16px;
  margin: 20px auto;
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