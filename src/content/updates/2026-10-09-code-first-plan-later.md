---
title: "“I’ll Write the Code First, Then We’ll See”: Fallen Zenith’s First Lesson"
date: 2026-10-09
excerpt: "From coding without a plan to a text-based MVP in C#: why I decided to rebuild Fallen Zenith from the foundations."
---

When I started writing the code for Fallen Zenith, I was convinced that the most important thing was to get straight to work. I had an idea for a game, I knew the basics of C#, and I saw no reason to spend time planning something I could just start programming.

After only a couple of days, though, I began to realise that I wasn’t heading in any clear direction.

My development process looked more like a zigzag than a straight line.

One day I was implementing the combat system; the next, it occurred to me that the characters should also have MP (Mana Points). So I went back to change the classes I had already written, only to realise that I still hadn’t decided how abilities should work, how much Mana they should consume, or how characters could recover it.

I kept adding features to systems I hadn’t even finished designing.

The problem wasn’t having to change the code, which is a perfectly normal part of software development. It was that every new idea seemed to call everything I had written so far into question.

By the second week, I was completely lost.

I had several classes, a few working mechanics, and a growing collection of ideas, but I could no longer see how all those pieces were supposed to fit together.

Above all, I realised something rather absurd: I was programming a game without having decided exactly what game I wanted to make.

I had started implementing combat, characters, and stats, but I hadn’t answered some fundamental questions yet.

What was the player’s goal? How would they progress through the adventure? Which mechanics were actually necessary? And, above all, how would those mechanics interact?

I hadn’t even written the story.

As a result, I didn’t know how to structure progression, which events should happen, or which states my application would need to manage.

In practice, I was building the rooms of a house without drawing its floor plan. Every time I thought of adding a door, I discovered that there wasn’t a room on the other side yet.

For a moment, I even thought I had the famous creative block: the kind that, in the popular imagination, afflicts tormented artists and misunderstood creative geniuses.

The reality was considerably less romantic: I didn’t have a creative block. I didn’t have a plan.

My approach up to that point could be summed up in one sentence:

“I’ll write the code first, then we’ll see.”

And, sure enough, I soon saw.

I saw that much of the code would need refactoring, that some responsibilities had been assigned to the wrong classes, and that I was making architectural decisions based on mechanics I hadn’t defined yet.

At that point, I stopped.

STOP. Back to the starting line.

Before asking myself how to implement Fallen Zenith, I needed to answer a much simpler question:

Why am I developing this game?

The answer wasn’t simply “because I want to create a video game.”

From the beginning, Fallen Zenith had another purpose too: to become a personal project through which I could strengthen and demonstrate my skills as a C# developer.

With the repository publicly available on GitHub, I wanted anyone, including a potential recruiter, to be able to explore the code and understand not just what I had implemented, but, more importantly, why I had chosen to implement it that way.

For example, why use an abstract Character class rather than duplicate properties and behaviours in every playable class? Why separate combat logic from turn management? When does it make sense to apply the State design pattern, and when does it only risk making the project unnecessarily complicated?

I wanted the code to tell the story of the reasoning behind it too.

And I wanted to show that it wasn’t just AI slop: generated code copied and pasted without truly understanding how it worked.

The goal was to produce something of my own, built through study, experimentation, mistakes, and deliberate choices. Not necessarily the most sophisticated code in the world, but code I could explain, defend, and, above all, change without having to ask someone else how it worked.

That led to a second consideration.

If the main goal was to strengthen my C# skills, why immediately complicate things with sprites, animations, graphical interfaces, and input handling?

Before seeing a character move across the screen, I needed to be sure that the combat system worked, that stats were managed correctly, and that each class had clearly defined responsibilities.

So I decided to scale the project back, at least in its initial phase.

The first MVP (Minimum Viable Product) of Fallen Zenith will be a text-based console game.

No graphics, no animations, no particle effects.

Just C#, game logic, and an architecture that can evolve over time.

This will let me focus on what I really want to explore: object-oriented programming (OOP), inheritance, polymorphism, encapsulation, state management, separation of responsibilities, and design patterns.

These are all concepts I don’t want to simply revise for a technical interview. I want to learn how to use them to solve real problems.

The graphical side will come later, through incremental development, once the game’s foundations are solid enough.

Because I’ve realised that writing code doesn’t necessarily mean developing software.

You can write hundreds of perfectly working lines and still end up with a project that has no direction.

Above all, I’ve realised that planning doesn’t mean stopping programming or giving up creativity. It means giving your ideas a structure so they can become something concrete.

Fallen Zenith, then, won’t just be a video game.

It will also be my personal laboratory for learning how to design software, make deliberate architectural decisions, and, inevitably, make new mistakes.

With one difference from before: this time, I want to know where I’m going, even if I change my mind along the way.

Because starting over doesn’t necessarily mean you’ve wasted time. Sometimes it means you’ve finally understood where you needed to begin.
