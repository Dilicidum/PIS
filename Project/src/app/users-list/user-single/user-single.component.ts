import { Component,EventEmitter, OnInit, Input, SimpleChange,OnChanges,Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnChanges {
  @Input() user:User;
  @Output() voted = new EventEmitter<boolean>()
  constructor() { }

  images:string[] = [
    ''
  ]

  userValue : string[]=[]

  objectProperties : string[]

  image = 'https://i.pinimg.com/originals/b6/7a/1f/b67a1f743814ca13583ead145fd61e84.jpg';
  didVote = false;
  ngOnChanges(changes:{[propKey:string]:SimpleChange}): void {
    this.objectProperties = Object.keys(this.user)
    Object.keys(this.user).forEach(x=>{
      this.userValue.push(this.user[x]);
      console.log('x = ',this.user[x])
    })
  }

  vote(result:boolean){
    this.voted.emit(result);
    this.didVote = true;
  }

}
