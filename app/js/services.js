'use strict';

angular.module('myApp.services', ['ngResource'])
  .factory('AngularIssues', function($resource){
      //alert("user getRepos");
      //{username: '@username'}
    return $resource('https://api.github.com/users/:username/repos/',
        {number:   '@number'},
      {getIssue: {method: 'GET', params: {number: 0}}}

    )
  })
  .factory('AngularOrgRepos', function($resource){
      //console.log(" FIRST Org Repos");
    return $resource('https://api.github.com/orgs/angular/repos',
       {number: '@number'},
       {getIssue: {method: 'GET'}}
    )
  })
    .factory('AngularOrgRepos', function($resource){
      //console.log(" Second Org  Repos");
      return $resource('https://api.github.com/orgs/:orgname/repos/:number',
          {number: '@number'},
          {getOrgIssue: {method: 'GET', params: {number: 0}}}
      )
    })
  .value('version', '0.1');

/*
{ 'get':    {method:'GET'},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} };
*/