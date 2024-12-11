import Link from "next/link";
import { RainbowButton } from "./magicui/rainbow-button";




export function RainbowButtonDemo() {
  return <RainbowButton>
    <Link href="/MyCv.pdf"
    className=" no-underline"
     download="/MyCv.pdf">
    Download my Cv
    </Link>
    
    </RainbowButton>;
}

