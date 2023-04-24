
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
 

 ## 34 
  //signup user to data base and crypt the password  .
 ### // EMAIL VERIFICATION : 
 //npm i jsonwebtoken.
 //create a token for activate the user email by passing the userid from mongodb to jsonwetoken creator .

 # 35 Email Activation 
 //lets set BASE_URL in .env file .
 //the idea is we want to change the value of email is verified in mongodb from false to true if the user success .
 // we will need a service for sending emails ,  we will use GMAIL API from GOOGLE CLOUD CONSOLE with NODE MAILER .
  #### go to console 
  CREATE  project , API and services , Oauth consent Screen  , External , Create 
 Then go Create Credinitals , AuthClientId .
 //authorized javaScript origins : localhost:3000
//authorized Urls we are gonna got from "0auth google playground "
there we are gonna need A client id and secret we got from the pervious step .
//then exchange autorization for tokens .
//take the refresh token  , set it to .env .
//NPM i GOOGLEAPIS  for using nodemailer 
//NPM i nodemailre.
 ####  Stripo
 is great website that gives you a lot of EMAIL templates to send to users .
 //  then you can copy the template as HTML .
 //we create a new folder "emails" then  a file we called it email.js we will use html as backticks .

## the pervious way didnt work we will do it with a different way  
//youtube link : How to Send Email from Gmail Account using Nodemailer in Node.js | Easy Tutorial with Code

## SIgn in With Credintials 
 // sign Up is some thing we hanlde with mongodb ,
 only signin is what we ahndle with nextAuth .


## Callbacks in nextauth 
usesession returns a liitle of informations , but you can set a function in nextauth , to get data from database and passed it to useSession Hook .

## when you go to signin page 
with next auth , it shows the page you came from in the site url as callbak =  .... , you can use it to go to the page you came from after signde in .

##






