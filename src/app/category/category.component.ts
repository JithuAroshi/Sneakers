import { Component } from '@angular/core';
import { Category } from '../Model/category';
import { CategoryServiceService } from '../service/category-service.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  listarray: any[''];
  editdata:any;
  editids:any;
  type:any = 'Add'

  constructor( private categoryService:CategoryServiceService ) {}

ngOnInit():void {
 this.categoryService.loaddata().subscribe( value => {
  // console.log(value);
this.listarray = value

 })
}

  submit(formdata:any){

    let categoryarray:Category = {
      category:formdata.value.Category
    }

    if(this.type == 'Add'){
      this.categoryService.savedata(categoryarray)
      formdata.reset()
    }else if(this.type == 'Edit') {
      this.categoryService.updatedata(categoryarray,this.editids)
      this.type = 'Add'
      formdata.reset()
    }



  }

  Onedit(editlist:any,editid:any){
    this.editdata = editlist;
    this.editids = editid
    this.type = 'Edit'
    // console.log(editid);

  }

  Ondelect(id:any){
  this.categoryService.delectdata(id)
  }



}
