const http = require("http");
const fs = require('fs')

const server = http.createServer((req,res)=>{
    // console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html')
    if(req.url==="/"){

        res.write("<html>")
        res.write("<head>")
        res.write("<title>shree ram</title>")
        res.write("</head>")
        res.write("<body>")
        res.write("<h1>jai shree ram</h1>")
        res.write("<h1>Enter your details</h1>")
        res.write('<form action="/submit-detils" method = "POST">')
        res.write('<input type="text"  name="usernsme" placeholder="username"><br>')
        res.write('<lable for="male">male</lable>')
        res.write('<input type="radio" id="male" name="gender" value="male"/>')
        res.write('<lable for="female">female</lable>')
        res.write('<input type="radio" id="female" name="gender" value="female"/><br>')
        res.write('<input type="submit" value="submit"/>')
        res.write('</form>')
        res.write("</body>")
        res.write("</html>")
        return res.end()
    }else if(req.url.toLowerCase()==="/submit-detils" && req.method=="POST"){
        fs.writeFileSync('user.txt','suresh');
        res.statusCode = (302);
        res.setHeader('Location','/');
    }
    
        res.write("<html>")
        res.write("<head>")
        res.write("<title>shree ram</title>")
        res.write("</head>")
        res.write("<body>")
        res.write("<h1>jai hanuman ji</h1>")
        res.write("</body>")
        res.write("</html>")
         res.end()
    
});


const port = 3000;
server.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}/`);
    
});




