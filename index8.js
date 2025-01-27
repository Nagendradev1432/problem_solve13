
//find out the missing number//
//condition as a confirm that sorted array
// let arr1=[1,2,4,5]
// let sum=0
// for(i of arr1){
//     sum=sum+i
    
// }
// console.log(sum)
// let missingnumber=((arr1.length+1)*(arr1.length+1+1))/2
// console.log(missingnumber)

//Binary searvh//

// let arr1=[12,30,40,60,80]
// let left=0
// let target=80
// let right=arr1.length-1
// while(left<=right){
//     let mid=Math.floor((left+right)/2)
//     if(arr1[mid]==target){
//         console.log(mid)
//         break;
//     }
//     if(arr1[mid]<target){
//         left=mid+1
//     }
//     else{
//         right=mid+1
//     }
// }

//common elements//

// let arr1=[1,2,3]
// let arr2=[2,3,4]
// for(i of arr1){
//     if(arr2.includes(i)){
//         console.log(i)
//     }
// }

//Natural Number//

// let arr1=[1, 2, 3,4,6]
// let sum=0
// for(i of arr1){
//     sum=sum+i
// }
// let findnumber=((arr1.length+1)*(arr1.length+1+1)/2)
// console.log(findnumber-sum)



//Find the Maximum Product of Two Elements//
// let arr1=[3, 5, -2, 8, 11]
// let max=0
// for(i=0;i<arr1.length;i++){
//     for(j=i+1;j<arr1.length;j++){
//         let maxproduct=arr1[i]*arr1[j]
//         max=Math.max(max,maxproduct)
//     }
    
// }
// console.log(max)