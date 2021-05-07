import { Component, OnInit } from '@angular/core';
import {ReqAppointService} from "../../services/req-appoint.service";

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.css']
})
export class ExamenesComponent implements OnInit {
table;
  constructor(private req: ReqAppointService) { }

  async ngOnInit(): Promise<void> {
    this.req.getExams()
        .then(
            data => {
              this.table = data;
              console.log(data);
            }
        );
    console.log(this.table);
  }

  downl(str){
    window.open('https://api.reservas-lab.ml' + str);
  }

}
