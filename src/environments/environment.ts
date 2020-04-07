// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyD9jXPcQD7VW-pyubGQMo3XaDUjk4XfQS8",
    authDomain: "dreams-constructions.firebaseapp.com",
    databaseURL: "https://dreams-constructions.firebaseio.com",
    projectId: "dreams-constructions",
    storageBucket: "dreams-constructions.appspot.com",
    messagingSenderId: "1069859951863",
    appId: "1:1069859951863:web:f76db1d95a14bca9226ff2"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
