import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    console.log(this.elRef.nativeElement);
    // Don't use this way not recommended
    // this.elRef.nativeElement.style.background = 'orange';

    // use renderer
    this.renderer.setStyle(this.elRef.nativeElement, 'background', 'purple');
  }
}
