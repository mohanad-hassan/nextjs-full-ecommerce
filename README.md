
## Redux 
 //redux persist is library to hold the values of redux  if the user closed the website .
 

## sass variables 
 --$name:value   this is how to set variables in sass.
 how to make the variable we definde in a file aviliable in other file ?? 
 solution 1 :by import 'path.css' . but you have to add manually to every files
 solution 2 : addingjust once to next config and it will be aviliable in all projects .

 ## find the user location 
 //we use a free service called https://ipregistry.co/  
  that gives you a 100000 request for free account .
  //
 
 ## next auth
 //when you connect your database like mongodb to next auth , lets say the user signed in with google provider , nextauth will send the user inforamtions to your monogdb database .

 ##  27 
 Formik and Yup are libraries to create forms and validate with a great way .

 ##  30 
 //we will go to next auth and get a list of providers we are using in our app , then throw them with map () to show them in login page .
 //we will do that in getServerSideProps().
 

 ##  32 
 npm i next connect   to send signup requests to api/auth .
 // in api/auth/lib/signup 
 {import nc from "next-connect"

 -- const handler = nc()

handler.get(async function signUp(req, res) {
            res.send("requset success");
})

export default handler}

//we will set email validation in \Utils/Validation by regex .
//we set signup page  .
//

##  33 User Model 
 -- create user Schema in models .
 //






