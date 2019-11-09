jQuery(document).ready(function() {

	jQuery("#nav-toggler").click(function() {

		jQuery("#nav-mobile").slideToggle();

	});

	jQuery("#nav-mobile-x-button").click(function() {

		jQuery("#nav-mobile").slideToggle();

	});

	jQuery("#scharf-toggler").click(function() {

		jQuery("#scharf").show();
		jQuery("#team").hide();
		jQuery("#customers").hide();
		jQuery("#process").hide();
		jQuery("#renovations").hide();

	});

	jQuery("#team-toggler").click(function() {

		jQuery("#scharf").hide();
		jQuery("#team").show();
		jQuery("#customers").hide();
		jQuery("#process").hide();
		jQuery("#renovations").hide();

	});

	jQuery("#customers-toggler").click(function() {

		jQuery("#scharf").hide();
		jQuery("#team").hide();
		jQuery("#customers").show();
		jQuery("#process").hide();
		jQuery("#renovations").hide();

	});

	jQuery("#process-toggler").click(function() {

		jQuery("#scharf").hide();
		jQuery("#team").hide();
		jQuery("#customers").hide();
		jQuery("#process").show();
		jQuery("#renovations").hide();

	});

	jQuery("#renovations-toggler").click(function() {

		jQuery("#scharf").hide();
		jQuery("#team").hide();
		jQuery("#customers").hide();
		jQuery("#process").hide();
		jQuery("#renovations").show();

	});

	jQuery(".customer").click(function() {

		jQuery(".customer").removeClass("customer-selected");
		jQuery(".customer").removeClass("customer-unselected");
		jQuery(".customer").addClass("customer-unselected");
		jQuery(this).removeClass("customer-unselected");
		jQuery(this).addClass("customer-selected");

		jQuery(".testimony").removeClass("testimony-selected");
		jQuery(".testimony").removeClass("testimony-unselected");
		jQuery(".testimony").addClass("testimony-unselected");
		jQuery("#" + $(this).attr('name')).removeClass("testimony-unselected");
		jQuery("#" + $(this).attr('name')).addClass("testimony-selected");
	})

	jQuery(".category-header").click(function() {
		page_width = jQuery("body").width();
		if (page_width <= 768)
		{
			var up = "\u2227";
			var down = "\u2228";

			jQuery("#" + jQuery(this).attr('id') + "-holder").toggle();

			if (jQuery("#" + jQuery(this).attr('id') + "-arrow").text() == up) {
				jQuery("#" + jQuery(this).attr('id') + "-arrow").text(down);
			} else {
				jQuery("#" + jQuery(this).attr('id') + "-arrow").text(up);
			}
		}
	})



});