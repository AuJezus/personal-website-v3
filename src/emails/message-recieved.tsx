import { Container, Link, Text } from "@react-email/components";
import Layout from "./layout";

function MessageRecievedEmail(props: { name: string }) {
  const formattedName = props.name
    ? props.name[0]?.toUpperCase() + props.name.slice(1).toLowerCase()
    : "Valued Respondent";

  return (
    <Layout previewText={`Hello ${formattedName}`}>
      <Container className="border-border mx-auto max-w-2xl border-y-4 border-solid px-2 py-2">
        <Container className="text-foreground mx-auto max-w-lg">
          <h1 className="my-4 text-2xl font-bold">Hello {formattedName},</h1>
          <Text>
            Thank you for taking the time to connect with me. Your message has
            been received, and I&apos;m eager to dive into it. While I prepare a
            thoughtful response, here are a few ways to stay engaged:
          </Text>

          <ul className="pl-4">
            <li>
              <Text>
                <strong className="text-primary">Explore My Blog:</strong>
                <span className="text-foreground">
                  {" "}
                  Dive into some of my latest musings and insights here.
                </span>
              </Text>
            </li>
            <li>
              <Text>
                <strong className="text-primary">Join the Newsletter:</strong>
                <span className="text-foreground">
                  {" "}
                  Be the first to receive updates, new blog posts, and a
                  sprinkle of programming rants by subscribing to my newsletter.
                </span>
              </Text>
            </li>
            <li>
              <Text>
                <strong className="text-primary">
                  Connect on Social Media:
                </strong>
                <span className="text-foreground">
                  {" "}
                  Follow me for the latest updates and behind-the-scenes
                  glimpses into my coding adventures.{" "}
                </span>

                <span className="text-foreground">
                  <Link href="https://twitter.com/AuJezus">X</Link>,{" "}
                  <Link href="https://www.linkedin.com/in/augustas-vaivada-2a9ba326a/">
                    LinkedIn
                  </Link>
                  , <Link href="https://github.com/AuJezus">Github</Link>
                </span>
              </Text>
            </li>
          </ul>

          <Text className="mt-10">
            Rest assured, I&apos;ll be in touch with you shortly. Your patience
            is greatly appreciated.
          </Text>

          <Text>
            Warm Regards,
            <br />
            Augustas Vaivada
          </Text>
        </Container>
      </Container>
    </Layout>
  );
}

export default MessageRecievedEmail;
