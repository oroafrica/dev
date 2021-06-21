((window)=>
{
    'use strict'
    const { log, trace, error, warn, info, clear } = console;

    /* method return object */
    let functions = ()=>
    {
        var result = 
        {
            classic:()=>{return "classic names"; }
        };
    
        return result;
    }
    
    /* assign method if undefined. global name: svgInput */ 
    if(typeof(window.svgInput) === 'undefined'){ window.svgInput = functions(); }

})(window);


