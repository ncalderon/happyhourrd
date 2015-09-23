angular.module('happyhourApp.controllers', [])


// Main controller
.controller('MainCtrl', function($scope, $state, $stateParams , HappyhourFactory) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

$scope.featuresConditionsList = [
{ text: "Available for now", checked: true }
,{ text: "Accepts credit cards", checked: true }
,{ text: "Delivery", checked: true }
,{ text: "Take-out", checked: true }    
];



$scope.query = {};

$scope.addCriteria = function (criteria){
  self.query[criteria.name] = criteria.value;
};

$scope.removeCriteria = function (criteria) {
  delete selft.query[criteria.name];
};

  /*$cope.$watch(
    angular.bind(this, function(){
        return this.query;
      }
    ), function (newVal, oldVal){
        happyHours.query = this.newVal;
    }
    );*/  
})


// happyHoursController
.controller('HappyhoursCtrl', function($scope, $ionicScrollDelegate, HappyhourFactory, $state, $stateParams) {
  'use strict';

  // TODO: Call service to fill happyhours property
  var location = {};


  $scope.query = "";
  HappyhourFactory.getNowHappyhours($scope, location);

  $scope.doRefresh = function (){
      $scope.happyhours = HappyhourFactory.getNowHappyhours(location);
  };

  $scope.search = function (item) {
        return !!((item.name.toLowerCase().indexOf($scope.query.toLowerCase() || '') !== -1 || item.business_vanity_name.toLowerCase().indexOf($scope.query.toLowerCase() || '') !== -1));
  };

  $scope.order = function (item){
    return item.begin_date;
  };

  $scope.getSchedule = function (item){
      return item.conditions.schedule.frequency;
  }

  $scope.scrollBottom = function() {
    $ionicScrollDelegate.scrollBottom(true);
  };

  // TODO: TRAER HAPPYHOURS DINAMICAMENTE
  //self.happyhours = happyHours.getNowHappyHours();
  //happyhours.list


})

// HappyHourController
.controller('HappyhourCtrl', function($scope, $stateParams, $state, HappyhourFactory) {
  
  $scope.happyhour = HappyhourFactory.getHappyhourById(parseInt($stateParams.happyhourId));

});
