import { Component } from '@angular/core';
import {PostService} from '../services/post.service'
import { AlertController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Button } from 'protractor';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage {
  
  posts: any =  []
  constructor(
    private postService: PostService,
    private alertController: AlertController
  ) { }
  loadPosts() { 
  this.postService.getPosts().subscribe(
    (res) => {
      console.log(res)
      this.posts = res;
    }, 
    (err) => console.log(err)
    );
  }
  
  ionViewWillEnter() {
    this.loadPosts();
} deletePost(id){

//console.log(id);
this.postService.deletePost(id).subscribe(
  (res) => {
    this.loadPosts();
  },
  (err) => console.log(err)
    );
//await alert.present()
}
}
