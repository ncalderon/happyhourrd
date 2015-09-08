/**
*  Module
*
* Description
*/
angular.module('happyHourServices', [])
.factory('HappyHours', ['', function(){
	var happyhours= {};
	happyhours.list = [];
	happyhours.getById = function (id){


	};
	happyhours.getNowHappyHours = function (location) {
		happyhours.list = [];
	};
	happyhours.getByQuery = function (query){
		happyhours.list = [];
	};
	return happyhours;	
}])

;