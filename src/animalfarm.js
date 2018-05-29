export let animal = {
  foodLevel: 10,
  type: "cow",
  setHungry: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.setChaos() == true) {
        clearInterval(hungerInterval);
        return "Your animals have perished.";
      }
    }, 3000);
  },
  setChaos: function() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function(amount) {
    return (food) => {
      this.foodLevel = amount;
      return `Your animals have eaten the ${food}! Food level goes up ${amount}.`
    }
  }
};

animal.eatSmall = animal.feed(5);
animal.eatMedium = animal.feed(10);
animal.eatLarge = animal.feed(15);
animal.eatYuck = animal.feed(-10);
animal.eatPowerUp = animal.feed(50);
animal.eatSpecialBonus = animal.feed(100);
animal.eatWeirdThing = animal.feed(Math.floor((Math.random() * 20) + 1));

// export class Farm {
//   constructor(type, foodLevel) {
//     this.type = type;
//     this.foodLevel = foodLevel;
//   }
//
//   setHungry() {
//     setInterval(() => {
//       this.foodLevel--;
//     }, 3000);
//   }
//
//   setChaos() {
//     if (this.foodLevel > 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//
//   feed() {
//     this.foodLevel++;
//   }
// }

// export class Cow extends Farm {
//   constructor() {
//     super();
//     this.name = "mistercow";
//   }
// }
//   let cow = new Farm();
//   let cowtype = new Cow ("mistercow");
//   let cowtype = new Cow ("missuscow");
//   cowtype.setHungry();
