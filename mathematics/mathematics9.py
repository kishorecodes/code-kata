N = int(input())
result = 1
while(N > 0):
    prod = N % 10
    result*=prod
    N = N // 10
print(result)
