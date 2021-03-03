from glob import glob                                                           
import cv2 
pngs = glob('./**/*.jpg')

for j in pngs:
    img = cv2.imread(j)
    cv2.imwrite(j[:-3] + 'jpeg', img)
