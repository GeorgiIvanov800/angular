import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @HostListener('mouseover', ['$event']) mouseOverHandler(e: MouseEvent) {
    console.log('mouseOver ', e);
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // console.log(this.elRef.nativeElement);
    // It's not a good practice to directly access DOM elements via ElementRef
    // this.elRef.nativeElement.style.background = 'orange';

    // Use Renderer2 to manipulate DOM elements -> Good pracitce
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'lightblue');

    this.renderer.listen(
      this.elRef.nativeElement,
      'mouseenter',
      this.mousEneterHandler.bind(this)
    );

    this.renderer.listen(
      this.elRef.nativeElement,
      'mouseleave',
      this.mouseLeaveHandler.bind(this)
    );
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
}
