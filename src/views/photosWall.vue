<template>
  <div>
    <wall></wall>
  </div>
</template>

<script>
import wall from '@/components/photosWall/index.vue'

export default {
  name: 'photosWall',
  data() {
    return {
      a: 'assets/img/1.jpg',
      b: 'components/1.jpg',
    }
  },
  components: {
    wall
  }
}
</script>
