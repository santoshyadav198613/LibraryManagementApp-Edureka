import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  @Input() backcolor: string;

  constructor(private el: ElementRef) {
    // el.nativeElement.style.background = 'blue';
  }

  ngOnInit() {
    this.el.nativeElement.style.background = this.backcolor;
  }

  @HostListener('mouseover') onmouseover() {
    this.el.nativeElement.style.background = 'blue';
  }

  @HostListener('mouseout') onmouseout() {
    this.el.nativeElement.style.background = 'red';
  }

  @HostListener('click') onclick() {
    this.el.nativeElement.style.background = 'green';
  }

}
