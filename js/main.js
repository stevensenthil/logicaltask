	 
			// Logical Task:
			
			    // add the odd number:					
						 // var n=parseInt(prompt("Enter the value"));
						   //var sum=0;
						   // while(n>0){
							   // rem=n%10;
							   // n=(n-rem)/10
							   
							   // if(rem%2!==0){
								   // sum=sum+rem
							   // }
						   // }
						   // document.write(sum)
						   
					// Sum of Digits:
					
					     var a=parseInt(prompt("Enter the value"));
						 var col=0;
						 
						 while(a>0){
							let rem=a%10
	                            a=(a-rem)/10
                                col=col+rem								
						 }
						 document.write(col)
						  
						   
					   
					// square the input value:
					
								 // var n=parseInt(prompt("Enter the value"));
							   // var sum=0;
							   // while(n>0){
								   // rem=n%10;
								   // n=(n-rem)/10
								   
								   // add=rem**2
									   // sum+=add
								   
							   // }
							   // document.write(sum)
							   
					   
					  // Calulate the input average:
					  
								 // var n=parseInt(prompt("Enter the value"));
									  // var sum=0;  
									  // var count=0;
									   // while(n>0){
										   // count++
										   // rem=n%10;
										   // n=(n-rem)/10
										   
										   // sum+=rem
																	   
									   // }
									   // sum=sum/count
									   // document.write(sum)
									   
									   
									   
						// Table:
						      
							   // let tab=5
								
                           // for(i=1;i<=10;i++){
							  // let c=i*tab
							   // console.log(i,"*",tab,"=",c);
						   // }								
						   
						   
						 // Factorial:
						 
						    // let fact=5;  let sum=1;
							
							// for(i=1;i<=fact;i++){
								// sum*=i
								// console.log(sum)
							// }
							
							
							// Palindrome:
							
							   let p=1412;
							   let sum=0
							   while(p!=0){
								  let rem=p%10;
								  p=(p-rem)/10;
								  sum=(sum *10)+rem
                           		
							   }
							   if(sum==p){
									console.log("Palindrome")
								}						   
								else{
									console.log("not Palindrome");
								}
								
								
								// Armstrong:
								
								      let x=1534 ;
									  let y=x;
									  let z=y;
								      let sun=0;
                                      let count=0
                                      while(x>0){
										 let rem=x%10
										  x=(x-rem)/10
										  count++
									  }									 
 									  while(y!=0){
										   let rem=y%10
										   y=(y-rem)/10
										   sun=sun+(rem**count)
									  }
									  if(z==sun){
										  console.log("It's Armstrong")
									  }
									  else{
										  console.log("Not Armstrong")
									  }
									  
									  
									  // Vowels:
									  
									  var n="Senthil Kumar"
									 var coun=0
								
								  for(i=0;i<n.length;i++){
									  let o=n[i]
									  
									 if((o=="a")||(o=="e")||(o=="i")||(o=="o")||(o=="u")){
										   
										  coun++ 
										     console.log(o)
									 }
									
								  }
								