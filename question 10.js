let math,eng,urd,phy,che,sum,per;
  math=90; 
  urd=80;
   phy=87;
   che=76;
   eng=78;

   sum=math+ urd+phy +che+ eng;
    per=sum/6;{
       
    }
    if(per>=80 &&per<=90){
       document.write("  Grade A" +"<br>");
    }else if(per>=70 &&per<=80){
       document.write("  Grade B"+"<br>");
    }else if(per>=60 &&per<=70){
       document.write("  Grade C"+"<br>");
    }else if(per>=50 &&per<=60){
       document.write("  Grade D"+"<br>");
    }else if(per>=40 &&per<=50){
       document.write("  Grade E"+"<br>");
    } else{
         document.write("enter a valid input"+"<br>");
    }