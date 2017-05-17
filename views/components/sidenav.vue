<template>
  <div>
    <ul id="slide-out" class="side-nav fixed" > 
        <li v-for='scene in scenes'><a href='#' onclick='return false' v-on:click="changeScene(scene[0])">{{scene[1]}}</a></li>      
    </ul>
    <a href="#" data-activates="slide-out" class="button-collapse"><!-- <i class="material-icons">menu</i> --></a>
  </div>

</template>

<script type="text/javascript">
  export default {
    props: ['scenes'],
    data: function() {
      return {
      }
    },
    methods: {
      changeScene: function(scene) {
        this.$parent.viewer.loadScene(scene);
      }
    },
    mounted() {
        $('.button-collapse').sideNav({
          menuWidth: 250, // Default is 300
          edge: 'right', // Choose the horizontal origin
          draggable: true // Choose whether you can drag to open on touch screens
        }
      );  
    }
  }
  
</script>