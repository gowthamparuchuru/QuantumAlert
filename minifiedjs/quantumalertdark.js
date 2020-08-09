var scripttag=document.createElement("link");scripttag.rel="stylesheet",scripttag.href="https://cdn.jsdelivr.net/gh/cosmogicofficial/quantumalert/mincss/quantumalertdark.css",document.head.appendChild(scripttag);var succ="https://cdn.jsdelivr.net/gh/cosmogicofficial/quantumalert/images/success.svg";(new Image).src=succ;var err="https://cdn.jsdelivr.net/gh/cosmogicofficial/quantumalert/images/error.svg";(new Image).src=err;var inf="https://cdn.jsdelivr.net/gh/cosmogicofficial/quantumalert/images/info.svg";(new Image).src=inf;var alertcontainer,popupdiv,popupcontent,errortext,pop_heading,war="https://cdn.jsdelivr.net/gh/cosmogicofficial/quantumalert/images/warning.svg";(new Image).src=war;var type_field,input_element,inx,place_holder,no_btn_fun="write_function_name_here",yes_btn_fun="write_function_name_here",matches=document.getElementsByClassName("alertcontainer");function rmx(){document.body.removeChild(matches.item(0))}function closex(){alertcontainer.style.opacity="0",setTimeout(function(){for(;matches.length>0;)rmx()},250)}function checker(){(alertcontainer=document.createElement("div")).className="alertcontainer",document.body.appendChild(alertcontainer),(popupdiv=document.createElement("div")).id="popupdiv",popupdiv.innerHTML='<span id="closepopup" onclick="closex();" ><svg viewbox="0 0 40 40" ><path class="close-x"  d="M 10,10 L 30,30 M 30,10 L 10,30" /></svg></span>',alertcontainer.appendChild(popupdiv)}function structure(){null==alertcontainer?checker():(matches.length>0&&rmx(),checker())}function pop_simple_content(e){pop_simple_structure=document.createElement("p"),pop_simple_structure.id="pop_simple_structure",pop_simple_structure.textContent=e,popupdiv.appendChild(pop_simple_structure)}function errorcontent(){(errortext=document.createElement("div")).id="errortext",errortext.innerHTML=' <img id="errorimage" src="'+err+'"  /><br>',popupdiv.appendChild(errortext)}function write_function_name_here(){console.log("Define function name for buttons")}function alert_btn(e,t,n,r){void 0===n||void 0===r?(r="write_function_name_here",n="write_function_name_here",alert_btn_struct=document.createElement("div"),alert_btn_struct.id="alert_btn_struct",alert_btn_struct.innerHTML=' <span id="btn-no" onclick="'+r+'();">'+t+'  </span>&nbsp <span id="btn-yes" onclick="'+n+'();">'+e+"  </span>",popupdiv.appendChild(alert_btn_struct)):(alert_btn_struct=document.createElement("div"),alert_btn_struct.id="alert_btn_struct",alert_btn_struct.innerHTML=' <span id="btn-no" onclick="'+r+'();">'+t+'  </span>&nbsp <span id="btn-yes" onclick="'+n+'();">'+e+"  </span>",popupdiv.appendChild(alert_btn_struct))}function heading(e){(pop_heading=document.createElement("p")).id="pop_heading",pop_heading.textContent=e,popupdiv.appendChild(pop_heading)}function pop_content_head(e){pop_head_content=document.createElement("p"),pop_head_content.id="pop_head_content",pop_head_content.textContent=e,popupdiv.appendChild(pop_head_content)}function input_field(e,t){void 0===t&&(t="Enter Text here"),(input_element=document.createElement("input")).id="input_element",input_element.setAttribute("type",e),input_element.setAttribute("placeholder",t),popupdiv.appendChild(input_element),popupdiv.insertBefore(input_element,alert_btn_struct),inx=input_element.value,input_element.onchange=function(e){inx=e.target.value}}class notify{simple(e){structure(),pop_simple_content(e)}simpleHeading(e,t){structure(),heading(e),pop_heading.style.marginTop="50px",pop_heading.style.fontSize="1.8rem",pop_content_head(t)}error(e,t){structure(),errorcontent(),heading(e),pop_content_head(t)}success(e,t){structure(),errorcontent(),errortext.innerHTML=' <img id="errorimage" src="'+succ+'" /><br>',heading(e),pop_content_head(t)}warning(e,t){structure(),errorcontent(),errortext.innerHTML=' <img id="errorimage" src="'+war+'"  /><br>',heading(e),pop_content_head(t)}info(e,t){structure(),errorcontent(),errortext.innerHTML=' <img id="errorimage" src="'+inf+'"  /><br>',heading(e),pop_content_head(t)}icon(e,t,n){structure(),errorcontent(),errortext.innerHTML=' <img id="errorimage" src="'+n+'"  /><br>',heading(e),pop_content_head(t)}confirm(e,t,n,r,i,o,c,p,a){structure(),errorcontent(),void 0===n?(n=war,errortext.innerHTML=' <img id="errorimage" src="'+n+'"  /><br>'):errortext.innerHTML=' <img id="errorimage" src="'+n+'"  /><br>',heading(e),pop_content_head(t),alert_btn(r=void 0===r?"Ok":r,i=void 0===i?"Cancel":i,o,c),void 0===p?console.log("Input field not used"):input_field(p,a)}}var Qual=new notify;
