import {
  Body,
  Font,
  Head,
  Html,
  Preview,
  Tailwind,
} from "@react-email/components";

const tailwindConfig = {
  theme: {
    extend: {
      fontSize: {
        "10xl": "10rem",
      },
      colors: {
        border: "rgb(31, 41, 55)",
        input: "rgb(31, 41, 55)",
        ring: "rgb(109, 40, 217)",
        background: "rgb(3, 7, 18)",
        foreground: "rgb(249, 250, 251)",
        primary: {
          DEFAULT: "rgb(109, 40, 217)",
          foreground: "rgb(249, 250, 251)",
        },
        secondary: {
          DEFAULT: "rgb(31, 41, 55)",
          foreground: "rgb(249, 250, 251)",
        },
        destructive: {
          DEFAULT: "rgb(127, 29, 29)",
          foreground: "rgb(249, 250, 251)",
        },
        muted: {
          DEFAULT: "rgb(31, 41, 55)",
          foreground: "hsl(217.9 10.6% 64.9%)",
        },
        accent: {
          DEFAULT: "rgb(31, 41, 55)",
          foreground: "rgb(249, 250, 251)",
        },
        popover: {
          DEFAULT: "rgb(3, 7, 18)",
          foreground: "rgb(249, 250, 251)",
        },
        card: {
          DEFAULT: "rgb(3, 7, 18)",
          foreground: "rgb(249, 250, 251)",
        },
      },
      borderRadius: {
        lg: "var(1rem)",
        md: "calc(1rem - 2px)",
        sm: "calc(1rem - 4px)",
      },
    },
  },
};

function Layout(props: { children: React.ReactNode; previewText: string }) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto Mono"
          fallbackFontFamily="monospace"
          webFont={{
            url: "https://fonts.gstatic.com/s/robotomono/v23/L0x5DF4xlVMF-BfR8bXMIjhLq38.woff2",
            format: "woff2",
          }}
          fontStyle="normal"
        />
        <Font
          fontFamily="Roboto Mono"
          fallbackFontFamily="monospace"
          webFont={{
            url: "https://fonts.gstatic.com/s/robotomono/v23/L0x7DF4xlVMF-BfR8bXMIjhOm32WWg.woff2",
            format: "woff2",
          }}
          fontStyle="italic"
        />
      </Head>
      <Preview>{props.previewText}</Preview>
      <Tailwind config={tailwindConfig}>
        <Body className="bg-background text-foreground mx-auto my-auto px-2 py-16 font-sans">
          {props.children}
        </Body>
      </Tailwind>
    </Html>
  );
}

export default Layout;
