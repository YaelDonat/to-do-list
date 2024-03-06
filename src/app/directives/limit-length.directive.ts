import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appLimitLength]'
})
export class LimitLengthDirective {
    private submitted: boolean = false;
    private initialValue: string = '';
    private maxLength: number = 20;

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.initialValue = this.el.nativeElement.value;
    }

    @HostListener('blur') onBlur() {
        if (!this.submitted && this.initialValue.length > 20) {
            this.renderer.setProperty(this.el.nativeElement, 'value', this.initialValue.substring(0, 20) + '...');
        }
    }

    @HostListener('focus') onFocus() {
      const value: string = this.el.nativeElement.value;
      if (value.length > this.maxLength) {
        this.renderer.setProperty(this.el.nativeElement, 'value', this.initialValue);
      }
    }

    @HostListener('input') onInput() {
        this.initialValue = this.el.nativeElement.value;
    }

    @HostListener('submit', ['$event']) onFormSubmit(event: Event) {
        this.submitted = true;
        this.initialValue = '';
    }
  }