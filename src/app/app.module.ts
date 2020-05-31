import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { FormsModule, ReactiveFormsModule,NgForm} from '@angular/forms';
import {  AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

//import { ShoppingModule } from './shopping-list/shopping.module';
//import {RecipesModule} from './recipes/recipes.module';

import { DatabindingComponent } from './databinding/databinding.component';
import { NgForComponent } from './ng-for/ng-for.component';



import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';


import { DirectiveComponent } from './directive/directive.component';
import { Depen1injencComponent } from './depen1injenc/depen1injenc.component';
import { Depen2injencComponent } from './depen2injenc/depen2injenc.component';
import { SerivesService } from './serives.service';
import { RoutingComponent } from './routing/routing.component';
import { FooterComponent } from './Routing/footer/footer.component';
import { SidebarComponent } from './Routing/sidebar/sidebar.component';
import { ArticalComponent } from './Routing/artical/artical.component';
import { Header1Component } from './Routing/header1/header1.component';
import { HomeComponent } from './Routing/home/home.component';
import { AboutComponent } from './Routing/about/about.component';
import { ContactComponent } from './Routing/contact/contact.component';
import { FormsComponent } from './forms/forms.component';
import { AboutUsComponent } from './routing/about/aboutus/aboutus.component';
import { AboutContactComponent } from './routing/about/aboutcontact/aboutcontact.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './http/http.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AgePipe } from './pipes/age.pipe';
import { UserComponent } from './user/user.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FilterPipe } from './filter.pipe';
import { FilterComponent } from './filter/filter.component';
import { OrderByPipe } from './order-by.pipe';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import {AuthSerives} from './auth.serive';
import { UseridComponent } from './userid/userid.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { RoleComponent } from './role/role.component';
import { SubcategoryproductComponent } from './subcategory/subcategoryproduct/subcategoryproduct.component';
import {interceptors} from './interceptors ';
import {localstorage} from './localstorageserives';

import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TokinComponent } from './tokin/tokin.component';
import { ContentComponent } from './content/content.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { SerivesComponent } from './serives/serives.component';
import {MySerivesService} from './serives/my-serives.service';
import { RegisterformComponent } from './registerform/registerform.component';
import { RegisterDetailsComponent } from './register-details/register-details.component';
import { RegisterviewComponent } from './registerview/registerview.component';
import { RegisterUpdateComponent } from './register-update/register-update.component';
import { ResolverService } from './resolver.service';
import { AuthGuard } from './auth.guard';
import { CustomDirectiveDirective } from './Directives/custom-directive.directive';
import { PipetagPipe } from './pipetag.pipe';
import { ParentHooksComponent } from './parent-hooks/parent-hooks.component';
import { ChildHooksComponent } from './child-hooks/child-hooks.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { EmpCreateComponent } from './Main-Login/emp-create/emp-create.component';
import { EmpListComponent } from './Main-Login/emp-list/emp-list.component';
import { Auth1Guard } from './main-login/auth1.guard';
import { MainSerivesService } from './main-login/main-serives.service';
import { AppConfirmEqualValidatorDirective } from './Main-Login/app-confirm-equal-validator.directive';
import { ProuductListComponent } from './Main-Login/prouduct-list/prouduct-list.component';
import { ProuductCreateComponent } from './Main-Login/prouduct-create/prouduct-create.component';
import { ProuductUpdateComponent } from './main-login/prouduct-update/prouduct-update.component';
import { ResolveService } from './main-login/resolve.service';
import { Module1Module } from './module/module.module';
import { AnimationComponent } from './animation/animation.component';
import { AngularMaterialModule } from './AngularMaterialModule';
import { DialogBoxComponentComponent } from './dialog-box-component/dialog-box-component.component';
import { MaterialserivesComponent } from './materialserives/materialserives.component';
import { WebComponentsComponent } from './web-components/web-components.component';



@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    NgForComponent,
    HeaderComponent,
    DirectiveComponent,
    Depen1injencComponent,
    Depen2injencComponent,
    RoutingComponent,
    FooterComponent,
    SidebarComponent,
    ArticalComponent,
    Header1Component,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FormsComponent,
    AboutUsComponent,
    AboutContactComponent,
    PipesComponent,
    HttpComponent,
    AuthenticationComponent,
    ParentComponent,
    ChildComponent,
    AgePipe,
    UserComponent,
    FilterPipe,FilterComponent, OrderByPipe,DropdownComponent,  LoginComponent,
     DisplaydataComponent, UseridComponent, SubcategoryComponent, RoleComponent, 
     SubcategoryproductComponent, PageNotFoundComponent, TokinComponent,
      ContentComponent, NgTemplateComponent, SerivesComponent, 
      RegisterformComponent, RegisterDetailsComponent, RegisterviewComponent,
       RegisterUpdateComponent,
       CustomDirectiveDirective,
       PipetagPipe,
       ParentHooksComponent,
       ChildHooksComponent,
       SignUpComponent,
       MainLoginComponent,
       EmpCreateComponent,
       EmpListComponent,
       AppConfirmEqualValidatorDirective,
       ProuductListComponent,
       ProuductCreateComponent,
       ProuductUpdateComponent,
       AnimationComponent,
       DialogBoxComponentComponent,
       MaterialserivesComponent,WebComponentsComponent
  ],
  imports: [
    CommonModule,AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,NgSelectModule,ScrollingModule,ScrollDispatchModule,
    RouterModule,
    Module1Module
    
    // ShoppingModule
    // RecipesModule AuthGuard ResolverService
    
  ],
  entryComponents: [DialogBoxComponentComponent,WebComponentsComponent],
  providers: [MySerivesService,SerivesService,AuthGuard,ResolverService,ResolveService,MainSerivesService,Auth1Guard,AuthSerives,localstorage,{ provide: HTTP_INTERCEPTORS, useClass: interceptors, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {

//   constructor(private injector: Injector) {
//     const webComponent = createCustomElement(WebComponentsComponent, { injector });
//     customElements.define('ui-button', button1);
// }

  ngDoBootstrap() {}
  
 }

