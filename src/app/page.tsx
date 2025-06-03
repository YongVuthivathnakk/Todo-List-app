import { ToDoCard } from "@/components/todo-list/todo-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <ToDoCard />
    </div>
  );
}
