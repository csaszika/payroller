//
// import {Injectable} from "@angular/core";
//
// Injectable()
//
// export class TranslationSet {
//   public languange: string;
//   public values: {[key: string]: string} = {};
// }
//
// export class TranslationService {
//
//   public languages = ['hun', 'eng'];
//
//   public language = 'hun';
//
//   private dictionary: {[key: string]: TranslationSet} = {
//     'hun': {
//       language: 'hun',
//       values: {
//         'Home': 'Főoldal',
//         'Product Sheets': 'Terméklapok',
//         'Payroller': 'Bérszámfejtés',
//         'FAQ': 'GYIK',
//         'Logout': 'Kijelentkezés',
//         'question': 'Kérdés',
//         'anwser': 'Válasz'
//
//       }}
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
