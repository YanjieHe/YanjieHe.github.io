// Merges two subarrays of arr[]. 
// First subarray is arr[l..m] 
// Second subarray is arr[m+1..r] 
function *merge(arr, l, m, r) 
{ 
	// Find sizes of two subarrays to be merged 
	var n1 = m - l + 1; 
	var n2 = r - m; 

	/* Create temp arrays */
	var L = [ ], R = [ ]

	/*Copy data to temp arrays*/
	for (var i=0; i<n1; ++i) 
		L.push(arr[l + i])
	for (var j=0; j<n2; ++j) 
		R.push(arr[m + 1+ j])


	/* Merge the temp arrays */

	// Initial indexes of first and second subarrays 
	var i = 0, j = 0; 

	// Initial index of merged subarry array 
	var k = l; 
	while (i < n1 && j < n2)
	{ 
		if (L[i] <= R[j]) 
		{ 
			arr[k] = L[i];
			i++; 
		} 
		else
		{ 
			arr[k] = R[j]; 
			j++; 
		}
		k++; 
	}

	/* Copy remaining elements of L[] if any */
	while (i < n1) 
	{ 
		arr[k] = L[i]; 
		i++; 
		k++; 
	} 

	/* Copy remaining elements of R[] if any */
	while (j < n2) 
	{
		arr[k] = R[j]; 
		j++; 
		k++; 
	} 
} 

// Main function that sorts arr[l..r] using 
// merge() 
function *sort(arr[], l, r) 
{ 
	if (l < r) 
	{ 
		// Find the middle povar 
		var m = (l+r)/2; 

		// Sort first and second halves 
		yield sort(arr, l, m); 
		yield sort(arr , m+1, r); 

		// Merge the sorted halves 
		yield merge(arr, l, m, r); 
	}
}