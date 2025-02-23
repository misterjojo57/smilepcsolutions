import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Smile PC Solutions - Dépannage Informatique</title>
        <meta name="description" content="Votre expert en dépannage informatique à Moyeuvre-Grande." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-100">{children}</main>
    </>
  );
}
