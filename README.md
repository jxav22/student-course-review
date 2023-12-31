# Student Course Review

## The Problem

Every 2 years or so, the software engineering students at the University of Auckland come together and attempt to create website for submitting course reviews.
And every 2 years, without fail, the website shuts down.

- [http://www.studentcoursereview.com/](https://web.archive.org/web/20210313111051/http://www.studentcoursereview.com/)
- [https://coursereview.co.nz/](https://web.archive.org/web/20221017173240/https://coursereview.co.nz/)

Why? 

Upkeep costs were pretty steep for each service. After attempting to scale their websites, the costs started to become unbearable.

## The Solution

There needs to be a solution that optimizes for cost, from the beginning. This is where this project comes in.

Using my knowledge of:

`nextjs`
`react`
`typescript`
`abusing chat-gpt`

I will create a highly optimized website, that will be able to run for *free*, forever

## The process

### Conceptualization

(i'll add the details after i've finished the implementation)

### Figma design

I started of with ideating a design in figma - I'm pretty new to graphic design, I tried for something minimal and functional.

[>> The figma design file](https://www.figma.com/file/86gyEknwNhBDZGXhfbXA50/Student-Course-Review?type=design&node-id=0-1&mode=design&t=Fd4X2rO3qY9ySA9r-0)

I tried to stay consistent with the style my university uses, hopefully there won't be a copyright issue in the future

### Implementation

This is what i've currently done:
- Validated that it will work, for free, indefinitely
- Created and deployed a website
  
  Notably: I didn't use any design libraries, so everything was written from the bottom up! While this is of course a skills flex, I think it also gave the project a pretty unique look
- Populated it with scraped reviews from the sites that shut down

### What's next?

- Setting up the backend service
- Scraping all the reviews from the fallen websites
- Doing some advertising

## Running it

### Running it locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Viewing a deployment

There is a bit of an issue where it reloads continously at the beginning

[https://jxav22.github.io/student-course-review/](https://jxav22.github.io/student-course-review/)
