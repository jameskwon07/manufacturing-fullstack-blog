---
layout: page
title: 카테고리
permalink: /categories/
---

{% assign sorted_categories = site.categories | sort %}

<div class="category-list">
  {% for category in sorted_categories %}
    {% assign name = category[0] %}
    {% assign posts = category[1] %}
    <section class="category-section" id="{{ name | slugify }}">
      <h2>{{ name }}</h2>
      <ul class="post-list compact">
        {% for post in posts %}
          <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y.%m.%d" }}</time>
          </li>
        {% endfor %}
      </ul>
    </section>
  {% endfor %}
</div>

