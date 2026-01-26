## AWS S3 + CloudFront (Static Hosting)

Architecture

```
User → CloudFront (CDN) → S3 (React build files)
```

### Deployment Steps

1. Build the app: `npm run build`
2. Create S3 Bucket
   - Enable Static Website Hosting
   - Upload `build/` contents
3. Set Permissions
   - Make bucket public (or use CloudFront securely)
4. Setup CloudFront
   - Improves performance globally
   - Adds HTTPS

Example URL https://d1234abcd.cloudfront.net

## AWS Amplify (Easiest AWS Option)

- Similar experience to Vercel/Netlify
- Git-based deployment
- Auto scaling

**Amplify Build Settings**

````
```yaml
frontend:
  phases:
    build:
      commands:
        - npm install
        - npm run build
  artifacts:
    baseDirectory: build
    files:
      - '**/*'
````

Results

```

```

https://main.d1234.amplifyapp.com

```

```
