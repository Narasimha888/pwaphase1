function getfile(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200")
    {
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
  }
  getfile("dynamic.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    profile(data.basics);
    career(data.career);
    edu(data.education);
    skill(data.skills)
  })
  var main=document.querySelector(".main");
  var left=document.querySelector(".left");
  var right=document.querySelector(".right");
  function profile(pro){
    var image=document.createElement('img');
    var text=document.createElement('h2');
    var mail=document.createElement('h2');
    var l=document.createElement('hr');
  image.src=pro.img;
    text.textContent=pro.name;
    mail.textContent=pro.email;
  left.appendChild(image);
    left.appendChild(text);
    left.appendChild(mail);
    left.appendChild(l);
main.appendChild(left);
  }
  function career(c){
    var rh=document.createElement("h1");
    var t=document.createElement('h2');
    var l=document.createElement('hr');
    rh.textContent="RESUME";
    t.textContent=c.info;
    right.append(rh);
    right.append(l);
    right.append(t);
}
function edu(e){
  var t=document.createElement('h1');
  t.textContent="EDUCATION DETAILS";
  right.appendChild(t);
  var hr=document.createElement('hr');
  right.append(hr);
  var table=document.createElement('table');
  let row='';
row+=  "<tr><th>"+"sno"+"</th><th>"+"degree"+"</th><th>"+"institute"+"</th><th>"+"percentage"+"</th></tr>";
  for(i in e){
  row+="<tr><td>"+e[i].sno+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].per+"</td></tr>";
}
table.innerHTML=row;
right.appendChild(table);
main.appendChild(right);
}
function skill(s){
  var hh=document.createElement("h2");
  hh.textContent="SKILLS SET";
  right.append(hh);
  var ul=document.createElement(ul);
  right.append(ul);
  for(i in s){
    var li=document.createElement("li");
    li.textContent=s[i].info;
    ul.append(li);
  }
}
