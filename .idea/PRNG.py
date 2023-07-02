import random

class PRNG:
    def __init__(self):
        pass

    def grn(self):
        file = open('prng-service.txt','w')
        line = file.readlines()
        file.close()
        file = open('prng-service.txt','w')
        rng = random.randint(0,100)
        file.write(f'{rng}')
