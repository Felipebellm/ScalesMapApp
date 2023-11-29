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
        
        result[0].forEach((notes: { note: string, targets: any[] }) => {

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
          
        });
      }
    }
    if (changes['isCheckedShowNotes'] && !changes['isCheckedShowNotes'].firstChange) {
      
      this.toggleShowNotesCheckbox()

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
    });
  }

  checkSB(element: ElementRef, note: string) {
    if(note.slice(-1) === '2') {
      this.renderer.addClass(element.nativeElement, 'firstNote')
    } else if ( note.slice(-1) === 'b') {
      this.renderer.addClass(element.nativeElement, 'secondNote')
    }
  }
}
