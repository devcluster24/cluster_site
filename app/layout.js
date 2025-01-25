import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/lib/Provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Dev Cluster | Shaping the Software Horizon</title>
        <meta
          name="description"
          content="We create innovative tools to simplify the empowerment of businesses globally.We specialize in end-to-end maintenance services aimed at helping clients resolve persistent issues and enhance the performance of their business-critical legacy systems."
        />
        <meta
          name="keywords"
          content="devcluster, dev cluster, software development, clusterPOS, Problem solve"
        />
        <meta
          property="og:title"
          content="Dev Cluster | Shaping the Software Horizon"
        />
        <meta
          property="og:description"
          content="We create innovative tools to simplify the empowerment of businesses globally.We specialize in end-to-end maintenance services aimed at helping clients resolve persistent issues and enhance the performance of their business-critical legacy systems."
        />
        <meta property="og:url" content="https://dev-cluster.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{<Provider>{children}</Provider>}</body>
    </html>
  );
}
