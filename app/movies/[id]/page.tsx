import { fetchMovie } from '@/app/actions/movies';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await fetchMovie(id);

  const keys = Object.keys(movie);

  return (
    <table>
      {keys.map((key) => (
        <tr key={key} className="border-solid border-white border-2">
          <td className="p-1">{key}</td>
          <td>{JSON.stringify(movie[key])}</td>
        </tr>
      ))}
    </table>
  );
}
