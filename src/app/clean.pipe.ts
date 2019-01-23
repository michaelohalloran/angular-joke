import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clean'
})
export class CleanPipe implements PipeTransform {

  transform(value: any, words: string[]): any {

    if(value) {
      return words.reduce((cleaned, next)=> {
        return value.includes(next) ? cleaned.replace(next, ''): cleaned;
      }, value)
    }
  }

}
