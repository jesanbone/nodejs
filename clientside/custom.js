
/*
var scriptEls = document.getElementsByTagName( 'script' );
var thisScriptEl = scriptEls[scriptEls.length - 1];
var scriptPath = thisScriptEl.src;
var scriptFolder = scriptPath.substr(0, scriptPath.lastIndexOf( '/' )+1 );

var imported = document.createElement('script');
imported.src = scriptFolder+"jquery-1.12.1.min.js";
document.head.appendChild(imported);

//console.log( [scriptPath, scriptFolder] );
*/
var ANALYTICS = ANALYTICS || (function(){
    var _args = {}; // private

    return {
        init : function(Args) {
            _args = Args;
            // some other initialising
        },
        traceElement : function() {
            console.log('File is incluede successfully -' + _args);

			/**** only trace element that have aa_et aatributes other wise not in trace part ***/
			var obj = {};
			
			if(_args[0]!="" && _args[1]!=""){
				$(document).on("click",function(e){

					$(e.target).each(function( index ) {
						if($(this).attr('aa_et')){
							$((this).attributes).each(function() { /**** here you have to added on array for database and analytics purpose ***/
									 obj[this.nodeName] = this.nodeValue;
								});
								$.post(_args[1], { userName: _args[0], EventValue : obj}, 
									function(returnedData){
										 //console.log(returnedData);
										 console.log("data Saved Successfully");
								});								
						}
					});
				});

			}else{
				console.log("you have to specified all args first");alert("you have to specified all args first");
			}
			
        }
    };
}());