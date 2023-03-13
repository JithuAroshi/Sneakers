import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor( private afs:AngularFirestore , private toastr:ToastrService ) { }

 savedata(data:any){
  this.afs.collection('categories').add(data).then(docRef => {
    // console.log(docRef);
    this.toastr.success('Data Insert Successfully ...!')
  } )
  .catch(err => {console.log(err);
  })
 }

 loaddata(){
  return this.afs.collection('categories').snapshotChanges().pipe(
    map(action => {
    return action.map(a => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return{data,id}
    })
  }))
 }

 updatedata(Editdata:any,id:any){
  this.afs.doc(`categories/${id}`).update(Editdata).then(docRef => {
    // console.log(docRef);
    this.toastr.success('Data Updated Successfully ...!')
  })
}

delectdata(id:any){
   this.afs.doc(`categories/${id}`).delete().then( docRef => {
    // console.log(docRef);
    this.toastr.success('Data Delected Successfully ...!')
   })
}


}
