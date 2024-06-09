import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
  exportAs: 'appMyStructural',
})
export class MyStructuralDirective implements OnInit, OnChanges {
  @Input() appMyStructural: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    // console.log(this.appMyStructural);
    // console.log(this.templateRef);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes ', this.appMyStructural);

    if (this.appMyStructural) {
      //
      this.vcRef.createEmbeddedView(
        this.templateRef,
        // context
        {
          myCustomValue: 'This is my custom message!',
          myNum: '0887352790',
          $implicit: 'Default Value',
        }
      );
    } else {
      this.vcRef.clear();
    }
  }
}
