//
// import {Injectable} from "@angular/core";
// Injectable()
//
// export class TranslationSet {
//   public language: string;
//   public values: {[key: string]: string} = {};
// }
//
// export class TranslationService {
//
//   public languages = ['magyar', 'english'];
//
//   public language = 'magyar';
//
//   private dictionary: {[key: string]: TranslationSet} = {
//     "magyar": {
//       language: 'hun',
//       values: {
//         'Home': 'Főoldal',
//         'Product Sheets': 'Terméklapok',
//         'Payroller': 'Bérszámfejtés',
//         'FAQ': 'GYIK',
//         'Logout': 'Kijelentkezés',
//         'question': 'Kérdés',
//         'answer': 'Válasz'
//
//       }},
//
//     'english': {
//       language: 'en',
//       values: {
//         'Home': 'Home',
//         'Product Sheets': 'Product Sheets',
//         'Payroller': 'Payroller',
//         'FAQ': 'FAQ',
//         'Logout': 'Logout',
//         'question': 'question',
//         'answer': 'answer'
//       }}
//
//   }
//
//   constructor(){}
//
//   public translate(key: string): string {
//     if (this.dictionary[this.language] !=null){
//       return this.dictionary[this.language].values[key];
//     }
//   }
// }
