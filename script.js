var mas = [];
function masCreate(n) {
	for(var i = 0; i < n; i++)
	{
		mas[i] = [];
		for(var j = 0; j < n; j++)
		{
			if(i==0 || j==0 || j==n-1 || i==n-1){mas[i][j] = -1;}
			else{mas[i][j] =0;}
		}
	}
	mas[1][3] = -1;
	mas[2][3] = -1;
	mas[3][3] = -1;
	mas[4][3] = -1;
	mas[5][3] = -1;
	mas[5][0] = -3;
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
		if ( mas[n][m] == -3 ) 
		{ 			
			mas[n][m]=1;
			return true;
		}
		else
		{
			mas[n][m]=-2;
			if ( mas[n-1][m] == 0 || mas[n-1][m] == -3 ){ if(search(n-1,m)) {mas[n][m]=-5;  return  true;}}
			if ( mas[n+1][m] == 0 || mas[n+1][m] == -3 ){ if(search(n+1,m)) {mas[n][m]=-5;  return  true;}}
			if ( mas[n][m-1] == 0 || mas[n][m-1] == -3 ){ if(search(n,m-1)) {mas[n][m]=-5;  return  true;}}
			if ( mas[n][m+1] == 0 || mas[n][m+1] == -3 ){ if(search(n,m+1)) {mas[n][m]=-5;  return  true;}}
			else{ return false;}
		}
}
function shortway(n,m) {
	search(n,m);
	var r = true,b=1;
	while ( r == true )
	{
		r=false;
		for(var i = 0; i < 8; i++)
		{
			
			for(var j = 0; j < 8; j++)
			{
				if(mas[i][j]==b )
				{
					if ( mas[i-1][j]==-5 ) { mas[i-1][j]=b+1; }
					if ( mas[i+1][j]==-5 ) { mas[i+1][j]=b+1; }
					if ( mas[i][j+1]==-5 ) { mas[i][j+1]=b+1; }
					if ( mas[i][j-1]==-5 ) { mas[i][j-1]=b+1; }
					r=true;
				}
				
			}
		}
		b+=1;
	}
	rec(4,5);
}				
function rec(n,m)
{
	//alert(n+" "+m);
	if ( mas[n-1][m] == mas[n][m]-1  ){rec(n-1,m); return}
	if ( mas[n+1][m] == mas[n][m]-1  ){rec(n+1,m); return}
	if ( mas[n][m-1] == mas[n][m]-1  ){rec(n,m-1); return}
	if ( mas[n][m+1] == mas[n][m]-1  ){rec(n,m+1); return}
	else { return }
}			 