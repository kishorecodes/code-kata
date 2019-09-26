N = int(input())
list1 = []
while(N > 0):
    temp = N % 10
    list1.append(temp)
    N = N // 10
print(list1[0] + list1[-1])
