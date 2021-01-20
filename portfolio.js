

let story = document.querySelector("#story");
let listory = document.querySelector("#liStory");
let skills = document.querySelector("#skills");
let liskills = document.querySelector("#liSkills");
let contact = document.querySelector("#contact");
let licontact = document.querySelector("#liContact");

listory.addEventListener("click", function ()
{
    story.scrollIntoView({behavior: "smooth"});
});

liskills.addEventListener("click", function ()
{
    skills.scrollIntoView({behavior: "smooth"});
});

licontact.addEventListener("click", function ()
{
    contact.scrollIntoView({behavior: "smooth"});
});

