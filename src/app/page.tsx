interface Props {
  searchParams: Promise<Record<string, string>>;
}

export default async function Home({ searchParams }: Props) {
  const qParams = await searchParams;
  return <div>Próximamente...</div>;
}
