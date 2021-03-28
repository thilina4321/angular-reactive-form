import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { HandleForm} from '../handle-form'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  credit = new FormGroup({
    name: new FormControl('', [
      Validators.required, Validators.minLength(5)
    ]),
    cardNumber: new FormControl('',[
      Validators.required
    ]),
    expireDate:new HandleForm('',[
      Validators.required
    ]),
    code: new FormControl('',[
      Validators.required
    ])

  })

  constructor() {
    console.log(this.credit.get('name'))
   }

  ngOnInit(): void {
  }

}
