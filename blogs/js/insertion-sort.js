function *insertionSort(arr)
{ 
	var n = arr.length; 
	for (var i=1; i<n; i++) 
	{ 
		var key = arr[i]; 
		var j = i-1;
		while (j>=0 && arr[j] > key)
		{ 
			arr[j+1] = arr[j];
			yield [arr, j, j+1]
			j = j-1; 
		} 
		arr[j+1] = key;
		yield [arr, j, j+1]
	}
}

sortingAnimation(50, 200, '#insertion-sort', insertionSort)