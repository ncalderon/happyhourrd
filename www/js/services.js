/**
*  Module
*
* Description
*/
angular.module('happyhourApp.services', [])

// Factory HappyHourService
.factory('HappyhourService', function($http){
	var self = {};

	//self.scope = scope;
	// TODO: Set url of webservices
	//self.url = "";
	self.items = [];
	self.getHappyhoursCache = function () {
		return items;
	}
	self.getHappyhourById = function (id){
		for(var i = 0; i < self.items.length; i++){
			if(id === self.items[i].id){
				return self.items[i];
			}
		}
		
	};
	self.getNowHappyhours = function (location) {
		self.items = example_data;
		return self.items;
		/*http.get(self.url).success(function (newList){
			self.list = newList;
		}).finally(function () {
			self.scope.$broadcast("scroll.refreshComplete");
		});*/
	};
	self.getHappyhoursByQuery = function (query){
		self.list = [];
	};


	return self;	
})
;