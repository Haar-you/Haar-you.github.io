def nozero(l):
    for x in l:
        if x == 0:
            return False
    return True

def asc(l):
    for i in range(len(l) - 1):
        if l[i] > l[i + 1]:
            return False
    return True

x = 4
n = 12

r = [2 ** i for i in range(n)]

a = []
b = [0 for _ in range(x)]

def rec(i):
    if i == n:
        if asc(b) and nozero(b):
            a.append(tuple(b))
    else:
        for j in range(x):
            b[j] += r[i]
            rec(i + 1)
            b[j] -= r[i]

rec(0)

print(len(set(a)))
