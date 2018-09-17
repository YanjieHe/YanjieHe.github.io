---
layout: post
title: Text Co-occurrence for Hunger Games
category:
- Data Science
- Social Network Analysis
- Natural Language Processing
---

I am a fan of *The Hunger Games*, and I have read all the three books. The story of *The Hunger Games* is narrated by the young girl, Katniss Everdeen. There are many characters in the story, and what I am going to do is to describe the connections between the characters from a data science perspective.

The data is the text of the *The Hunger Games I*, which is the first edition. My steps are listed as followings.

# Preprocessing
I use the nltk package, which is a natural language toolkit, to split the text into token sequence. Then, I count the occurrence of main characters.

![Characters Occurrence](https://github.com/YanjieHe/YanjieHe.github.io/blob/master/figures/Text-Co-Occurrence-For-Hunger-Games/characters_occurrence.png)

The bar chart illustrates that Peeta is most frequently mentioned person in the story. Haymitch, of course, as the mentor of Katniss and Peeta, is the second most mentioned person. Gale, who I thought would be the best candidate for the male lead when I read the first part of the book, actually plays a relatively minor part in the whole story.

# Word Cloud
The fact that Peeta is the most frequently mentioned person can also be verified through the graph of word cloud. It is obvious that the word "Peeta" has significant amount of occurrence in the book.

![Word Cloud](https://github.com/YanjieHe/YanjieHe.github.io/blob/master/figures/Text-Co-Occurrence-For-Hunger-Games/word_cloud.png)

# Text Co-occurrence Network
To describe the relationship between characters, I defined a text co-occurrence network. The definition is that if one name appears in the range of 100 words of another name, then the connections between the two names will increase one. For example, if we got Peeta in the token sequence, and Haymitch appears after 80 words, then the count of connection between Peeta and Haymitch will add one. Therefore, what we have here is a weighted undirected network.

I use software Gephi to visualize the network. This software is awesome, by the way.

![Network Graph](https://github.com/YanjieHe/YanjieHe.github.io/blob/master/figures/Text-Co-Occurrence-For-Hunger-Games/network_graph.png)

It seems that there exists some redundancy in the network. Therefore, I removed all the edges whose count of co-occurrence is less than or equals three.

![Network Graph](https://github.com/YanjieHe/YanjieHe.github.io/blob/master/figures/Text-Co-Occurrence-For-Hunger-Games/network_graph_greater_than_three.png)

This graph looks much better! The graph provides some interesting data regarding the relationship between main characters. Those who have closer relationship indeed have more frequent co-occurrence in the story. The people that do not show up together with others look more alienated in the network. That is consistent with our common sense. Why Peeta would spent his weekend with President Snow rather than Katniss or Haymitch?
