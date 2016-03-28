Necessary requirement to run:

1. jquery (min js ) 1.10 or higher 

2. patform js (node module ) 
https://github.com/bestiejs/platform.js/
All instruction in link how to install and manage

3.client side file 
analytics.js 
---------
how to define in html 
example : 

/** first add min js  like */
<script type="text/javascript" src="jquery-1.12.1.min.js"></script>

than our analytics js  

<script type="text/javascript" src="analytics.js"></script>
<script type="text/javascript">
   ANALYTICS.init(["jesonuser", 'http://localhost:3000/api/saveTraceElement/']);
   
   i.e. ANALYTICS.init(["username", 'url + api/saveTraceElement/']);
   ANALYTICS.traceElement();
</script>


4 server side 
-------------
 put analytics folder in node module once you configure all modules via this command :
 
 goto server folder than type " npm install " , it will install all dependencies. than "put 'analytics' forder in node module of server side"



after all configuration this are the run command 
......................................

1. goto server and run index.js  ( node index.js). after successfully run... 
2. please goto client folder and run index.html file 

than click on element than console gives message as well as node running gives message.  






 