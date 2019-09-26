N = int(input())
if(N <= 100000):
    list1 = list(map(int,input().split()[:N]))
    list2 = []
    for i in list1:
        if(i < 0):
            list2.append(i)
    print(sum(list2))
