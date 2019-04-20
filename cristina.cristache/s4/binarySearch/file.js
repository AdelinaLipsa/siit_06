function binarySearch(arr, x){
	if(arr.length==0){
		return false;
	} else{
		var indxMid = arr.length/2;
		var mid = arr[indxMid];
		if(mid==x){
			return true;
		} else{
			var arr_left = [...arr].splice(0,indxMid); //.splice[), changes the value
			var arr_right = [...arr].splice(indxMid, arr.length-1);
			if(x<mid){
				return binarySearch(arr_left, x);
			} else {
				return binarySearch(arr_right,x);
			}
		}
	}
}