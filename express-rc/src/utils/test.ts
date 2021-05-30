/*
 * @Description: 
 * @Date: 2021-01-28 22:43:21
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */

 export function Test(key: string) {
   return (target: Object, kkey: string, descriptor: PropertyDescriptor) => {
   console.log('target', target)
   console.log('key', key)
   console.log('decorators',descriptor) 

   }
     
  }