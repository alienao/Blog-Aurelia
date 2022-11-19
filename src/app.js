import "bootstrap";
import { configure } from "./resources/index";
import { PLATFORM } from "aurelia-pal";
import { inject } from "aurelia-framework";
import { PostService } from "./common/services/post-service";
@inject(PostService)
export class App {
  constructor(PostService) {
    this.postService = PostService;
  }

  attached() {
    this.postService
      .allArchives()
      .then((data) => {
        this.archives = data.archives;
      })
      .catch((error) => {
        this.error = error.message;
      });
  }

  configureRouter(config, router) {
    config.title = "Armine's Blog";
    config.map([
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
      {
        route: "archive/:archive",
        name: "archive-view",
        moduleId: PLATFORM.moduleName("./posts/archive-view"),
        title: "View Posts by Archive",
      },
    ]);
  }
}
