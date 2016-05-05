'use strict';

describe('Controller: TradeCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var TradeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TradeCtrl = $controller('TradeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TradeCtrl.awesomeThings.length).toBe(3);
  });
});
