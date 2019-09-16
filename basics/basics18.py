x1,y1 = map(int,input().split())
x2,y2 = map(int,input().split())
x3,y3 = map(int,input().split())
x4,y4 = map(int,input().split())

if(x1 == x2 and y1 == y4 and y2 == x3 and y3 == x4):
    print('yes')
else:
	print('no')
