import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'Ваш API ключ',
  authDomain: 'Ваш домен',
  projectId: 'Ваш проект ID',
  storageBucket: 'Ваш бакет для изображений',
  messagingSenderId: 'Ваш ID отправки сообщений',
  appId: 'Ваш ID приложения',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const storage = firebaseApp.storage();

export { storage, firebase as default };
