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

# REST vs GraphQL

## The Problem with REST

1. Response from endpoint could be insufficient for the client so it may need to call another endpoint to have everything it needs.
2. Response from REST might have too many fields that the client does not need.

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