# 제조 풀스택 설계 노트

GitHub Pages로 운영하는 Jekyll 기반 Markdown 블로그입니다.

## 글 작성

새 글은 `_posts/YYYY-MM-DD-title.md` 형식으로 추가합니다.

```markdown
---
title: "글 제목"
description: "검색과 미리보기에 쓰이는 요약"
categories:
  - 카테고리
tags:
  - 태그
comments: true
---

본문을 Markdown으로 작성합니다.
```

## GitHub Pages 설정

Repository Settings > Pages에서 `Deploy from a branch`를 선택하고, `main` branch의 `/root`를 배포 대상으로 설정합니다.

## 댓글 설정

댓글은 utterances를 사용합니다. public repo에서 Issues를 켠 뒤, https://utteranc.es 에서 앱을 설치하면 글별 댓글이 GitHub Issue로 연결됩니다.

