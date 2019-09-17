N = int(input())
lis = list(map(int,input().split()))
for j in range(0,N-1,2):
    temp = lis[j]
    lis[j] = lis[j+1]
    lis[j+1] = temp
for i in lis: 
    print(i, end=" ")
