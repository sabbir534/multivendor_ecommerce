import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="p-5">
      <div className="w-100 flex justify-end">
        <ThemeToggle />
      </div>
      <h1 className="font-bold text-3xl text-blue-500 font-barlow">Welcome to our e-commerce website</h1>
      <Button >Click me</Button>
    </div>
  );
}
