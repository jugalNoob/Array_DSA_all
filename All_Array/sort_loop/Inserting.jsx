|||||||||||||--------------------------------------Inserting Sort ----------->


let data=[9 , 6 , 5 , 1 , 2]
for(let i=0; i<data.length; i++){
   let current=data[i]
   let j=i-1
   while(j>=0 && data[j] > current){
      data[j+1] = data[j]
      // j=j-1
      j--
   }
   data[j+1]=current
}
console.log(data)




Step-by-step

Initial array:
[9, 6, 5, 1, 2]

Pass 1 (i = 0)

current = 9

Sorted portion: [9] (only one element — nothing to shift)

Array stays: [9, 6, 5, 1, 2]

Pass 2 (i = 1)

current = 6

j = 0 → compare data[0] (9) with 6

9 > 6 → shift 9 right
Array: [9, 9, 5, 1, 2]

j-- → now j = -1 (stop loop)

Insert 6 at j+1 = 0
Array: [6, 9, 5, 1, 2]

Pass 3 (i = 2)

current = 5

j = 1 → compare data[1] (9) with 5

9 > 5 → shift 9 right → [6, 9, 9, 1, 2]

j-- → j = 0

Compare data[0] (6) with 5

6 > 5 → shift 6 right → [6, 6, 9, 1, 2]

j-- → j = -1

Insert 5 at position 0
Array: [5, 6, 9, 1, 2]

Pass 4 (i = 3)

current = 1

j = 2 → 9 > 1 → shift → [5, 6, 9, 9, 2]
j = 1

6 > 1 → shift → [5, 6, 6, 9, 2]
j = 0

5 > 1 → shift → [5, 5, 6, 9, 2]
j = -1

Insert 1 at position 0
Array: [1, 5, 6, 9, 2]

Pass 5 (i = 4)

current = 2

j = 3 → 9 > 2 → shift → [1, 5, 6, 9, 9]
j = 2

6 > 2 → shift → [1, 5, 6, 6, 9]
j = 1

5 > 2 → shift → [1, 5, 5, 6, 9]
j = 0

1 > 2? No → stop

Insert 2 at position 1
Array: [1, 2, 5, 6, 9]

✅ Final sorted array:
[1, 2, 5, 6, 9]



| Pass (i) | Current | Shifts Made                     | Array After       |
| -------- | ------- | ------------------------------- | ----------------- |
| 1        | 9       | None                            | `[9, 6, 5, 1, 2]` |
| 2        | 6       | 9 → right                       | `[6, 9, 5, 1, 2]` |
| 3        | 5       | 9 → right, 6 → right            | `[5, 6, 9, 1, 2]` |
| 4        | 1       | 9 → right, 6 → right, 5 → right | `[1, 5, 6, 9, 2]` |
| 5        | 2       | 9 → right, 6 → right, 5 → right | `[1, 2, 5, 6, 9]` |
