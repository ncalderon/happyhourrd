/**
*  Module
*
* Description
*/
angular.module('happyHourApp.services', [])

// Factory HappyHours
.factory('HappyHours', function($http){
	var happyhours= {};

	//happyhours.scope = scope;
	// TODO: Set url of webservices
	happyhours.url = "";
	happyhours.list = [];
	happyhours.getById = function (id){

	};
	happyhours.getNowHappyHours = function (location) {
		http.get(happyhours.url).success(function (newList){
			happyhours.list = newList;
		}).finally(function () {
			happyHours.scope.$broadcast("scroll.refreshComplete");
		});
	};
	happyhours.getByQuery = function (query){
		happyhours.list = [];
	};
	return happyhours;	
})
;