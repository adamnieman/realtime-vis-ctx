function formHandler (sb) {

	var submit = document.getElementById("submit");
	var form = document.getElementById("form");
	var s_per_year = 31556925.9936;
	
	function INIT () {
		sb.addEvent(submit, "click", handleSubmit);
	}

	function handleSubmit () {
		var heading = form.heading.value;
		var subheading = form.subheading.value;
		var annual_emissions = +form["annual-emissions"].value;
		var annual_emissions_unit = +form["annual-emissions-unit"].value;

		var annual_emissons_kg = annual_emissions*annual_emissions_unit;

		var rate_kg_s = annual_emissons_kg/s_per_year;

		debug.log("Your emissions rate is "+rate_kg_s+" kg/s.");
		
		sb.notify({
			type : "input-submitted",
			data: {
				heading: heading,
				subheading: subheading,
				gas: "carbon dioxide",
				rate: rate_kg_s,
			}
		});
	}
	
	function DESTROY () {
		sb.unlisten(this.moduleID)
		submit, form, s_per_year = null;
	}

	return {
        init : INIT,
        destroy : DESTROY
    };
}