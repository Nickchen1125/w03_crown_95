# First One
![](https://i.imgur.com/AnqLrjp.png)


**index.ejs**
```html
<body>
  <h1>
    <%= title %>
  </h1>
  <p>Welcome to
    <%= title %>
  </p>
  <h3>My name is
    <%= name%>
  </h3>
  <h3>My student id is
    <%= id%>
  </h3>
</body>
```
**index.js**
```js
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', name: '陳君誌', id: '209410595' });
});
```

---
