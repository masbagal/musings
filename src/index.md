---
layout: base
title: Fleeting Notes
date: 2025-06-04
---

<ul class='post'>
{%- for post in collections.posts | reverse -%}
  <li>
    <a href="{{ post.url }}">
      <div>{{ post.date | readableDate }}</div>
      <div>{{ post.data.title }}</div>
    </a>
  </li>
{%- endfor -%}
</ul>
