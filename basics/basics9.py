N,K = map(int,(input().split()))
lis = list(map(int,input().split()[:N]))
ct = lis.count(K)
if(ct > 1):
    print(ct)
elif(K not in lis):
    print('-1')
else:
    print('0')
