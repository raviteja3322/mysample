import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module1ComponentComponent } from './module1-component/module1-component.component';
import { Module2ComponentComponent } from './module1-component/module2-component/module2-component.component';
import { Module3ComponentComponent } from './module1-component/module3-component/module3-component.component';
import { Module4ComponentComponent } from './module4-component/module4-component.component';


const routes: Routes = [

  { path:'',component: Module1ComponentComponent,
  children:[{path:'',component: Module2ComponentComponent},
          // {path:'add',component: Module3ComponentComponent},
           {path:'module3',component: Module3ComponentComponent},
           {path:'module4',component: Module4ComponentComponent},
            {path:'add',component: Module3ComponentComponent},]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class moduleRoutingModule { }

