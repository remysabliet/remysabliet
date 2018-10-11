import is from 'is_js'

export function whichDevice(){ 
    
 const envDevice=['ie','chrome','firefox','edge','opera','safari','phantom','ios','android'];
 
 let result;
 envDevice.forEach(env=>{
   if(is[env]())  //Dynamic function call, we call every method having env name within the is module imported
   result = env;  
 })
 
 if (typeof result === 'undefined')
      return null
 return result
}