N = int(input())
L,R = map(int,input().split())
lis1 = []
for i in range(L,R+1):
    lis1.append(i)
if(N in lis1):
    print('yes')
else:
    print('no')
