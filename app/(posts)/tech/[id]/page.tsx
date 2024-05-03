/** @format */

export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Tech Post: {params.slug}</div>;
}
