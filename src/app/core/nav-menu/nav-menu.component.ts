import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MenuItem } from 'primeng/api';

@UntilDestroy()
@Component({
  selector: 'spd-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  displayOutwear = false;
  items: MenuItem[];
  formGroup: FormGroup;

  reviewTitleName: string;
  writeReviewName: string;

  constructor(
    private formBuilderSvc: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeFormSubscription();
    this.loadMenuItems();
  }

  private initializeForm() {
    this.formGroup = this.formBuilderSvc.group({
      writeReview: [''],
      reviewTitle: ['']
    });
  }

  private initializeFormSubscription() {
    this.formGroup.valueChanges
    .pipe(
      untilDestroyed(this)
    )
    .subscribe(values => {
      this.reviewTitleName = this.formGroup.controls[`reviewTitle`].value;
      this.writeReviewName = this.formGroup.controls[`writeReview`].value;
    });
  }

  private loadMenuItems() {
    this.items = [
      {
        label: 'Camping'
      },
      {
        label: 'Clothing',
        items: [
          {
            label: 'Outwear',
            command: (event => {
              this.displayOutwear = true;
            })
          },
          { separator: true },
          {
            label: 'Hiking Shoes / Boots'
          },
          { separator: true },
          {
            label: 'Gloves'
          },
          { separator: true },
          {
            label: 'Hats'
          }
        ]
      },
      {
        label: 'Fishing'
      },
      {
        label: 'Hiking'
      },
      {
        label: 'Biking'
      }
    ];
  }
}
