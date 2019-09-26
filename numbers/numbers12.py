N = input()
sum1 = 0
list1 = ['a','e','i','o','u']
for i in N:
    if(i in list1):
        sum1 += ord(i)
if(sum1 % 8 == 0):
    print('1')
else:
    print('0')
