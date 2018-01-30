class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.interval;
    this.direction = 'up';
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    this.interval = setInterval(()=>{
      this.floorUp();
      this.update();
    },250);
  }

  stop() {
    this.interval = clearInterval();
  }

  update() {
    return this.log();
  }

  _passengersEnter() {
    if (this.waitingList.length != 0) {
      for (let i = 0; i < this.waitingList.length ;i++){
        this.passengers.push(this.waitingList[i]);
        this.waitingList[i].splice(i,1);
        console.log(`${this.waitingList[i].name} has enter the elevator`);
        this.requests.push(this.waitingList[i].destinationFloor)
      }
    }
  }

  _passengersLeave() {

  }

  floorUp() {
    if (this.floor < 10 && this.direction == "up"){
      this.floor++;
    }else{
      this.direction = "down";
      this.floorDown();
    }
  }

  floorDown() {
    if (this.floor > 0 && this.direction == "down"){
      this.floor--;
    }else {
      this.direction = "up";
      this.floorUp();
    }
  }

  call(person) {
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
    console.log(this.waitingList)
    console.log(this.requests)
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
