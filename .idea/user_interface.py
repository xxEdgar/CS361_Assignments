class user_interface:
    def __init__(self):
        self.prng  = PRNG()
        self.image_service = ImageService()

    def on_button_push(self):
        f = open('prng-service.txt','w')
        f.write('run')
        time.sleep(5)
        self.prng.grn()
        rng = open('prng-service.txt').readlines()
        img_service = open('image-service.txt').write(str(rng))
        self.image_service.get_image(rng)
        time.sleep(5)
        image = open('image-service.txt').readlines()
        print(f"image path: {image}")
