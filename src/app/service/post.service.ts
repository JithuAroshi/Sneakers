import { Injectable, LOCALE_ID } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private storage : AngularFireStorage , private afs : AngularFirestore , private toastr : ToastrService , private router : Router ) { }

   uploadImage(selectedImage:any , postData:any ){
   const filepath = `postIMG/${Date.now()}`;
  //  console.log(filepath);

   this.storage.upload(filepath,selectedImage).then(()=>{
    // console.log('success.....');

    this.storage.ref(filepath).getDownloadURL().subscribe( URL =>{
    postData.postImgPath = URL
    // console.log(postData);
    this.saveData(postData)

    })

   })

}

saveData(postData:any){
   this.afs.collection('posts').add(postData).then(docRef => {
    this.toastr.success('Data Inserted Successfully');
    this.router.navigate(['AllPost']);
  })
}

loaddata(){
  return this.afs.collection('posts').snapshotChanges().pipe(
    map(action => {
    return action.map(a => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return{data,id}
    })
  }))
 }

}
