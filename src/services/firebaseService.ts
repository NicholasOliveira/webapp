import {firebaseDatabase, firebaseAuth} from '../config/firebaseConfig'
import firebase from 'firebase';

export default class FirebaseService {

  static pushData = (node:string, objToSubmit:Object) => {
    const ref = firebaseDatabase.ref(node).push();
    const id = firebaseDatabase.ref(node).push().key;
    ref.set(objToSubmit);
    return id;
};

    static getDataList = (nodePath:string, callback:Function, size = 10) => {

        let query = firebaseDatabase.ref(nodePath)
                                   .limitToLast(size);
        query.on('value', dataSnapshot => {
            let items:Array<any> = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };

    static login = (email:string, password:string) => {
      var user = firebase.auth().currentUser;

     const status:any = firebaseAuth.signInWithEmailAndPassword(email, password)
     .then((user) => {
        return {status:201}
      })
    .catch((error) => {
        return {status:501}
    });
    return status;
  };

  static createUser = (email:string, password:string, displayName:string) => {
    firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    static updateUser = (displayName?:string, photoURL?:string, email?:string, password?:string) => {
    var user:firebase.User|any = firebaseAuth.currentUser;
        user.updateProfile({
          displayName: "Jane Q. User",
          photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function() {
          console.log('ok')
        }).catch(function(error:Error) {
          console.log('fail')
        });
    }


    static getUserData = ()=>{
      var user = firebase.auth().currentUser;
      if (user != null) {
        user.providerData.forEach(function (profile:any) {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          console.log("  Name: " + profile.displayName);
          console.log("  Email: " + profile.email);
          console.log("  Photo URL: " + profile.photoURL);
        });
      }
    }
}


