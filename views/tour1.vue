<template lang='html'>
	<div class='singlerootdiv'>
		<sidenav></sidenav>

		<div id='tourobject'></div>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				
			}
		},
		methods: {
			createPannellum: function(tour) {
				//console.log(tour1)
				this.viewer = pannellum.viewer( 'tourobject', tour )
			},
			loadJSON: function(path, success, error){var xhr = new XMLHttpRequest();xhr.onreadystatechange = function(){if (xhr.readyState === XMLHttpRequest.DONE) {if (xhr.status === 200) {if (success)success(JSON.parse(xhr.responseText));} else {if (error)error(xhr);}}};xhr.open("GET", path, true);xhr.send();},
		},
		mounted() {
			var that = this;
			let tourjs;
			var next = function() {
				that.createPannellum(tourjs)
			}
			this.loadJSON('tours/tour1.json', function(data) { tourjs = data; next() }, function(xhr) { console.error(xhr) })
			}
		}

</script>