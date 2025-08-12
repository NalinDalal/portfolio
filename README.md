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

<<<<<<< HEAD
3. **Your doc will automatically appear on the `/blogs` page and be accessible at:**  
   ```
   /blogs/asyncapi/shaderImprovement
=======
3. **Your doc will automatically appear on the `/pr` page and be accessible at:**  
   ```
   /pr/asyncapi/shaderImprovement
>>>>>>> dd310232c679c45a1a6826e3d64123625a905230
   ```

4. **To update or add more PR docs, repeat steps 1 and 2.**

<<<<<<< HEAD
> Only folders ending with `-pr` will be auto-populated as PR docs.
=======
> Only folders ending with `-pr` will be auto-populated as PR docs.
>>>>>>> dd310232c679c45a1a6826e3d64123625a905230
