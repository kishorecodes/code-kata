N = int(input())
if(N <=100000000000):
    lis1 = []
    while(N>0):
        temp = N % 10
        lis1.append(temp)
        N = N // 10
    ct = len(lis1)
    result = 0
    for i in lis1:
        result = result + (i ** ct)
print(result)
