N = int(input())
if(N<=10000):
    lis = list(map(int,input().split()[:N]))
    print(lis.index(min(lis))+1,lis.index(max(lis))+1)
