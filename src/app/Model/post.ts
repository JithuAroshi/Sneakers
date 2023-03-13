export interface Post {

title:string,
permalink:string,
category: {
  categoryId:string,
  category:string
},
postImgPath: string,
excerpt:string,
content:string,
isfeatured:boolean,
Views:number,
status:string,
createddate: Date

}
