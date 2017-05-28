<template lang='hmtl'>
	<div class='singlerootdiv' id="homeview">

		<main>
			<h2>Welcome to {{title}} </h2>
	
			<h5>Tours available to view:</h5>
			<ul>
				<li><a v-for="tour in tours" :href="'/tour?name=' + tour" class="btn waves-effect waves-light">{{tour}}</a></li>
			</ul>
		</main>

	</div>
</template>


<script>
      export default {
        data: function() {
            return {
            }
        }
    }
</script>