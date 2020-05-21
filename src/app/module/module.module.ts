import { NgModule } from '@angular/core';
import { Module1ComponentComponent } from './module1-component/module1-component.component';
import { Module2ComponentComponent } from './module1-component/module2-component/module2-component.component';
import { Module3ComponentComponent } from './module1-component/module3-component/module3-component.component';
import { SharedModule } from '../shared/shared.module';
import { moduleRoutingModule } from './module-routing.module';
import { Module4ComponentComponent } from './module4-component/module4-component.component';


@NgModule({
  declarations: [Module1ComponentComponent, Module2ComponentComponent, Module3ComponentComponent, Module4ComponentComponent],
  imports: [
    SharedModule,
    moduleRoutingModule
  ],
  exports:[
    Module1ComponentComponent, 
    Module2ComponentComponent,
    Module3ComponentComponent
  ]
})
export class Module1Module {
  constructor(){
    console.log("Module Loading...");
  }
 }
