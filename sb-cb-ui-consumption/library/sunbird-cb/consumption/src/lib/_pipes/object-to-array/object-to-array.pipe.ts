import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToArray'
})
export class ObjectToArrayPipe implements PipeTransform {
  // transform(value: any, ...args: any[]): any[] {
  //   console.log("function called")
  //   if (!value) {
  //     return [];
  //   }
  //   console.log(Object.keys(value).map(key => ({ key, value: value[key] })), "Object.keys(value).map(key => ({ key, value: value[key] }))==----------")
  //   return Object.keys(value).map(key => ({ key, value: value[key] }));
  // }
  transform(...args: any[]): any[] { 
    return args; 
  }
}
