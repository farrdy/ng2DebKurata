import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `<div><h1>{{pageTitle}}</h1>   
    <pm-products></pm-products>     
     <div>My first Component</div></div>`,
    // templateUrl: 'app/products/product-list.component.html'

})
export class AppComponent{
    pageTitle: string = 'Product List';
}