N = int(input())
if(1 <= N <= 100000):
    for i in range(2,N):
        if(N % i == 0):
            print('yes')
            break
        else:
            print('no')
