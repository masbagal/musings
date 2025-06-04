export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy({ favicon: "/" });
  eleventyConfig.setInputDirectory("src");
  // Add a filter to format dates in templates as "Jun 4, 2025"
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(dateObj);
  });
  eleventyConfig.addLayoutAlias("post", "_includes/layouts/post.njk");

  // Create a collection for posts
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });
}
