
let salary,gross,hra,da;
salary=30000;

if(salary<=10000){
  da=salary*80/100;
  hra=salary*20/100;
  gross=salary+da+hra;

  document.write("the gross salary of employee is :"  +  gross  +"<br>");
}
else if(salary<=20000){
  da=salary*90/100;
  hra=salary*30/100;
  gross=salary+da+hra;
  document.write("the gross salary of employee is :"  +  gross +"<br>");
} else if(salary<=30000){
  da=salary*95/100;
  hra=salary*45/100;
  gross=salary+da+hra;
  document.write("the gross salary of employee is :"  +  gross +"<br>");
}else{
  document.write("no salary" +"<br>")
}