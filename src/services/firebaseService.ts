import {firebaseDatabase} from '../config/firebaseConfig'

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
     //return firebaseAuth.signInWithEmailAndPassword(email, password)
      return {status: 201}
  };

}

