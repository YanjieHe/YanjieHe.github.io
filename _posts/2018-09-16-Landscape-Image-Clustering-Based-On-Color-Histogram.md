---
layout: post
title: Landscape Image Clustering Based on Color Histogram
category:
- Data Science
- Computer Vision
---

My original thought about this project is to cluster the landscape images by their colors. I developed a web crawler to download 8892 landscape photos from [mob.org](https://wallpaper.mob.org/gallery/tag=landscape/).

However, I ran up against difficulty in extracting the color features from the images. I was inspired by an assignment given by Professor Harvey. In the assignment, the material guide us to use the proporational of channel to classify whether a certain picture depicts summer or winnter. From this perspective, I searched some information online and was attracted by the concept of color histogram.

Therefore, I designed my procedure as followings. Interestingly, I found a paper that has similar thought to mine.

The first step is quite obvious, to read the image as a three dimensional matrix. The first and second dimensionals are the count of rows and columns, and the third dimensional is the color vector representing RGB, whose length is three. So it is basically a (N, M, 3) matrix.

Let's take this picture as an example.

![image13]
