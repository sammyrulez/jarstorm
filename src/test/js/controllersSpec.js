describe('RepoListCtrl', function(){

beforeEach(module('jarStormApp'));

it('should create "repos" model with 3 repos', inject(function($controller) {
  var scope = {},
      ctrl = $controller('RepoListCtrl', {$scope:scope});

  expect(scope.repos.length).toBe(3);
}));

});
