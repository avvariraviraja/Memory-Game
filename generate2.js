function validate()
{
	var z = localStorage.getItem('random');
	z=z+""
	let arr=z.split('')

	console.log(z)
	{
		let count=0;
		var x = document.getElementById("inp").value+""; 
		let arr2=x.split('')
		if(x==z)
		{
			document.getElementById("msg").innerHTML="Your guess is correct"
		}
		else{
			for(let i=0;i<arr.length;i++)
			{
				for(let j=0;j<arr2.length;j++)
				{
					if(arr[i]==arr2[j])
					{
						count++;
						break;
						//arr[i]="10"
					}
				}
			}
			document.getElementById("msg").innerHTML="Your guess is correct by"+count
			
		}
	}
}

function check()
{
	if(document.getElementById("inp").value == '')
	{
		alert("Enter a number")
	}else
	{
		validate()
	}
	
}