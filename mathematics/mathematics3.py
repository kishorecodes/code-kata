import math
N,K = map(int,input().split())
if(N <= 10 and K <= 10):
    result = math.factorial(N) / (math.factorial(N-K))
print(round(result))
