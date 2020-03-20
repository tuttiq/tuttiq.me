---
title: '[Study Notes] AI Concepts and What AI Can Do'
subtitle: Part 1 of my study notes of the course "AI For Everyone"
category:
  - Tech
author: tuttiq
date: 2020-03-20T05:35:19.637Z
featureImage: /uploads/neural_net.png
---
My **Study Notes** are a series of articles where I share my notes while studying a certain topic (it's part of the reinforcement phase of my learning cycle). As so, these articles **do not represent my applied experience** with the topics, but rather my theoretical knowledge of them (unless stated otherwise in the article).

I thought these notes could be useful for someone trying to learn a similar topic, or even as a summary of longer learning resources (like books or online courses). I'm gonna share my key takeaways and conclusions and maybe it can help you assess if you want to take on the full experience (the original book or course).

Check out my [database of learning resources](https://www.notion.so/tuttiq/a408880a6b3b47389d8992f5ea800b05?v=e50b8c4fb4604c488c7b7647832953a7) organized by topic or search **study notes** to find all articles in this format.

* **Course:** [AI For Everyone](https://www.coursera.org/learn/ai-for-everyone)
* **Format:** Full online course, self-paced, 9 hours total
* **Author:** deeplearning.ai - Andrew Ng
* **Platform I used:** Coursera
* **My status:** Finished

I prefer to describe this course as: everything you need to know on a high-level to drive AI-powered projects, products and companies. On a high-level the course covers:

* The meaning behind common AI terminology, including neural networks, machine learning, deep learning, and data science
* What AI realistically can and cannot do
* How to spot opportunities to apply AI to problems in your own organization
* What it feels like to build machine learning and data science projects
* How to work with an AI team and build an AI strategy in your company
* How to navigate ethical and societal discussions surrounding AI

This is just **part 1** of my study notes for this course. I'll write-up the following parts and link here when I'm done.

# AI Concepts And What AI Can Do

### AI Terminology/Concepts

**Data:** Sets of information. Most commonly organized in datasets (like lists, tables, etc).

<figure class="image">
  <img src="/uploads/screen-shot-2020-03-20-at-2.45.08-pm.png">
  <figcaption>Example of a dataset</figcaption>
</figure>

**Structured data:** Numbers, text, flags, etc

**Unstructured data:** Images, audio, video

**Machine Learning:** "Field of study that gives computers the ability to learn without being explicitly programmed" (Arthur Samuel, 1959) ⇒ Software

**Data Science:** Science of extracting knowledge and insights from data ⇒ Slide deck, reports, graphs

This is the diagram used to explain these common AI concepts. AI the huge field of study, technologies and techniques to make computers and machines more autonomous. Machine Learning is a subset of AI tools and techniques, Deep Learning (nowadays used almost interchangeably with the term Neural Networks) is a subset of Machine Learning tools and techniques and Data Science is another field of study, tools and techniques for treating and analyzing data, that incorporates some AI but also a bunch of other stuff that's not considered AI.

### What can AI do?

**Supervised learning:** The most common and already widely used type of machine learning, that maps an input A to an output B.

<figure class="image">
  <img src="/uploads/screen-shot-2020-03-20-at-2.46.05-pm.png">
</figure>

An imperfect rule of thumb for what this type of machine learning can do: *if a human can do it in a few seconds, it can be automated.*

**Deep learning (neural networks):** a chain / graph of computations that enable a model to execute a more complex task (or calculate a more complex output). "Deep" refers simply to a neural network with multiple layers. You can have a single layer neural network, but once you go to multiple layers, then it's "deep". *(thanks, Darren!)*

One **neuron** is an individual node of the network that computes a simple function.

Stack a bunch of neurons and you have a **neural network** that can compute more complex functions with good accuracy of the relation between input and output.

<figure class="image">
  <img src="https://docs.google.com/drawings/u/0/d/s6O8r0lnuylC7NffNoc1mwg/image?w=567&h=351&rev=450&ac=1&parent=1nVWUeqsr9RXfIhdgxc5CtWxfy1N6JqHQ5cNhf-6iGoI">
</figure>

When you train a ML model, mainly you have to provide a large dataset of **input** and **output**, and the learning algorithm will figure out the computations needed to create a relation between them. The structure of the network and the training figures are usually pre-defined, but recently there's more work being done to automate the structure too.

Also, with some constraints, usually the more data you have to feed into a ML model, the better it will perform at the automated task. But of course there's a threshold after which more data doesn't help improving performance anymore. Naturally as well, larger (more complex) neural networks will perform better than smaller ones (and require more computational power). AI models performance can be somewhat generalized on the graph below:

<figure class="image">
  <img src="https://lh3.googleusercontent.com/QyMZzn_e61zpzS00p1cHzPzwx5xzN-kTVLDrOpdwkuwoHou-mr0nWhaJguIKnXKp1f0K1WRx05kNQ2djRFImnmBDDsWsAVGhAtbwIlEqCJRiEkgQ7ngIkNWe493DgKqgdd3BQslI">
</figure>

*OBS: Reminder that performance here is not computational performance (as in speed of processing), it's how well the ML model can perform the automated task (how good/accurate/useful are the results).*

Another imperfect general rule is:

Better chances of feasibility with AI

* Learning a simple concept (humans can do very easily).

  * E.g.: identify damage in a photo, count cars on a video, etc
* Lots of data available for the AI to learn (input AND output)

Lower chances of feasibility with AI:

* Learn complex concepts that even humans struggle with.

  * E.g.: judging people’s motivations, composing a well-thought out presentation, etc.
  * It's especially hard with small amounts of data
* Perform similarly on different types of data.

  * E.g.: training the model to visualize something on high-quality images will probably not perform well on low-quality images

But this rule over-simplifies a bit and ignores the paradox that sometimes AI can be really good at things humans find very difficult, but have a hard time with things humans find natural and easy. To go deeper into that, we could look at [Moravec's paradox](https://en.wikipedia.org/wiki/Moravec%27s_paradox):

> "Contrary to traditional assumptions, reasoning (which is high-level in humans) requires very little computation, but sensorimotor skills (comparatively low-level in humans) require enormous computational resources. \[...] As Moravec writes, 'it is comparatively easy to make computers exhibit adult level performance on intelligence tests or playing checkers, and difficult or impossible to give them the skills of a one-year-old when it comes to perception and mobility'."

- - -

This was the first section of my study notes for this course. The next parts will include the following topics:

* How to spot opportunities to apply AI to problems in your own organization
* What it feels like to build machine learning and data science projects
* How to work with an AI team and build an AI strategy in your company
* How to navigate ethical and societal discussions surrounding AI

I'll add the links to the next parts here once they're published.