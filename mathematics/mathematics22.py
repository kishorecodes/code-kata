n = int(input())
list_1 = list(map(int, input().split()[:n]))
if n % 2 == 0:
    l = len(list_1)
else:
    l = len(list_1) - 1
isTrue = True
for i in range(0, l, 2):
    if list_1[i] < list_1[i+1]:
        continue
    else:
        isTrue = False
if isTrue:
    print("yes")
else:
    print("no")
