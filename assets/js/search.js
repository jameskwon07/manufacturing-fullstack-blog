(async function () {
  const input = document.querySelector("#search-input");
  const results = document.querySelector("#search-results");
  const summary = document.querySelector("#search-summary");

  if (!input || !results || !summary) return;

  const response = await fetch(`${window.location.origin}${window.location.pathname.replace(/\/search\/?$/, "")}/search.json`);
  const posts = await response.json();

  function normalize(value) {
    return String(value || "").toLowerCase().trim();
  }

  function render(matches, query) {
    results.innerHTML = "";

    if (!query) {
      summary.textContent = "검색어를 입력하면 제목, 요약, 카테고리에서 찾습니다.";
      return;
    }

    summary.textContent = `${matches.length}개의 글을 찾았습니다.`;

    if (matches.length === 0) {
      results.innerHTML = '<p class="muted">검색 결과가 없습니다.</p>';
      return;
    }

    const fragment = document.createDocumentFragment();

    matches.forEach((post) => {
      const item = document.createElement("article");
      item.className = "search-result";
      item.innerHTML = `
        <h2><a href="${post.url}">${post.title}</a></h2>
        <p class="post-meta">${post.date} · ${post.categories}</p>
        <p>${post.excerpt}</p>
      `;
      fragment.appendChild(item);
    });

    results.appendChild(fragment);
  }

  input.addEventListener("input", () => {
    const query = normalize(input.value);
    const terms = query.split(/\s+/).filter(Boolean);

    const matches = posts.filter((post) => {
      const haystack = normalize(`${post.title} ${post.categories} ${post.excerpt}`);
      return terms.every((term) => haystack.includes(term));
    });

    render(matches, query);
  });
})();

