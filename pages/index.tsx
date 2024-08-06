export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
