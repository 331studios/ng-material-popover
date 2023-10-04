import { Component, OnInit } from '@angular/core';
import { MdePopoverTrigger } from '@331studios/ng-material-popover';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class PageExamplesFormComponent implements OnInit {

  popoverText?: string;
  previousRef?: MdePopoverTrigger;
  popoverOpen = false;
  popoverSwitching = false;

  closeTimeout: any;

  constructor() { }

  ngOnInit() {
  }

  openPopover(ref: MdePopoverTrigger, text: string) {
    console.log('this.previousRef', this.previousRef);
    console.log('ref', ref);


    if (this.previousRef !== ref) {
      console.log('this.previousRef !== ref');
      ref.openPopover();
      this.popoverSwitching = false;
    } else {
      console.log('this.previousRef === ref');
      this.popoverSwitching = true;
      clearTimeout(this.closeTimeout);
    }

    this.popoverText = text;
    this.previousRef = ref;
    this.popoverOpen = true;
  }

  closePopover(ref: MdePopoverTrigger) {
    this.closeTimeout = setTimeout(() => {
      // if (!this.popoverSwitching) {
        ref.closePopover();
        this.popoverOpen = false;
        this.previousRef = undefined;
      // }
    }, 400);
  }

}
