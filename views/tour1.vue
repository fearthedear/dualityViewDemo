<template lang='html'>
<div class='singlerootdiv'>
	<div class="sidemenu">
		<h3> {{ title }} </h3>
			<ul>
				<li><p>Level 0</p></li>
					<ul>
						<li><p>Kitchen</p></li>
						<li><p>Hall</p></li>
						<li><p>Living Room</p></li>
					</ul>
				<li><p>Level 1</p></li>
			</ul>
	</div>
	<iframe id="tourframe" width="100%" height="100%" allowfullscreen style="border-style:none;" src="pannellum.htm?config=tours/tour1.json"></iframe>
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