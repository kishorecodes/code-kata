N,K = map(int,input().split())
lis = list(map(int,input().split()[:N]))
if(K in lis):
  print('yes')
else:
  print('no')
