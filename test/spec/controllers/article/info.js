'use strict';

describe('Controller: ArticleInfoCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var ArticleInfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArticleInfoCtrl = $controller('ArticleInfoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ArticleInfoCtrl.awesomeThings.length).toBe(3);
  });
});
