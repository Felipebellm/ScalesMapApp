import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import {TranslateService} from "@ngx-translate/core";
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'scales-map-app';

  isCheckedShowNotes: boolean = false;
  isCheckedDarkTheme: boolean = false;

  isPentatonic: boolean = false;
  isCheckedBluesNote: boolean = false;

  instSelectCallBack: string = '';

  inst: string = '';

  @ViewChildren('instrumentsModal') instrumentsModal!: QueryList<ElementRef>;

  data: any[] = []
  @ViewChildren('filterSubmit') filterSubmit!: QueryList<ElementRef>;

  // toggleShowNotesCheckbox() {
   
  // }
  
  constructor(
    private render: Renderer2,
    private translate: TranslateService,
    private screenOrientation: ScreenOrientation
    ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngAfterViewInit(): void {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }


  toggleDarkThemeCheckbox() {

  }

  onFiltersChange() {
    if (this.filterSubmit && this.filterSubmit.first) {
      this.filterSubmit.first.nativeElement.click();
    }
  }

  onSubmit(form: NgForm) {
    
    if (form.value.scale === 'minorPentatonic' || form.value.scale === 'majorPentatonic') {
      this.isPentatonic = true;
    } else {
      this.isPentatonic = false;
    }
    // console.log(this.isCheckedBluesNote)
    let scale :string = form.value.scale;
    let key :string = form.value.key;
    let position :string = form.value.position;
    if (position == "" || !position) {
      position = "all";
    }
    this.data =  [scale, key, position, this.isCheckedBluesNote]
  }

  instrumentSelected(inst: string) {
    this.inst = inst
    if (this.inst != '') {
      this.render.addClass(this.instrumentsModal.first.nativeElement, 'hide')
      this.instSelectCallBack = inst;
    }
  }
 
}
