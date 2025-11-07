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

# to do

- just revamp ui to slate-black-white
  bro for once use your own brain, why rely on gpt
  revamp this again but with clear mind and give only 1 hr daily

we have 1 domains for free:

- `https://nerddev.cc.cc/`

export to it
