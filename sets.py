myset = set(["a", "b", "c"])

myset.add("j")

fruitSet = {"a", ",b", "apple", "banana", "cherry"}

fruitSet.add("apple")
fruitSet.add("orange")

for x in fruitSet:
    print(x)

set3 = fruitSet - myset
print(set3)


name = {{"james","kestony"}, {"tyrone","tupac"}}

arr = [17,4,5,6,7,999,0,333, 1, 222, 2, 3, 4, 5]
# is there a dup?
# Find the dup
# print the dup
temp = arr[i]
for i in arr:
    for j in arr:
        if temp == arr[j]:
             #found a dup
