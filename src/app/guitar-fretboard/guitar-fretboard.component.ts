import { Component, AfterViewInit, Input, OnChanges, SimpleChanges, ViewChildren, ElementRef, QueryList, Renderer2 } from '@angular/core';
import { LoadingNotesService } from '../services/loading-notes.service'

@Component({
  selector: 'app-guitar-fretboard',
  templateUrl: './guitar-fretboard.component.html',
  styleUrls: ['./guitar-fretboard.component.scss']
})
export class GuitarFretboardComponent implements AfterViewInit, OnChanges {

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

  @Input() data!: string[];
  @Input() isCheckedShowNotes!: boolean;
  @Input() isCheckedBluesNote!: boolean;

  scales: { 
    key: string; 
    major: { note: string; targets: any[] }[]; 
    minor : { note: string; targets: any[] }[] 
  }[] = [];

  constructor(
    private loadingNotes: LoadingNotesService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && !changes['data'].firstChange) {
      if (this.data[0] != '' && this.data[1] != '') {
        this.clearAll();
        
        let result = this.loadingNotes.applyFilters(this.data, this.scales);
        
        
        // if (typeof(result[2]) !== 'undefined') {
        //   // console.log(typeof(result[2][0]))
        //   result[2].forEach((n: number) => {
        //     result[0][(n-1)].push({skip: true});
        //   });
        // }

        let count: number = 1;
        let skip: boolean = false;
        result[0].forEach((notes: { note: string, targets: any[] }) => {
          if (typeof(result[2]) !== 'undefined') {
            result[2].forEach((n: number) => {
              if (n === count) {
                skip = true;
              }
            });
          }
          // debugger
          if (!skip) {
            notes.targets.forEach(element => {

              if (notes.note.length === 2) {
                this.checkSB(element, notes.note);
              }
  
              if (notes.note == result[1]) {
                this.renderer.addClass(element.nativeElement, 'key')
              } else {
                this.renderer.addClass(element.nativeElement, 'scale')
              }
  
            });  
          }
          skip = false;
          count++;
        });
        count = 1;

        if (this.isCheckedBluesNote) {
          this.bluesNote();
        }
        
      }
    }

    if (changes['isCheckedShowNotes'] && !changes['isCheckedShowNotes'].firstChange) {
      
      this.toggleShowNotesCheckbox()

    }

    if (changes['isCheckedBluesNote'] && !changes['isCheckedBluesNote'].firstChange) {
      if (this.isCheckedBluesNote) {
        this.bluesNote()
      } else {
        this.elementsNote.forEach(element => {
          this.renderer.removeClass(element.nativeElement, 'bluesNote');
        });
      }
    }
  }

  ngAfterViewInit() {
    
    let allNotes: {[key: string]: QueryList<ElementRef>} = {
      C: this.elementsC,
      CDb: this.elementsCDb,
      D: this.elementsD,
      DEb: this.elementsDEb,
      E: this.elementsE,
      F: this.elementsF,
      FGb: this.elementsFGb,
      G: this.elementsG,
      GAb: this.elementsGAb,
      A: this.elementsA,
      ABb: this.elementsABb,
      B: this.elementsB,
      note: this.elementsNote,
    }
    this.scales = this.loadingNotes.targeting([allNotes]);
  }

  toggleShowNotesCheckbox() {
    if (this.isCheckedShowNotes) {
      this.elementsNote.forEach(element => {
        this.renderer.addClass(element.nativeElement, 'show');
      });

    } else {
      this.elementsNote.forEach(element => {
        this.renderer.removeClass(element.nativeElement, 'show');
      });
    }
    
  }

  clearAll() {
    this.elementsNote.forEach(element => {
      this.renderer.removeClass(element.nativeElement, 'key');
      this.renderer.removeClass(element.nativeElement, 'scale');
      this.renderer.removeClass(element.nativeElement, 'firstNote');
      this.renderer.removeClass(element.nativeElement, 'secondNote');
      this.renderer.removeClass(element.nativeElement, 'bluesNote');
    });
  }

  checkSB(element: ElementRef, note: string) {
    if(note.slice(-1) === '2') {
      this.renderer.addClass(element.nativeElement, 'firstNote')
    } else if ( note.slice(-1) === 'b') {
      this.renderer.addClass(element.nativeElement, 'secondNote')
    }
  }

  bluesNote() {
    if (this.isCheckedBluesNote && this.data[0] === 'minorPentatonic' || this.data[0] === 'majorPentatonic') {
      
      let target = false;
      let tnMinor = 3;
      let tnMajor = 1;
      let jump = false;
      
      this.scales.forEach(groupNotes => {
        
        if (groupNotes.key === this.data[1]) {
          // console.log(groupNotes)
          target = true;
          if(groupNotes.key.slice(-1) === '2') {
            jump = true;
          }
          
          if (groupNotes.key === 'B') {
            if (this.data[0] === 'minorPentatonic') { 
              this.elementsF.forEach(element => {
                this.renderer.addClass(element.nativeElement, 'bluesNote')
              });
            } else if ((this.data[0] === 'majorPentatonic')) {
              this.elementsD.forEach(element => {
                this.renderer.addClass(element.nativeElement, 'bluesNote')
              });
            }
          }
        } else if (target) {
          if (!jump) {
            if (this.data[0] === 'minorPentatonic') { 
              groupNotes.minor[tnMinor].targets.forEach(element => {
                this.renderer.addClass(element.nativeElement, 'secondNote')
                this.renderer.addClass(element.nativeElement, 'bluesNote')
              });  
            } else if ((this.data[0] === 'majorPentatonic')) {
              groupNotes.major[tnMajor].targets.forEach(element => {
                this.renderer.addClass(element.nativeElement, 'secondNote')
                this.renderer.addClass(element.nativeElement, 'bluesNote')
              });  
            }
  
            target = false;
          } else {
            jump = false;
          }
        }
      });
    }
  }
}
