import { Component } from '@angular/core';
//import {isNumber} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 value='0';
 readyForNewInput = true;
 oldvalue = '0';
 lastOperator = 'x';
 numberGroups=[
 ['c', '/','x'],
 [7,8,9,'-'],
 [4,5,6,'+'],
 [1,2,3,],
 [0, '=']];

onButtonPress(symbol){
  console.log(symbol);


  if (!isNaN(symbol)){
    //your Code if number
     console.log('is a number');
     //{
     //return symbol
    // }
     

if(this.readyForNewInput)
this.value =  '' + symbol;
else 
this.value +=  '' + symbol;

this.readyForNewInput = false;


  }
  
else if (symbol ==='c') {
this.value = '0';
this.readyForNewInput = true;

}
else if (symbol === '='){
 if (this.lastOperator === 'x')
 this.value = '' + (parseInt(this.oldvalue) * parseInt(this.value));

 if (this.lastOperator === '-')
 this.value = '' + (parseInt(this.oldvalue) - parseInt(this.value));



 if (this.lastOperator === '+')
 this.value = '' + (parseInt(this.oldvalue) + parseInt(this.value));

 if (this.lastOperator === '/')
 this.value = '' + (parseInt(this.oldvalue) / parseInt(this.value));


}
else { 
this.readyForNewInput = true;
this.oldvalue = this.value;
this.lastOperator = symbol;
}
}

}
