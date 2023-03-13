import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.scss']
})
export class AllPostComponent implements OnInit {

  listarray: any[''];

  constructor( private postService : PostService ) { }

  ngOnInit(): void {

   this.postService.loaddata().subscribe(value=> {
    // console.log(value);
    this.listarray = value

   })

  }

}
