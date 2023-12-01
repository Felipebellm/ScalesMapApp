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
