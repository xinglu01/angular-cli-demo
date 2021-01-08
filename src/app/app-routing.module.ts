import { RouterModule, Routes } from "@angular/router";
import { TestComponent } from "./test/test.component";

const routes: Routes = [
  { path: "test-list", component: TestComponent },
  { path: "", redirectTo: "/test-list", pathMatch: "full" },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
