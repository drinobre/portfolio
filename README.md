# Objective

Create a multi-page APP where users can find out more who I'm outside my professional life, my professional journey and latest projects.

## Designing Thinking process

The first version of my portfolio was created in the week 7 of the School of Code(SoC) and the approach was very much reflecting my previous carrer. However, I decided to make some amends on the design after the week 12, where I believe it's better describe who I'm after the Bootcamp experience.

## MVP

- Landing page
  - Image and intro (Component 1)
  - Intro and Image (Component 2)
- Projects
  - Image and Intro (Component 1)
- Contact me
  - links to GitHub, Linkedin (Footer component)

## Technical requirements

I've decided to build this APP using Next.JS rather than React.JS in order to practice using Next.js and ability to future expansion of the Portfolio for SEO reasons.

## Components Tree

- App
  -- Image with text
  -- Text with Image

## Implementation Plan

- Install (Next.js)[https://nextjs.org/learn/basics/create-nextjs-app/setup] npx create-next-app portfolio

## Challenges and Learnings

- How to use images from Public folder;
- globals.css vs Home.module.module.css;
- Use of Image component - types of layouts, size of the images in unit;
- The deployment on Netlify was working adn the best solution is try to deployed on the recommended platform, which is the same company who produces Next.jsDeployment. Solution use Vercel when building Next.js;
- Image name when saved into public are case-sensitive (Displaying image on localhost but not when deployed). Problem was name saved .PNG and linked as .png)
- Image sizing
- Babel was parsing and causing an error when I try to build. Solution delete the package-lock.json (or package.json) and .next and re-install Next.js.
- Use of ' on the text is not accept on Next.js
