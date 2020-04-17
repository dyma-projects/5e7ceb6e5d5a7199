import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  keysAndMap: any = {
    ArrowUp: 'red',
    ArrowRight: 'green',
    ArrowLeft: 'green',
    ArrowDown: 'yellow'
  };

  @HostBinding('style.color')
  backgroundColor: string = 'black';

  constructor() { }

  @HostListener('document:keydown', ['$event'])
  onArrowUp(event: KeyboardEvent) {
    console.log(`event.code : ${event.code}`);
    this.backgroundColor = this.keysAndMap[event.code] || 'black';
  }

  /*
  @HostListener('document:keydown.ArrowUp', ['$event'])
  onArrowUp(event: KeyboardEvent) {
    console.log('ArrowUp');
    this.backgroundColor = keysAndMap.get();
  }

  @HostListener('document:keydown.ArrowRight', ['$event'])
  onArrowRight(event: KeyboardEvent) {
    console.log('ArrowRight');
    this.backgroundColor = 'green';
  }

  @HostListener('document:keydown.ArrowLeft', ['$event'])
  onArrowLeft(event: KeyboardEvent) {
    console.log('ArrowLeft');
    this.backgroundColor = 'blue';
  }

  @HostListener('document:keydown.ArrowDown', ['$event'])
  onArrowDown(event: KeyboardEvent) {
    console.log('ArrowDown');
    this.backgroundColor = 'yellow';
  }
  */
}
