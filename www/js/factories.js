/**
*  Module
*
* Description
*/
angular.module('happyhourApp.services', ['ngResource'])
.factory("parseApiFactory", function ($resource) {
	this.initialize = function (url) {


		var headers = {'X-Parse-Application-Id': "U9Qvy16jI4vEojvRvqe4jheQmoQrjMD1OwZ6Buij", "X-Parse-REST-API-Key":"xNsLlHrtTYNZQd2SlMd9R5Ks5bzbYqKwSdcrlv8P", "Content-Type": "application/json"};
		this.api = $resource("https://api.parse.com/1/classes/HappyHour" + '/:id', {}, {
			query: {
				method: 'GET'
				, params: {id: '@id'}
				, isArray: false
				, headers: headers
			}
			/*, update: {
				method: 'PUT'
				, headers: headers
			}
			, save: {
				method: 'POST'
				, headers: headers
			}*/
		});
	};
	return this;
})


// Factory HappyHourService
.factory('HappyhourFactory', ["parseApiFactory", function(parse){


	//var HHParse = Parse.Object.extend("HappyHours");
	/*// Initializing Parse
	Parse.initialize("U9Qvy16jI4vEojvRvqe4jheQmoQrjMD1OwZ6Buij", "wkzrqPaj28RCArg9bgTuSQXASWj3I9sTlT4anZWh");*/

	parse.initialize("");

	var self = {};

	self.error = function (error) {
            if (error) {
                scope.data.error = error;
            } else {
                return scope.data.error;
            }
        };

	

	//self.scope = scope;
	// TODO: Set url of webservices
	//self.url = "";
	self.items = [];
	/*self.getParseQuery = function () {
		return new Parse.Query(HHParse);		
	}*/
	

	return {
		getHappyhoursByQuery: function (query){
			self.list = [];
		}
		,getNowHappyhours: function (scope, location) {
			//self.items = example_data;

			parse.api.query(function (response) {
                //scope.data.items = response[scope.meta.servicefields.list];
                scope.happyhours = response.results;
            }, self.error);
			return self.items;	
		}
		,getHappyhourById: function (id){
			for(var i = 0; i < self.items.length; i++){
				if(id === self.items[i].id){
					return self.items[i];
				}
			}
		}
		,getHappyhoursCache: function () {
			return items;
		}

	};
}])

;

