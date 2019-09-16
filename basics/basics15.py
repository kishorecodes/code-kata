a,b,c = map(int,input().split())
if (a <=100000 and b<=100000 and c<=100000):
    if (a != b and b !=c and a != c):
        print("yes")
    else:
        print("no")
