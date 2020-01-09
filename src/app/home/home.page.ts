import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { YiiComplaintsService } from '../yii-complaints.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // tslint:disable-next-line: member-ordering
  constructor(public formBuilder: FormBuilder, private yiiService: YiiComplaintsService){}
  complaintsForm: FormGroup;
  public currentTab = 0;
  openDetailsWithQueryParams() {
  }
  openDetailsWithService() {
  }
  openDetailsWithState() {
  }
  navigateNextTab(tabNumber) {
    this.currentTab++;
  }
  navigatePreviousTab(tabNumber: any) {
    this.currentTab--;
  }
  //url = home.page.html;
//credentialsForm; FormGroup;
  ngOnInit(): void {
    this.complaintsForm = this.formBuilder.group({
      
    });

    throw new Error('Method not implemented.');
  }
  onSubmit() {
    this.yiiService.fileComplaint(this.complaintsForm.value).subscribe();
  }
  
}

