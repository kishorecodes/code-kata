N = int(input())
if(N <= 100000):
    lis1 = list(map(int,input().split()[:N]))
    result = 0
    for i in lis1:
        result = result | i
    print(result)
