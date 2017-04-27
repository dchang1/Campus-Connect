var facebook=["Facebook", "Engineering", "3.0", "Hawaii", "1", "Paid", "Facebook is constantly redeveloping the future. Join us to...", "5/1/17"];
var google=["Google", "Computer Science", "4.0", "California", "1", "Paid", "Intern at Google for a great time!", "5/1/17"];
var dell=["Dell", "Engineering", "2.0", "Hawaii", "2", "Paid", "This internship at Dell will allow you to work closely with a mentor and...", "5/1/17"];
var sungard=["Sungard Availability Services", "Computer Science", "3.0", "Pennsylvania", "1", "Paid", "Sungard Availability Services is currently looking for a hard working, bright, and energetic...", "5/1/17"];
var chop=["CHOP Research Institute", "Biology", "3.3", "Pennsylvania", "1", "Paid", "The CHOP Research Institute Summer Scholars Program (CRISSP) is committed to educating...", "5/31/17"];
var overlook=["Overlook Summer Program", "Biology", "0", "New Jersey", "3", "Paid", "The Overlook Summer Internship Program (OSIP) is designed for college students who are...", "2/1/17"];
var internships=[facebook, google, dell, sungard, chop, overlook];
var links=["https://www.facebook.com/careers/jobs/a0I1200000IAGYKEA5/?q=software+engineer+internship&location=menlo-park", "https://developers.google.com/open-source/gsoc/", "http://www.dell.com/en-us/", "http://jobs.sungardas.com/jobs/15173/sungardRMS/philadelphia/co-op-internship/technology-and-computer-science-intern/?utm_source=glassdoor&utm_campaign=coopinternship&utm_medium=jobboard&utm_content=coopinternshipcategory&source=Glassdoor"];
var results=[];
var descriptions=[];
var date=[];
var j=0;
if (localStorage.getItem("field")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("location")==internships[i][3] && localStorage.getItem("GPA")>=internships[i][2] && localStorage.getItem("year")>=internships[i][4] && localStorage.getItem("pay")==internships[i][5]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][5]);
      date.push(internships[i][6]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("GPA")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("location")==internships[i][3] && localStorage.getItem("year")>=internships[i][4] && localStorage.getItem("pay")==internships[i][5]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("location")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("GPA")>=internships[i][2] && localStorage.getItem("year")>=internships[i][4] && localStorage.getItem("pay")==internships[i][5]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("year")==0) {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("GPA")>=internships[i][2] && localStorage.getItem("location")==internships[i][3] && localStorage.getItem("pay")==internships[i][5]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("GPA")>=internships[i][2] && localStorage.getItem("location")==internships[i][3] && localStorage.getItem("year")>=internships[i][4]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("GPA")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("location")==internships[i][3] && localStorage.getItem("year")>=internships[i][4] && localStorage.getItem("pay")==internships[i][5]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("location")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("GPA")>=internships[i][2] && localStorage.getItem("year")>=internships[i][4] && localStorage.getItem("pay")==internships[i][5]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("year")==0) {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("GPA")>=internships[i][2] && localStorage.getItem("location")==internships[i][3] && localStorage.getItem("pay")==internships[i][5]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("GPA")>=internships[i][2] && localStorage.getItem("location")==internships[i][3] && localStorage.getItem("year")>=internships[i][4]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("GPA")=="Unspecified" && localStorage.getItem("location")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("year")>=internships[i][4] && localStorage.getItem("pay")==internships[i][5]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("GPA")=="Unspecified" && localStorage.getItem("year")==0) {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("location")==internships[i][3] && localStorage.getItem("pay")==internships[i][5]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("GPA")=="Unspecified" && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("location")==internships[i][3] && localStorage.getItem("year")>=internships[i][4]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("location")=="Unspecified" && localStorage.getItem("year")==0) {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("GPA")>=internships[i][2]  && localStorage.getItem("pay")==internships[i][5]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("location")=="Unspecified" && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("GPA")>=internships[i][2]  && localStorage.getItem("year")>=internships[i][4]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("year")==0 && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("GPA")>=internships[i][2]  && localStorage.getItem("location")>=internships[i][3]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("GPA")=="Unspecified" && localStorage.getItem("location")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("year")>=internships[i][4] && localStorage.getItem("pay")==internships[i][5]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("GPA")=="Unspecified" && localStorage.getItem("year")==0) {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("location")==internships[i][3] && localStorage.getItem("pay")==internships[i][5]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("GPA")=="Unspecified" && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("location")==internships[i][3] && localStorage.getItem("year")>=internships[i][4]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("location")=="Unspecified" && localStorage.getItem("year")==0) {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("GPA")>=internships[i][2] && localStorage.getItem("pay")==internships[i][5]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("location")=="Unspecified" && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("GPA")>=internships[i][2] && localStorage.getItem("year")>=internships[i][4]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("year")==0 && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("GPA")>=internships[i][2] && localStorage.getItem("location")==internships[i][3]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("GPA")=="Unspecified" && localStorage.getItem("location")=="Unspecified" && localStorage.getItem("year")==0) {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("pay")==internships[i][5]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("GPA")=="Unspecified" && localStorage.getItem("location")=="Unspecified" && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("year")>=internships[i][4]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("GPA")=="Unspecified" && localStorage.getItem("year")==0 && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("location")==internships[i][3]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("location")=="Unspecified" && localStorage.getItem("year")==0 && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("GPA")>=internships[i][2]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("GPA")=="Unspecified" && localStorage.getItem("location")=="Unspecified" && localStorage.getItem("year")==0) {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("pay")==internships[i][5]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }   
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("GPA")=="Unspecified" && localStorage.getItem("location")=="Unspecified" && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("year")>=internships[i][4]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }   
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("GPA")=="Unspecified" && localStorage.getItem("year")==0 && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("location")==internships[i][3]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }   
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("location")=="Unspecified" && localStorage.getItem("year")==0 && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("GPA")>=internships[i][2]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }   
  }
}
else if (localStorage.getItem("GPA")=="Unspecified" && localStorage.getItem("location")=="Unspecified" && localStorage.getItem("year")==0 && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }   
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("GPA")=="Unspecified" && localStorage.getItem("location")=="Unspecified" && localStorage.getItem("year")==0 && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    results.push(internships[i][0]);
    descriptions.push(internships[i][6]);
    date.push(internships[i][7]);
    document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
    j++;   
  }
}
else {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("GPA")>=internships[i][2] && localStorage.getItem("location")==internships[i][3] && localStorage.getItem("year")>=internships[i][4] && localStorage.getItem("pay")==internships[i][5]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][6]);
      date.push(internships[i][7]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
