N = int(input())
lis = list(map(int,input().split()[:N]))
for i in range(len(lis)-1):
    a = lis[i] & lis[i+1]
print(a)
