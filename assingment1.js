class Car {
  constructor(amount){
   this.amount = amount;
 }
 describe() {
  return `${this.amount}`;   
 }
}
class CarBrand {
  constructor (name){
      this.name = name;
      this.cars =[];
  }

  addPlayer(car) {
      if (car instanceof Car) {
          this.cars.push(car);
      }else {
          throw new Error(`You can only add an instance of Player. Argument is not a player: ${car}`);
      }
      
  }

  describe() {
      return `${this.name} has ${this.cars.length} cars in their garage. ` ;
  }
}class Menu {
  constructor() {
      this.garages = [];
      this.selectedGarage = null;
  }

  start() {
      let selection = this.showMainMenuOptions();
      while (selection !=0) {
          switch (selection) {
              case '1':
                  this.createCarBrand();
                  break;
              case '2':
                  this.viewCarBrand();
                  break;
              case '3':
                  this.deleteCarBrand();
                  break;
              case '4':
                  this.displayAllCarBrands();
                  break;
              default:
                  selection = 0;

          }

          selection = this.showMainMenuOptions();
      }

      alert('Goodbye!')
  }


  showMainMenuOptions() {
      return prompt(`
      0) exit
      1) create new Car Brand
      2) view Car Brand
      3) delete Car Brand
      4) display all Car Brands
       `);
  }


  showCarBrandMenuOptions(teamInfo) {
      return prompt(`
      0) back
      1) add amount of cars
      2) delete amount of cars

      ${teamInfo}
      `);
  }
  
  displayAllCarBrands() {
      let garageString = '';
      for (let i = 1; i < this.garages.length; i++) {
         garageString += i + ') ' + this.garages[i].name + '\n';
      }
      alert(garageString);
  }
  
  
  createCarBrand() {
      let name = prompt('Enter name for new Car Brand: ');
      this.garages.push( new CarBrand(name));
  }

  viewCarBrand() {
      let index = prompt('Enter index of Car Brand you want to view: ');
      if (index > -1 && index < this.garages.length) {
          this.selectedGarage = this.garages[index];
          let description = 'Car Brand name: ' + this.selectedGarage.name + '\n';

          for (let i= 0; i < this.selectedGarage.cars.length; i++) {
              description += i + ') ' + this.selectedGarage.cars[i].name 
              + ' - ' + this.selectedGarage.cars[i].amount + '\n';
          }

          let selection = this.showCarBrandMenuOptions(description);
          switch(selection) {
              case '1':
                  this.createCar();
                  break;
              case '2':
                  this.deleteCar();
          }
      }
  }

  deleteCarBrand() {
      let index = prompt('Enter the index of the Car Brand you wish to delete: ');
      if (index > -1 && index < this.garages.length) {
          this.garages.splice(index, 1);
      }
  }

  createCar() {
      let name = prompt('Enter amount of cars for Car Brand: ');
      this.selectedGarage.cars.push(new Car(name));
    

  }

  deleteCar() {
      let index = prompt ('Enter the amount of cars you want to delete: ');
      if (index > -1 && index < this.selectedGarage.garages.length) {
          this.selectedGarage.cars.splice(index, 1);
      }
  }
}


let menu = new Menu();
menu.start(); 

