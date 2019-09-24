N = int(input())
if(N<=1000):
    list1 = []
    for i in range(1,N+1):
        if(N % i == 0):
            if(i % 2 != 0):
                list1.append(i)
    for j in list1:
        print(j,end=' ')
