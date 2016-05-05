'use strict';

describe('Controller: VideoCtrl', function () {

  // load the controller's module
  beforeEach(module('aTechClientApp'));

  var VideoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideoCtrl = $controller('VideoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VideoCtrl.awesomeThings.length).toBe(3);
  });
});
