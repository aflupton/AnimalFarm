export class Farm {
  constructor(type, foodLevel) {
    this.type = type;
    this.foodLevel = foodLevel;
  }

  setHungry() {
    setInterval(() => {
      this.foodLevel--;
    }, 3000);
  }

  setChaos() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel++;
  }
}

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
