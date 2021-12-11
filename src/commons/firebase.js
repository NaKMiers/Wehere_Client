import firebase from 'firebase/compat/app'

const firebaseConfig = {
   apiKey: 'AIzaSyDm5AA0G5Vfipp3b8N3MTU-hnQXHKVk7eQ',
   authDomain: 'wehere-a6fa3.firebaseapp.com',
   projectId: 'wehere-a6fa3',
   storageBucket: 'wehere-a6fa3.appspot.com',
   messagingSenderId: '709892557366',
   appId: '1:709892557366:web:f5989d07b23a02a395e697',
}

firebase.initializeApp(firebaseConfig)

export { firebase }
