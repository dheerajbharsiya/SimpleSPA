import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-pto',
  templateUrl: './pto.component.html',
  styleUrls: ['./pto.component.scss']
})
export class PtoComponent implements OnInit {
  public submitted = false;
  public data;
  public ptoData: {
    fromDate: '12/12/2017',
    toDate: '13/12/2017'
  };
  constructor(public db: AngularFireDatabase) { }
  submitApply(f1) {
    this.submitted = true;
    console.log(f1);
    
  }

  ngOnInit() {
    this.db.list('/People').valueChanges().subscribe(people => {
      this.data = people;
      console.log(this.data);
    })
  }

}
