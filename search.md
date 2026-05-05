---
layout: page
title: 검색
permalink: /search/
---

<div class="search-panel">
  <label class="search-label" for="search-input">글 검색</label>
  <input id="search-input" class="search-input" type="search" placeholder="예: 제조, 데이터 모델링, 설계" autocomplete="off">
  <p id="search-summary" class="muted">검색어를 입력하면 제목, 요약, 카테고리에서 찾습니다.</p>
  <div id="search-results" class="search-results"></div>
</div>

<script src="{{ '/assets/js/search.js' | relative_url }}" defer></script>

