// import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

// @Directive({
//     selector: '[appLimitLength]'
// })
// export class LimitLengthDirective {
//     private originalValue: string = '';

//     constructor(private el: ElementRef, private renderer: Renderer2) { }

//     @HostListener('blur') onBlur() {
//         const value: string = this.el.nativeElement.value;
//         if (value.length > 20) {
//             console.log(value);
//             console.log(this.originalValue);
            
//             this.originalValue = value;
//             console.log(this.originalValue);
//             console.log(this.el.nativeElement);
//             this.renderer.setProperty(this.el.nativeElement, 'value', value.substring(0, 20) + '...');
//         }
//     }

//     @HostListener('focus') onFocus() {
//         if (this.originalValue) {
//             console.log(this.originalValue);
//             console.log(this.el.nativeElement);
//             this.renderer.setProperty(this.el.nativeElement, 'value', this.originalValue);
//         }
//     }

//     @HostListener('input') onInput() {
//         const value: string = this.el.nativeElement.value;
//         if (value.length <= 20) {
//             console.log(this.originalValue);
//             console.log(value);
//             this.originalValue = value;
//         }
//     }
// }


import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appLimitLength]'
})
export class LimitLengthDirective {
    private initialValue: string = '';

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.initialValue = this.el.nativeElement.value;
    }

    @HostListener('blur') onBlur() {
        if (this.initialValue.length > 20) {
            console.log(this.initialValue)
            this.renderer.setProperty(this.el.nativeElement, 'value', this.initialValue.substring(0, 20) + '...');
        }
    }

    @HostListener('focus') onFocus() {
        console.log(this.initialValue)
        this.renderer.setProperty(this.el.nativeElement, 'value', this.initialValue);
    }

    @HostListener('input') onInput() {
        console.log(this.el.nativeElement.value)
        this.initialValue = this.el.nativeElement.value;
    }

    @HostListener('submit', ['$event']) onFormSubmit(event: Event) {
        this.initialValue = '';
    }
}