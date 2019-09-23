import math
A,B = map(int,input().split())
if(A<= 10000 and B <= 10000 and A-B <=5):
    C = math.factorial(A) / math.factorial(B)
print(int(C))
