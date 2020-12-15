import { AppComponent } from './app.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DemoComponent } from "./demo/demo.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  routes: Routes = [
    { path: 'test', component: DemoComponent }, 
    { path: 'other', loadChildren:"./other/other.module#otherModule" }, // 懒加载子模块, 子模块需要配置路由设置启动子组件
    { path: '**', pathMatch: 'full', redirectTo: '' } // 重定向 
  ];
}
