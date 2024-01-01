const  rajiresume ={
    details:{
    name  : "R S Rajalakshme ",
    Label : "Web Developer",
    Email : "rajalakshmesundaram@gmail.com",
    Phone : "97912 45632",
    },
    objective:{
        focus:"Committed job seeker with a history of meeting company needs with consistent and organized Practices",
    },
    education :{
        insitution : "Anna university",
        Field : "ECE",
        Batch : "2010",
        class : "First class",
    },
    experience :{
        period : "March 2016",
        jobdetail : "Banking Assistant",
        Jobdescription :"Providing good customer services by responding to Emails",
    },
    skills:{
        name :"Web Developer",
        level :"beginner",
        keywords:["HTML","CSS","JavaScript"]
    },
    Softskills :["Active listening","Analytical thinking","Problem solving"],
    personaldetails :{
        DOB : "26th  March 1989",
        Nationality  : "Indian",
    maritalStatus    : "Married",
    Languages        : ["English", "Tamil"]


    },
}
console.log(rajiresume.details.name+"'s"+"Resume")
//for...loop
let length = Object.keys(rajiresume.Softskills).length;
console.log(rajiresume.details.name+"'s"+ "soft skills");
for(let i=0;i<length;i++)
{
    
    console.log(rajiresume.Softskills[i])
}
//for .... in.....loop
    for(let key in rajiresume.education)
    {
        console.log(rajiresume.education[key])
    }
//for ....of....loop
for(let key of Object.keys(rajiresume.skills))
{
    console.log(rajiresume.skills[key])
}
//for each .......loop
Object.keys(rajiresume.personaldetails).forEach(key => {
    console.log(rajiresume.personaldetails[key])
});