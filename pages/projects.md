---
layout: page
title: projects
description: Yanjie He is...
---

<h3> Welcome! </h3>
I am very interested in Computer Science and Data Science. I enjoying doing projects to enhance my skills and engineering experience. Here are some selected projects.

<h4> A Compiler and a Virtual Machine </h4>
The compiler project is my favorite project. I am very interested in Compiler Principles and Programming Language Design. This project contains a compiler for a statically typed language named Cygni, a bytecode disassembler and a virtual machine.

The compiler is consist of the following steps:

<ul>
<li> lexical analysis (I wrote DFA to extract tokens) </li>
<li> syntax analysis (I wrote a recursive descent parser by hand) </li>
<li> semantic analysis (I implemented the visitor pattern, which is quite useful in this situation) </li>
<li> code generation </li>
</ul>

Besides, I designed a bytecode instruction list, which is similar to the JVM instructions. And also, my
implementation of the virtual machine taking JVM as a reference.

I implemented the compiler and the disassembler in C++, and I completed a virtual machine in ANSI C.

<h4> Matrix Library in C\# </h4>
I implemented this matrix library in C#, which can be used to do matrix computation and solve linear equations.

The main algorithms in the matrix library are  as followings:

<ul>
<li> LU Decomposition </li>
<li> QR Decomposition </li>
<li> Conjugate Gradient </li>
<li> Gauss Elimination </li>
<li> Linear Least Squares </li>
</ul>

Since the numerical calculation packages on the .Net platform are very limited, some developers used this library as a lightweight choice.

<h4> Tic Tac Toe </h4>
This game usually is used as an initial project in the A.I. courses. I implemented two kinds of A.I. for the game. I designed the first A.I. based on the minimax algorithm. And the second A.I. is more interesting, I applied the Q-Learning algorithm, which is a reinforcement learning strategy, to evaluate the state. After the program assessing the record of the game between two random players, I used the data to train the neural network. Finally, the neural network can play the game. Although it is hard to compete with the exhaustive attack method, it shows a significant advantage over the random player.

<h4> Reversi </h4>
Reversi is a board game. It is much more complicated than the Tic Tac Toe. Due to the vast amount of possible state of the game, it is next to impossible to enumerate every situation. Therefore, I implemented the minimax with alpha-beta pruning. The difficulty is how to evaluate current game state. I choose a simple solution: to evaluate the game by the position of the chess pieces. There exist a lot of better solutions, and I am eager to learn more about artificial intelligence in the future. And hopefully, I will be able to enhance the performance of the A.I. of the Reversi by implementing better algorithms.

The UI of my reversi program is in the following figure.
