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
Back in 2012, Facebook is trying to optimize their mobile applications. They had to rewrite its mobile application from scratch using native technologies. They immediately hit a roadblock when they tried to reuse the existing REST APIs. The native app requires a highly dynamic UI and therefore, its data needs must be dynamic as well. This is the point where they thought a new technology must be developed.

GraphQL started in Facebook as an internal project called SuperGraph. In 2015, they decided to share it to the world by finally announcing it as GraphQL in React Europe 2015 conference. They open sourced it and release the language specification for everyone to read and create implementations. Ever since, there has been a huge community involvement in GraphQL. There currently are now multiple implementations across different programming languages, and dozens of tools to make GraphQL development easy. Facebook also released a [reference implementation](https://github.com/graphql/graphql-js) for JavaScript.

# The Problem with REST

Many have touted GraphQL as a "REST killer". Although REST has limitations, please keep in mind that GraphQL is not meant to replace REST. The reason Facebook developed GraphQL is that REST is not flexible enough for their frontend applications.

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
        "authorId": "3",
        "thumbnail": "http://localhost:8080/images/image1.jpg",
        "body": "This is my post.",
        "date": "2020-01-05"
    },
    {
        "id": "2",
        "title": "This is Another Post",
        "authorId": "1",
        "thumbnail": "http://localhost:8080/images/image2.jpg",
        "body": "Just sharing my thought here.",
        "date": "2020-03-15"
    },
    {
        "id": "3",
        "title": "This is Yet Another Post",
        "authorId": "2",
        "thumbnail": "http://localhost:8080/images/image3.jpg",
        "body": "Feeling good today.",
        "date": "2020-05-25"
    }
]
```
If your frontend will display all this posts including all the properties of each post (`id`, `title`, `thumbnail`, `body`, and `date`), then the data returned by the API is totally fine.

## Overfetching

*Overfetching* happens when the backend returns data that the requesting client won't need. For example, what if we don't need to display the thumbnail or the date, then ideally, we don't include them in the JSON response. Overfetching causes the size of data to be bigger that necessary and leads to slower request response time and higher bandwidth cost.

## Underfetching

*Underfetching* is when some of the data needed by the client is not in the response, requiring the need for the client to do additional calls for the missing data. For example, the call the the `/post` endpoint only returns the `authorId` as part of each post. If we want to know the actual name of each authors, then we may have to call a separate `/author` endpoint passing in the `authorId` of each post.

## Multiple Clients

An example where overfetching and underfetching causes a problem is when the API is used by multiple clients such as a mobile app or a web app. Typically, the web app can display much more information due to a bigger screen real-estate. If both the web and the mobile share the same API endpoint, then the mobile would be requesting much more data that it needs. On the other hand, if we design the API for the mobile, then the web version may need to call other endpoints for additional data.

## APIs Managed by Other Teams

For sure, you can make necessary adjustments to your API if you own it. But what if the API you are consuming is a public API or is handled by another team. You may request a change to those teams to accommodate the needs of the client, but chances are, it will be rejected as public APIs tend to be generic and client-agnostic. And even if they do agree to implement your requests, it may take time for it to get deployed.

# Advantages and Features of GraphQL

GraphQL provides numerous advantages over using a traditional REST API. It also has some features not provided by REST.

## Query for Only What You Need

This is one of the advantages that makes GraphQL performance better than REST. Since GraphQL is a query language, you can specify precisely what are the fields that the consumer will need. You can even include nested properties and specific fields of these nested properties. The queries can be dynamically built by the consuming client, and there's even several tools available for you to build the query. This solves REST's problem of overfetching and underfetching.

## Single Endpoint

This is also another reason GraphQL can be faster than REST. Since the query tells what the backend returns, we won't need multiple endpoints. A typical GraphQL request allows the client to build different queries and do an HTTP `POST` to a single `/graphql` endpoint. This solves REST's problem of calling multiple endpoints to build a complete data that the client will need. 

## Declarative

We can just "declare" what we need in the query to GraphQL endpoint. This is different from REST's imperative way of fetching data where we need to explicitly declare which endpoints to be called.

## Strongly Typed

In GraphQL, you need to first define a schema which will defines the available types and fields that it can return. Think of each type as a table, and every type has a set of fields. Each field has a type which can be one of the GraphQL basic types, such as `Int`, `String`, `Boolean`, and `Float`, or another custom type you have created. This allows GraphQL to validate the input parameters the client passed to it and the output or data that backend server sends back. GraphQL implementations have this validation built in.

## Introspection

Thanks to the GraphQL Schema, the server can provide the schema information, including the available queries, types, and fields, to various consumers and tools. One tool that takes advantage of this is the [GraphQL Playground](https://github.com/graphql/graphql-playground) which allows you to build a query in an IDE-like interface. It uses GraphQL's introspection to get the schema information and provide auto-completion as you type your code.

## Protocol Agnostic

GraphQL is designed so that it can be sent using any transport protocols. Although the most popular is sending it via the HTTP protocol, but only as a means of transport. In GraphQL, we don't rely on HTTP status codes or HTTP methods as it is tied to the HTTP Protocol.

## Realtime Data

GraphQL also supports subscriptions, which is a kind of query but instead of a simple request and response, the client can subscribe for the data and the server can send the data in real-time. Most implementations use web socket for this.

# What is a Graph?

A graph is a data structure that represents interconnected nodes. Nodes are also called vertices, and each node has a connection called an edge. An edge is represented a pair of nodes. 

```
TODO: Create an image of Graph
```

You might think of a similar data structure called a tree. A tree is just a type of graph with some constraints. A tree has a single root while in a typical graph, any node can be a root. A node in a tree can only belong to a single parent while in a graph, you can connect a node to any number of other nodes.


# GraphQL Queries

Let's start with a very simple GraphQL query. This query fetches all the `users` in our system and returns each user's `id`, `name`, and `email`.

```gql
query {
  users {
    id
    name
    email
  }
}
```
## GraphQL Response
Here's the response that will be returned to the client:
```json
{
  "data": {
    "users": [
      {
        "id": "ckgepn3el000h0796pgmgfw6l",
        "name": "Randal Vance Cunanan",
        "email": "randal@example.com"
      },
      {
        "id": "ckgepsyx900310796bnc2urs8",
        "name": "John Smith",
        "email": "john.smith@example.com"
      },
      {
        "id": "ckgept9fn003d07962ihl3hq4",
        "name": "Donald Trump",
        "email": "donald.trump@example.com"
      },
      {
        "id": "ckgepth7z003m0796ttg0x1x6",
        "name": "Tonald Drump",
        "email": "tonald.drump@example.com"
      },
      {
        "id": "ckgeptuam00400796srsfi84e",
        "name": "Joe Biden",
        "email": "joe.biden@example.com"
      }
    ]
  }
}
```

The response is typically in JSON format (although it can be anything that can be represented as a map). The response is a single object with 2 main properties, the `data` which contains the actual data requested, and an `error` which will only be populated if there are errors encountered by the backend. Note that both properties can be present. For example, a query can have multiple parts, and if one part succeeds and another part fails, then we will both have the `data` and `errors` properties. If both fails, then the `data` property will be `null`.

As an example, we can include an invalid property `xyz` in the `users` query.
```gql
query {
  users {
    id
    name
    email
    xyz
  }
}
```
Here is the output:
```json
{
  "data": null,
  "errors": [
    {
      "message": "Cannot query field 'xyz' on type 'User'. (line 6, column 5):\n    xyz\n    ^",
      "locations": [
        {
          "line": 6,
          "column": 5
        }
      ]
    }
  ]
}
```
The response object is part of the standard language specification of GraphQL, so it should be consistent regardless of what library and language you use to develop the GraphQL server.

# Mutations

# Who is Using GraphQL?

1. Facebook
2. PayPal (you can read PayPal's success story in Medium)
3. GitHub
4. Twitter
5. Yelp
6. Shopify

https://graphql.org/users/

https://www.graphql.com/case-studies/