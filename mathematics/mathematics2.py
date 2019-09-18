import re
str1 = input()
lis = list(map(int, re.findall(r'\d+', str1)))
print(max(lis))
