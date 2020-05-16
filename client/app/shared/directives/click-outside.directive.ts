import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[teamsClickOutside]'
})
export class ClickOutsideDirective {

  @Output() clickOutsideEmit = new EventEmitter();
  @Input() clickOutsideExcludes: ElementRef;

  @HostListener('document:mousedown', ['$event.target'])
  public onClick(targetElement) {
    const overlayPanelExcludes = document.querySelectorAll('.ui-overlaypanel-content, .top-navbar');
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);

    if (!clickedInside) {

      for (const Exc of  overlayPanelExcludes[Symbol.iterator]) {
        if (Exc.contains(targetElement)) {
          return true;
        }
      }

      this.clickOutsideEmit.emit(null);
    }
  }

  constructor(private elementRef: ElementRef) {

  }


}
