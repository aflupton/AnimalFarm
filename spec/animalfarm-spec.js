import { animal } from './../src/animalfarm.js';

describe('Farm', function() {
  let cows = animal;

  beforeEach(function() {
    jasmine.clock().install();
    cows.foodLevel = 10;
    cows.type = "cow";
    cows.setHungry();
  });
  afterEach(function() {
    jasmine.clock().uninstall();
    cows.foodLevel = 0;
  });
  it('should have a type and a food level of 10 when created', function() {
    expect(cows.type).toEqual("cow");
    expect(cows.foodLevel).toEqual(10);
  });
  it('should have a food level of 9 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(cows.foodLevel).toEqual(9);
  });
  it('should return true if food level reaches 0', function() {
    cows.foodLevel = 0;
    expect(cows.setChaos()).toEqual(true);
  });
  it('should return true after 30 seconds', function() {
    jasmine.clock().tick(30001);
    expect(cows.setChaos()).toEqual(true);
  });
  it('should return a foodLevel of 10 once it is fed', function() {
    jasmine.clock().tick(3001);
    cows.eatMedium();
    expect(cows.foodLevel).toEqual(10);
  });
  it('should return a foodLevel of -10 once fed', function() {
    jasmine.clock().tick(3001);
    cows.eatYuck();
    expect(cows.foodLevel).toEqual(-10);
  })
});
