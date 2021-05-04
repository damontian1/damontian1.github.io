## Local Development Setup:
```
1. $ npm install
2. $ npm run dev
```
## Production Deploy Setup:
```
1. $ npm run generate
2. $ npm run start (to test)
3. $ git add . && git commit -m "..."
4. git push origin `git subtree split --prefix dist master`:gh-pages --force
5. $ git push origin master
```