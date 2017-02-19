var runLocal = false;
var line;
var letters;
var arr = [];
var lines = [];

if (runLocal) {
    //test case
    lines[0] = "6 4 2";
    lines[1] = "BCA";
} else {
   while (line = readline()) {
    lines.push(line);
   } 
}

var nums = lines[0].split(' ');
arr[0] = parseInt(nums[0]);
arr[1] = parseInt(nums[1]);
arr[2] = parseInt(nums[2]);

var nums1 = lines[1].split(' ');
letters = nums1[0];

var result = new Array();
arr = arr.sort(function(a, b){return a-b});

function analise(ch){
     console.log(ch);
   if (ch === "A"){
       result.push(arr[0]);
   }
   if (ch === "B"){
       result.push(arr[1]);
   }    
   if (ch === "C"){
       result.push(arr[2]);
   }    
}

analise(letters.charAt(0));
analise(letters.charAt(1));
analise(letters.charAt(2));

var out = "";
for (var i in result){
    out += result[i]+" ";
}
if (runLocal) {
    console.log(out.slice(0, out.length -1));
} else {
    print (out.slice(0, out.length -1));
}