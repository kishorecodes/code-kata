A,B,C = map(int,input().split())
if(A <= 100000 and B <= 100000 and C <= 100000):
    if ((pow(A,2) + pow(B,2)) == pow(C,2)):
        print("yes")
    else:
        print("no")
