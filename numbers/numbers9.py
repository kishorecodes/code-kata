N = int(input())
list1 = list(map(int,input().split()[:N]))
sum1 = list1[0] + list1[1] + list1[2]
sum2 = list1[-1] + list1[-2] + list1[-3]
if(sum1 == sum2):
    print('1')
else:
    print('0')
