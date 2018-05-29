import { Farm } from './../src/animalfarm.js';

describe('Farm', function() {
  let farm = new Farm("cow", 10);

  beforeEach(function() {
    farm.foodLevel = 10;
    jasmine.clock().install();
    farm.setHungry();
  });
  afterEach(function() {
    jasmine.clock().uninstall();
    farm.foodLevel = 0;
  });
  it('should have a type and a food level of 10 when created', function() {
    expect(farm.type).toEqual("cow");
    expect(farm.foodLevel).toEqual(10);
  });
  it('should have a food level of 9 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(farm.foodLevel).toEqual(9);
  });
  it('should return true if food level reaches 0', function() {
    farm.foodLevel = 0;
    expect(farm.setChaos()).toEqual(true);
  });
  it('should return true after 30 seconds', function() {
    jasmine.clock().tick(30001);
    expect(farm.setChaos()).toEqual(true);
  });
  it('should return a foodLevel of 10 once it is fed', function() {
    jasmine.clock().tick(3001);
    farm.feed();
    expect(farm.foodLevel).toEqual(10);
  })
});
