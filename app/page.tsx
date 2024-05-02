import Chatbox from "@/components/Chatbox";
import Floating from "@/components/Floating";
import ThemeTogglebutton from "@/components/Themetoggle";

export default function Chat() {
  return (
    <>
      <ThemeTogglebutton />
      <Floating />
      <Chatbox />
    </>
  );
}
