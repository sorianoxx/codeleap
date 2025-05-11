export function sortPosts(posts, sortType) {
    return [...posts].sort((a, b) => {
      if (sortType === "newest") {
        return new Date(b.created_datetime) - new Date(a.created_datetime);
      } else if (sortType === "oldest") {
        return new Date(a.created_datetime) - new Date(b.created_datetime);
      } else if (sortType === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }
  