/**
 * adminSidebar
 */
orion.admin.sidebarEvents = {
    'click #logout-btn': function(event){
        Meteor.logout();
        Router.go('/');
    },
};

orion.admin.sidebarHelpers = {
	getPath: function (options) {
		return Router.path('adminEntitiesIndex', {entity:this.name});
	},
	getEntities: function() {
		result = [];
		_.each(orion.entities, function(value, key) {
			result.push(value);
		});
		return result;
	},
	hasSidebarTabs: function() {
		return !!orion.admin.sidebarTabs;
	},
	sidebarTabs: function() {
		return orion.admin.sidebarTabs;
	},
	getPermissionForEntity: function() {
		return 'entity.' + this.name;
	}
};