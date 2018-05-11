import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from './post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  posts: any[];

  constructor(private service : PostService) {
   
   }
   ngOnInit(){
    this.service.getAll()
    .subscribe(post=>{
      this.posts=post;
    });

   }

   createPost(input:HTMLInputElement){
      let post={title : input.value};
      this.posts.splice(0,0,post);

      input.value="";
          this.service.create(post)
          .subscribe(response=>{
            post['id']=response.id;
          },
          (error: AppError)=>{
            this.posts.splice(0,1);
            
            if(error instanceof BadInputError){
            alert('Bad Input Error')
            }else{
              alert('An Unexpected Error on Creating post');
            }
          });
   }

   updatePost(input: HTMLInputElement){
      this.service.update(input)
        .subscribe(post=>{
            console.log(post);
        });
   }

   deletePost(input : HTMLInputElement){
    let index=this.posts.indexOf(input);
    this.posts.splice(index,1);

    this.service.delete(input.id)
    .subscribe(null,
      (error : AppError)=>{
        this.posts.splice(index,0,input);

        if(error instanceof NotFoundError){
          alert('This post is already deleted');
        }else throw error;
      });
   }
 

}
