export class CounterService {
  inactiveToActive:number=0;
  increaseInactiveToActive() {
    this.inactiveToActive++;
    console.log("Inactive-To-Active", this.inactiveToActive)
  }

  activeToInactive:number=0;
  increaseActiveToInactive() {
    this.activeToInactive++; ;
    console.log("Active-To-Inactive",this.activeToInactive)
  }
}
