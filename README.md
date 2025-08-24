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

well what to do next:
when you run `npm run dev` and hit `/` so it spits out `Error: Failed to fetch pull requests`

isko kahi se cache krna h

and when you hit something like `/blogs/ossdotnow/endorsement-feature/` so it spits out
literal md, not formatted one isko sahi krna h

# to do

just revamp ui to slate-black-white
