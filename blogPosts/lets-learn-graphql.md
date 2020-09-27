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
This is a GraphQL Tutorial.
# What is GraphQL?
* It is a Query Language for your API. It is not a library.
* Alternate Approach to REST
* Client can only ask for exactly what they need and nothing more.
* You can query all the data you need in a single HTTP Request.
* Language Agnostic
* You can get all the data in a single request.

# History
1. Started by Facebook back in 2012 as an internal project to overcome data fetching issues in their native mobile platform.
1. In 2015, GraphQL was open sourced.
1. Ever since, there has been a huge community involvement.
1. GraphQL came into existence due to the need for better flexibility and efficiency in client-server communication.

# REST vs GraphQL

## The Problem with REST
1. Response from endpoint could be insufficient for the client so it may need to call another endpoint to have everything it needs.
1. Response from REST might have too many fields that the client does not need.

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

# Who is Using GraphQL?
1. Facebook
1. PayPal (you can read PayPal's success story in Medium)
1. GitHub
1. Twitter
1. Yelp
1. Shopify

https://graphql.org/users/

https://www.graphql.com/case-studies/
