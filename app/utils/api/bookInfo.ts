export default async function fetchEntries() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=saying`
    // { next: { revalidate: 30 } }
  );

  return res.json();
}
