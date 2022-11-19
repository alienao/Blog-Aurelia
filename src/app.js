import 'bootstrap';
import { configure } from './resources/index';
import { PLATFORM } from "aurelia-pal";

export class App {
  message = 'Hello World!';
  
  configureRouter(config, router){
    config.title = 'Armine\'s Blog';
    config.map ([
      {
        route: "",
        name: "home",
        moduleId: PLATFORM.moduleName("./posts/index"),
        title: "All Posts",
      },
      {
        route: "post/:slug",
        name: "post-view",
        moduleId: PLATFORM.moduleName("./posts/view"),
        title: "View Post",
      },
    ])
  }
}
