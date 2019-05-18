// wowowowowo
function f(arr, x) {
	if(arr.length == 0) {
		return false;
    } else {
		var indxMid = Math.floor(arr.length / 2);
		var mid = arr[indxMid];		
		if (mid == x) {
			return true;
        } else {
			var arr_left = [...arr].splice(0, indxMid);
			var arr_right = [...arr].splice(indxMid, arr.length-1);
        	if (x < mid) {
				return f(arr_left, x);
            } else {
				
				return f(arr_right, x);
            }
		}
    }
}