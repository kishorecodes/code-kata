N = int(input())
temp = N
sum1 = 0
prod = 1
while(N > 0):
    temp1 = N % 10
    sum1+=temp1
    prod*=temp1
    N = N // 10
tot = sum1+prod
if(tot == temp):
    print('Great')
