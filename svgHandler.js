(()=>
{
    const { log, trace, error, warn, info, clear } = console;
    const parser = new DOMParser();
    const svg = $("#svgHost");
    const _input = $(":text");
    let doc, svgString, serializer = new XMLSerializer();

    const test =()=>
    {
        console.clear();
        console.log("svgHandler is calling: ",svgInput.classic()); 
        console.log("svgHandler is calling dynamically: ",svgInput["classic"]()); 
    }
    
    //###########################################################################
    const render=()=>
    {
        let comp=
        {
            test:()=> log("svgHandler is calling dynamically: ",svgInput["classic"]())
            ,msg:()=> info(document.title)
        }
        
        Object.values(comp).forEach(f=>f()); //iterator
    };

    render(); //executable
    //###########################################################################

})();