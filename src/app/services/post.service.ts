import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 API = 'http://localhost:1337/posts'
  constructor (
    private http: HttpClient
  ) { }
  getPosts() { 
    return this.http.get(this.API)
    
  }
  getPostById() { }
  createPost(Titulo: String, Descripcion: String) {
    return this.http.post(this.API,{
      Titulo, Descripcion
     })
   }
 
  updatePost() { 
    
  }
    deletePost(id: string) {
      //console.log(id)
      return this.http.delete(`${this.API}/${id}`);
      
   }
}
