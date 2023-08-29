/** @format */

export default function Page({ params }: { params: { slug: string } }) {
  return <div>My review Post: {params.slug}</div>;
}
