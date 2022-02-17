import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App with hCaptcha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Robot alert 🤖</h1>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Powered by{' '}
        <img src="/logo.svg" alt="Vercel Logo" className="ml-2 h-6" />
      </footer>
    </div>
  )
}
