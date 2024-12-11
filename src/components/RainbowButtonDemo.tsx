import Link from "next/link";
import { RainbowButton } from "./magicui/rainbow-button";




export function RainbowButtonDemo() {
  return <RainbowButton>
    <Link href="/Professional.pdf"
    className=" no-underline"
     download="/Professional.pdf">
    Download my Cv
    </Link>
    
    </RainbowButton>;
}

