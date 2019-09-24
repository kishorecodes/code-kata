N = int(input())
list1 = list(map(int,input().split()[:N]))
K = int(input())
list2 = []
for i in list1:
    if(i % K == 0):
        list2.append(1)
    else:
        list2.append(0)
for j in list2:
    print(j,end=' ')
