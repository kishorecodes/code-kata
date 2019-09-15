s = input()
if (len(s) <= 10000000):
    sp=s.split(" ")
    sp.reverse()
    print(" ".join(sp))
