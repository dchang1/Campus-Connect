var facebook=["Facebook", "Engineering", "3.0", "Hawaii", "Paid", " descriptions lmaoasdfasdfasdfasdfasfasdfasdfasdfasdfasdfasdfasdfasfdsafasfasdfsad", "5/1/17"];
var google=["Google", "Computer Science", "4.0", "California", "Paid", " descriptions lmaoasdfasdfasdfasdfasdfasdfasdfasfasdfsadfasdfasdfasdfasdfasdfsad", "5/1/17"];
var dell=["Dell", "Engineering", "2.0", "Hawaii", "Paid", " descriptions lmao", "5/1/17"];
var internships=[facebook, google, dell];
var links=["https://www.facebook.com/careers/jobs/a0I1200000IAGYKEA5/?q=software+engineer+internship&location=menlo-park", "https://developers.google.com/open-source/gsoc/", "http://www.dell.com/en-us/"];
var results=[];
var descriptions=[];
var date=[];
var j=0;
if (localStorage.getItem("field")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("location")==internships[i][3] && localStorage.getItem("GPA")>=internships[i][2] && localStorage.getItem("pay")==internships[i][4]) {
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
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("location")==internships[i][3] && localStorage.getItem("pay")==internships[i][4]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][5]);
      date.push(internships[i][6]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("location")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("GPA")>=internships[i][2] && localStorage.getItem("pay")==internships[i][4]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][5]);
      date.push(internships[i][6]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("GPA")>=internships[i][2] && localStorage.getItem("location")==internships[i][3]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][5]);
      date.push(internships[i][6]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("GPA")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("location")==internships[i][3] && localStorage.getItem("pay")==internships[i][4]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][5]);
      date.push(internships[i][6]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("location")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("GPA")>=internships[i][2] && localStorage.getItem("pay")==internships[i][4]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][5]);
      date.push(internships[i][6]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("GPA")>=internships[i][2] && localStorage.getItem("location")==internships[i][3]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][5]);
      date.push(internships[i][6]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("GPA")=="Unspecified" && localStorage.getItem("location")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("pay")==internships[i][4]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][5]);
      date.push(internships[i][6]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("GPA")=="Unspecified" && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("location")==internships[i][3]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][5]);
      date.push(internships[i][6]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("location")=="Unspecified" && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("GPA")>=internships[i][2]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][5]);
      date.push(internships[i][6]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("GPA")=="Unspecified" && localStorage.getItem("location")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("pay")==internships[i][4]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][5]);
      date.push(internships[i][6]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("GPA")=="Unspecified" && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("location")==internships[i][3]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][5]);
      date.push(internships[i][6]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("location")=="Unspecified" && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("GPA")>=internships[i][2]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][5]);
      date.push(internships[i][6]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("GPA")=="Unspecified" && localStorage.getItem("location")=="Unspecified" && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][5]);
      date.push(internships[i][6]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
else if (localStorage.getItem("field")=="Unspecified" && localStorage.getItem("GPA")=="Unspecified" && localStorage.getItem("location")=="Unspecified" && localStorage.getItem("pay")=="Unspecified") {
  for (i=0; i<internships.length; i++) {
    results.push(internships[i][0]);
    descriptions.push(internships[i][5]);
    date.push(internships[i][6]);
    document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
    j++;   
  }
}
else {
  for (i=0; i<internships.length; i++) {
    if (localStorage.getItem("field")==internships[i][1] && localStorage.getItem("GPA")>=internships[i][2] && localStorage.getItem("location")==internships[i][3] && localStorage.getItem("pay")==internships[i][4]) {
      results.push(internships[i][0]);
      descriptions.push(internships[i][5]);
      date.push(internships[i][6]);
      document.write('<a href="' + links[i] + '" style="font-size:200%;float:left;" target="_blank">' + results[j] + '</a>' + '<span>' + descriptions[j] + '</span>' + '<span style="float:right;">Due ' + date[j] + '</span>' + '<hr>');   
      j++;
    }
  }
}
