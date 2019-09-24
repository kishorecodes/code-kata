N = int(input())
ct=0
for i in range(1,N+1):
    for j in range(1,N+2):
        sum1 = i + j
        if(sum1 == N):
            ct+=1
print(ct)
