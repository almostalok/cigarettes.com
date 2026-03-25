import { Plus } from "lucide-react";

export function FloatingActionButton() {
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <button className="w-14 h-14 bg-secondary text-primary-container rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group">
        <Plus className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
}
