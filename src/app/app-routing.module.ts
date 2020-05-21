import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Routing/home/home.component';
import { AboutComponent } from './Routing/about/about.component';
import { AboutUsComponent } from './routing/about/aboutus/aboutus.component';
import { AboutContactComponent } from './routing/about/aboutcontact/aboutcontact.component';
import { ContactComponent } from './Routing/contact/contact.component';
import { UserComponent } from './user/user.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { LoginComponent } from './login/login.component';
import { UseridComponent } from './userid/userid.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContentComponent } from './content/content.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { SerivesComponent } from './serives/serives.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { RegisterDetailsComponent } from './register-details/register-details.component';
import { RegisterviewComponent } from './registerview/registerview.component';
import { RegisterUpdateComponent } from './register-update/register-update.component';
import { ResolverService } from './resolver.service';
import { AuthGuard } from './auth.guard';
import { FilterComponent } from './filter/filter.component';
import { ParentHooksComponent } from './parent-hooks/parent-hooks.component';
import { ChildHooksComponent } from './child-hooks/child-hooks.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { EmpCreateComponent } from './Main-Login/emp-create/emp-create.component';
import { EmpListComponent } from './Main-Login/emp-list/emp-list.component';
import { Auth1Guard } from './main-login/auth1.guard';
import { ProuductListComponent } from './Main-Login/prouduct-list/prouduct-list.component';
import { ProuductCreateComponent } from './Main-Login/prouduct-create/prouduct-create.component';
import { ProuductUpdateComponent } from './main-login/prouduct-update/prouduct-update.component';
import { ResolveService } from './main-login/resolve.service';
import { MaterialserivesComponent } from './materialserives/materialserives.component';

//import { Module1Module } from './module/module.module';

const routes: Routes = [

 
  { path:'', component: MainLoginComponent,pathMatch: 'full',canActivate:[Auth1Guard]},
  { path:'mainLogin',component: MainLoginComponent},
  { path:'EmpCreate',component: EmpCreateComponent,canActivate:[Auth1Guard]},
  { path:'EmpList',component: EmpListComponent,canActivate:[Auth1Guard], resolve: {getemplist: ResolveService}},
  
  { path:'ProductList',component: ProuductListComponent,canActivate:[Auth1Guard],resolve: {getproduct: ResolveService}},
  { path:'ProductCreate',component: ProuductCreateComponent,canActivate:[Auth1Guard]},
  { path:'ProductUpdate/:id',component: ProuductUpdateComponent,canActivate:[Auth1Guard]},

   { path:'home',component: HomeComponent},

   { path:'about',component: AboutComponent,
     children:[{path:'',component: AboutUsComponent},
              {path:'aboutcontact',component: AboutContactComponent}]
   },
   {path:'Shopping',loadChildren:'./shopping-list/shopping.module#ShoppingModule',canActivate:[AuthGuard]},
   {path:'Recipe',loadChildren:'./recipes/recipes.module#RecipesModule',canActivate:[AuthGuard]},
   {path:'authentication',component: RegisterformComponent,canActivate:[AuthGuard]},
   
   {path:'module',loadChildren:'./module/module.module#Module1Module'},
   
   
   {path:'contact',component: ContactComponent},
   {path:'user/:id',component: UserComponent},
    {path:'parent',component: ParentComponent},
   {path:'child',component: ChildComponent},
   {path:'content',component: ContentComponent},
   {path:'ngTemplate',component: NgTemplateComponent},
   {path:'filter',component: FilterComponent},
   {path:'serives',component: SerivesComponent,resolve: {getlist: ResolverService}},
   {path:'registerdetails',component: RegisterDetailsComponent},
   {path:'registerview/:id',component: RegisterviewComponent},
   {path:'registerupdated/:id',component: RegisterUpdateComponent},
   {path:'login', component: LoginComponent},  

  //  ,canActivate:[AuthGuard], resolve:{getlist: ResolverService}
   {path:'displaydata',component: DisplaydataComponent},
   {path:'userid/:id',component: UseridComponent},
   {path:'subcategory/:name',component: SubcategoryComponent},
   {path:'parentHooks',component: ParentHooksComponent},
   {path:'materialserives',component: MaterialserivesComponent},

   {path:'**',component: PageNotFoundComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log("app routing")
  }
 }

