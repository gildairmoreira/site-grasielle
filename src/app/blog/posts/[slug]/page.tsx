export default function PostPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <h1>Post {params.slug}</h1>
    </>
  );
}
