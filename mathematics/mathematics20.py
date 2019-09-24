N = int(input())
if(1 <= N <= 100000):
    result = 0
    while(N>0):
        temp = N % 10
        result = result + (temp ** 2)
        N = N // 10
    print(result)
