//exercitiu matrice 
var m = [
    [1, 2, 3, 4],
    [12,13,14,5],
    [11,16,15,6],
    [10, 9, 8,7]
];
for (var i = 0; i < m.length; i++) {
    for (var j = 0; j < m[i].length; i++) {
        //console.log(m[i][j]);
    }
}
function parse (m) {
var n = m.length;
for (var p = 0; p < Math.floor(n / 2); p++) {
    for (var i = p; i < n - p; i++) {
        console.log(m[p][i]);
    }
    for (var j = p + 1; j < n - p; j++) {
        console.log(m[j][n - p - 1]);
    }
    for (var k = (n - 1) - (p + 1); k > p-1; k--) {
        console.log(m[n - 1 - p][k]);
    }
    for (var l=(n-1)-(p+1); l>p; l--){
        console.log(m[l][p]);
    }
}
}
parse(m);

//merges two sorted arrays resulting in a new sorted array

function merge(a,b){
  var i = 0
  var j = 0
  var s = []
  
  while (i<a.length && j<b.length){
    if(a[i]<b[j]){
      s.push(a[i]);
      i++;
    } else{
      s.push(b[j]);
      j++;
    }
   
    
  }
 //while(i<a.length) {s.push(a[i]); i++}
 //while(j<b.length) {s.push(b[j]); j++}
 return s;
}



//------------------------------------------
var categories = [

  {

    name: "Europa",

    subcategory: {

      name: "Romania",

      subcategory: {  

        name: "Bucuresti",

        subcategory: {  

          name: "Bdul Magheru",

          subcategory: undefined

        }

      }

    }

  },

  {

    name: "categorie 1",

    subcategory: {

      name: "categorie 2",

      subcategory: {  

        name: "categorie 3",

        subcategory: {  

          name: "categorie 4",

          subcategory: {  

            name: "categorie 5",

            subcategory: {  

              name: "categorie 6",

              subcategory: undefined

            }

          }

        }

      }

    }

  }

];

function display(c){
  console.log(c.name);
  if(c.subcategory){
    display(c.subcategory);
  }
}


//--------------------------------

function sort(a) {
    var sorted = [];
    if (a.length > 0) {
        if (a.length == 1) {
            sorted = a;
        } else {
            var midIndx = Math.floor(a.length / 2);
            var left = a.slice(0, midIndx);
            var right = a.slice(midIndx, a.length);
            var sortedLeft = sort(left);
            var sortedRight = sort(right);
            sorted = merge(sortedLeft, sortedRight);
        }
    }
    return sorted;
}