import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scales-map-app';

  isCheckedShowNotes: boolean = false;
  isCheckedDarkTheme: boolean = false;

  isPentatonic: boolean = false;
  isPentatonicMove: boolean = false;
  isCheckedBluesNote: boolean = false;

  data: any[] = []
  @ViewChildren('filterSubmit') filterSubmit!: QueryList<ElementRef>;

  // toggleShowNotesCheckbox() {
   
  // }


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

      setTimeout(() => {
        this.isPentatonicMove = true;
      }, 500);
    } else {
      this.isPentatonic = false;
    }

    let scale :string = form.value.scale;
    let key :string = form.value.key;
    let position :string = form.value.position;
    if (position == "" || !position) {
      position = "all";
    }
    this.data =  [scale, key, position]
    // switch (scale) {
    //   case 'note':
    //     // this.byNote(key);
    //     break;
    //   case 'major':
    //     // this.byMajor(key, position);
    //     break;
    //   case 'minor':
    //     // this.byMinor(key, position);
    //     break;
    //     default:
    //     // Default case
    // }
  }

  
}
