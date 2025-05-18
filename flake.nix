{
  description = "Next.js project with pnpm";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };

        nodejs = pkgs.nodejs_20; # Adjust if you're using a different version

        # Install pnpm globally for the devShell and run commands
        pnpm = pkgs.nodePackages.pnpm;

        # Directory with your source code
        src = ./.;

      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            nodejs
            pnpm
          ];

          shellHook = ''
            echo "Welcome to the Next.js dev shell!"
            echo "Use 'pnpm install' and 'pnpm run dev'"
          '';
        };

        # nix run
        apps.default = {
          type = "app";
          program = "${pkgs.writeShellScript "run-nextjs" ''
            exec ${pnpm}/bin/pnpm run dev
          ''}";
        };

        # nix build
        packages.default = pkgs.stdenv.mkDerivation {
          name = "nextjs-app";
          src = src;

          buildInputs = [ nodejs pnpm ];

          installPhase = ''
            pnpm install
            pnpm build
            mkdir -p $out
            cp -r .next public package.json $out/
          '';
        };
      });
}
