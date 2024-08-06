// Get the first 20 posts from WordPress, ordered by the date
export async function getAllPostsFromWordPress{
  const data = await fetchAPI(`
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
          }
        }
      }
    }
  `)

  return data.posts
}
