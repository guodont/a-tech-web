'use strict';

describe('Controller: PostquestionCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var PostquestionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostquestionCtrl = $controller('PostquestionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PostquestionCtrl.awesomeThings.length).toBe(3);
  });
});
