---
title: "[Study Notes] How Do We Learn?"
subtitle: Week 1 of the course "What Future For Education" on Coursera (by
  University of London)
category:
  - Career
author: tuttiq
date: 2020-04-26T09:27:42.692Z
featureImage: /uploads/studying_ipod.jpg
---
A while ago I started this online course named ["What Future For Education?" on Coursera](https://www.coursera.org/learn/future-education), by the University of London.

The first module is about "How Do We Learn?" and it starts with a reflection task, where I should look back on my experience and think about what's my preferred way of learning and what are my assumptions around how people learn. I should think about one successful learning experience and one unsuccessful one, and complete the sentence: "For me to learn effectively, I need...". So, I reflected on that.

### One Unsuccessful Learning Experience

I failed the Computer Architecture course twice in college before I finally passed it on my third attempt (and the fourth as well lol I'll explain).

My teacher was actually great. One of the best professors I've ever had the pleasure to learn from. But I never got that interested in electronics or hardware related disciplines. Honestly, I barely passed Automata Theory and Logic Circuits that were pre-requirements of Computer Architecture.

And don't get me wrong, today I actually recognize the topic as quite interesting (maybe because I don't have to study it intensively for 6 months now lol). But at that time, my short spikes of interest were not enough to keep me engaged or put in the extra effort I needed to catch up with the stuff I didn't understand (or memorize). Especially at that time, there was so much more happening during college life, it was too easy to lose focus and prioritize the wrong things.

The beginning of the semester always looked very promising: I was coming in early, sitting at the front of the class, paying attention to everything the professor was explaining, taking notes, answering questions and participating in the discussions. I was super inspired and feeling great about myself and my performance.

Until one day something happens and I come in late to the class. I sneak to the back of the classroom and try not to disturb anyone. Then I look at the whiteboard. What the hell are all these drawings? I try to pay attention to the explanation but I'm not getting it. Someone pokes me and asks me about something completely unrelated (probably a party later that week). We chat for a little bit. I still can't understand a thing the teacher is talking about. *"I'll figure that out soon"*, I tell myself, *"but in the meantime, let me just finish that email that I stopped in the middle when I noticed I was late and ran to the class.".*

You can see where this is going. Without paying attention or participating in that class, I obviously didn't learn anything. The next class, the topic starts building up from the previous one, I get even more lost. From that point on, the downward spiral starts and continues as the semester goes on:

1. Self-doubt: "This is too hard, I will never catch up..."
2. Resentment: "Why do I even need to learn this?! This is not useful at all!!"
3. Indifference: "Whatever, I'm not even interested in this anyways..."
4. Despair: "AARRGH, I'm gonna fail again!!"
5. Withdraw: "Never mind, it's too late to recover now. I'm gonna try again next year."

That happened twice, in 2 different semesters (go ahead, you can judge me).

After I failed the second time, I was too ashamed of myself and desperate to get that course out of my way to graduation. I decided I *needed* to pass that course as soon as possible. But the following semester I had a schedule conflict and wouldn't be able to take it. I remembered hearing somewhere that we could take classes at partner universities and make a request to get credit for it. That was my (<strike>naive</strike>) solution. I found the same course at a partner university, applied as a "special student", got accepted and started taking the evening classes there.

At first I was very anxious, because that other university is on the top 3 ranking of best universities in Brazil, and had the reputation of being *way harder* than my university (I had failed their entrance exam years before when I was applying during high-school lol). But as the classes progressed, I realized a lot of it was very familiar and I had actually learned something in my previous attempts of the course, which gave me some confidence and motivation.

Being in a different environment, outside my regular campus, was also good to avoid distractions. As a "guest" in someone else's house, I also felt a lot more compelled to respect that space and pay attention to the classes, since I was granted "the privilege" of attending a course in one of the best universities of the country. I also had the (<strike>probably wrong</strike>) impression that students in that college took classes more seriously and I wanted to fit in (and prove to myself that I could be like them).

In hindsight, none of these rationales make any sense. The topic was exactly the same, the professors were just as good, and the students were probably pretty similar as well (the good and the bad). But it's amazing how our mind is able to shape our impression of reality and change our experiences so much. A purely psychological change of environment changed my behavior completely.

I passed the class, with a reasonably good grade. But my request to count the credits on my university was rejected lol (lessons learned, kids: always double check the rules for these things!). I had to take the course a *fourth time* at my university again and passed without a problem, but ask me if I remember how to design a multiplexer or write VHDL code….(the answer is no lol).

I can go on and on here about why I think most part of the traditional style of education is broken and inefficient, but I'll save that for another article. For now, let's just stay with the conclusion that 4 semesters of the traditional classroom experience about the same topic were not very effective in making me learn about it, even if I passed the course in the end. To be fair, though, there were several courses in university that were effective and I did learn things that I remember until today even if I haven't used them heavily after graduation (like Assembly, functional programming basics, memory management and pointers, for example).

### One Successful Learning Experience

Now, moving on to a completely different and more successful experience, this is the story of how I took my skills on decoupled system design to the next level and never forgot the many possible ways to refactor large components in a codebase into smaller, decoupled parts.

Around 2018 when I was working for Quipper, engineers were dealing with a large monolithic system that, like any other, had collected a fair amount of technical debt over the years. I used to hangout a lot with two other engineers and we had the habit of going to Starbucks around 5pm to get a waffle and talk about our daily work while walking around the block. I don't think Quipper's codebase was worse than any other large codebase out there, but as opinionated engineers, we always had the instinct to discuss better ways of implementing stuff.

One day, one of them decided to take our discussions further and start a side-project inside the company called "Quipper Code Health". The idea was that engineers who were interested in improving Quipper's codebase would meet on a regular basis to discuss the existing technical debt and ways that we could improve things little by little in our spare time. It was a great idea, I got super excited to start "tidying up" the codebase (I'm like Marie Kondo disguised as an engineer -- a bit of a freak, I know...) and I wanted to get more people involved as well.

After our first meeting going over things like a 800+ lines "User" class and other issues, we created a board with some tasks and a Slack channel to keep the discussion going and share pieces of best practices or ideas. In that channel, they shared things like [this awesome talk](https://youtu.be/DC-pQPq0acs) by Ben Orenstein on "Refactoring From Good To Great".

That (and some [extra reading](https://codeclimate.com/blog/7-ways-to-decompose-fat-activerecord-models/)) was the inspiration that I needed. I decided to start working on extracting an Authentication module out of the huge User class. After some iterations on it and a couple rounds of reviews, my PR finally got merged 🎉

What I learned during that experience stayed with me, and I used that knowledge over and over again when discussing system design in future projects or mentoring junior engineers in my team. I not only leveled up my daily work as I also [created a tech talk](https://speakerdeck.com/tuttiq/refactoring-fat-components-with-ruby-on-rails-examples) based on my experience with the Quipper Code Health project and taught other people about it.

That to me was a clear example of a successful learning experience, because I not only consumed and memorized information, I actually had the challenge and the inspiration to get my hands dirty, the motivation to keep working on it, and in the end I reviewed and reflected over my results and got to the point of feeling confident enough to teach other people about it.

### "For me to learn effectively I need..."

So this is the part I tell you I actually cheated in this assignment. I was supposed to write down this reflection and only then move on with the rest of the lessons of the course. What I actually did was: I talked to a voice transcription app for 30 minutes while cooking about how motivation doesn't really exist and how audio content seems to retain better my attention than text format, and then I watched the rest of the lessons while eating my food (lol).

As you can see, when I was asked to reflect on how I learn, my first instinct was to generalize around motivation and focus on environment and content format. I guess that was my bias on learning experiences.

Now, because I cheated and actually finished the lessons before properly writing down this assignment, I learned a lot more about the topic from the specialized professors of the course, and now I can tell you an informed conclusion on why the experiences were successful or not successful. *Because for me to learn effectively I need:*

* **Inspiration or interest in the topic:** at least in the beginning to trigger the initial action and open my mind to learning. In the first story I had a challenge and inspiration on how to solve it, plus inspiration from the supportive environment around it (other people were engaged as well, we had the autonomy to work on side-projects, etc)
* **Motivation:** at least to complete one or a few cycles of full, effective learning. Motivation can come from many different places, but in my case it came from my goal to make the codebase better for everyone, to showcase better system design practices, to feel proud of my contribution and to support my friend's initiative.
* **The right pace:** if things are too slow or trivial, I'll get bored and lose focus. If it's too fast or hard that I get lost, I'll lose focus. In the first story, I had the autonomy to learn and try things at my own pace, but some external pressure was good to maintain the rhythm (others waiting for my PRs or showing progress on the next meeting).
* **All steps of the learning cycle:** this is probably the most important part. The whole cycle consists of consuming information, reviewing or consolidating the knowledge, using / practicing it and lastly reflecting about my own usage of it. As you can imagine, there are several ways of doing each step as well, the most interesting discovery to me here was how useful discussing a topic with someone else can be in the phases of consolidation or reflection (I'm surprised by how much I actually think out loud while in a discussion, getting insights and drawing conclusions right at that time).
* **Highly dynamic experience:** as I see it, this is an enabling factor for a shorter learning cycle. In Agile/Lean development, the idea is to learn early through short sprints and small deliverables. Similarly, learning experiences that are more dynamic and include engaging activities earlier can make the learning cycle shorter for smaller pieces of knowledge. The chances of reaching the end of a shorter cycle are higher, therefore dynamic learning experiences show better overall retention of knowledge, even if it's in smaller chunks at a time.

I found this reflection exercise and the course contents so far really interesting. Now that I'm aware of what makes me learn effectively, I can try to shape my experiences in the future to be more like that (like writing blog articles about the content I'm consuming :D). I'm also excited to try designing effective learning experiences for others (within my job or hobbies).