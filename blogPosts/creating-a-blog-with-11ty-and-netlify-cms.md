---
title: Creating a Blog with 11ty and Netlify CMS
date: 2020-08-03T15:27:42.017Z
description: In this tutorial, we will use 11ty and Netlify CMS to create a personal blog.
tags:
  - 11ty
  - netlify
coverImage:
  image: /img/uploads/shanghai-highway.jpg
  credits: <span>Photo by <a
    href="https://unsplash.com/@dnevozhai?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Denys
    Nevozhai</a> on <a
    href="https://unsplash.com/s/photos/road-junction?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
---
In this tutorial, I will guide you on creating a blog using JAM Stack.

What is 11ty?

* It is a static site generator.

# Creating a new 11ty Project

Let's first install the eleventy CLI by running the following command.

```text
npm install -g @11ty/eleventy
```

Create a new folder for the project.

```text
mkdir my-blog
cd my-blog
```

Open the current directory in your preferred editor. I'll be using Visual Studio for this tutorial.

```text
code .
```

Create a new markdown file `index.md` with the following content.

```markdown
# Welcome to my Blog
```

We can generate an HTML based of this markdown file by running the `eleventy` command.

```text
eleventy
```

By default, a `_site` folder with an `index.html` file which corresponds to the `index.md` file.
The content of the generated `index.html` file is as follows.

```jsx
<h1>Welcome to my Blog</h1>
```