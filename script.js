var mas = [];

function masCreate(n) {
	   //1 - wall 0 -step
	for(var i = 0; i < n; i++)
	{
		mas[i] = [];
		for(var j = 0; j < n; j++)
		{
			if(i==0 || j==0 || j==n-1 || i==n-1)
				{mas[i][j] = 1;}
			else{
			//mas[i][j] = prompt("Enter 0 or 1");
			mas[i][j] =0;
		}
		}
	}
	mas[5][0]=3;
	masShow();
}
function masShow() {
	var node , textnode; 
	for(var i = 0; i < 8; i++)
	{
		node = document.createElement("TR");
		document.getElementById("tab").appendChild(node);
		for(var j = 0; j < 8; j++)
		{
			node = document.createElement("TD");
    		textnode = document.createTextNode(mas[i][j]);
    		node.appendChild(textnode);
    		document.getElementById("tab").appendChild(node);
		}
	}
}

function search(n,m) {
		if ( mas[n][m] == 3 ) 
		{ 	
			return alert('found');
		}
		else
		{
			mas[n][m]=2;
			if ( mas[n-1][m] == 0 || mas[n-1][m] == 3 ){ search(n-1,m);}
			if ( mas[n+1][m] == 0 || mas[n+1][m] == 3 ){ search(n+1,m);}
			if ( mas[n][m-1] == 0 || mas[n][m-1] == 3 ){ search(n,m-1);}
			if ( mas[n][m+1] == 0 || mas[n][m+1] == 3 ){ search(n,m+1);}
		}
}// JavaScript File