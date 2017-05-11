<template>
  <div>
    <ul id="slide-out" class="side-nav fixed">
      <li><a href="#" onclick="return false" v-on:click="changeScene('hall')">Hall</a></li>
      <li><a href="#" onclick="return false" v-on:click="changeScene('living')">Living Room</a></li>
      <li><a href="#" onclick="return false" v-on:click="changeScene('kitchen')">Kitchen</a></li>
    </ul>
    <a href="#" data-activates="slide-out" class="button-collapse"><!-- <i class="material-icons">menu</i> --></a>
  </div>

</template>

<script type="text/javascript">
  export default {
    data: function() {
      return {

      }
    },
    methods: {
      changeScene: function(scene) {
        this.$parent.viewer.loadScene(scene);
      }
    },
  }
  
</script>