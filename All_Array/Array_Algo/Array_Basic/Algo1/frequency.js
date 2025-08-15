let data=[10 , 20 , 30 , 40]

let obj={}

for(let i=0; i<data.length; i++){

    let str=data[i]


    if(obj[str]){

        obj[str]++
    }else{

        obj[str]=1
    }
}

console.log(obj)


🔁 Loop Iteration Starts

🔄 First Iteration (i = 0)

let str = data[i];  // str = 10

if (obj[str]) { ... } else { obj[str] = 1; }

obj[10] is undefined, so it enters the else block.

obj[10] = 1
✅ obj becomes: {10: 1}




🔄 Second Iteration (i = 1)

let str = data[i];  // str = 20

obj[20] is undefined, so obj[20] = 1

✅ obj becomes: {10: 1, 20: 1}



🔄 Third Iteration (i = 2)

let str = data[i];  // str = 30

obj[30] is not in obj, so it sets obj[30] = 1

✅ obj becomes: {10: 1, 20: 1, 30: 1}




🔄 Fourth Iteration (i = 3)


let str = data[i];  // str = 40

obj[40] is not in obj, so it sets obj[40] = 1

✅ obj becomes: {10: 1, 20: 1, 30: 1, 40: 1}


🔚 End of Loop

console.log(obj);



🧠 Summary Table:



| i | `data[i]` | `obj[data[i]]` exists? | Action        | `obj` result                   |
| - | --------- | ---------------------- | ------------- | ------------------------------ |
| 0 | 10        | No                     | `obj[10] = 1` | `{10: 1}`                      |
| 1 | 20        | No                     | `obj[20] = 1` | `{10: 1, 20: 1}`               |
| 2 | 30        | No                     | `obj[30] = 1` | `{10: 1, 20: 1, 30: 1}`        |
| 3 | 40        | No                     | `obj[40] = 1` | `{10: 1, 20: 1, 30: 1, 40: 1}` |
