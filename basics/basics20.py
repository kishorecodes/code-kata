N = input()
length = len(N)
lis1 = []
if(length <= 10000000):
    for i in N:
        lis1.append(i)
    for j in range(0,length-1,2):
        temp = lis1[j]
        lis1[j] = lis1[j+1]
        lis1[j+1] = temp
result = "".join(lis1)
print(result)
