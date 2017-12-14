import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'

@Component({
  selector: 'app-pto',
  templateUrl: './pto.component.html',
  styleUrls: ['./pto.component.scss']
})
export class PtoComponent implements OnInit {
  public submitted = false;
  people: any[];
  constructor(db: AngularFireDatabase) {
    db.list('/People').valueChanges().subscribe(people => {
      this.people = people;
      console.log(this.people);
    })
  }
  submitApply(f1) {
    this.submitted = true;
    console.log(f1);
  }

  ngOnInit() {
  }

}
