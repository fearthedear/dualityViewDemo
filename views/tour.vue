<template lang='html'>
	<div class='singlerootdiv'>
		<sidenav :scenes="scenes"></sidenav>

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
				this.viewer = pannellum.viewer( 'tourobject', tour )
			}
		},
		mounted() {
			var that = this;
			var tourname = this._data.tour;
			var tourjson = this._data.tourjson;
			this.createPannellum(tourjson)
		}
	}

</script>