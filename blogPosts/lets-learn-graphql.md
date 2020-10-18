---
title: Let's Learn GraphQL
date: 2020-09-27T06:21:14.461Z
description: Let's learn GraphQL.
tags:
  - graphql
coverImage:
  image: /img/uploads/graphql-cover.png
  credits: None yet.
---
GraphQL stands for *Graph Query Language*. It is a language used to query your API. Think of it as SQL for your API. GraphQL is therefore not a library or framework. There is an entire [language specification](https://spec.graphql.org/June2018/) for it with multiple implementations for different programming languages. Since it is a language to query your API, you have full control of what you fetch from the backend. This, and a bunch of other advantages, makes it a suitable alternative to REST APIs.

# History
Back in 2012, Facebook is trying to optimize their mobile applications. They had to rewrite its mobile application from scratch using native technologies. They immediately hit a roadblock when they tried to reuse the existing REST APIs. The native app requires a highly dynamic UI and therefore, its data needs must be dynamic as well. This is the point where they thought a new technology has to be developed.

GraphQL started in Facebook as an internal project called SuperGraph. In 2015, they decided to share it to the world by finally announcing it as GraphQL in React Europe 2015 conference. They open sourced it and release the language specification for everyone to read and create implementations. Ever since, there has been a huge community involvement in GraphQL. There currently are now multiple implementations across different programming languages, and dozens of tools to make GraphQL development easy.

# The Problem with REST

The reason Facebook developed GraphQL is that REST is not flexible enough for their mobile application. They want their frontend mobile app to drive what data the API will return. 

Here is an example of a REST API call:
```
GET http://localhost:8080/api/posts
```
This could return a list of posts as JSON:
```json
[
    {
        "id": "1",
        "title": "My Post",
        "thumbnail": "http://localhost:8080/images/image1.jpg",
        "body": "This is my post.",
        "date": "2020-01-05"
    },
    {
        "id": "2",
        "title": "This is Another Post",
        "thumbnail": "http://localhost:8080/images/image2.jpg",
        "body": "Just sharing my thought here.",
        "date": "2020-03-15"
    },
    {
        "id": "3",
        "title": "This is Yet Another Post",
        "thumbnail": "http://localhost:8080/images/image3.jpg",
        "body": "Feeling good today.",
        "date": "2020-05-25"
    }
]
```
If your frontend will display all this posts including all the properties of each post (`id`, `title`, `thumbnail`, `body`, and `date`), then the data returned by the API is totally fine.

## Dynamic UI

Imagine that your frontend has some special logic for each post? What if I want to share different kinds of posts? Let's say that a user can post a plain message, share an image or a video, or even create a poll that his friends can vote on. This would mean that each post will have a different data requirement.

Another example is when an API returns data to be consumed by multiple sections in the frontend. What if the user can and do hide a section? It would be a waste of bandwidth and cause a slower request to still include data that will not be rendered by the frontend.

## Multiple Frontend Clients

An API can have multiple clients. It can be your mobile app or the web app. Typically, the web version can display much more information due to a bigger screen real-estate. If both the web and the mobile share the same API endpoint, then the mobile would be requesting much more data that it needs. One solution is exposing a BFF, or backend for frontend which is created as a proxy between the frontend and the original backend and returns only the data the frontend needs. You would then introduce a BFF for every frontend client you have, and that is an additional work.

## APIs Managed by Other Teams

For sure, you can make necessary adjustments to your API if you own it. But what if the API you are consuming is a public API or an API handled by another team. You may request a change to those teams to accommodate the needs of the frontend, but chances are, it will be rejected as public API's tend to be generic and client-agnostic. And even if they do agree to implement your needs, it may take time for it actually get deployed.

## Requesting Too Much or Too Little

It really boils down to the need of only returning the data that the frontend will use, nothing more, nothing less. Specially in mobile, bandwidth and data plans are limited. If we can trim down the data to the bare minimum, it can improve the speed of requesting the data from the backend.

I've discussed that the frontend may not consume all the data returned by a REST endpoint. But it can also return insufficient data needed by the displayed UI. In such a case, the frontend my need to call additional endpoints to fill in the blanks. This will cause multiple roundtrips to the backend to render the UI properly and that is another performance problem.

# The GraphQL Query

```text
{
  heroes(first: 10) {
    name
    powers
    sidekick {
       name
       powers
    }
    villains {
       name
       crimes
    }
  }
}
```

TODO: Show the JSON Response

# Mutations)

# Who is Using GraphQL?

1. Facebook
2. PayPal (you can read PayPal's success story in Medium)
3. GitHub
4. Twitter
5. Yelp
6. Shopify

https://graphql.org/users/

https://www.graphql.com/case-studies/