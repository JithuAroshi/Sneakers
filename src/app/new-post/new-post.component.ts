import { Component } from '@angular/core';
import { CategoryServiceService } from '../service/category-service.service';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../Model/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  title:any;
  permalink:string = ''
  Imgsrc: any = '../../assets/Images/placeholder-600x400.webp'
  selectedImg:any;
  Categories:Array<any> | undefined
  postform: FormGroup

  constructor(private categoryService:CategoryServiceService , private fb : FormBuilder , private postService : PostService) {

this.postform = this.fb.group({
  title:['', [Validators.required , Validators.minLength(8)]],
  permalink:['', [Validators.required]],
  excerpt:['', [Validators.required , Validators.minLength(15)]],
  category:['', [Validators.required]],
  postImg:['', [Validators.required]],
  content:['', [Validators.required]]
})

  }

  ngOnInit(): void {
   this.categoryService.loaddata().subscribe(value => {
  this.Categories = value
   })
  }

  get fc():any {
    return this.postform.controls
  }


  OnTitleChange($event:any){
   this.title = $event.target.value;
   this.permalink = this.title.replace(/\s/g , '-')
  }

  Onchangeimg($event:any){
  const reader = new FileReader();
  reader.onload = (e) => {
   this.Imgsrc = e.target?.result
  }

  reader.readAsDataURL($event.target.files[0]);
  this.selectedImg = $event.target.files[0];

  }

  OnSubmit(){

    let splitted = this.postform.value.category.split('-')

    const postData:Post = {
      title:this.postform.value.title,
      permalink:this.postform.value.permalink,
      category: {
        categoryId: splitted[0],
        category: splitted[1]
      },
      postImgPath: '',
      excerpt:this.postform.value.excerpt,
      content:this.postform.value.content,
      isfeatured: false,
      Views: 0,
      status: 'New',
      createddate: new Date()
    }
    // console.log(postData);

this.postService.uploadImage(this.selectedImg , postData );
this.postform.reset()
this.Imgsrc = '../../assets/Images/placeholder-600x400.webp'

  }



}
