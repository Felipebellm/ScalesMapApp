import { Component, AfterViewInit, ElementRef, Renderer2, QueryList, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NativeSelect } from '@material-ui/core';
import { keys } from '@material-ui/core/styles/createBreakpoints';

@Component({
  selector: 'app-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.scss']
})
export class FretboardComponent {

  isCheckedShowNotes: boolean = false;
  isCheckedDarkTheme: boolean = false;
  
  // TARGET NOTES 
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

  // NOTES
  notesC: any[] = [];
  notesC2: any[] = [];
  notesDb: any[] = [];
  notesD: any[] = [];
  notesD2: any[] = [];
  notesEb: any[] = [];
  notesE: any[] = [];
  notesF: any[] = [];
  notesF2: any[] = [];
  notesGb: any[] = [];
  notesG: any[] = [];
  notesG2: any[] = [];
  notesAb: any[] = [];
  notesA: any[] = [];
  notesA2: any[] = [];
  notesBb: any[] = [];
  notesB: any[] = [];



  

  // SCALES
  // majorScales: any[] = [];
  scales: { 
    key: string; 
    major: { note: string; targets: any[] }[]; 
    minor : { note: string; targets: any[] }[] 
  }[] = [];
  // scales: any[] = [];
  // FILTER TRIGGER
  @ViewChildren('filterSubmit') filterSubmit!: QueryList<ElementRef>;


  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {


    // Loading Notes
    this.elementsC.forEach(element => {
      this.notesC.push(element);
    });
    this.elementsCDb.forEach(element => {
      this.notesC2.push(element);
      this.notesDb.push(element);
    });
    this.elementsD.forEach(element => {
      this.notesD.push(element);
    });
    this.elementsDEb.forEach(element => {
      this.notesD2.push(element);
      this.notesEb.push(element);
    });
    this.elementsE.forEach(element => {
      this.notesE.push(element);
    });
    this.elementsF.forEach(element => {
      this.notesF.push(element);
    });
    this.elementsFGb.forEach(element => {
      this.notesF2.push(element);
      this.notesGb.push(element);
    });
    this.elementsG.forEach(element => {
      this.notesG.push(element);
    });  
    this.elementsGAb.forEach(element => {
      this.notesG2.push(element);
      this.notesAb.push(element);
    });
    this.elementsA.forEach(element => {
      this.notesA.push(element);
    });
    this.elementsABb.forEach(element => {
      this.notesA2.push(element);
      this.notesBb.push(element);
    });
    this.elementsB.forEach(element => {
      this.notesB.push(element);
    });

    
    // Loading scales. by key
    let C = { key: 'C', major: [
        { note: 'C', targets: this.notesC, },
        { note: 'D', targets: this.notesD, },
        { note: 'E', targets: this.notesE, },
        { note: 'F', targets: this.notesF, },
        { note: 'G', targets: this.notesG, },
        { note: 'A', targets: this.notesA, },
        { note: 'B', targets: this.notesB, },
      ], minor: [
        { note: 'C', targets: this.notesC, },
        { note: 'D', targets: this.notesD, },
        { note: 'Eb', targets: this.notesEb, },
        { note: 'F', targets: this.notesF, },
        { note: 'G', targets: this.notesG, },
        { note: 'Ab', targets: this.notesAb, },
        { note: 'Bb', targets: this.notesBb, },
      ] }
      this.scales.push(C);

      let C2 = { key: 'C2', major: [
        { note: 'C2', targets: this.notesC2, },
        { note: 'D2', targets: this.notesD2, },
        { note: 'F', targets: this.notesF, },
        { note: 'F2', targets: this.notesF2, },
        { note: 'G2', targets: this.notesG2, },
        { note: 'A2', targets: this.notesA2, },
        { note: 'C', targets: this.notesC, },
      ], minor: [
        { note: 'C2', targets: this.notesC2, },
        { note: 'D2', targets: this.notesD2, },
        { note: 'E', targets: this.notesE, },
        { note: 'F2', targets: this.notesF2, },
        { note: 'G2', targets: this.notesG2, },
        { note: 'A', targets: this.notesA, },
        { note: 'B', targets: this.notesB, },
      ] }
      this.scales.push(C2);

      let Db = { key: 'Db', major: [
        { note: 'Db', targets: this.notesDb, },
        { note: 'Eb', targets: this.notesEb, },
        { note: 'F', targets: this.notesF, },
        { note: 'Gb', targets: this.notesGb, },
        { note: 'Ab', targets: this.notesAb, },
        { note: 'Bb', targets: this.notesBb, },
        { note: 'C', targets: this.notesC, },
      ], minor: [
        { note: 'Db', targets: this.notesDb, },
        { note: 'Eb', targets: this.notesEb, },
        { note: 'E', targets: this.notesE, },
        { note: 'Gb', targets: this.notesGb, },
        { note: 'Ab', targets: this.notesAb, },
        { note: 'A', targets: this.notesA, },
        { note: 'B', targets: this.notesB, },
      ] }
      this.scales.push(Db);

      let D = { key: 'D', major: [
        { note: 'D', targets: this.notesD, },
        { note: 'E', targets: this.notesE, },
        { note: 'F2', targets: this.notesF2, },
        { note: 'G', targets: this.notesG, },
        { note: 'A', targets: this.notesA, },
        { note: 'B', targets: this.notesB, },
        { note: 'C2', targets: this.notesC2, },
      ], minor: [
        { note: 'D', targets: this.notesD, },
        { note: 'E', targets: this.notesE, },
        { note: 'F', targets: this.notesF, },
        { note: 'G', targets: this.notesG, },
        { note: 'Bb', targets: this.notesBb, },
        { note: 'C', targets: this.notesC, },
      ] }
      this.scales.push(D);

      let D2 = { key: 'D2', major: [
        { note: 'D2', targets: this.notesD2, },
        { note: 'F', targets: this.notesF, },
        { note: 'G', targets: this.notesG, },
        { note: 'G2', targets: this.notesG2, },
        { note: 'A2', targets: this.notesA2, },
        { note: 'C', targets: this.notesC, },
        { note: 'D', targets: this.notesD, },
      ], minor: [
        { note: 'D2', targets: this.notesD2, },
        { note: 'F', targets: this.notesF, },
        { note: 'F2', targets: this.notesF2, },
        { note: 'G2', targets: this.notesG2, },
        { note: 'A2', targets: this.notesA2, },
        { note: 'B', targets: this.notesB, },
        { note: 'C2', targets: this.notesC2, },
      ] }
      this.scales.push(D2);

      let Eb = { key: 'Eb', major: [
        { note: 'Eb', targets: this.notesEb, },
        { note: 'F', targets: this.notesF, },
        { note: 'G', targets: this.notesG, },
        { note: 'Ab', targets: this.notesAb, },
        { note: 'Bb', targets: this.notesBb, },
        { note: 'C', targets: this.notesC, },
        { note: 'D', targets: this.notesD, },
      ], minor: [
        { note: 'Eb', targets: this.notesEb, },
        { note: 'F', targets: this.notesF, },
        { note: 'Gb', targets: this.notesGb, },
        { note: 'Ab', targets: this.notesAb, },
        { note: 'Bb', targets: this.notesBb, },
        { note: 'B', targets: this.notesB, },
        { note: 'Db', targets: this.notesDb, },
      ] }
      this.scales.push(Eb);

      let E = { key: 'E', major: [
        { note: 'E', targets: this.notesE, },
        { note: 'F2', targets: this.notesF2, },
        { note: 'G2', targets: this.notesG2, },
        { note: 'A', targets: this.notesA, },
        { note: 'B', targets: this.notesB, },
        { note: 'C2', targets: this.notesC2, },
        { note: 'D2', targets: this.notesD2, },
      ], minor: [
        { note: 'E', targets: this.notesE, },
        { note: 'F2', targets: this.notesF2, },
        { note: 'G', targets: this.notesG, },
        { note: 'A', targets: this.notesA, },
        { note: 'B', targets: this.notesB, },
        { note: 'C', targets: this.notesC, },
        { note: 'D', targets: this.notesD, },
      ] }
      this.scales.push(E);

      let F = { key: 'F', major: [
        { note: 'F', targets: this.notesF, },
        { note: 'G', targets: this.notesG, },
        { note: 'A', targets: this.notesA, },
        { note: 'Bb', targets: this.notesBb, },
        { note: 'C', targets: this.notesC, },
        { note: 'D', targets: this.notesD, },
        { note: 'E', targets: this.notesE, },
      ], minor: [
        { note: 'F', targets: this.notesF, },
        { note: 'G', targets: this.notesG, },
        { note: 'Ab', targets: this.notesAb, },
        { note: 'Bb', targets: this.notesBb, },
        { note: 'C', targets: this.notesC, },
        { note: 'Db', targets: this.notesDb, },
        { note: 'Eb', targets: this.notesEb, },
      ] }
      this.scales.push(F);

      let F2 = { key: 'F2', major: [
        { note: 'F2', targets: this.notesF2, },
        { note: 'G2', targets: this.notesG2, },
        { note: 'A2', targets: this.notesA2, },
        { note: 'B', targets: this.notesB, },
        { note: 'C2', targets: this.notesC2, },
        { note: 'D2', targets: this.notesD2, },
        { note: 'F', targets: this.notesF, },
      ], minor: [
        { note: 'F2', targets: this.notesF2, },
        { note: 'G2', targets: this.notesG2, },
        { note: 'A', targets: this.notesA, },
        { note: 'B', targets: this.notesB, },
        { note: 'C2', targets: this.notesC2, },
        { note: 'D', targets: this.notesD, },
        { note: 'E', targets: this.notesE, },
      ] }
      this.scales.push(F2);

      let Gb = { key: 'Gb', major: [
        { note: 'Gb', targets: this.notesGb, },
        { note: 'Ab', targets: this.notesAb, },
        { note: 'Bb', targets: this.notesBb, },
        { note: 'B', targets: this.notesB, },
        { note: 'Db', targets: this.notesDb, },
        { note: 'Eb', targets: this.notesEb, },
        { note: 'F', targets: this.notesF, },
      ], minor: [
        { note: 'Gb', targets: this.notesGb, },
        { note: 'Ab', targets: this.notesAb, },
        { note: 'A', targets: this.notesA, },
        { note: 'B', targets: this.notesB, },
        { note: 'Db', targets: this.notesDb, },
        { note: 'D', targets: this.notesD, },
        { note: 'E', targets: this.notesE, },
      ] }
      this.scales.push(Gb);

      
      let G = { key: 'G', major: [
        { note: 'G', targets: this.notesG, },
        { note: 'A', targets: this.notesA, },
        { note: 'B', targets: this.notesB, },
        { note: 'C', targets: this.notesC, },
        { note: 'D', targets: this.notesD, },
        { note: 'E', targets: this.notesE, },
        { note: 'F2', targets: this.notesF2, },
      ], minor: [
        { note: 'G', targets: this.notesG, },
        { note: 'A', targets: this.notesA, },
        { note: 'Bb', targets: this.notesBb, },
        { note: 'C', targets: this.notesC, },
        { note: 'D', targets: this.notesD, },
        { note: 'Eb', targets: this.notesEb, },
        { note: 'F', targets: this.notesF, },
      ] }
      this.scales.push(G);

      let G2 = { key: 'G2', major: [
        { note: 'G2', targets: this.notesG2, },
        { note: 'A2', targets: this.notesA2, },
        { note: 'C', targets: this.notesC, },
        { note: 'C2', targets: this.notesC2, },
        { note: 'D2', targets: this.notesD2, },
        { note: 'F', targets: this.notesF, },
        { note: 'G', targets: this.notesG, },
      ], minor: [
        { note: 'G2', targets: this.notesG2, },
        { note: 'A2', targets: this.notesA2, },
        { note: 'B', targets: this.notesB, },
        { note: 'C2', targets: this.notesC2, },
        { note: 'D2', targets: this.notesD2, },
        { note: 'E', targets: this.notesE, },
        { note: 'F2', targets: this.notesF2, },
      ] }
      this.scales.push(G2);

      let Ab = { key: 'Ab', major: [
        { note: 'Ab', targets: this.notesAb, },
        { note: 'Bb', targets: this.notesBb, },
        { note: 'C', targets: this.notesC, },
        { note: 'Db', targets: this.notesDb, },
        { note: 'Eb', targets: this.notesEb, },
        { note: 'F', targets: this.notesF, },
        { note: 'G', targets: this.notesG, },
      ], minor: [
        { note: 'Ab', targets: this.notesAb, },
        { note: 'Bb', targets: this.notesBb, },
        { note: 'B', targets: this.notesB, },
        { note: 'Db', targets: this.notesDb, },
        { note: 'Eb', targets: this.notesEb, },
        { note: 'E', targets: this.notesE, },
        { note: 'Gb', targets: this.notesGb, },
      ] }
      this.scales.push(Ab);

      let A = { key: 'A', major: [
        { note: 'A', targets: this.notesA, },
        { note: 'B', targets: this.notesB, },
        { note: 'C2', targets: this.notesC2, },
        { note: 'D', targets: this.notesD, },
        { note: 'E', targets: this.notesE, },
        { note: 'F2', targets: this.notesF2, },
        { note: 'G2', targets: this.notesG2, },
      ], minor: [
        { note: 'A', targets: this.notesA, },
        { note: 'B', targets: this.notesB, },
        { note: 'C', targets: this.notesC, },
        { note: 'D', targets: this.notesD, },
        { note: 'E', targets: this.notesE, },
        { note: 'F', targets: this.notesF, },
        { note: 'G', targets: this.notesG, },
      ] }
      this.scales.push(A);

      let A2 = { key: 'A2', major: [
        { note: 'A2', targets: this.notesA2, },
        { note: 'C', targets: this.notesC, },
        { note: 'D', targets: this.notesD, },
        { note: 'D2', targets: this.notesD2, },
        { note: 'F', targets: this.notesF, },
        { note: 'G', targets: this.notesG, },
        { note: 'A', targets: this.notesA, },
      ], minor: [
        { note: 'A2', targets: this.notesA2, },
        { note: 'C', targets: this.notesC, },
        { note: 'C2', targets: this.notesC2, },
        { note: 'D2', targets: this.notesD2, },
        { note: 'F', targets: this.notesF, },
        { note: 'F2', targets: this.notesF2, },
        { note: 'G2', targets: this.notesG2, },
      ] }
      this.scales.push(A2);

      let Bb = { key: 'Bb', major: [
        { note: 'Bb', targets: this.notesBb, },
        { note: 'C', targets: this.notesC, },
        { note: 'D', targets: this.notesD, },
        { note: 'Eb', targets: this.notesEb, },
        { note: 'F', targets: this.notesF, },
        { note: 'G', targets: this.notesG, },
        { note: 'A', targets: this.notesA, },
      ], minor: [
        { note: 'Bb', targets: this.notesBb, },
        { note: 'C', targets: this.notesC, },
        { note: 'Db', targets: this.notesDb, },
        { note: 'Eb', targets: this.notesEb, },
        { note: 'F', targets: this.notesF, },
        { note: 'Gb', targets: this.notesGb, },
        { note: 'Ab', targets: this.notesAb, },
      ] }
      this.scales.push(Bb);

      let B = { key: 'B', major: [
        { note: 'B', targets: this.notesB, },
        { note: 'C2', targets: this.notesC2, },
        { note: 'D2', targets: this.notesD2, },
        { note: 'E', targets: this.notesE, },
        { note: 'F2', targets: this.notesF2, },
        { note: 'G2', targets: this.notesG2, },
        { note: 'A2', targets: this.notesA2, },
      ], minor: [
        { note: 'B', targets: this.notesB, },
        { note: 'C2', targets: this.notesC2, },
        { note: 'D', targets: this.notesD, },
        { note: 'E', targets: this.notesE, },
        { note: 'F2', targets: this.notesF2, },
        { note: 'G', targets: this.notesG, },
        { note: 'A', targets: this.notesA, },
      ] }
      this.scales.push(B);



    // this.scales.forEach(element => {
    //   switch ( element.key ) {
    //     case 'C':
    //         this.elementsC.forEach(element => {
              
    //         });
    //       break;
    //     case 'C2':

    //       break;
    //     case 'Db':

    //       break;
    //     case 'D':

    //       break;
    //     case 'D2':

    //       break;
    //     case 'Eb':

    //       break;
    //     case 'E':

    //       break;
    //     case 'F':

    //       break;
    //     case 'F2':

    //       break;
    //     case 'Gb':

    //       break;
    //     case 'G':

    //       break;
    //     case 'G2':

    //       break;
    //     case 'Ab':

    //       break;
    //     case 'A':

    //       break;
    //     case 'A2':

    //       break;
    //     case 'Bb':

    //       break;
    //     case 'B':

    //       break;
    
    //   }
    //   console.log(element)
    // });

    // let Cmajor: any[] = [];
    // // C Major
    // this.elementsC.forEach(element => {
    //   // element.toArray(this.majorScales)
    //   Cmajor.push(element);
    // });

    // console.log(this.scales);

    // The elements property now contains a QueryList of ElementRef instances
    // representing the elements with the 'element' template reference variable.
    // console.log(this.elements.toArray());
  }

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
    if (this.filterSubmit && this.filterSubmit.first) {
      this.filterSubmit.first.nativeElement.click();
    }
  }

  onSubmit(form: NgForm) {
    // console.log(form.value.scale);

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
        this.byMajor(key, position);
        break;
      case 'minor':
        this.byMinor(key, position);
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
          this.clearAll();
          this.elementsC.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'C2':
          this.clearAll();
          this.elementsCDb.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'firstNote');
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'Db':
          this.clearAll();
          this.elementsCDb.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'secondNote');
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'D':
          this.clearAll();
          this.elementsD.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'D2':
          this.clearAll();
          this.elementsDEb.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'firstNote');
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'Eb':
          this.clearAll();
          this.elementsDEb.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'secondNote');
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'E':
          this.clearAll();
          this.elementsE.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'F':
          this.clearAll();
          this.elementsF.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'F2':
          this.clearAll();
          this.elementsFGb.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'firstNote');
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'Gb':
          this.clearAll();
          this.elementsFGb.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'secondNote');
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'G':
          this.clearAll();
          this.elementsG.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'G2':
          this.clearAll();
          this.elementsGAb.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'firstNote');
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'Ab':
          this.clearAll();
          this.elementsGAb.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'secondNote');
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'A':
          this.clearAll();
          this.elementsA.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'A2':
          this.clearAll();
          this.elementsABb.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'firstNote');
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'Bb':
          this.clearAll();
          this.elementsABb.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'secondNote');
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;
        case 'B':
          this.clearAll();
          this.elementsB.forEach(element => {
            this.renderer.addClass(element.nativeElement, 'key');
          });
          break;

      }
    }
  }

  byMajor(key:string, position:string) {
    if (key != "") {
      this.clearAll()
      this.scales.forEach(keysList => {
        if (keysList.key === key) {
          keysList.major.forEach(scale => {
            
              scale.targets.forEach(notes => {
                if (scale.note === key) {
                  this.renderer.addClass(notes.nativeElement, 'key')
                } else {
                  this.renderer.addClass(notes.nativeElement, 'scale')
                }
              });
           
            
          });
        }
      });
    }

  }

  byMinor( key:string, position:string) {
    if (key != "") {
      this.clearAll()
      this.scales.forEach(keysList => {
        if (keysList.key === key) {
          keysList.minor.forEach(scale => {
            
              scale.targets.forEach(notes => {
                if (scale.note === key) {
                  this.renderer.addClass(notes.nativeElement, 'key')
                } else {
                  this.renderer.addClass(notes.nativeElement, 'scale')
                }
              });
           
            
          });
        }
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

}
