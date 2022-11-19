import {inject} from 'aurelia-framework';
import { PostService } from "../common/services/post-service";

@inject(PostService)
export class Index {
  constructor(PostService) {
    this.postService = PostService;
  }

  attached(){
    this.postService.allPostPreviews().then(data=>{
      if(data.errors){
        //Handle the errors
      }else{
        this.posts =data.posts;
        console.log(this.posts);
      }
    })
  }
}
