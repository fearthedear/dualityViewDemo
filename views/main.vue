<template lang='hmtl'>
	<div class='singlerootdiv' id="homeview">

		<main>
			<h2>Welcome to {{title}} </h2>
	
			<h5>Tours available to view:</h5>
			<ul>
				<li><div v-for="tour in tours" class="btn waves-effect waves-light" v-on:click="goToTour(tour)">{{tour}}</div></li>
			</ul>
		</main>

	</div>
</template>


<script>
      export default {
        data: function() {
            return {
            }
        },
        methods: {
        	goToTour: function(tour) {
        		function post(path, parameters) {
				    var form = $('<form></form>');

				    form.attr("method", "post");
				    form.attr("action", path);

				    $.each(parameters, function(key, value) {
				        var field = $('<input></input>');

				        field.attr("type", "hidden");
				        field.attr("name", key);
				        field.attr("value", value);

				        form.append(field);
				    });

				    // The form needs to be a part of the document in
				    // order for us to be able to submit it.
				    $(document.body).append(form);
				    form.submit();
				}

				post('/tour', {name: tour});
        	}
        }
    }
</script>