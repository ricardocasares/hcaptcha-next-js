import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App with hCaptcha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js
          </a>{' '}
          with{' '}
          <a className="text-blue-600" href="https://hCaptcha.com/?r=4f1e19a322c9">
            hCaptcha
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Check the source code at{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/api/human-check.tsx
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <form
            className="mt-6 w-96 rounded-xl border p-6 text-left"
            method="POST"
            action="/api/human-check"
          >
            <h3 className="text-2xl font-bold">Are you human ?</h3>
            <p className="mt-4 mb-4 text-xl">Well, let's find out</p>
            <div className='h-captcha mb-4 mt-4' data-sitekey={process.env.NEXT_PUBLIC_SITE_KEY}>{''}</div>
            <button
              type="submit"
              
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
            >
              Click me
            </button>
          </form>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Powered by{' '}
        <img src="/logo.svg" alt="Vercel Logo" className="ml-2 h-6" />
      </footer>
    </div>
  )
}
