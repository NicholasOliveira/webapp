import {firebaseDatabase, firebaseAuth} from '../config/firebaseConfig'

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
}

