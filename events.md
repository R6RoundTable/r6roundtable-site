---
layout: page
title: Events
description: See a list of upcoming and past events!
---

<ul class="link-collection spaced">
  {% assign list = site.events %}
  {% if page.reversed %}
    {% assign list = list | sort: "start_date", "first" %}
  {% endif %}
  
  {% for item in list %}
  {% unless item.hidden or item.path == page.path %}
    {% if item.image %}
    <li class="link preview" style="background-image:url({{item.image}});">
    {% else %}
    <li class="link">
    {% endif %}
        <a href="{{ item.url | relative_url }}" {% if item.color %}style="background-image:linear-gradient(to top, #{{item.color}} -50%, transparent);" {% endif %}>
        <div class="link-title">
            {{ item.title | escape }}
        </div>
        <div class="link-details">
            <p>{{ item.date | date_to_string }}</p>
        </div>
        <div class="link-description">
            {% if item.description %}<p>{{ item.description | escape }}</p>{% endif %}
        </div>
        </a>
    </li>
  {% endunless %}
  {% endfor %}
</ul>
