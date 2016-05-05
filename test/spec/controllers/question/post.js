'use strict';

describe('Controller: QuestionPostCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var QuestionPostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuestionPostCtrl = $controller('QuestionPostCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(QuestionPostCtrl.awesomeThings.length).toBe(3);
  });
});
