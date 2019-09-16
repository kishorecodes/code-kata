N,M = map(int,input().split())
prod = N * M
if(prod % N == 0 and prod % M ==0):
	if(N == M):
		print('yes')
	else:
		print('no')
