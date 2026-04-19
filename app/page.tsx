// Static export doesn't support redirect() at runtime.
// Instead, we use a meta refresh for SSG compatibility.
export default function RootPage() {
  return (
    <html lang="ru">
      <head>
        <meta httpEquiv="refresh" content="0; url=/ru/" />
        <title>GrandClean — Перенаправление</title>
      </head>
      <body />
    </html>
  );
}
