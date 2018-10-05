/* Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
####### */

let string = "";

for ( i = 0; i < 7; i++){
    string = "";

    for(j=0; j <= i; j++){
       string = string + "#";
    }
    console.log(string);
}