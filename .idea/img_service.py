from pathlib import Path
import os
class ImageService:
    def __init__(self, set_of_images):
        self.set_of_images = set_of_images

    def get_image(self, i):
        f = open('image-service.txt','w')
        line = f.readline()
        time.sleep(3)
        f.close()
        i = int(line) % n
        path = '/Users/edgarpalaquibay/Desktop/CS361/.idea/images'
        list_of_images = os.listdir(path)
        n = len(list_of_images)
        image_service = open('image-service.txt')
        final_path = path + list_of_images[i % n]
        image_service.write(f'{final_path}')

