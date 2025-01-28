import Chatbox from "@/components/Chatbox";
import dynamic from "next/dynamic";

const Floating = dynamic(() => import("@/components/Floating"));
const ThemeTogglebutton = dynamic(() => import("@/components/Themetoggle"));

export default function Chat() {
  return (
    <>
      <ThemeTogglebutton />
      <Chatbox />
    </>
  );
}
