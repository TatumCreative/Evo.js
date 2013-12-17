/*
 * 
 * @require UI
 */
Evo.SectionNavigator = (function() {

	/*
	 * Navigate between the UI sections 
	 */

	var self = function() {
		
		this.transitionSpeed = 500;
		
		this.$level1 = $("#level1");
		this.$level2 = $("#level2");
		this.$wrapper = $(".section-wrapper");
		
		this.$wrapper.addClass('level1-showing');
		
		//Set handlers
		$('.section-navigator input[type=button]')	.on('mouseup', this.showLevel1.bind(this));
		$('.back-button-input')						.on('mouseup', this.showLevel2.bind(this));
		$('#Binding-toHash')						.on('mouseup', Evo.Binding.prototype.modelToHash);
	};
	
	self.prototype = {
		
		showLevel1 : function(e) {
			if(e) e.preventDefault();
			
			var id = $(e.target).attr('data-id-show');
			if(id) {
				
				$("#"+id).addClass('show');
				this.$wrapper.removeClass('level1-showing');
				this.$wrapper.addClass('level2-showing');
			}
		},
				
		showLevel2 : function(e) {
			if(e) e.preventDefault();
			
			this.$level2.find('fieldset').removeClass('show');
			this.$wrapper.addClass('level1-showing');
			this.$wrapper.removeClass('level2-showing');
			
		}
	};
	
	return self;
})();