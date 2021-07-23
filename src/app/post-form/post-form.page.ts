import { Component, OnInit } from '@angular/core';
//import { title } from 'process';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.page.html',
  styleUrls: ['./post-form.page.scss'],
})
export class PostFormPage implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }
savePost(Titulo, Descripcion){
  this.postService.createPost(Titulo.value, Descripcion.value).subscribe(
   (res) => console.log(res),
  (err) => console.log(err)
  );
}
}
