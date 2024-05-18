# creates image thumbs
# and different image
# sizes to accomodate
# most client viewports

import os
import math
from PIL import Image

TARGETS = [
    (250, 'thumbs'),
    (400, 'low'),
    (750, 'mid'),
    (1300, 'high')
]

path = input('path?    ')
items = os.listdir(path)

def resize(original: tuple[int, int], target_width: int) -> tuple[int, int]:
    width, height = original

    resize_coeff = target_width / width
    new_height = math.floor(height * resize_coeff)

    new_size = (target_width, new_height)
    return new_size


for (_, dir_name) in TARGETS:
    directory = os.path.join(path, dir_name)
    if os.path.exists(directory):
        continue

    os.mkdir(directory)

num_items = len(items)
for i in range(num_items):
    item = items[i]

    item_path = os.path.join(path, item)
    if not os.path.isfile(item_path):
        continue

    image = Image.open(item_path)

    for (target_width, dir_name) in TARGETS:
        new_size = resize(image.size, target_width)
        image = image.resize(new_size)

        new_path = os.path.join(path, dir_name, item)
        image.save(new_path)

    print(f'{i + 1}/{num_items}')
