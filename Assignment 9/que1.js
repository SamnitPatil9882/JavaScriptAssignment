
//● Visit any page on the browser, and replace the content of all the p tags with the phrase “How’s the Josh?” using Javascript
const collection = document.getElementsByTagName("p");
for (const obj of collection){
	obj.innerHTML="josh software"
}

