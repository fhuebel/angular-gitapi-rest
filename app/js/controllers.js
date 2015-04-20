'use strict';

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', 'AngularIssues', function($scope, AngularIssues) {
    // Instantiate an object to store your scope data in (Best Practices)
    $scope.myData = {
      currentIssue: null,
      issueList: [],
      issueListState: 'open',
      issueListType: 'owner',
      issueListSort: 'created',
      issueListDirection: 'desc',
      issueListPage: 1
    };


    // Available default actions:
    //  'get':    {method:'GET'},
    //  'save':   {method:'POST'},
    //  'query':  {method:'GET', isArray:true},
    //  'remove': {method:'DELETE'},
    //  'delete': {method:'DELETE'}
    /*
    AngularIssues.query(function(data) {
      // Assign the response INSIDE the callback
      // because this is asynchonous.
      $scope.myData.issues = data;
      console.log('line 16');
    });

    console.log('line 19');
    */

    /*
     // Accomplish the same thing with $http
     $http.get('https://api.github.com/repos/angular/angular.js/issues')
     .success(function(data) {
     console.log(data);
     $scope.myCtrl1Data.issues = data;
     })
     .error(function(data) {
     console.log(data);
     });
     */


    $scope.setIssueList = function() {
        //console.log("1 setIssueList");
        //console.log(" user value = "+document.getElementById("user1").value);
        var usernameValue = document.getElementById("user1").value;
      AngularIssues.query({
        type: $scope.myData.issueListType,
        //labels: $scope.myData.labels,
        sort: $scope.myData.issueListSort,
        direction: $scope.myData.issueListDirection,
        username: usernameValue
      }, function(data) {
        $scope.myData.issueList = data;
        //console.log(" myData.issueList = "+ $scope.myData.issueListType);

      });
    };

    $scope.setSort = function(sort) {
      var oldSort = angular.copy($scope.myData.issueListSort);
      $scope.myData.issueListSort = sort;
      if (oldSort == sort) {
        $scope.setDirection($scope.myData.issueListDirection == 'desc' ? 'asc' : 'desc');
      } else {
        $scope.setDirection('desc');
      }
    };

    $scope.setDirection = function(direction) {
      $scope.myData.issueListDirection = direction;
      $scope.setIssueList();
    };

    $scope.sortClass = function(column){
      return column == $scope.myData.issueListSort && 'sort-' + $scope.myData.issueListDirection;
    };

    $scope.setCurrentIssue = function(number) {
      console.log(" issue number = "+number);
      AngularIssues.getIssue({number: number}, function(data){
        console.log(data);
        $scope.myData.currentIssue = data;
      });
    };

    $scope.showAll = function() {
      $scope.myData.currentIssue = null;
    };

    $scope.setIssueList();
  }])
    //  ********************************************
    //  *****    MY CONTROLLER 2 for Orgs  *********
    //  ********************************************
  .controller('MyCtrl2', ['$scope','AngularOrgRepos', function($scope,  AngularOrgRepos) {
        // Instantiate an object to store your scope data in (Best Practices)
      $scope.myData = {
        currentIssue: null,
        issueList: [],
        issueListState: 'open',
        issueListType: 'owner',
        issueListSort: 'created',
        issueListDirection: 'desc',
        issueListPage: 1
      };


      // Available default actions:
      //  'get':    {method:'GET'},
      //  'save':   {method:'POST'},
      //  'query':  {method:'GET', isArray:true},
      //  'remove': {method:'DELETE'},
      //  'delete': {method:'DELETE'}
      /*
       AngularIssues.query(function(data) {
       // Assign the response INSIDE the callback
       // because this is asynchonous.
       $scope.myData.issues = data;
       console.log('line 16');
       });

       console.log('line 19');
       */

      /*
       // Accomplish the same thing with $http
       $http.get('https://api.github.com/repos/angular/angular.js/issues')
       .success(function(data) {
       console.log(data);
       $scope.myCtrl1Data.issues = data;
       })
       .error(function(data) {
       console.log(data);
       });
       */


      $scope.setIssueList1 = function() {


          var orgnameValue = document.getElementById("user1").value;
          //console.log("orgnameValue = "+orgnameValue);
        AngularOrgRepos.query({
          type: $scope.myData.issueListType,
          //labels: $scope.myData.labels
          sort: $scope.myData.issueListSort,
          direction: $scope.myData.issueListDirection,
          orgname: orgnameValue
        }, function(data) {
          $scope.myData.issueList = data;
          //console.log(" myData.issueList = "+ $scope.myData.issueListType);
        });
      };

      $scope.setSort = function(sort) {
          //console.log("2 setSort");
        var oldSort = angular.copy($scope.myData.issueListSort);
        $scope.myData.issueListSort = sort;
        if (oldSort == sort) {
          $scope.setDirection($scope.myData.issueListDirection == 'desc' ? 'asc' : 'desc');
        } else {
          $scope.setDirection('desc');
        }
      };

      $scope.setDirection = function(direction) {
          //console.log("2 setDirection")
        $scope.myData.issueListDirection = direction;
        $scope.setIssueList();
      };

      $scope.sortClass = function(column){
          //console.log("2 sortClass");
        return column == $scope.myData.issueListSort && 'sort-' + $scope.myData.issueListDirection;
      };

      $scope.setCurrentIssue = function(number) {
       // console.log("2 current issue = "+number);
          AngularOrgRepos.getOrgIssue({number: number}, function(data){
          //console.log(data);
          $scope.myData.currentIssue = data;
        });
      };

      $scope.showAll = function() {
         // console.log('2 showAll');
        $scope.myData.currentIssue = null;
      };

      $scope.setIssueList1();


  }]);