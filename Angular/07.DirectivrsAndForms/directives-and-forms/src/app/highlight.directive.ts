import {
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

type MyVoid = () => void;

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit, OnDestroy {
  // @HostListener('mouseover', ['$event']) mouseOverHandler(e: MouseEvent) {
  //   console.log('mouseOver ', e);
  // }

  unSubFromEventsArray: MyVoid[] = [];

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // console.log(this.elRef.nativeElement);
    // It's not a good practice to directly access DOM elements via ElementRef
    // this.elRef.nativeElement.style.background = 'orange';

    // Use Renderer2 to manipulate DOM elements -> Good pracitce
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'lightblue');

    const mouseEnterEvent = this.renderer.listen(
      this.elRef.nativeElement,
      'mouseenter',
      this.mousEneterHandler.bind(this)
    );

    const mouseLeaveEvent = this.renderer.listen(
      this.elRef.nativeElement,
      'mouseleave',
      this.mouseLeaveHandler.bind(this)
    );

    this.unSubFromEventsArray.push(mouseEnterEvent);
    this.unSubFromEventsArray.push(mouseLeaveEvent);
  }

  mousEneterHandler(e: MouseEvent): void {
    /* Setting styles */
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'lightblue');

    /** Setting classes */
    this.renderer.addClass(this.elRef.nativeElement, 'highlight');
  }

  mouseLeaveHandler(e: MouseEvent): void {
    /* Setting styles */
    // this.renderer.removeStyle(this.elRef.nativeElement, 'background');

    /** Setting classes */
    this.renderer.removeClass(this.elRef.nativeElement, 'highlight');
  }

  ngOnDestroy(): void {
    // console.log('onDestroy Invoked');
    // console.log(this.unSubFromEventsArray);
    // Unsubscribe from event
    this.unSubFromEventsArray.forEach((eventFn) => {
      eventFn();
    });
  }
}
