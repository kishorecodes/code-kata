N = input()
sum1=0
if(int(N) <= 10000000000):
    for i in N:
        if(int(i) % 2!=0):
            sum1+=int(i)
    if(sum1 % 2 == 0):
        print('E')
    else:
        print('O')
