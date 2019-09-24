from collections import Counter
N = int(input())
list1 = list(map(int,input().split()[:N]))
result = dict(Counter(list1))
pos = max(result.values())
for i,j in result.items():
    if(j == pos):
        print(i)
        break
