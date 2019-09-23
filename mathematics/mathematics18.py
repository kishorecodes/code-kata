N = input()
if(int(N) <= 100000):
    lis1 = []
    for i in N:
        s = int(i)
        if(s % 2 != 0):
            lis1.append(s)
    if(len(lis1) > 1):
        for j in lis1:
            print(j,end=' ')
    else:
        print('-1')
