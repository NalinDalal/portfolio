Add the github token in .env as

```sh
GITHUB_TOKEN=[ghp_something]
```

## How to Add a New Pull Request Doc Blog

1. **Create a folder ending with `-pr` inside the `blogs/` directory.**  
   Example:

   ```
   blogs/asyncapi-pr/   #for asyncapi
   blogs/processing-pr/   #for processing
   ```

2. **Add your `.mdx` documentation file inside that folder.**  
   Example:

   ```
   blogs/asyncapi-pr/shaderImprovement.mdx
   ```

3. **Your doc will automatically appear on the `/blogs` page and be accessible at:**

   ```
   /blogs/asyncapi/shaderImprovement
   ```

4. **To update or add more PR docs, repeat steps 1 and 2.**

> Only folders ending with `-pr` will be auto-populated as PR docs.

when you add a pr doc run 2 command after it:

```bash
npm run prebuild
npm run build
```

---

# to do

- put up your good projects, there links
  and there case studies
  so for that what i was thinking, i will manually populate the project name, description, link and link a case study to it
  do like projects.json has like this:

```json
{
    {
    'projectName':'blind-app',
    'liveLink':'https://blind-app-omega.vercel.app/',
    'githubLink':'https://github.com/NalinDalal/blind-app','Summary':'Next.js applucation that serves local college community where student scan share stuff keeping themselves anonymous'
    ,'caseStudy':'/link to case study, md file with everything'
},{},{}
}
```

So projects endpoint should be like, populate my 3-4 projects from a json,
Json has like name, live link, GitHub link, summary to put into card, and some tags like nextjs, prisma etc

Also a link to case study, is it like gr8?

so for case study do like mkdir case-study, we will populate json manually, put like blind.mdx into that json, makes sense?

am i thinking right?

- put up your good projects, there links
  and there case studies
  so for that what i was thinking, i will manually populate the project name, description, link and link a case study to it
  do like projects.json has like this:

```json
{
    {
    'projectName':'blind-app',
    'liveLink':'https://blind-app-omega.vercel.app/',
    'githubLink':'https://github.com/NalinDalal/blind-app','Summary':'Next.js applucation that serves local college community where student scan share stuff keeping themselves anonymous'
    ,'caseStudy':'/link to case study, md file with everything'
},{

},{}
}
```

Should I do this

So projects endpoint should be like, populate my 3-4 projects from a json,

Json has like name, live link, GitHub link, summary to put into card, and some tags like nextjs, prisma etc

Also a link to case study, is it like gr8?

now when i go to case study, it should be like, go to localhost:3000/projects/blind which renders a page from projects folder with name blind.mdx

u know i want to keep it dynamic so i can easily link all this stuff in json

do you get my point?

---

we have 1 domains for free:

- `https://nerddev.cc.cc/`

export to it
