import { Component, OnInit, ElementRef, Renderer2, QueryList, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.scss']
})
export class FretboardComponent {

  isCheckedShowNotes: boolean = false;
  isCheckedDarkTheme: boolean = false;
  
  //NOTES 
  @ViewChildren('C') elementsC!: QueryList<ElementRef>;
  @ViewChildren('CDb') elementsCDb!: QueryList<ElementRef>;
  @ViewChildren('D') elementsD!: QueryList<ElementRef>;
  @ViewChildren('DEb') elementsDEb!: QueryList<ElementRef>;
  @ViewChildren('E') elementsE!: QueryList<ElementRef>;
  @ViewChildren('F') elementsF!: QueryList<ElementRef>;
  @ViewChildren('FGb') elementsFGb!: QueryList<ElementRef>;
  @ViewChildren('G') elementsG!: QueryList<ElementRef>;
  @ViewChildren('GAb') elementsGAb!: QueryList<ElementRef>;
  @ViewChildren('A') elementsA!: QueryList<ElementRef>;
  @ViewChildren('ABb') elementsABb!: QueryList<ElementRef>;
  @ViewChildren('B') elementsB!: QueryList<ElementRef>;
  @ViewChildren('note') elementsNote!: QueryList<ElementRef>;
  
  // FILTER TRIGGER
  @ViewChildren('filterSubmit') filterSubmit!: QueryList<ElementRef>;
  // @ViewChildren('filterSubmit') filterSubmit!: ElementRef;


  constructor(private renderer: Renderer2) { }

  toggleShowNotesCheckbox() {
    // this.isCheckedShowNotes = !this.isCheckedShowNotes;
    if (!this.isCheckedShowNotes) 
    {
      this.elementsNote.forEach(element => {
        this.renderer.addClass(element.nativeElement, 'show');
      });

    } else 
    {
      this.elementsNote.forEach(element => {
        this.renderer.removeClass(element.nativeElement, 'show');
      });
    }
    
  }

  toggleDarkThemeCheckbox() {
    this.isCheckedDarkTheme = !this.isCheckedDarkTheme;
  }

  onFiltersChange() {
    // if (this.filterSubmit) {
    //   this.renderer.selectRootElement(this.filterSubmit.nativeElement).click();
    // }
    if (this.filterSubmit && this.filterSubmit.first) {
      this.filterSubmit.first.nativeElement.click();
    }
    // this.filterSubmit.nativeElement.click();
  }

  onSubmit(form: NgForm) {
    console.log(form.value.scale);

    let scale :string = form.value.scale;
    let key :string = form.value.key;
    let position :string = form.value.position;
    if (position == "" || !position) {
      position = "all";
    }

    switch (scale) {
      case 'note':
        this.byNote(key);
        break;
      case 'major':
        this.byMajor(scale, key, position);
        break;
      case 'minor':
        this.byMinor(scale, key, position);
        break;
        default:
        // Default case
    }
  }

  byNote(key:string) {
    // console.log(key);
    if (key != "") {

      switch (key) {
        case 'C':
          this.clearKeys();
          this.elementsC.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'C2':
          this.clearKeys();
          this.elementsCDb.forEach(element => {
            // this.renderer.setProperty(element.nativeElement, 'innerHTML', )
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'Db':
          this.clearKeys();
          this.elementsCDb.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'D':
          this.clearKeys();
          this.elementsD.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'D2':
          this.clearKeys();
          this.elementsDEb.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'Eb':
          this.clearKeys();
          this.elementsDEb.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'E':
          this.clearKeys();
          this.elementsE.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'F':
          this.clearKeys();
          this.elementsF.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'F2':
          this.clearKeys();
          this.elementsFGb.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'Gb':
          this.clearKeys();
          this.elementsFGb.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'G':
          this.clearKeys();
          this.elementsG.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'G2':
          this.clearKeys();
          this.elementsGAb.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'Ab':
          this.clearKeys();
          this.elementsGAb.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'A':
          this.clearKeys();
          this.elementsA.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'A2':
          this.clearKeys();
          this.elementsABb.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'Bb':
          this.clearKeys();
          this.elementsABb.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'B':
          this.clearKeys();
          this.elementsB.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;

      }
    }
  }

  byMajor(scale:string, key:string, position:string) {
    console.log(scale, key, position);

  }

  byMinor(scale:string, key:string, position:string) {
    console.log(scale, key, position);

  }

  clearKeys() {
    this.elementsNote.forEach(element => {
      this.renderer.removeClass(element.nativeElement, 'key');
    });
  }

}
