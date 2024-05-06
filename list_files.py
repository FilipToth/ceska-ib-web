import os

path = input('path?    ')
items = os.listdir(path)

outp = open('outp.txt', 'w+')
for i in range(len(items)):
    item = items[i]
    base = os.path.basename(item)

    entry = f'"{base}"'
    if i < len(items) - 1:
        entry += ','

    entry += '\n'
    outp.write(entry)

outp.close()
