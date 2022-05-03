---
title: Primeiro post com Nuxt Content
description: Learn how to use @nuxt/content.
tags: Desenvolvimento
image: artigo-1/artigo-1.jpg
imageDescription: Image that shows something
---

Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima distinctio, dolorum at voluptas numquam neque iure fuga quidem voluptatum labore similique itaque quia aliquid molestiae veritatis pariatur dignissimos ipsam mollitia!

Rerum quasi quibusdam, autem, beatae mollitia nobis nihil exercitationem eaque distinctio in quas sit quae numquam illo officiis nostrum hic possimus, officia voluptatibus molestias dolor maiores unde! Ipsa, dolores exercitationem.

Minima facilis, error quasi quisquam alias, fuga autem veritatis accusamus qui nihil similique quos voluptatibus quia distinctio repellendus ratione nam ab et! Nam a nulla eos exercitationem culpa minima provident!

```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```

```php{1,3-5}[Something.php]
<?php
  interface Something {
    public function getCurrentDateWithFormat(string $bagulho): \DateTimeInterface;
    public function setSomethingToFire($something): void;
    public function formatName(string $name, string $lastName): string;
  }
```

Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima distinctio, dolorum at voluptas numquam neque iure fuga quidem voluptatum labore similique itaque quia aliquid molestiae veritatis pariatur dignissimos ipsam mollitia!

Rerum quasi quibusdam, autem, beatae mollitia nobis nihil exercitationem eaque distinctio in quas sit quae numquam illo officiis nostrum hic possimus, officia voluptatibus molestias dolor maiores unde! Ipsa, dolores exercitationem.

Minima facilis, error quasi quisquam alias, fuga autem veritatis accusamus qui nihil similique quos voluptatibus quia distinctio repellendus ratione nam ab et! Nam a nulla eos exercitationem culpa minima provident!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima distinctio, dolorum at voluptas numquam neque iure fuga quidem voluptatum labore similique itaque quia aliquid molestiae veritatis pariatur dignissimos ipsam mollitia!

Rerum quasi quibusdam, autem, beatae mollitia nobis nihil exercitationem eaque distinctio in quas sit quae numquam illo officiis nostrum hic possimus, officia voluptatibus molestias dolor maiores unde! Ipsa, dolores exercitationem.

Minima facilis, error quasi quisquam alias, fuga autem veritatis accusamus qui nihil similique quos voluptatibus quia distinctio repellendus ratione nam ab et! Nam a nulla eos exercitationem culpa minima provident!
