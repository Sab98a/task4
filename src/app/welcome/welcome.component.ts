import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  implements OnInit{
  @ViewChild('name') nameKey!: ElementRef;

  selectedUser: string = ''; // To store the selected user
  isButtonDisabled: boolean = true; // Initialize button's disabled state
 
  onSelectUser(user: string) {
    this.selectedUser = user;
    this.isButtonDisabled = false; // Enable the button when a user is selected
  }


  constructor() { }

  ngOnInit(): void {
  }
  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);

  }

    


}
 




