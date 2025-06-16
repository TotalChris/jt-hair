import { Scripts } from "react-router";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/icons/application/jt.svg"
        />
        <link rel="manifest" href="manifest.json" />
        <title>JT Hair Care of Brighton</title>
      </head>
      <body>
        <div id="root">{children}</div>
        <Scripts />
      </body>
    </html>
  );
};
