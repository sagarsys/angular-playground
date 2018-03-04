import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputAutoGrow]',
})

export class AutoGrowDirective {

  constructor(private el: ElementRef, private render: Renderer2) {}
  
  @HostListener('focus')
  onFocus() {
    this.render.setStyle(this.el.nativeElement, 'width', '200px');
  }
  
  @HostListener('blur')
  onBlur() {
    this.render.setStyle(this.el.nativeElement, 'width', '125px');
  }
  
}
