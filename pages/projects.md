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
