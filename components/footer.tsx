import Link from "next/link";
import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12 md:justify-between">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">KyMesh</h2>
          <p className="text-sm text-muted-foreground">
            Quantum Proof, Peer to Peer Edge Communication for Secure Networks.
          </p>
        </div>
        <div className="flex flex-col flex-1 items-start md:items-end space-y-4">
          <h3 className="text-sm font-medium">Connect</h3>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/kymesh"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="mailto:contact@kymesh.net"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} KyMesh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
