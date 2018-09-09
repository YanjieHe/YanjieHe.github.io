---
layout: post
title: Text Co-occurrence for Hunger Games
category: Data Analysis
---

I am a fan of *The Hunger Games*, and I have read all the three books. The story of *The Hunger Games* is narrated by the young girl, Katniss Everdeen. There are many characters in the story, and what I am going to do is to describe the connections between the characters from a data science perspective.

The data is the text of the *The Hunger Games I*, which is the first edition. My steps are listed as followings.

# Preprocessing
I use the nltk package, which is a natural language toolkit, to split the text into token sequence. Then, I count the occurrence of main characters.

![Characters Occurrence](https://raw.githubusercontent.com/YanjieHe/YanjieHe.github.io/master/_posts/2018-09-08-Text-Co-Occurrence-For-Hunger-Games-figures/characters_occurrence.png)

The bar charts illustrates that Peeta is most frequently mentioned person in the story. Haymitch, of course, as the mentor of Katniss and Peeta, is the second most mentioned person. Gale, who I thought would be the best candidate for the male lead when I read the first part of the book, actually plays a relatively minor part in the whole story.

The fact that Peeta is the most frequently mentioned person can also be verified through the graph of word cloud. It is obvious that the word "Peeta" has significant amount of occurrence in the book.

![Word Cloud](https://raw.githubusercontent.com/YanjieHe/YanjieHe.github.io/master/_posts/2018-09-08-Text-Co-Occurrence-For-Hunger-Games-figures/word_cloud.png)
