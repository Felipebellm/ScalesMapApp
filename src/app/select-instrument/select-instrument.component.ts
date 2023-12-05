import { Component, Output, EventEmitter, ElementRef, QueryList, ViewChildren, Renderer2, Input, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-select-instrument',
  templateUrl: './select-instrument.component.html',
  host: {'class': 'selectCompTag'},
  styleUrls: ['./select-instrument.component.scss']
})
export class SelectInstrumentComponent implements AfterViewInit{

  @ViewChildren('menuItem') menuItem!: QueryList<ElementRef>;
  @ViewChildren('instrumentMenu') instrumentMenu!: QueryList<ElementRef>;
  // @ViewChildren('note') elementsNote!: QueryList<ElementRef>;
  @Output() inst: EventEmitter<any> = new EventEmitter();


  instSelectd: string = ''

  @Input() modal!: boolean;
  @Input() instSelectCallBack!: string;
  
  // @Input() instB!: boolean;

  constructor (
    private render: Renderer2,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['instSelectCallBack'] && !changes['instSelectCallBack'].firstChange) {
      this.chooseInst(this.instSelectCallBack);
    }
  }

  chooseInst(inst: string) {
    if (inst != this.instSelectd) {
      
      this.instSelectd = inst;
      this.inst.emit(this.instSelectd);
      // debugger
      this.menuItem.forEach(element =>{
        if (element.nativeElement.id === inst) {
          this.render.addClass(element.nativeElement, 'active');
        } else {
          this.render.removeClass(element.nativeElement, 'active');
        }
      });
    }
  }

  ngAfterViewInit(): void {
    // debugger
    if (this.modal) {
      // debugger
      this.render.addClass(this.instrumentMenu.first.nativeElement, 'modal')
      // this.menuItem.forEach(element => {
      //   this.render.addClass(element.nativeElement, 'modal')
      // });
    }
    // this.chooseInst('');
  }
}
