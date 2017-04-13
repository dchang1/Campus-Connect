var facebook=["Facebook", "Engineering", "3.0", "Hawaii"];
var google=["Google", "Computer Science", "4.0", "California"];
var dell=["Dell", "Engineering", "2.0", "Hawaii"];
var internships=[facebook, google, dell];
var links=["https://www.facebook.com/careers/jobs/a0I1200000IAGYKEA5/?q=software+engineer+internship&location=menlo-park", "https://developers.google.com/open-source/gsoc/", "http://www.dell.com/en-us/"];
var results=[];
var j=0;

if (localStorage.getItem("location")=="" || localStorage.getItem("location")=="Unspecified") {
for (i=0; i<internships.length; i++) {
   if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("GPA")>=internships[i][2]) {
     results.push(internships[i][0]);
     document.write(results[j].link(links[i])+"<br>");   
     j++;
   }
}
}

else {
for (i=0; i<internships.length; i++) {
   if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("GPA")<=internships[i][2] && localStorage.getItem("location")==internships[i][3]) {
     results.push(internships[i][0]);
     document.write(results[j].link(links[i])+"<br>");   
     j++;
}
}
}


results.sort();
